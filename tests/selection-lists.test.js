const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('scope and deliverable catalogs retain items, replace named selections, and apply project type defaults', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root, 'app.js'), 'utf8');
  const instrumented = source.replace(/\}\(\)\);\s*$/, `window.listTest={
    defaults:createDefaultProposal,get:function(){return proposal;},
    set:function(value){proposal=normalizeProposal(value);renderAll();},
    section:function(id){activeTab='sections';activeSectionId=id;renderAll();},
    type:setProjectType,pages:renderProposalPages,
    selected:function(key){return selectionListSourceNames(key,proposal);},
    options:function(key){return selectionListOptions(key,proposal);},
    library:readSelectionListLibrary,backup:backupJson,
    clearLibrary:function(){localStorage.removeItem(SELECTION_LIST_LIBRARY_KEY);}
  };\n}());`);
  assert.notEqual(instrumented, source);
  const checks = String.raw`
    function check(value,message){if(!value)throw Error(message);}
    function card(){return document.querySelector('[data-selection-list="'+key+'"]');}
    function button(label){return Array.from(card().querySelectorAll('button')).find(function(b){return b.textContent===label;});}
    function choice(name){return Array.from(card().querySelectorAll('.selection-option input')).find(function(c){return c.value===name;});}
    function toggle(name,value){var el=choice(name);check(el,'Choice exists: '+name);el.checked=value;el.dispatchEvent(new Event('change',{bubbles:true}));}
    function add(name){card().querySelector('[aria-label="New list item"]').value=name;button('Add').click();}
    function save(name){card().querySelector('[aria-label="List name"]').value=name;button('Save').click();}
    function apply(name){var select=card().querySelector('select');select.value=name;select.dispatchEvent(new Event('change',{bubbles:true}));button('Apply').click();}
    function remove(name){Array.from(card().querySelectorAll('button')).find(function(b){return b.getAttribute('aria-label')==='Delete '+name+' from saved items';}).click();}
    function selected(){return api.selected(key);}
    var key,api;
    async function run(){
      await document.fonts.ready;api=window.listTest;
      var cases=[['scope.schematicDesign','schematicDesignPage'],['scope.designDevelopment','designDevelopmentPage'],['scope.constructionAdministration','biddingConstructionAdministration'],['deliverables.conceptDesign','conceptDesignPage'],['deliverables.schematicDesign','schematicDesignPage'],['deliverables.designDevelopment','designDevelopmentPage'],['deliverables.projectSummary','projectSummary']];
      for(var entry of cases){
        key=entry[0];var section=entry[1], baseline=api.defaults();
        Object.keys(baseline.sectionInclusion).forEach(function(id){baseline.sectionInclusion[id]=id===section;});
        baseline.project.projectName='Selection test';baseline.project.showSummaryDeliverables=true;
        api.set(baseline);api.section(section);
        check(card()&&!card().querySelector('textarea'),'Checkbox picker replaces the textarea in '+key);
        if(key==='scope.constructionAdministration')check(card().querySelector('.eyebrow').textContent==='Scope Items','Construction administration is labeled Scope Items');
        var oldOption=api.options(key)[0];
        button('Clear selection').click();check(selected().length===0,'Clear does not restore defaults in '+key);
        var first='Persistent first choice for '+key+'.', second='Persistent second choice for '+key+'.';
        add(first);check(choice(first)&&choice(first).checked&&selected().includes(first),'Added choice is included in '+key);
        toggle(first,false);check(choice(first)&&!choice(first).checked&&!api.pages().includes(first),'Unchecking retains the option and removes it from output in '+key);
        save('Empty');toggle(first,true);save('Multi Family');
        check(api.pages().includes(first),'Selected choice reaches the rendered proposal in '+key);
        add(second);button('Clear selection').click();toggle(second,true);save('multi-family');
        var presets=api.library()[key].presets.filter(function(p){return !p.deleted&&/multi/i.test(p.name);});
        check(presets.length===1&&presets[0].items.length===1&&presets[0].items[0]===second,'Saving over the same project-type name replaces the selection in '+key);
        api.set(api.defaults());api.section(section);
        check(selected().length===1&&selected()[0]===second,'New proposals use the matching named default in '+key);
        check(api.pages().includes(second),'Matching named default is visible in the new proposal in '+key);
        check(choice(first)&&!choice(first).checked&&choice(second).checked,'Added options remain available but unselected unless in the preset in '+key);
        toggle(second,false);var saved=JSON.parse(JSON.stringify(api.get()));api.set(saved);api.section(section);
        check(selected().length===0,'Reopening a draft retains manual selections in '+key);
        apply('Empty');check(selected().length===0,'Empty saved selection remains empty in '+key);
        toggle(first,true);save('Office');
        api.type('multiFamily');api.section(section);check(selected().length===1&&selected()[0]===second,'Changing type applies its matching list in '+key);
        api.type('office');api.section(section);check(selected().length===1&&selected()[0]===first,'Each project type keeps its own default in '+key);
        button('Clear selection').click();save('Office');api.type('multiFamily');api.type('office');api.section(section);
        check(selected().length===0,'An empty project-type preset does not reinsert defaults in '+key);
        var stale=JSON.parse(JSON.stringify(api.get()));
        remove(first);api.set(api.defaults());api.section(section);check(!choice(first),'Deleted option stays deleted in future proposals in '+key);
        api.set(stale);api.section(section);check(!choice(first)&&!api.pages().includes(first),'Old drafts cannot resurrect deleted catalog items in '+key);
        if(oldOption){remove(oldOption.name);api.set(api.defaults());api.section(section);check(!choice(oldOption.name),'Deleted built-in item stays deleted in '+key);}
        add(first);check(choice(first).checked,'Explicitly re-adding an item restores it in '+key);
        var snapshot=JSON.parse(JSON.stringify(api.get()));
        check(JSON.parse(api.backup()).selectionListLibrary[key].presets.length>=2,'Backup includes named selections and catalogs in '+key);
        api.clearLibrary();api.set(snapshot);api.section(section);
        check(choice(first)&&api.library()[key].presets.some(function(p){return !p.deleted&&p.name==='multi-family';}),'Draft snapshots restore catalogs and presets in another browser in '+key);
        var select=card().querySelector('select');select.value='Empty';button('Delete list').click();
        check(!Array.from(card().querySelector('select').options).some(function(o){return o.value==='Empty';}),'Saved list can be deleted independently of items in '+key);
      }
      var pre=document.createElement('pre');pre.id='list-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.listTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-list-error',e.stack||e.message);});}start();
  `;
  const html = (await fs.readFile(path.join(root, 'index.html'), 'utf8')).replace('</body>', '<script>' + checks + '</script></body>');
  const fixture = http.createServer(async (request, response) => {
    if(request.url==='/'){response.writeHead(200,{'Content-Type':'text/html'});response.end(html);}
    else if(request.url==='/app.js'){response.writeHead(200,{'Content-Type':'application/javascript'});response.end(instrumented);}
    else if(request.url==='/api/drafts'){response.writeHead(200,{'Content-Type':'application/json'});response.end('{"drafts":{},"revisions":{}}');}
    else if(request.url.startsWith('/api/drafts/')){for await(const chunk of request){}response.writeHead(200,{'Content-Type':'application/json'});response.end('{"revision":"test-revision"}');}
    else if(request.url==='/api/project-images'){response.writeHead(200,{'Content-Type':'application/json'});response.end('{"images":[]}');}
    else serveStaticFile(request,response);
  });
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-selection-list-test-'));
  try{
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const {stdout}=await runProcess(detectChromiumExecutable(),[
      '--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions',
      '--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=30000','--window-size=1600,1200',
      '--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'
    ],{timeoutMs:90000});
    assert.ok(stdout.includes('<pre id="list-result">passed</pre>'),stdout.match(/data-list-error="[^"]*/)?.[0]||stdout.slice(-2500));
  }finally{
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
