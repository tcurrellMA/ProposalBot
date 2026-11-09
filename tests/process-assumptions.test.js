const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('all entered process assumptions survive preview, pagination, reopening, resizing and export', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root, 'app.js'), 'utf8');
  const instrumented = source.replace(/\}\(\)\);\s*$/, `window.assumptionsTest={
    defaults:createDefaultProposal,
    get:function(){return proposal;},
    set:function(value){proposal=normalizeProposal(value);renderAll();},
    info:function(){activeTab='info';renderAll();},
    section:function(id){activeTab='sections';activeSectionId=id;renderAll();},
    pages:renderProposalPages
  };\n}());`);
  assert.notEqual(instrumented, source);
  const checks = String.raw`
    function check(value,message){if(!value)throw Error(message);}
    function processPages(host){return Array.from(host.querySelectorAll('[data-section-id~="process"]'));}
    function assertItems(host,items,label){
      var actual=processPages(host).flatMap(function(page){return Array.from(page.querySelectorAll('.doc-copy li')).map(function(li){return li.textContent.replace(/\s+/g,' ').trim();});});
      check(JSON.stringify(actual)===JSON.stringify(items),'All assumptions retained in order in '+label+': '+JSON.stringify(actual));
    }
    function unclipped(){processPages(document.getElementById('proposal-preview')).forEach(function(page){page.style.contentVisibility='visible';var doc=page.querySelector('.doc-copy');if(!doc)return;var copy=doc.parentElement;check(copy.scrollHeight<=copy.clientHeight+1,'No clipped assumptions in '+page.className+': '+copy.scrollHeight+'/'+copy.clientHeight);});}
    async function run(){
      await document.fonts.ready;
      var api=window.assumptionsTest;
      var items=['Conceptual planning for an approximately 275,000 SF Class A office tower',
        'Overall Block A planning across all four lots',
        'Office tower massing and architectural concept studies',
        'Typical office floor plate and core planning',
        'Lobby, arrival, and ground-level experience',
        'Views and orientation toward Buffalo Bayou',
        'Retail opportunities throughout Block A',
        'Green space and outdoor gathering areas',
        'Pedestrian connectivity and placemaking',
        'Relationship to Autry Park and existing Regent Square development',
        'Future development opportunities for the remaining Block A lots',
        'Architectural character and facade studies',
        'Marketing-oriented renderings and presentation materials',
        'Coordination with the AOR throughout the design process',
        'Conceptual design package for planning, marketing, coordination, and decision-making purposes',
        'Interior design of amenity spaces, bike room, meeting rooms, etc.',
        'Scope adjustments may require fee or service modifications'];
      for(var theme of ['northlinePortrait','maOg','studioPortrait','modernLandscape']){
        for(var wide of [false,true]){
          var p=api.defaults();p.project.projectType='office';p.meta.id='assumptions-'+theme+'-'+wide;
          Object.keys(p.sectionInclusion).forEach(function(id){p.sectionInclusion[id]=id==='process';});
          p.themeId=p.meta.themeId=theme;p.sectionLandscapeLayouts={process:wide};
          p.project.maAssumptionsAuto=false;p.project.maAssumptions='Initial assumption';p.project.showMaAssumptionsInProcess=true;
          api.set(p);api.section('process');
          var input=document.querySelector('[aria-label="M+A assumptions"]');
          check(input,'Assumptions editor available');
          input.value=items.join('\n\n');input.dispatchEvent(new Event('input',{bubbles:true}));
          check(api.get().project.maAssumptions===items.join('\n\n'),'Complete editor input saved');
          var label=theme+' '+wide;
          assertItems(document.getElementById('proposal-preview'),items,'preview '+label);unclipped();
          var exportHost=document.createElement('div');exportHost.innerHTML=api.pages();assertItems(exportHost,items,'export '+label);
          api.set(JSON.parse(JSON.stringify(api.get())));api.section('process');
          assertItems(document.getElementById('proposal-preview'),items,'reopened '+label);unclipped();
          var longItems=Array.from({length:36},function(_,i){return 'Assumption '+(i+1)+': '+items[i%items.length]+'. Additional coordination of architectural scope, site access, design milestones, and owner approvals is included.';});
          longItems.push(longItems[3]); // Repeated lines are also intentional input.
          input=document.querySelector('[aria-label="M+A assumptions"]');input.value=longItems.join('\n');input.dispatchEvent(new Event('input',{bubbles:true}));
          assertItems(document.getElementById('proposal-preview'),longItems,'long preview '+label);unclipped();
          check(processPages(document.getElementById('proposal-preview')).length>1,'Long assumptions continue onto additional pages in '+label);
          exportHost.innerHTML=api.pages();assertItems(exportHost,longItems,'long export '+label);
          var toggle=input.parentElement.querySelector('input[type=checkbox]');
          toggle.checked=false;toggle.dispatchEvent(new Event('change',{bubbles:true}));
          check(!document.querySelector('#proposal-preview [data-section-id~="process"] .doc-copy li'),'Assumptions can be hidden in '+label);
          check(api.get().project.maAssumptions===longItems.join('\n'),'Hiding preserves all source items in '+label);
          toggle.checked=true;toggle.dispatchEvent(new Event('change',{bubbles:true}));
          assertItems(document.getElementById('proposal-preview'),longItems,'shown again '+label);unclipped();
          var page=processPages(document.getElementById('proposal-preview')).find(function(page){return page.querySelector('.text-frame-resize-handle');});
          if(page){var h=page.querySelector('.text-frame-resize-handle');h._positionTextFrame();h.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowUp',shiftKey:true,bubbles:true,cancelable:true}));assertItems(document.getElementById('proposal-preview'),longItems,'resized '+label);unclipped();}
        }
      }
      var pre=document.createElement('pre');pre.id='assumptions-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.assumptionsTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-assumptions-error',e.stack||e.message);});}start();
  `;
  const html = (await fs.readFile(path.join(root, 'index.html'), 'utf8')).replace('</body>', '<script>' + checks + '</script></body>');
  const fixture = http.createServer(async (request, response) => {
    if (request.url === '/') { response.writeHead(200, {'Content-Type':'text/html'});response.end(html); }
    else if (request.url === '/app.js') { response.writeHead(200, {'Content-Type':'application/javascript'});response.end(instrumented); }
    else if (request.url === '/api/drafts') { response.writeHead(200, {'Content-Type':'application/json'});response.end('{"drafts":{},"revisions":{}}'); }
    else if (request.url.startsWith('/api/drafts/')) { for await (const chunk of request) {} response.writeHead(200, {'Content-Type':'application/json'});response.end('{"revision":"test-revision"}'); }
    else if (request.url === '/api/project-images') { response.writeHead(200, {'Content-Type':'application/json'});response.end('{"images":[]}'); }
    else serveStaticFile(request,response);
  });
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-assumptions-test-'));
  try {
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const { stdout } = await runProcess(detectChromiumExecutable(), [
      '--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions',
      '--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=25000','--window-size=1600,1200',
      '--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'
    ],{timeoutMs:60000});
    assert.ok(stdout.includes('<pre id="assumptions-result">passed</pre>'),stdout.match(/data-assumptions-error="[^"]*/)?.[0]||stdout.slice(-2500));
  } finally {
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
