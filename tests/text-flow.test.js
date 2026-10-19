const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('text boundaries reflow real proposal pages, retain every word, persist, reset, and export', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root, 'app.js'), 'utf8');
  const expose = `window.flowTest = {
    defaults: createDefaultProposal,
    get: function(){return proposal;},
    set: function(value){proposal=normalizeProposal(value);renderAll();},
    render: renderPreview,
    pages: renderProposalPages,
    resizePhoto: savePreviewPhotoFrameHeight,
    exportPage: buildInDesignPageHtml
  };`;
  const instrumented = source.replace(/\}\(\)\);\s*$/, expose + '\n}());');
  assert.notEqual(instrumented, source);
  const browserChecks = String.raw`
    function check(value,message){if(!value)throw Error(message);}
    function pages(){return Array.from(document.querySelectorAll('#proposal-preview [data-text-frame-key]'));}
    function words(){return pages().map(function(p){p.style.contentVisibility='visible';return p.querySelector('.doc-copy').innerText;}).join(' ').replace(/\s+/g,' ').trim();}
    function handle(){var h=pages()[0].querySelector('.text-frame-resize-handle');h._positionTextFrame();return h;}
    function key(h,value){h.dispatchEvent(new KeyboardEvent('keydown',{key:value,bubbles:true,cancelable:true,shiftKey:true}));}
    function noClipping(){pages().forEach(function(p){p.style.contentVisibility='visible';var c=p.querySelector('.doc-copy').parentElement;check(c.scrollHeight<=c.clientHeight+1,'No text is clipped: '+p.dataset.textFrameKey+' '+c.scrollHeight+'/'+c.clientHeight);});}
    async function run(){
      await document.fonts.ready;
      var api=window.flowTest, baseline=api.defaults();
      Object.keys(baseline.sectionInclusion).forEach(function(k){baseline.sectionInclusion[k]=false;});
      baseline.sectionInclusion.projectSummary=true;
      baseline.project.showOwnerRequirements=false;
      baseline.project.showOwnerProvidedInfo=false;
      baseline.project.showSummaryDeliverables=false;
      baseline.sectionOverrides.projectSummary=Array.from({length:24},function(_,i){return '- UniqueItem'+i+' describes architectural coordination and the specific owner requirements for this part of the project.';}).join('\n');
      baseline.themeId=baseline.meta.themeId='northlinePortrait';
      api.set(baseline);
      var before=words(), originalCount=pages().length, originalFirst=pages()[0].querySelector('.doc-copy').textContent.length;
      check(originalCount>1,'Long text begins on multiple pages');
      check(pages()[0].querySelector('.text-frame-resize-handle'),'Bottom handle exists');
      var h=handle(), page=h.closest('.proposal-page'), copy=page.querySelector('.doc-copy').parentElement;
      var originalHeight=copy.getBoundingClientRect().height;
      // A scaled preview must translate pointer movement back to page pixels.
      document.getElementById('proposal-preview').style.zoom='.75';
      h._positionTextFrame();
      var start=h.getBoundingClientRect();
      var pointerId=71;
      h.setPointerCapture=function(){};h.hasPointerCapture=function(){return false;};
      h.dispatchEvent(new PointerEvent('pointerdown',{pointerId:pointerId,button:0,clientY:start.top,bubbles:true,cancelable:true}));
      document.dispatchEvent(new PointerEvent('pointermove',{pointerId:pointerId,clientY:start.top-180,bubbles:true,cancelable:true}));
      check(copy.getBoundingClientRect().height<originalHeight*.75-170,'Dragging up shrinks the text frame at preview zoom');
      document.dispatchEvent(new PointerEvent('pointerup',{pointerId:pointerId,clientY:start.top-180,bubbles:true}));
      check(words()===before,'Dragging preserves every word and its order: '+JSON.stringify({before:before,after:words()}));
      check(Object.keys(api.get().textFrameBottoms).length===1,'Page-specific boundary saved');
      check(pages().length>1,'Overflow continues onto following pages');
      check(pages()[0].querySelector('.doc-copy').textContent.length<originalFirst,'Dragging up moves text off the current page');
      noClipping();
      var firstFrameKey=pages()[0].dataset.textFrameKey, firstBottom=api.get().textFrameBottoms[firstFrameKey];
      var secondHandle=pages()[1].querySelector('.text-frame-resize-handle');secondHandle._positionTextFrame();key(secondHandle,'ArrowUp');
      check(api.get().textFrameBottoms[firstFrameKey]===firstBottom,'Changing page two retains page one boundary');
      check(words()===before,'A second page boundary preserves every word');noClipping();
      secondHandle=pages()[1].querySelector('.text-frame-resize-handle');
      secondHandle.dispatchEvent(new MouseEvent('dblclick',{bubbles:true,cancelable:true}));
      check(Object.keys(api.get().textFrameBottoms).length===1,'Double-click resets only the selected page');
      var cancelHandle=handle(), cancelCopy=pages()[0].querySelector('.doc-copy').parentElement;
      var beforeCancel=cancelCopy.style.cssText, cancelStart=cancelHandle.getBoundingClientRect().top;
      cancelHandle.setPointerCapture=function(){};cancelHandle.hasPointerCapture=function(){return false;};
      cancelHandle.dispatchEvent(new PointerEvent('pointerdown',{pointerId:72,button:0,clientY:cancelStart,bubbles:true,cancelable:true}));
      document.dispatchEvent(new PointerEvent('pointermove',{pointerId:72,clientY:cancelStart-50,bubbles:true,cancelable:true}));
      document.dispatchEvent(new PointerEvent('pointercancel',{pointerId:72,bubbles:true}));
      check(cancelCopy.style.cssText===beforeCancel,'Canceled drag restores the frame without saving');
      var firstText=pages()[0].querySelector('.doc-copy').textContent;
      var saved=JSON.parse(JSON.stringify(api.get()));api.set(saved);
      check(pages()[0].querySelector('.doc-copy').textContent===firstText,'Saved break restored after reload');
      key(handle(),'ArrowUp');noClipping();
      check(words()===before,'Keyboard resizing preserves text');
      key(handle(),'ArrowDown');noClipping();
      check(words()===before,'Dragging downward brings text back without duplication');
      var exported=await api.exportPage(pages()[0],{width:816,height:1056},new Map());
      check(!exported.includes('text-frame-resize-handle'),'InDesign export excludes resize controls');
      check(exported.includes('max-height:'),'InDesign export retains text-frame size');
      var wordHtml=api.pages();
      check(!wordHtml.includes('text-frame-resize-handle'),'Word page markup excludes controls');
      check(wordHtml.includes('max-height:'),'Word page markup retains text-frame size');
      key(handle(),'Home');
      check(Object.keys(api.get().textFrameBottoms).length===0,'Home resets the saved boundary');
      check(words()===before,'Reset preserves text');
      document.getElementById('proposal-preview').style.zoom='1';
      // Exercise each portrait theme with both image placements. Settings belong
      // to one layout, and an unusually long paragraph must also flow safely.
      for(var theme of ['northlinePortrait','maOg','studioPortrait']){
        for(var wide of [false,true]){
          var p=JSON.parse(JSON.stringify(baseline));p.themeId=p.meta.themeId=theme;
          p.sectionLandscapeLayouts={projectSummary:wide};
          p.sectionOverrides.projectSummary=Array.from({length:110},function(_,i){return 'Word'+i+' design coordination';}).join(' ');
          api.set(p);var full=words();
          key(handle(),'ArrowUp');
          check(words()===full,'Text retained in '+theme+' '+wide+' '+JSON.stringify({before:full,after:words()}));noClipping();
          key(handle(),'ArrowUp');noClipping();
          check(words()===full,'Long paragraph retained in '+theme+' '+wide);
          if(wide){var photoHandle=pages()[0].querySelector('.photo-frame-resize-handle');api.resizePhoto(photoHandle,4.6);noClipping();check(words()===full,'Photo resizing also reflows text in '+theme);}
          check(Object.keys(api.get().textFrameBottoms).some(function(k){return k.indexOf(theme+':'+(wide?'wide':'side'))===0;}),'Settings isolated by theme and layout '+JSON.stringify({theme:theme,wide:wide,keys:Object.keys(api.get().textFrameBottoms),layout:api.get().sectionLandscapeLayouts}));
        }
      }
      api.set(saved);document.getElementById('proposal-preview').style.zoom='.85';handle().scrollIntoView({block:'center',inline:'nearest'});
      var pre=document.createElement('pre');pre.id='flow-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.flowTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-flow-error',e.stack||e.message);});}
    start();
  `;
  const html = (await fs.readFile(path.join(root, 'index.html'), 'utf8')).replace('</body>', '<script>' + browserChecks + '</script></body>');
  let drafts = {}, revisions = {};
  const fixture = http.createServer(async (request, response) => {
    if (request.url === '/') { response.writeHead(200, {'Content-Type':'text/html'});response.end(html); }
    else if (request.url === '/app.js') { response.writeHead(200, {'Content-Type':'application/javascript'});response.end(instrumented); }
    else if (request.url === '/api/drafts') { response.writeHead(200, {'Content-Type':'application/json'});response.end(JSON.stringify({drafts,revisions})); }
    else if (request.url.startsWith('/api/drafts/')) {
      let body='';for await(const chunk of request) body+=chunk;
      const id=request.url.split('/').pop();drafts[id]=JSON.parse(body);revisions[id]='test-revision';
      response.writeHead(200, {'Content-Type':'application/json'});response.end(JSON.stringify({revision:'test-revision'}));
    } else if (request.url === '/api/project-images') { response.writeHead(200, {'Content-Type':'application/json'});response.end('{"images":[]}'); }
    else serveStaticFile(request,response);
  });
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-text-flow-test-'));
  try {
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const { stdout } = await runProcess(detectChromiumExecutable(), [
      '--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions',
      '--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=15000','--window-size=1600,1200',
      ...(process.env.PROPOSAL_BOT_FLOW_SCREENSHOT ? ['--screenshot='+path.resolve(process.env.PROPOSAL_BOT_FLOW_SCREENSHOT)] : []),
      '--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'
    ],{timeoutMs:60000});
    assert.ok(stdout.includes('<pre id="flow-result">passed</pre>'), stdout.match(/data-flow-error="[^"]*/)?.[0] || stdout.slice(-2000));
  } finally {
    if(fixture.listening) await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
