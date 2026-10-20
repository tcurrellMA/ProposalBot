const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const changes = require('../global-changes');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('quantity changes recognize digits, English variants, paired values and level aliases', () => {
  const rule = {from:'5', to:'6', subject:'levels'};
  assert.equal(changes.replaceText('5 levels; five floors; Five stories; FIVE storeys; five-story; Levels: five (5); five (5) levels.',rule).text,
    '6 levels; six floors; Six stories; SIX storeys; six-story; Levels: six (6); six (6) levels.');
  assert.equal(changes.replaceText('5 units, 15 levels, 105 floors, 5.5 levels, 5% fee, 152 units, 2025.',rule).matches.length,0);
  assert.equal(changes.replaceText('152 residential units; one hundred fifty two units; One hundred and fifty-two dwelling units; one hundred fifty-two apartments.',{from:'152',to:'164',subject:'units'}).text,
    '164 residential units; one hundred sixty four units; One hundred and sixty-four dwelling units; one hundred sixty-four apartments.');
  assert.equal(changes.replaceText('2,152 units; two thousand one hundred and fifty-two units.',{from:'2152',to:'3160',subject:'units'}).text,
    '3,160 units; three thousand one hundred and sixty units.');
  assert.equal(changes.replaceText('300 units; three hundred units', {from:'300',to:'100000',subject:'units'}).text, '100,000 units; one hundred thousand units');
  assert.equal(changes.replaceText('152 units', {from:'152',to:'123456789',subject:'units'}).text, '123,456,789 units');
  assert.equal(changes.replaceText('one hundred fifty two units',{from:'2',to:'3',subject:'units'}).matches.length,0);
});

test('requests parse quantities and names; names match whole phrases', () => {
  assert.deepEqual(changes.parseRequest('Change number of levels from 5 to 6 everywhere'),{from:'5',to:'6',subject:'levels'});
  assert.deepEqual(changes.parseRequest('change 152 units to one hundred sixty units'),{from:'152',to:'one hundred sixty',subject:'units'});
  assert.deepEqual(changes.parseRequest('Replace Old Name with New Name throughout the proposal'),{from:'Old Name',to:'New Name',subject:''});
  assert.deepEqual(changes.parseRequest('Change AOR to read XXX'),{from:'AOR',to:'XXX',subject:''});
  assert.equal(changes.replaceText("Ann, ANN, annual, Joanne, Ann's",{from:'Ann',to:'Beth'}).text,"Beth, BETH, annual, Joanne, Beth's");
  assert.equal(changes.replaceText('M+A (West), M+A (West)Side',{from:'M+A (West)',to:'New $& Co.'}).text,'New $& Co., M+A (West)Side');
  assert.throws(()=>changes.parseRequest('make the project bigger'));
  assert.throws(()=>changes.validate({from:'5',to:'five'}));
  assert.throws(()=>changes.validate({from:'',to:'6'}));
});

test('plans cover proposal copy while protecting IDs, assets, settings, finances and saved presets', () => {
  const proposal = {meta:{id:'5'},templateId:'5',notes:'5 levels',project:{program:'five levels',proposalDate:'2025-05-05',photoTypologies:'5',clientLogos:[{name:'5 levels',dataUrl:'data:5'}]},
    sectionOverrides:{hidden:'5 floors'},phaseScopeItems:{designDevelopment:'5 stories'},deliverables:{designDevelopment:[{name:'five floors'}]},
    signature:{name:'five levels',imageDataUrl:'data:5'},generalConditions:{text:'5 levels',hourlyRates:[{label:'five levels',amount:'5'}]},
    compensation:{amount:'5',concept:'5',feeNotesText:'five floors'},feeStructures:[{id:'5',concept:'5',phaseLabels:{designDevelopment:'five floors'}}],
    attachments:[{id:'5',title:'5 floors',pages:[{imageName:'5 levels',imageDataUrl:'data:5'}]}],savedSectionInputs:{sample:[{text:'5 floors'}]}};
  const plan=changes.plan(proposal,{from:'5',to:'6',subject:'levels'});
  assert.equal(proposal.project.program,'five levels');
  changes.apply(proposal,plan.changes);
  assert.equal(proposal.project.program,'six levels');
  assert.equal(proposal.sectionOverrides.hidden,'6 floors');
  assert.equal(proposal.deliverables.designDevelopment[0].name,'six floors');
  assert.equal(proposal.feeStructures[0].phaseLabels.designDevelopment,'six floors');
  assert.equal(proposal.attachments[0].title,'6 floors');
  assert.equal(proposal.attachments[0].pages[0].imageDataUrl,'data:5');
  assert.equal(proposal.project.clientLogos[0].name,'5 levels');
  assert.equal(proposal.project.proposalDate,'2025-05-05');
  assert.equal(proposal.generalConditions.hourlyRates[0].amount,'5');
  assert.equal(proposal.compensation.amount,'5');
  assert.equal(proposal.feeStructures[0].concept,'5');
  assert.equal(proposal.notes,'5 levels');
  assert.equal(proposal.savedSectionInputs.sample[0].text,'5 floors');
});

