const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const vm = require('node:vm');
const sharp = require('sharp');
const { handleImageUpload } = require('../server');
const { projectImagePreview, MAX_IMAGE_SOURCE_BYTES } = require('../project-image-previews');

test('large layered TIFF sources are previewed without rejecting the real headshot file size', async () => {
  const os=require('node:os');
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-large-tiff-'));
  const file=path.join(directory,'layered-portrait.tif');
  try {
    const source=await sharp({create:{width:40,height:24,channels:3,background:'#558877'}}).tiff().toBuffer();
    await fs.writeFile(file,source);
    // TIFFs can contain hundreds of MB of Photoshop layer data beyond the merged image.
    await fs.truncate(file,475172672);
    const stats=await fs.stat(file);
    const preview=await projectImagePreview(file,stats);
    assert.equal((await sharp(preview).metadata()).format,'jpeg');
    assert.equal((await fs.stat(file)).size,475172672);
    let status,body;
    await handleImageUpload({async *[Symbol.asyncIterator](){yield Buffer.alloc(1);yield {length:MAX_IMAGE_SOURCE_BYTES};}}, {
      writeHead(code){status=code;},end(value){body=value;}
    });
    assert.equal(status,413);
    assert.match(JSON.parse(body).error,/1 GB/);
  } finally {await fs.rm(directory,{recursive:true,force:true});}
});

