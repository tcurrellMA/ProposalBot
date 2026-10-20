const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('phase intro and unit editors save independently, preserve hidden text, and honor visibility in exports', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root, 'app.js'), 'utf8');
  const expose = `window.unitTest = {
    defaults: createDefaultProposal,
    get: function(){return proposal;},
    set: function(value){proposal=normalizeProposal(value);renderAll();},
    select: function(id){activeTab='sections';activeSectionId=id;renderAll();},
    pages: renderProposalPages,
    capture: function(){return captureProposalTypeDefaults('unit-test','Unit test');},
    template: function(value){applyProposalType(normalizeCustomTemplate(value));},
    change: buildGlobalChangePlan,
    applyChange: function(plan){ProposalGlobalChanges.apply(proposal,plan.changes);renderAll();}
  };`;
  const instrumented = source.replace(/\}\(\)\);\s*$/, expose + '\n}());');
  assert.notEqual(instrumented, source);
  const checks = String.raw`
    function check(value,message){if(!value)throw Error(message);}
    function field(part){return document.querySelector('[data-copy-part="'+part+'"]');}
    function editor(part){return field(part).querySelector('textarea');}
    function type(part,text){var el=editor(part);el.value=text;el.dispatchEvent(new Event('input',{bubbles:true}));}
    function show(value){var el=field('units').querySelector('input[type=checkbox]');el.checked=value;el.dispatchEvent(new Event('change',{bubbles:true}));}
    function button(part,name){return Array.from(field(part).querySelectorAll('button')).find(function(b){return b.textContent===name;});}
    function save(part,name){field(part).querySelector('input[type=text]').value=name;button(part,'Save').click();}
    function apply(part){field(part).querySelector('select').value='0';button(part,'Apply').click();}
    function preview(id){return Array.from(document.querySelectorAll('#proposal-preview [data-section-id="'+id+'"] .doc-copy')).map(function(e){return e.textContent;}).join(' ');}
    async function run(){
      await document.fonts.ready;
      var api=window.unitTest, ids=['schematicDesignPage','designDevelopmentPage','constructionDocumentsPage'];
      for(var id of ids){
        var baseline=api.defaults();
        Object.keys(baseline.sectionInclusion).forEach(function(k){baseline.sectionInclusion[k]=k===id;});
        baseline.meta.id='unit-editor-'+id;
        baseline.themeId=baseline.meta.themeId='northlinePortrait';
        api.set(baseline);api.select(id);
        var originalTitle=document.querySelector('.section-title-heading h3').textContent;
        check(document.querySelector('.section-title-edit').hidden,'Title editor is hidden until requested in '+id);
        document.querySelector('[aria-label="Edit section title"]').click();
        var titleInput=document.querySelector('[aria-label="Section title"]');titleInput.value='Temporary title';titleInput.dispatchEvent(new Event('input',{bubbles:true}));
        var titleExport=document.createElement('div');titleExport.innerHTML=api.pages();
        check(Array.from(titleExport.querySelectorAll('h2')).some(function(h){return h.textContent.replace(/\s/g,'').toLowerCase()==='temporarytitle';}),'Title edits update export headings in '+id);
        titleInput.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
        check(document.querySelector('.section-title-heading h3').textContent===originalTitle&&document.querySelector('.section-title-edit').hidden,'Escape restores the title and closes editing in '+id);
        document.querySelector('[aria-label="Edit section title"]').click();
        titleInput=document.querySelector('[aria-label="Section title"]');titleInput.value='Saved title';titleInput.dispatchEvent(new Event('input',{bubbles:true}));titleInput.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
        var titled=JSON.parse(JSON.stringify(api.get()));api.set(titled);api.select(id);
        check(document.querySelector('.section-title-heading h3').textContent==='Saved title'&&document.querySelector('.section-title-edit').hidden,'Entered title survives reopening without an expanded field in '+id);
        document.querySelector('[aria-label="Edit section title"]').click();document.querySelector('[aria-label="Reset title"]').click();
        check(document.querySelector('.section-title-heading h3').textContent===originalTitle,'Compact reset restores the default title in '+id);
        check(editor('intro').labels[0].textContent==='Intro Paragraph','Intro label in '+id);
        check(editor('units').labels[0].textContent==='Unit Layout and Design','Units label in '+id);
        check(!editor('intro').value.includes('Unit Layout and Design'),'Existing combined copy is separated in '+id);
        check(!editor('intro').value.includes('In coordination with the AOR'),'Scope heading stays outside intro in '+id);
        check(editor('units').value.includes('The design and development of residential units'),'Original unit copy available in '+id);
        check(field('units').querySelector('input[type=checkbox]').checked===(id==='designDevelopmentPage'),'Existing visibility preserved in '+id);
        check(document.querySelectorAll('[data-copy-part] [role=group]').length===2,'Separate saved text controls in '+id);
        var originalUnits=editor('units').value.replace(/\s+/g,' ').trim();
        for(var portraitTheme of ['maOg','northlinePortrait','studioPortrait','modernLandscape']){
          for(var wide of [false,true]){
            var full=api.get();full.themeId=full.meta.themeId=portraitTheme;full.sectionLandscapeLayouts[id]=wide;api.set(full);api.select(id);show(true);
            var pages=Array.from(document.querySelectorAll('#proposal-preview [data-section-id="'+id+'"]'));
            pages.forEach(function(p){p.style.contentVisibility='visible';var c=p.querySelector('.doc-copy').parentElement;check(c.scrollHeight<=c.clientHeight+1,'Full units must not clip in '+portraitTheme+' '+wide+' '+id+': '+c.scrollHeight+'/'+c.clientHeight);});
            var all=pages.map(function(p){return p.querySelector('.doc-copy').innerText;}).join(' ').replace(/\s+/g,' ').trim();
            check(all.includes(originalUnits),'Full units retain every word in '+portraitTheme+' '+wide+' '+id);
          }
        }
        var intro='Intro sample for '+id+'.', units='Unit sample for '+id+'.';
        type('intro',intro);type('units',units);show(true);
        check(preview(id).includes(intro)&&preview(id).includes(units),'Both texts appear in '+id);
        if(id!=='constructionDocumentsPage')check(preview(id).indexOf(units)<preview(id).indexOf('In coordination with'),'Units precede scope in '+id);
        save('intro','Intro reference');save('units','Unit reference');
        type('intro','Temporary intro');type('units','Temporary units');
        apply('intro');
        check(editor('intro').value===intro&&editor('units').value==='Temporary units','Intro preset leaves units alone in '+id);
        apply('units');
        check(editor('intro').value===intro&&editor('units').value===units,'Units preset leaves intro alone in '+id);
        field('intro').querySelector('select').value='';button('intro','Apply').click();
        check(editor('intro').value===intro,'Blank preset selection does nothing in '+id);
        show(false);
        check(preview(id).includes(intro)&&!preview(id).includes(units)&&!preview(id).includes('Unit Layout and Design'),'Units hidden from preview in '+id);
        var saved=JSON.parse(JSON.stringify(api.get()));api.set(saved);api.select(id);
        check(editor('units').value===units&&!field('units').querySelector('input[type=checkbox]').checked,'Hidden text and visibility survive reopening in '+id);
        var template=api.capture();type('units','Other units');show(true);api.template(template);api.select(id);
        check(editor('units').value===units&&!field('units').querySelector('input[type=checkbox]').checked,'Template retains hidden text and visibility in '+id);
        var plan=api.change({from:'Unit sample',to:'Revised unit sample',subject:''});api.applyChange(plan);api.select(id);
        units='Revised unit sample for '+id+'.';
        check(editor('units').value===units,'Global changes include hidden units in '+id);
        for(var theme of ['maOg','northlinePortrait','modernLandscape','studioPortrait']){
          var value=api.get();value.themeId=value.meta.themeId=theme;api.set(value);api.select(id);
          check(!api.pages().includes(units),'Hidden units omitted from export in '+theme+' '+id);
          show(true);
          var html=api.pages();
          check(html.includes(intro)&&html.includes(units),'Both editors included in export in '+theme+' '+id);
          check((html.match(/Unit Layout and Design/g)||[]).length===1,'Units heading occurs once in '+theme+' '+id);
          check(html.includes('paragraph-heading">Unit Layout and Design'),'Units heading is bold in '+theme+' '+id);
          show(false);
        }
        show(true);
        type('intro','');show(false);
        check(!preview(id).includes('Unit Layout and Design'),'Empty intro cannot restore hidden default units in '+id);
        check(editor('units').value===units,'Hidden content remains editable in '+id);
      }
      var pre=document.createElement('pre');pre.id='unit-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.unitTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-unit-error',e.stack||e.message);});}start();
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
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-unit-editor-test-'));
  try {
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const { stdout } = await runProcess(detectChromiumExecutable(), [
      '--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions',
      '--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=20000','--window-size=1600,1200',
      '--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'
    ],{timeoutMs:60000});
    assert.ok(stdout.includes('<pre id="unit-result">passed</pre>'),stdout.match(/data-unit-error="[^"]*/)?.[0]||stdout.slice(-2500));
  } finally {
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
