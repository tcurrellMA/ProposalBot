const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('preview edits retain the visible sheet and crop handles without disabling section navigation', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root, 'app.js'), 'utf8');
  const instrumented = source.replace(/\}\(\)\);\s*$/, `window.scrollTest={
    defaults:createDefaultProposal,get:function(){return proposal;},
    set:function(p){proposal=normalizeProposal(p);activeTab='sections';activeSectionId='schematicDesignPage';renderAll();},
    render:renderPreview
  };\n}());`);
  assert.notEqual(instrumented, source);
  const checks = String.raw`
    function check(v,m){if(!v)throw Error(m);}
    var preview;
    function pages(id){return Array.from(preview.querySelectorAll('.proposal-page[data-section-id~="'+id+'"]'));}
    function scale(){return preview.getBoundingClientRect().height/preview.offsetHeight;}
    function at(page,offset){preview.scrollTop+=(page.getBoundingClientRect().top-preview.getBoundingClientRect().top)/scale()+offset;}
    function snapshot(page){return {section:page.dataset.sectionId,frame:page.dataset.textFrameKey,index:pages(page.dataset.sectionId).indexOf(page),offset:page.getBoundingClientRect().top-preview.getBoundingClientRect().top,left:preview.scrollLeft,outer:document.documentElement.scrollTop};}
    async function stable(before,label){
      await new Promise(function(resolve){setTimeout(resolve,60);});
      var p=pages(before.section)[before.index];
      check(p,label+': visible sheet still exists');
      var offset=p.getBoundingClientRect().top-preview.getBoundingClientRect().top;
      check(Math.abs(offset-before.offset)<2,label+': sheet offset '+offset+' versus '+before.offset);
      check(Math.abs(preview.scrollLeft-before.left)<2,label+': horizontal position retained');
      check(document.documentElement.scrollTop===before.outer,label+': outer page retained');
    }
    function sectionButton(text){return Array.from(document.querySelectorAll('.step-button')).find(function(b){return b.textContent.includes(text);});}
    async function run(){
      await document.fonts.ready;preview=document.getElementById('proposal-preview');
      var api=window.scrollTest;
      for(var theme of ['maOg','northlinePortrait','studioPortrait','modernLandscape']){
        var baseline=api.defaults();baseline.themeId=baseline.meta.themeId=theme;
        baseline.sectionLandscapeLayouts={schematicDesignPage:true};
        if(theme!=='modernLandscape')baseline.textFrameBottoms={[theme+':wide:schematicDesignPage:0']:6.8};
        api.set(baseline);
        for(var zoom of [1,.75]){
          preview.style.zoom=zoom;
          var page=pages('schematicDesignPage')[0];check(page,'Schematic page exists in '+theme);
          at(page,220);preview.scrollLeft=30;
          var before=snapshot(page);
          var choice=document.querySelector('[data-selection-list="deliverables.schematicDesign"] input[type=checkbox]');
          check(choice,'Deliverables checkbox exists');choice.click();
          await stable(before,theme+' '+zoom+' uncheck');choice.click();await stable(before,theme+' '+zoom+' check');
          if(theme!=='modernLandscape'){
            page=pages('schematicDesignPage')[0];var h=page.querySelector('.photo-frame-resize-handle');check(h,'Landscape photo resize handle exists');
            var frameKey=h.dataset.photoFrameKey, initial=Number(h.getAttribute('aria-valuenow'));
            h.focus({preventScroll:true});before=snapshot(page);
            h.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowUp',bubbles:true,cancelable:true}));
            await stable(before,theme+' '+zoom+' keyboard resize');
            check(api.get().photoFrameHeights[frameKey]>initial,'Keyboard height saved');
            check(document.activeElement.dataset.photoFrameKey===frameKey,'Keyboard handle focus retained after reflow');
            h=pages('schematicDesignPage')[0].querySelector('.photo-frame-resize-handle');
            initial=Number(h.getAttribute('aria-valuenow'));before=snapshot(pages('schematicDesignPage')[0]);
            h.setPointerCapture=function(){};h.hasPointerCapture=function(){return false;};
            var y=h.getBoundingClientRect().top;
            h.dispatchEvent(new PointerEvent('pointerdown',{pointerId:85,button:0,clientY:y,bubbles:true,cancelable:true}));
            document.dispatchEvent(new PointerEvent('pointermove',{pointerId:85,clientY:y-25,bubbles:true,cancelable:true}));
            document.dispatchEvent(new PointerEvent('pointerup',{pointerId:85,clientY:y-25,bubbles:true}));
            await stable(before,theme+' '+zoom+' pointer resize');
            check(api.get().photoFrameHeights[frameKey]>initial,'Dragged height saved');
          }
        }
        // Editing the selected section must not pull a manually scrolled preview back to it.
        var later=pages('designDevelopmentPage')[0];check(later,'Later sheet exists');at(later,180);before=snapshot(later);
        document.querySelector('[data-selection-list="deliverables.schematicDesign"] input[type=checkbox]').click();
        await stable(before,theme+' viewing another section');
        sectionButton('Schematic Design').click();
        check(Math.abs(pages('schematicDesignPage')[0].getBoundingClientRect().top-preview.getBoundingClientRect().top)<2,'Section navigation still goes to selected section in '+theme);
        at(pages('schematicDesignPage')[0],200);before=snapshot(pages('schematicDesignPage')[0]);
        document.querySelector('[aria-label="Include Project Summary in proposal"]').click();
        await stable(before,theme+' removing earlier section');
        if(theme!=='modernLandscape'){
          api.get().sectionOverrides.schematicDesignPage=Array.from({length:40},function(_,i){return 'Continuation '+i+' includes architectural design coordination and project requirements for the owner.';}).join('\n\n');
          api.render();check(pages('schematicDesignPage').length>1,'Continuation sheets exist');
          var continued=pages('schematicDesignPage')[1];at(continued,190);before=snapshot(continued);
          document.querySelector('[data-selection-list="deliverables.schematicDesign"] input[type=checkbox]').click();
          await stable(before,theme+' continued page edit');
          api.get().sectionInclusion.projectSummary=true;
          api.get().sectionOverrides.projectSummary=Array.from({length:50},function(_,i){return 'Earlier paragraph '+i+' describes additional project program requirements and architectural coordination.';}).join('\n\n');
          api.render();await stable(before,theme+' earlier section repagination');
        }
      }
      var pre=document.createElement('pre');pre.id='scroll-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.scrollTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-scroll-error',e.stack||e.message);});}start();
  `;
  const html=(await fs.readFile(path.join(root,'index.html'),'utf8')).replace('</body>','<script>'+checks+'</script></body>');
  const fixture=http.createServer(async(request,response)=>{
    if(request.url==='/'){response.writeHead(200,{'Content-Type':'text/html'});response.end(html);}
    else if(request.url==='/app.js'){response.writeHead(200,{'Content-Type':'application/javascript'});response.end(instrumented);}
    else if(request.url==='/api/drafts'){response.writeHead(200,{'Content-Type':'application/json'});response.end('{"drafts":{},"revisions":{}}');}
    else if(request.url.startsWith('/api/drafts/')){for await(const chunk of request){}response.writeHead(200,{'Content-Type':'application/json'});response.end('{"revision":"test-revision"}');}
    else if(request.url==='/api/project-images'){response.writeHead(200,{'Content-Type':'application/json'});response.end('{"images":[]}');}
    else serveStaticFile(request,response);
  });
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-preview-scroll-test-'));
  try{
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const {stdout}=await runProcess(detectChromiumExecutable(),[
      '--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions',
      '--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=25000','--window-size=1600,1200',
      '--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'
    ],{timeoutMs:90000});
    assert.ok(stdout.includes('<pre id="scroll-result">passed</pre>'),stdout.match(/data-scroll-error="[^"]*/)?.[0]||stdout.slice(-2500));
  }finally{
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