test('global change UI reviews, applies, exports, persists and undoes real proposal text', async () => {
  const root=path.resolve(__dirname,'..');
  const source=await fs.readFile(path.join(root,'app.js'),'utf8');
  const expose='window.changesTest={defaults:createDefaultProposal,get:function(){return proposal;},set:function(p){proposal=normalizeProposal(p);renderAll();},word:buildWordHtmlBlob,pages:renderProposalPages,indesign:buildInDesignPageHtml};';
  const instrumented=source.replace(/\}\(\)\);\s*$/,expose+'\n}());');
  const checks=String.raw`
    function check(v,m){if(!v)throw Error(m);}
    function click(id){var el=document.getElementById(id);check(el,'Missing '+id);el.click();}
    function request(text){var el=document.getElementById('global-change-request');el.value=text;el.dispatchEvent(new Event('input',{bubbles:true}));click('interpret-global-change');}
    async function run(){
      var api=window.changesTest,p=api.defaults();
      Object.keys(p.sectionInclusion).forEach(function(k){p.sectionInclusion[k]=false;});
      p.sectionInclusion.projectSummary=true;p.sectionInclusion.process=true;
      p.project.projectName='Old Name';p.project.program='Five levels with 152 residential units.';
      p.project.ownerRequirements='five floors and one hundred fifty two units';
      p.project.maAssumptionsAuto=false;p.project.maAssumptions='5 stories, 152 units';
      p.projectSummarySections={intro:'Old Name includes five floors.',summary:'Five (5) levels and one hundred and fifty-two units. Old Name.'};
      p.sectionOverrides.projectSummary=p.projectSummarySections.intro+'\n\n'+p.projectSummarySections.summary;
      p.sectionOverrides.conceptDesignPage='Old Name has five levels and 152 units.';
      api.set(p);click('tab-changes');
      request('Change levels from 5 to 6 everywhere');
      check(api.get().project.program==='Five levels with 152 residential units.','Review does not mutate');
      check(document.getElementById('global-change-results').textContent.includes('Before:'),'Before and after review');
      click('apply-global-change');
      check(api.get().project.program==='Six levels with 152 residential units.','Source program updated');
      check(api.get().sectionOverrides.conceptDesignPage.includes('six levels'),'Excluded section updated');
      check(api.get().projectSummarySections.summary.includes('Six (6) levels'),'Split summary and paired forms updated');
      check(!api.get().sectionOverrides.process,'Regenerated copy remains dynamic');
      var html=api.pages();check(html.includes('Six (6) levels'),'Preview updates');
      var word=await api.word().text();check(word.includes('Six (6) levels'),'Word export updates');
      api.get().notes='Keep a later unrelated edit';click('undo-global-change');
      check(api.get().project.program.startsWith('Five levels'),'Undo restores values');
      check(api.get().notes==='Keep a later unrelated edit','Undo preserves unrelated edits');
      request('Change 152 units to 164 units');click('apply-global-change');
      check(api.get().projectSummarySections.summary.includes('one hundred and sixty-four units'),'Written-out quantity updates');
      check(api.get().project.program.includes('164 residential units'),'Digit quantity updates');
      request('Replace Old Name with New Name');click('apply-global-change');
      check(api.get().project.projectName==='New Name','Name source updated');
      check(api.get().sectionOverrides.conceptDesignPage.includes('New Name'),'Name in excluded copy updated');
      api.get().project.projectName='A later name edit';click('undo-global-change');
      check(api.get().project.projectName==='A later name edit','Undo protects later changes to same field');
      api.get().project.projectName='New Name';click('save-proposal');
      for(var i=0;i<100;i++){
        var saved=await (await fetch('/api/drafts')).json();
        if(saved.drafts[api.get().meta.id]&&saved.drafts[api.get().meta.id].project.projectName==='New Name'&&saved.drafts[api.get().meta.id].project.program.includes('164'))break;
        await new Promise(function(r){setTimeout(r,30);});
      }
      check(i<100,'Global changes persist to shared draft');
      api.set(saved.drafts[api.get().meta.id]);check(api.pages().includes('one hundred and sixty-four'),'Changes survive normalization and reload');

      // Default deliverables and generated headings must not restore old terms.
      var full=api.defaults(); full.meta.id='global-aor-regression';
      full.feeStructures[0].heading='AOR coordination';full.feeStructures[0].belowText='AOR fee breakdown';
      full.phaseScopeItems.schematicDesign='Coordinate with AOR';
      api.set(full);click('tab-changes');
      function copyText(html){var div=document.createElement('div');div.innerHTML=html;return div.textContent;}
      function remainingAor(text){return text.match(/.{0,60}\bAOR\b.{0,60}/gi)||[];}
      var initialAor=remainingAor(copyText(api.pages())).length;
      check(initialAor>10,'Fixture includes AOR in many proposal locations');
      var beforeReview=JSON.stringify(api.get());request('Change AOR to read XXX');
      check(document.getElementById('global-change-to').value==='XXX','to read is parsed as request language');
      check(JSON.stringify(api.get())===beforeReview,'Review leaves proposal data unchanged');
      var reviewCopy=document.getElementById('global-change-results').textContent;
      check(reviewCopy.includes('Code Analysis Sheets')&&reviewCopy.includes('BOMA'),'Review covers default deliverables');
      click('apply-global-change');
      for(var theme of ['maOg','northlinePortrait','modernLandscape','studioPortrait']){
        api.get().themeId=theme;
        var remaining=remainingAor(copyText(api.pages()));
        check(!remaining.length,'No AOR remains in '+theme+': '+remaining.join(' | '));
      }
      var exportedWord=copyText(await api.word().text());check(!remainingAor(exportedWord).length,'Word contains no old AOR references');
      api.get().themeId='maOg';
      var exportRoot=document.createElement('div');exportRoot.innerHTML=api.pages();
      exportRoot.querySelectorAll('img').forEach(function(image){image.remove();});
      var indesignPages=[];
      for(var page of exportRoot.querySelectorAll('.proposal-page')) indesignPages.push(await api.indesign(page,{width:816,height:1056},new Map()));
      check(indesignPages.length>1&&!remainingAor(copyText(indesignPages.join(''))).length,'InDesign body copy contains no old AOR references');
      var changedFull=JSON.parse(JSON.stringify(api.get()));
      api.set(changedFull);check(!remainingAor(copyText(api.pages())).length,'No AOR returns after normalization/reopen');
      click('save-proposal');
      for(var j=0;j<100;j++){
        var savedFull=await (await fetch('/api/drafts')).json();
        if(savedFull.drafts[api.get().meta.id]&&savedFull.drafts[api.get().meta.id].generatedTextOverrides)break;
        await new Promise(function(r){setTimeout(r,30);});
      }
      check(j<100,'Default replacement settings save to shared draft');
      api.set(savedFull.drafts[api.get().meta.id]);check(!remainingAor(copyText(api.pages())).length,'Saved default replacements survive reload');
      click('undo-global-change');
      check(remainingAor(copyText(api.pages())).length===initialAor,'Undo restores every original AOR reference');
      request('Change AOR to read AOR Team');click('apply-global-change');
      var repeatedText=copyText(api.pages());
      check(repeatedText.includes('AOR TEAM'),'Replacement can contain the original term');
      check(!repeatedText.includes('AOR TEAM TEAM'),'Default replacements are applied once');
      request('Change 300 units to 100000 units');
      check(document.getElementById('global-change-results').textContent.includes('100,000'),'Review formats larger quantities with grouping commas');
      click('apply-global-change');
      check(api.get().project.program.includes('100,000'),'Source fields use grouped quantities');
      check(copyText(api.pages()).includes('100,000'),'Rendered proposal uses grouped quantities');

      var pre=document.createElement('pre');pre.id='changes-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.changesTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(function(e){document.body.setAttribute('data-changes-error',e.stack||e.message);});}start();
  `;
  const html=(await fs.readFile(path.join(root,'index.html'),'utf8')).replace('</body>','<script>'+checks+'</script></body>');
  let drafts={},revisions={};
  const fixture=http.createServer(async(req,res)=>{
    if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html'});res.end(html);}
    else if(req.url==='/app.js'){res.writeHead(200,{'Content-Type':'application/javascript'});res.end(instrumented);}
    else if(req.url==='/api/drafts'){res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({drafts,revisions}));}
    else if(req.url.startsWith('/api/drafts/')){let body='';for await(const c of req)body+=c;const id=req.url.split('/').pop();drafts[id]=JSON.parse(body);revisions[id]='test';res.writeHead(200,{'Content-Type':'application/json'});res.end('{"revision":"test"}');}
    else if(req.url==='/api/project-images'){res.writeHead(200,{'Content-Type':'application/json'});res.end('{"images":[]}');}
    else serveStaticFile(req,res);
  });
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-global-changes-'));
  try{
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const {stdout,stderr}=await runProcess(detectChromiumExecutable(),['--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions','--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=15000','--window-size=1600,1200','--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'],{timeoutMs:60000});
    assert.ok(stdout.includes('<pre id="changes-result">passed</pre>'),stdout.match(/data-changes-error="[^"]*/)?.[0]||stderr||stdout.slice(-2000));
  }finally{
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});
