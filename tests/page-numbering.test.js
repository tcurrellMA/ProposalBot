const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('section markers stay constant on continued pages while readable page folios advance in every theme and export', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root, 'app.js'), 'utf8');
  const instrumented = source.replace(/\}\(\)\);\s*$/, `window.numberingTest={defaults:createDefaultProposal,set:function(p){proposal=normalizeProposal(p);renderAll();},pages:renderProposalPages,word:buildWordHtmlBlob,indesign:buildInDesignPageHtml};\n}());`);
  assert.notEqual(source, instrumented);
  const checks = String.raw`
    function check(v,m){if(!v)throw Error(m);}
    async function run(){
      await document.fonts.ready;
      var api=window.numberingTest, baseline=api.defaults();
      Object.keys(baseline.sectionInclusion).forEach(function(k){baseline.sectionInclusion[k]=['projectSummary','process','designDevelopmentPage','attachmentsPage'].includes(k);});
      baseline.sectionTitleOverrides.projectSummary='Shared title';baseline.sectionTitleOverrides.process='Shared title';
      baseline.sectionOverrides.projectSummary=Array.from({length:36},function(_,i){return '- Summary item '+i+' includes extensive architectural coordination with the owner, consultants, and construction team to resolve the agreed program and project requirements.';}).join('\n');
      baseline.project.showOwnerRequirements=false;baseline.project.showOwnerProvidedInfo=false;baseline.project.showSummaryDeliverables=false;
      var image='data:image/svg+xml;base64,'+btoa('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="black"/></svg>');
      baseline.attachments=[{id:'numbering-attachment',title:'Attachment example',pages:[{imageDataUrl:image},{imageDataUrl:image}]}];
      for(var theme of ['maOg','northlinePortrait','studioPortrait','modernLandscape']){
        for(var wide of [false,true]){
          var p=JSON.parse(JSON.stringify(baseline));p.themeId=p.meta.themeId=theme;p.sectionLandscapeLayouts.designDevelopmentPage=wide;
          api.set(p);
          var pages=Array.from(document.querySelectorAll('#proposal-preview .proposal-page')),seen=new Map();
          check(pages.filter(function(p){return p.dataset.sectionId==='projectSummary';}).length>1,'Summary fixture spans pages in '+theme);
          pages.forEach(function(page,index){
            page.style.contentVisibility='visible';
            var badge=page.querySelector(':scope > .proposal-page-folio');
            check(badge&&badge.textContent===String(index+1)&&page.dataset.pageNumber===String(index+1),'Sequential folio on every sheet in '+theme);
            var id=page.dataset.sectionId;
            if(id){
              if(!seen.has(id))seen.set(id,seen.size+1);
              check(page.dataset.sectionNumber===String(seen.get(id)),'Continued section has stable number in '+theme);
              page.querySelectorAll('.northline-number,.body-page-number,.modern-page-number,.studio-page-number,.attachment-page-number').forEach(function(marker){check(Number(marker.textContent)===seen.get(id),'Header identifies section in '+theme);});
            }
            var style=getComputedStyle(badge),bounds=badge.getBoundingClientRect(),sheet=page.getBoundingClientRect();
            check(style.backgroundColor==='rgb(248, 245, 239)'&&style.color==='rgb(36, 35, 35)'&&Number(style.zIndex)>=20,'Opaque contrasting badge above photographs in '+theme);
            check(bounds.right<sheet.right&&bounds.bottom<sheet.bottom&&bounds.left>sheet.left+sheet.width*.8&&bounds.top>sheet.top+sheet.height*.8,'Folio stays inside bottom-right corner in '+theme);
          });
          var toc=Array.from(document.querySelectorAll('.northline-toc-row,.studio-toc-row'));
          if(toc.length){check(toc.length===seen.size,'Contents retains distinct sections with matching titles');toc.forEach(function(row,index){check(Number(row.querySelector('span').textContent)===index+1,'Contents matches section sequence');});}
          var word=await api.word().text();check((word.match(/class="proposal-page-folio"/g)||[]).length===pages.length&&word.includes('print-color-adjust:exact'),'Word retains all folios and opaque print styling');
          var exported=await api.indesign(pages[pages.length-1],{width:816,height:1056},new Map());check(exported.includes('class="proposal-page-folio"')&&exported.includes('Page '+pages.length),'InDesign retains the last page folio');
        }
      }
      var pre=document.createElement('pre');pre.id='numbering-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.numberingTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-numbering-error',e.stack||e.message);});}start();
  `;
  const html=(await fs.readFile(path.join(root,'index.html'),'utf8')).replace('</body>','<script>'+checks+'</script></body>');
  const fixture=http.createServer(async(req,res)=>{
    if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html'});res.end(html);}
    else if(req.url==='/app.js'){res.writeHead(200,{'Content-Type':'application/javascript'});res.end(instrumented);}
    else if(req.url==='/api/drafts'){res.writeHead(200,{'Content-Type':'application/json'});res.end('{"drafts":{},"revisions":{}}');}
    else if(req.url.startsWith('/api/drafts/')){for await(const chunk of req){}res.writeHead(200,{'Content-Type':'application/json'});res.end('{"revision":"test"}');}
    else if(req.url==='/api/project-images'){res.writeHead(200,{'Content-Type':'application/json'});res.end('{"images":[]}');}
    else serveStaticFile(req,res);
  });
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-page-numbering-'));
  try{
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const {stdout}=await runProcess(detectChromiumExecutable(),['--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions','--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=30000','--window-size=1600,1200','--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'],{timeoutMs:90000});
    assert.ok(stdout.includes('<pre id="numbering-result">passed</pre>'),stdout.match(/data-numbering-error="[^"]*/)?.[0]||stdout.slice(-2500));
  }finally{
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
