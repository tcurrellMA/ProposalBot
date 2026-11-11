const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const vm = require('node:vm');
const sharp = require('sharp');
const { handleImageUpload } = require('../server');

test('uploaded TIFF, CMYK, alpha and other image formats become portable oriented PNGs', async (t) => {
  const fixture = http.createServer(handleImageUpload);
  await new Promise(resolve => fixture.listen(0, '127.0.0.1', resolve));
  const url = 'http://127.0.0.1:' + fixture.address().port;
  try {
    for (const format of ['tiff', 'jpeg', 'png', 'webp', 'avif', 'gif']) {
      await t.test(format, async () => {
        let image = sharp({ create: { width: 40, height: 24, channels: 4, background: {r:200,g:30,b:10,alpha:0.5} } });
        if (format === 'tiff') image = image.toColourspace('cmyk').withMetadata({orientation:6});
        const input = await image.toFormat(format).toBuffer();
        const response = await fetch(url, {method:'POST',body:input});
        assert.equal(response.status, 200);
        assert.equal(response.headers.get('content-type'), 'image/png');
        assert.equal(response.headers.get('cache-control'), 'no-store');
        const output = Buffer.from(await response.arrayBuffer());
        const info = await sharp(output).metadata();
        assert.equal(info.format, 'png');
        assert.equal(info.space, 'srgb');
        assert.deepEqual([info.width, info.height], format === 'tiff' ? [24,40] : [40,24]);
        if (format === 'png') {
          assert.equal(info.hasAlpha,true);
          const {data} = await sharp(output).raw().toBuffer({resolveWithObject:true});
          assert.ok(data[3] >= 126 && data[3] <= 129);
        }
      });
    }
    const empty = await fetch(url,{method:'POST',body:Buffer.alloc(0)});
    assert.equal(empty.status,400);
    const invalid = await fetch(url,{method:'POST',body:'damaged TIFF'});
    assert.equal(invalid.status,422);
    assert.match((await invalid.json()).error,/could not be read/);
    const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="5000" height="1"><rect width="5000" height="1" fill="red"/></svg>');
    const large = await fetch(url,{method:'POST',body:svg});
    assert.equal((await sharp(Buffer.from(await large.arrayBuffer())).metadata()).width,4096);
  } finally { await new Promise(resolve=>fixture.close(resolve)); }
});

test('team image reader converts TIFFs without relying on MIME, preserves PDFs and does not save failed images', async () => {
  const app = await fs.readFile(path.join(__dirname,'..','app.js'),'utf8');
  const source = app.slice(app.indexOf('  function readFileAsDataUrl('),app.indexOf('  function readPhotoFileAsDataUrl('));
  let decodeFails = false, responseFails = false, calls = 0, saved = [], statuses = [];
  class Reader {
    readAsDataURL(file) { this.result = file.converted ? 'data:image/png;base64,converted' : 'data:' + file.type + ';base64,original'; this.onload(); }
  }
  class Image {
    set src(value) { if (decodeFails) this.onerror(); else this.onload(); }
  }
  const context = {FileReader:Reader,Image,flashStatus:s=>statuses.push(s),isPdfFile:f=>f.type==='application/pdf',fetch:async(url,options)=>{
    calls++; assert.equal(url,'/api/image-preview'); assert.equal(options.method,'POST');
    return {ok:!responseFails,json:async()=>({error:'Unsupported image'}),blob:async()=>({converted:true})};
  }};
  vm.createContext(context); vm.runInContext(source,context);
  async function read(file) { context.readFileAsDataUrl(file,value=>saved.push(value)); await new Promise(resolve=>setImmediate(resolve)); }
  await read({name:'Portrait.TIFF',type:''});
  assert.equal(calls,1); assert.equal(saved.at(-1),'data:image/png;base64,converted');
  await read({name:'portrait.jpg',type:'image/jpeg'});
  assert.equal(calls,1); assert.equal(saved.at(-1),'data:image/jpeg;base64,original');
  await read({name:'attachment.pdf',type:'application/pdf'});
  assert.equal(calls,1); assert.match(saved.at(-1),/^data:application\/pdf/);
  decodeFails = true;
  await read({name:'portrait.unknown',type:''});
  assert.equal(calls,2); assert.equal(saved.at(-1),'data:image/png;base64,converted');
  responseFails = true;
  const count = saved.length;
  await read({name:'damaged.tif',type:'image/tiff'});
  assert.equal(saved.length,count); assert.equal(statuses.at(-1),'Unsupported image');
});

