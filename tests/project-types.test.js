const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('project types control multifamily copy and photo filters without erasing saved content', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root, 'app.js'), 'utf8');
  const instrumented = source.replace(/\}\(\)\);\s*$/, `window.projectTypeTest={
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
    function type(value){api.info();var select=document.getElementById('field-project-projectType');select.value=value;select.dispatchEvent(new Event('change',{bubbles:true}));}
    function copy(){return Array.from(document.querySelectorAll('#proposal-preview .doc-copy')).map(function(e){return e.textContent;}).join(' ');}
    var api;
    async function run(){
      await document.fonts.ready;
      api=window.projectTypeTest;
      var baseline=api.defaults();
      baseline.project.projectName='Category test project';
      baseline.project.clientCompany='Test owner';
      baseline.notes='Existing private notes are preserved';
      baseline.meta.coverImageCollapsed=false;
      baseline.themeId=baseline.meta.themeId='northlinePortrait';
      baseline.phaseScopeItems.schematicDesign='Unit plan development.\nCivil coordination remains included.';
      baseline.deliverables.schematicDesign.push({name:'Residential unit plans',included:true});
      api.set(baseline);api.info();
      var options=Array.from(document.querySelector('#field-project-projectType').options).map(function(o){return o.textContent;});
      check(JSON.stringify(options)===JSON.stringify(['Office','Multi Family','Mixed-Use','Master Plan','Hospitality','Retail','Senior Living','Institutional']),'All requested dropdown choices');
      check(!Array.from(document.querySelectorAll('#editor-panel .eyebrow')).some(function(e){return e.textContent==='Cover Image';}),'Cover Image panel removed');
      check(Array.from(document.querySelectorAll('#editor-panel .eyebrow')).some(function(e){return e.textContent==='Cover Page';}),'Cover Page PDF controls retained');
      Array.from(document.querySelectorAll('.project-information-card textarea')).forEach(function(e){check(e.getBoundingClientRect().height<=60,'Project Info textareas are compact: '+e.id);});
      var cases=[['office',['office']],['multiFamily',['mf low','mf high']],['mixedUse',['mixed-use','mf low','mf high','office','retail']],['masterPlan',['master plan']],['hospitality',['hospitality']],['retail',['retail']],['seniorLiving',['senior living']],['institutional',['institutional']]];
      var originalUnits;
      api.section('designDevelopmentPage');originalUnits=document.querySelector('[data-copy-part=units] textarea').value;
      var originalSources=JSON.stringify(api.get().sectionOverrides), originalScope=api.get().phaseScopeItems.schematicDesign;
      for(var entry of cases){
        var value=entry[0], photos=entry[1], multifamily=value==='multiFamily'||value==='mixedUse';
        type(value);
        var checked=Array.from(document.querySelectorAll('.typology-option input:checked')).map(function(e){return e.value;}).sort();
        check(JSON.stringify(checked)===JSON.stringify(photos.slice().sort()),'Photo checkboxes match '+value+': '+checked);
        check(api.get().project.projectType===value,'Project type stored for '+value);
        check(api.get().notes==='Existing private notes are preserved','Old draft notes preserved');
        check(JSON.stringify(api.get().sectionOverrides)===originalSources,'Selecting '+value+' does not edit section source text');
        check(api.get().phaseScopeItems.schematicDesign===originalScope,'Selecting '+value+' preserves scope source');
        for(var theme of ['maOg','northlinePortrait','studioPortrait','modernLandscape']){
          var proposal=api.get();proposal.themeId=proposal.meta.themeId=theme;api.set(proposal);
          var host=document.createElement('div');host.innerHTML=api.pages();
          var output=Array.from(host.querySelectorAll('.doc-copy')).map(function(e){return e.textContent;}).join(' ');
          check(output.includes('Civil coordination remains included.'),'Neutral scope remains in '+theme+' '+value);
          check(output.includes('Unit Layout and Design')===multifamily,'Units visibility in '+theme+' '+value);
          check(output.includes('Unit plan development.')===multifamily,'Unit scope visibility in '+theme+' '+value);
          check(output.includes('Residential unit plans')===multifamily,'Unit deliverable visibility in '+theme+' '+value);
          if(!multifamily)check(!/multifamily|residential units|unit design/i.test(output),'Multifamily prose omitted from '+theme+' '+value);
        }
        api.section('designDevelopmentPage');
        var checkbox=document.querySelector('[data-copy-part=units] input[type=checkbox]');
        check(checkbox.disabled===!multifamily&&checkbox.checked===multifamily,'Units checkbox reflects eligibility for '+value);
        check(document.querySelector('[data-copy-part=units] textarea').value===originalUnits,'Unit text retained for '+value);
        var saved=JSON.parse(JSON.stringify(api.get()));api.set(saved);api.info();
        check(document.getElementById('field-project-projectType').value===value,'Project type survives reload for '+value);
      }
      type('multiFamily');api.section('designDevelopmentPage');
      var checkbox=document.querySelector('[data-copy-part=units] input[type=checkbox]');checkbox.checked=false;checkbox.dispatchEvent(new Event('change',{bubbles:true}));
      type('office');api.section('designDevelopmentPage');
      var intro=document.querySelector('[data-copy-part=intro] textarea');intro.value='Edited office introduction.';intro.dispatchEvent(new Event('input',{bubbles:true}));
      check(!copy().includes('Unit Layout and Design'),'Editing intro cannot reveal ineligible units');
      type('mixedUse');api.section('designDevelopmentPage');
      check(!document.querySelector('[data-copy-part=units] input[type=checkbox]').checked,'Manual Units visibility survives project type changes');
      check(document.querySelector('[data-copy-part=units] textarea').value===originalUnits,'Editing nonresidential intro preserves hidden Unit text');
      type('office');api.section('schematicDesignPage');
      var schematicIntro=document.querySelector('[data-copy-part=intro] textarea');schematicIntro.value='Edited schematic intro.';schematicIntro.dispatchEvent(new Event('input',{bubbles:true}));
      type('multiFamily');api.section('schematicDesignPage');
      check(!document.querySelector('[data-copy-part=units] input[type=checkbox]').checked,'Editing a nonresidential intro preserves an initially hidden Units block');
      type('office');
      var retail=document.querySelector('.typology-option input[value=retail]');retail.checked=true;retail.dispatchEvent(new Event('change',{bubbles:true}));
      check(api.get().project.photoTypologiesAuto===false,'Manual photo choices remain possible');
      var saved=JSON.parse(JSON.stringify(api.get()));api.set(saved);api.info();
      check(document.querySelector('.typology-option input[value=retail]').checked,'Manual photo choices survive reopening');
      type('hospitality');check(api.get().project.photoTypologies==='hospitality','Changing type reapplies related photos');
      var legacy=api.defaults();delete legacy.project.projectType;delete legacy.project.photoTypologiesAuto;
      legacy.project.projectName='Senior Living community';legacy.project.program='Senior living residential community';legacy.project.photoTypologies='MF Low, MF High, Office, Retail, Hospitality, Master Plan';
      api.set(legacy);api.info();
      check(api.get().project.projectType==='seniorLiving','Old drafts infer senior living before residential');
      check(api.get().project.photoTypologies==='senior living','Old all-photo defaults migrate to related category');
      var pre=document.createElement('pre');pre.id='project-type-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.projectTypeTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-project-type-error',e.stack||e.message);});}start();
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
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-project-types-test-'));
  try {
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const { stdout } = await runProcess(detectChromiumExecutable(), [
      '--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions',
      '--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=25000','--window-size=1600,1200',
      '--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'
    ],{timeoutMs:60000});
    assert.ok(stdout.includes('<pre id="project-type-result">passed</pre>'),stdout.match(/data-project-type-error="[^"]*/)?.[0]||stdout.slice(-2500));
  } finally {
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