test('uploaded TIFF, CMYK, alpha and other image formats become compact portable images with correct orientation', async (t) => {
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
        const expectedFormat = (await sharp(input).metadata()).hasAlpha ? 'png' : 'jpeg';
        assert.equal(response.headers.get('content-type'), 'image/' + expectedFormat);
        assert.equal(response.headers.get('cache-control'), 'no-store');
        const output = Buffer.from(await response.arrayBuffer());
        const info = await sharp(output).metadata();
        assert.equal(info.format, expectedFormat);
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
    assert.equal((await sharp(Buffer.from(await large.arrayBuffer())).metadata()).width,2400);
    const portrait = await sharp({create:{width:3300,height:5100,channels:3,background:'#669988'}}).tiff().toBuffer();
    const compact = await fetch(url,{method:'POST',body:portrait});
    const compactBytes = Buffer.from(await compact.arrayBuffer());
    assert.equal(compact.headers.get('content-type'),'image/jpeg');
    assert.ok(compactBytes.length < 500000, 'High-resolution opaque portraits should not become huge lossless PNGs');
    assert.equal((await sharp(compactBytes).metadata()).height,2400);
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
  const context = {pendingImageImports:0,FileReader:Reader,Image,flashStatus:s=>statuses.push(s),isPdfFile:f=>f.type==='application/pdf',fetch:async(url,options)=>{
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
  assert.equal(context.pendingImageImports,0);
});

test('a background refresh cannot discard a photo added while its response was in flight', async () => {
  const source = await fs.readFile(path.join(__dirname,'..','app.js'),'utf8');
  function extract(name) {
    const start = source.search(new RegExp('  (?:async )?function ' + name + '\\('));
    const next = source.slice(start+1).search(/\n  (?:async )?function /);
    return source.slice(start,start+1+next);
  }
  let finish;
  const owner = {meta:{id:'draft'},photos:[]};
  const context = vm.createContext({
    proposal:owner,isDirty:false,sharedPendingSaves:0,pendingImageImports:0,draftEditGeneration:0,
    sharedRevisions:{draft:'before'},sharedDrafts:{draft:owner},console,
    fetch:()=>new Promise(resolve=>{finish=resolve;}),updateHeader(){},
    normalizeProposal(){throw Error('Stale data must not replace the current project');}
  });
  vm.runInContext(extract('loadSharedDrafts')+'\n'+extract('refreshSharedDrafts'),context);
  const refresh = context.refreshSharedDrafts();
  owner.photos.push({id:'new-photo',dataUrl:'data:image/jpeg;base64,new'});
  context.draftEditGeneration++;
  context.sharedRevisions.draft = 'after-save';
  finish({ok:true,json:async()=>({drafts:{draft:{meta:{id:'draft'},photos:[]}},revisions:{draft:'stale'}})});
  await refresh;
  assert.equal(context.proposal,owner);
  assert.equal(context.proposal.photos.length,1);
  assert.equal(context.sharedRevisions.draft,'after-save');
});

test('TIFF portraits and library drops display, persist and export in every theme', async () => {
  const os = require('node:os');
  const { detectChromiumExecutable, serveStaticFile } = require('../server');
  const root = path.resolve(__dirname,'..');
  const source = await fs.readFile(path.join(root,'app.js'),'utf8');
  const expose = 'window.teamImageMessages=[];var testOriginalFlash=flashStatus;flashStatus=function(message){window.teamImageMessages.push(message);testOriginalFlash(message);};window.teamImageTest={get:function(){return proposal;},set:function(p,tab){proposal=normalizeProposal(p);activeTab=tab||"sections";activeSectionId="ourTeam";renderAll();},save:saveCurrentDraft,idle:function(){return !sharedPendingSaves;},repair:function(){return new Promise(function(resolve){repairStoredTiffPhotos(resolve);});},defaults:createDefaultProposal,ready:function(){return sharedReady&&els.preview&&els.preview.querySelector(".proposal-page");},stored:function(member){return new Promise(function(resolve){getPhotoData(teamMemberPhotoAssetId(member),resolve);});},exportHtml:renderProposalPages};';
  const instrumented = source.replace(/\}\(\)\);\s*$/,expose+'\n}());');
  assert.notEqual(source,instrumented);
  const tiff = await sharp({create:{width:40,height:24,channels:3,background:'#c0392b'}}).toColourspace('cmyk').withMetadata({orientation:6}).tiff().toBuffer();
  const checks = String.raw`
    function check(v,m){if(!v)throw Error(m);}
    async function until(fn){for(var n=0;n<400;n++){if(fn())return;await new Promise(r=>setTimeout(r,20));}throw Error('Timed out waiting for portrait');}
    async function run(){
      await until(()=>window.teamImageTest&&window.teamImageTest.ready());
      var api=window.teamImageTest,p=api.defaults();
      Object.keys(p.sectionInclusion).forEach(k=>p.sectionInclusion[k]=k==='ourTeam');api.set(p);
      var bytes=new Uint8Array(await (await fetch('/portrait.tiff')).arrayBuffer());
      var transfer=new DataTransfer();transfer.items.add(new File([bytes],'Portrait.TIFF',{type:''}));
      var input=document.querySelector('.team-member-editor input[type=file]');
      check(input.accept.includes('.tiff'),'TIFF is available in the picker');
      input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));
      await until(()=>api.get().team.members[0].photoStored);
      var member=api.get().team.members[0],saved=member.photoDataUrl;
      check(saved.startsWith('data:image/jpeg;'),'Portrait is saved as compact JPEG');
      var preview=document.querySelector('.team-photo-preview');
      await until(()=>preview.complete&&preview.naturalWidth>0);
      check(preview.naturalWidth===24&&preview.naturalHeight===40,'Orientation is corrected');
      check(document.querySelector('#proposal-preview').innerHTML.includes(saved),'Proposal preview contains portrait');
      var stored=await api.stored(member);check(stored===saved,'IndexedDB holds the converted portrait');
      var copy=JSON.parse(JSON.stringify(api.get()));api.set(copy);
      check(document.querySelector('.team-photo-preview').src===saved,'Reopening proposal retains portrait');
      check(api.exportHtml().includes(saved),'Export embeds portrait');
      input=document.querySelector('.team-member-editor input[type=file]');
      transfer=new DataTransfer();transfer.items.add(new File(['broken'],'damaged.tif',{type:'image/tiff'}));
      input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));
      await new Promise(r=>setTimeout(r,500));
      check(api.get().team.members[0].photoDataUrl===saved,'Failed upload preserves portrait');
      var raw='data:image/tiff;base64,'+btoa(Array.from(bytes,b=>String.fromCharCode(b)).join(''));
      api.get().team.members[0].photoDataUrl=raw;
      api.get().photos=[{id:'legacy-tiff',name:'Old TIFF',typology:'Headshot',included:true,dataUrl:raw}];
      await api.repair();
      check(api.get().team.members[0].photoDataUrl.startsWith('data:image/jpeg;'),'Previously saved TIFF headshot is repaired');
      check(api.get().photos[0].dataUrl.startsWith('data:image/jpeg;'),'Previously saved library TIFF is repaired');
      await until(()=>api.idle());
      for(var theme of ['maOg','studioPortrait','modernLandscape','northlinePortrait']){
        var themed=JSON.parse(JSON.stringify(api.get()));
        themed.themeId=theme;themed.team.highlightCount=4;themed.team.headshotShape='circle';
        themed.team.members.forEach(m=>{m.photoDataUrl='';m.photoStored=false;});
        themed.project.photoTypologies='Office';
        themed.photos=[{id:'headshot-library',name:'Headshot',typology:'Headshot',included:true,dataUrl:saved}];
        api.set(themed,'photos');
        var slots=document.querySelectorAll('.team-headshot-slot');
        check(slots.length===4,'Each member has a drop target in '+theme+': '+slots.length);
        check(slots[1].classList.contains('team-headshot-circle'),'Circular crop retained in '+theme);
        transfer=new DataTransfer();transfer.setData('application/x-proposal-photo','headshot-library');
        slots[1].dispatchEvent(new DragEvent('dragover',{dataTransfer:transfer,bubbles:true,cancelable:true}));
        check(slots[1].classList.contains('is-photo-drop-target'),'Headshot target highlights in '+theme);
        slots[1].dispatchEvent(new DragEvent('drop',{dataTransfer:transfer,bubbles:true,cancelable:true}));
        check(api.get().team.members[1].photoDataUrl===saved,'Native drop changes the intended member in '+theme);
        check(api.get().team.members[0].photoDataUrl==='','Drop leaves other member unchanged in '+theme);
        await until(()=>api.get().team.members[1].photoStored&&api.idle());
        var source=document.querySelector('img[data-photo-library-id="headshot-library"]');
        check(source,'Headshots can be dragged despite background-photo typology filter in '+theme);
        source.setPointerCapture=function(){};source.hasPointerCapture=function(){return false;};
        var start=source.getBoundingClientRect();
        source.dispatchEvent(new PointerEvent('pointerdown',{pointerId:77,button:0,clientX:start.x+5,clientY:start.y+5,bubbles:true,cancelable:true}));
        var target=document.querySelectorAll('.team-headshot-slot')[2];target.scrollIntoView({block:'center'});
        var bounds=target.getBoundingClientRect(),x=bounds.x+bounds.width/2,y=bounds.y+bounds.height/2;
        document.dispatchEvent(new PointerEvent('pointermove',{pointerId:77,clientX:x,clientY:y,bubbles:true,cancelable:true}));
        check(target.classList.contains('is-photo-drop-target'),'Pointer drag identifies headshot in '+theme);
        document.dispatchEvent(new PointerEvent('pointerup',{pointerId:77,clientX:x,clientY:y,bubbles:true,cancelable:true}));
        check(api.get().team.members[2].photoDataUrl===saved,'Pointer drop changes headshot in '+theme);
        await until(()=>api.get().team.members[2].photoStored&&api.idle());
        api.get().photos=[];api.save();await until(()=>api.idle());
        var persisted=await (await fetch('/api/drafts')).json();
        var reopened=persisted.drafts[api.get().meta.id];
        check(reopened.team.members[1].photoDataUrl===saved&&reopened.team.members[2].photoDataUrl===saved,'Shared saves keep headshots independently of source library in '+theme);
        api.set(reopened);
        check(api.exportHtml().includes(saved),'Reopened headshots appear in export in '+theme);
        await until(()=>api.idle());
      }
      var result=document.createElement('pre');result.id='team-image-result';result.textContent='passed';document.body.appendChild(result);
    }
    run().catch(e=>document.documentElement.setAttribute('data-team-image-error',(e.stack||e)+' / '+JSON.stringify(window.teamImageMessages)));
  `;
  const html=(await fs.readFile(path.join(root,'index.html'),'utf8'))
    .replace('<head>','<head><script>window.addEventListener("error",function(e){document.documentElement.setAttribute("data-script-error",e.message);});window.alert=function(message){document.documentElement.setAttribute("data-test-alert",message);};</script>')
    .replace('</body>',()=>'<script>'+checks+'</script></body>');
  var sharedState={drafts:{},revisions:{}};
  var revision=0;
  const fixture=http.createServer(async(req,res)=>{
    if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html'});res.end(html);}
    else if(req.url==='/app.js'){res.writeHead(200,{'Content-Type':'application/javascript'});res.end(instrumented);}
    else if(req.url==='/portrait.tiff'){res.writeHead(200,{'Content-Type':'image/tiff'});res.end(tiff);}
    else if(req.url==='/api/image-preview'){await handleImageUpload(req,res);}
    else if(req.url==='/api/drafts'){res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify(sharedState));}
    else if(req.url.startsWith('/api/drafts/')){const chunks=[];for await(const chunk of req)chunks.push(chunk);const draft=JSON.parse(Buffer.concat(chunks).toString('utf8'));const id=decodeURIComponent(req.url.split('/').pop());sharedState.drafts[id]=draft;sharedState.revisions[id]='revision-'+(++revision);res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({revision:sharedState.revisions[id]}));}
    else if(req.url.startsWith('/api/')){for await(const chunk of req){}res.writeHead(200,{'Content-Type':'application/json'});res.end(req.url==='/api/project-images'?'{"images":[]}':'{}');}
    else serveStaticFile(req,res);
  });
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-team-image-'));
  let browser, socket;
  try {
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    // Real time is required here: virtual time can outrun FileReader and IndexedDB.
    const profile=path.join(directory,'profile');
    browser=require('node:child_process').spawn(detectChromiumExecutable(),['--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions','--remote-debugging-port=0','--user-data-dir='+profile,'--window-size=1600,1200','about:blank'],{windowsHide:true,stdio:'ignore'});
    let port;
    for(let n=0;n<100;n++){
      try{port=(await fs.readFile(path.join(profile,'DevToolsActivePort'),'utf8')).split('\n')[0];break;}catch{}
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    assert.ok(port,'Browser debugging endpoint must start');
    const tabs=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json();
    socket=new WebSocket(tabs.find(tab=>tab.type==='page').webSocketDebuggerUrl);
    await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
    const requests=new Map();let id=0;
    socket.onmessage=event=>{const message=JSON.parse(event.data);if(requests.has(message.id)){const pending=requests.get(message.id);requests.delete(message.id);clearTimeout(pending.timer);message.error?pending.reject(new Error(message.error.message)):pending.resolve(message.result);}};
    function cdp(method,params={}){return new Promise((resolve,reject)=>{const requestId=++id;const timer=setTimeout(()=>{requests.delete(requestId);reject(new Error('Browser request timed out: '+method));},10000);requests.set(requestId,{resolve,reject,timer});socket.send(JSON.stringify({id:requestId,method,params}));});}
    await cdp('Page.enable');
    await cdp('Page.navigate',{url:'http://127.0.0.1:'+fixture.address().port+'/'});
    let state;
    for(let n=0;n<500;n++){
      const result=await cdp('Runtime.evaluate',{expression:'JSON.stringify({passed:!!document.getElementById("team-image-result"),error:document.documentElement.getAttribute("data-script-error")||document.documentElement.getAttribute("data-team-image-error")||document.documentElement.getAttribute("data-test-alert")})',returnByValue:true});
      state=JSON.parse(result.result.value);
      if(state.passed||state.error)break;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    assert.ok(state.passed,state.error||'Browser interaction did not finish');
    if(process.env.PROPOSAL_BOT_CAPTURE_HEADSHOT_TEST==='true'){
      for(const theme of ['maOg','studioPortrait','modernLandscape','northlinePortrait']){
        await cdp('Runtime.evaluate',{expression:'var sample=window.teamImageTest.get();sample.themeId='+JSON.stringify(theme)+';window.teamImageTest.set(sample);document.querySelector(".team-headshot-slot").closest(".proposal-page").scrollIntoView({block:"start"});'});
        await new Promise(resolve=>setTimeout(resolve,100));
        const shot=await cdp('Page.captureScreenshot',{format:'png'});
        await fs.writeFile(path.join(root,'.local-data','team-headshots-'+theme+'.png'),Buffer.from(shot.data,'base64'));
      }
    }
  } finally {
    if(socket)socket.close();
    if(browser){browser.kill();await new Promise(resolve=>browser.exitCode!==null?resolve():browser.once('exit',resolve));}
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