test('selecting a TIFF portrait displays, stores, restores and exports it through Our Team', async () => {
  const os = require('node:os');
  const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');
  const root = path.resolve(__dirname,'..');
  const source = await fs.readFile(path.join(root,'app.js'),'utf8');
  const expose = 'window.teamImageTest={get:function(){return proposal;},set:function(p){proposal=normalizeProposal(p);activeTab="sections";activeSectionId="ourTeam";renderAll();},defaults:createDefaultProposal,stored:function(member){return new Promise(function(resolve){getPhotoData(teamMemberPhotoAssetId(member),resolve);});},exportHtml:buildPrintDocumentHtml};';
  const instrumented = source.replace(/\}\(\)\);\s*$/,expose+'\n}());');
  assert.notEqual(source,instrumented);
  const tiff = await sharp({create:{width:40,height:24,channels:3,background:'#c0392b'}}).toColourspace('cmyk').withMetadata({orientation:6}).tiff().toBuffer();
  const checks = String.raw`
    function check(v,m){if(!v)throw Error(m);}
    async function until(fn){for(var n=0;n<400;n++){if(fn())return;await new Promise(r=>setTimeout(r,20));}throw Error('Timed out waiting for portrait');}
    async function run(){
      var api=window.teamImageTest,p=api.defaults();
      Object.keys(p.sectionInclusion).forEach(k=>p.sectionInclusion[k]=k==='ourTeam');api.set(p);
      var bytes=new Uint8Array(await (await fetch('/portrait.tiff')).arrayBuffer());
      var transfer=new DataTransfer();transfer.items.add(new File([bytes],'Portrait.TIFF',{type:''}));
      var input=document.querySelector('.team-member-editor input[type=file]');
      check(input.accept.includes('.tiff'),'TIFF is available in the picker');
      input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));
      await until(()=>api.get().team.members[0].photoStored);
      var member=api.get().team.members[0],saved=member.photoDataUrl;
      check(saved.startsWith('data:image/png;'),'Portrait is saved as portable PNG');
      var preview=document.querySelector('.team-photo-preview');
      await until(()=>preview.complete&&preview.naturalWidth>0);
      check(preview.naturalWidth===24&&preview.naturalHeight===40,'Orientation is corrected');
      check(document.querySelector('#preview').innerHTML.includes(saved),'Proposal preview contains portrait');
      var stored=await api.stored(member);check(stored&&stored.dataUrl===saved,'IndexedDB holds the converted portrait');
      var copy=JSON.parse(JSON.stringify(api.get()));api.set(copy);
      check(document.querySelector('.team-photo-preview').src===saved,'Reopening proposal retains portrait');
      check(api.exportHtml().includes(saved),'Export embeds portrait');
      input=document.querySelector('.team-member-editor input[type=file]');
      transfer=new DataTransfer();transfer.items.add(new File(['broken'],'damaged.tif',{type:'image/tiff'}));
      input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));
      await new Promise(r=>setTimeout(r,500));
      check(api.get().team.members[0].photoDataUrl===saved,'Failed upload preserves portrait');
      document.body.insertAdjacentHTML('beforeend','<pre id="team-image-result">passed</pre>');
    }
    run().catch(e=>document.documentElement.setAttribute('data-team-image-error',e.stack||e));
  `;
  const html=(await fs.readFile(path.join(root,'index.html'),'utf8')).replace('</body>',()=>'<script>'+checks+'</script></body>');
  const fixture=http.createServer(async(req,res)=>{
    if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html'});res.end(html);}
    else if(req.url==='/app.js'){res.writeHead(200,{'Content-Type':'application/javascript'});res.end(instrumented);}
    else if(req.url==='/portrait.tiff'){res.writeHead(200,{'Content-Type':'image/tiff'});res.end(tiff);}
    else if(req.url==='/api/image-preview'){await handleImageUpload(req,res);}
    else if(req.url.startsWith('/api/')){for await(const chunk of req){}res.writeHead(200,{'Content-Type':'application/json'});res.end(req.url==='/api/drafts'?'{"drafts":{},"revisions":{}}':req.url==='/api/project-images'?'{"images":[]}':'{"revision":"test"}');}
    else serveStaticFile(req,res);
  });
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-team-image-'));
  try {
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const {stdout}=await runProcess(detectChromiumExecutable(),['--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions','--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=20000','--window-size=1600,1200','--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'],{timeoutMs:60000});
    assert.ok(stdout.includes('<pre id="team-image-result">passed</pre>'),stdout.match(/data-team-image-error="[^"]*/)?.[0]||stdout.slice(-2500));
  } finally {
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
