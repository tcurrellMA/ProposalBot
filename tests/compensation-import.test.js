const test = require('node:test');
const assert = require('node:assert/strict');
const { parseText, parseWords } = require('../compensation-import');

const reference = '01 SCHEMATIC DESIGN $668,745\n02 DESIGN DEVELOPMENT $802,494\n03 CONSTRUCTION DOCUMENTS $222,915\n04 CONSTRUCTION ADMINISTRATION $312,080\nTOTAL $2,006,234';

test('reference fee rows map to their phases, preserve labels, and reconcile the total', () => {
  const result = parseText(reference);
  assert.deepEqual(result.rows.map(r => [r.key, r.label, r.amount]), [
    ['schematic', 'Schematic Design', '668745'], ['designDevelopment', 'Design Development', '802494'],
    ['constructionDocuments', 'Construction Documents', '222915'], ['constructionObservation', 'Construction Administration', '312080']
  ]);
  assert.equal(result.total, '2006234');
  assert.equal(result.totalMatches, true);
  assert.deepEqual(result.warnings, []);
});

test('split lines, aliases, small amounts, zero values, and cents are supported', () => {
  const result = parseText('Conceptual Design\n$0\nSD $12.50\nDD $20.25\nCDs $30\nBidding and Negotiation $5\nConstruction Observation $1\nTotal $68.75');
  assert.deepEqual(result.rows.map(r => r.amount), ['0', '12.50', '20.25', '30', '5', '1']);
  assert.equal(result.totalMatches, true);
});

test('custom phase labels and spaced display lettering map without guessing unknown amounts', () => {
  assert.equal(parseText('Permit Drawings $15,000', {constructionDocuments: 'Permit Drawings'}).rows[0].key, 'constructionDocuments');
  const spaced = parseText('S C H E M A T I C D E S I G N $10,000');
  assert.equal(spaced.rows[0].label, 'Schematic Design');
  assert.deepEqual(parseText('$100,000\n$200,000\nTotal $300,000').rows, []);
  assert.deepEqual(parseText('Unrecognized cost $5,000').rows, []);
});

test('conflicting phase amounts and totals are flagged instead of silently choosing a value', () => {
  const result = parseText('Schematic Design $10,000\nSchematic Design $11,000\nDesign Development $20,000\nTotal $30,000');
  assert.deepEqual(result.rows.map(r => r.key), ['designDevelopment']);
  assert.ok(result.warnings.some(w => /Conflicting amounts/.test(w)));
  assert.ok(result.warnings.some(w => /do not add up/.test(w)));
  assert.deepEqual(parseText('Schematic Design $10,000 $20,000').rows, []);
});

test('fee notes, percentages, and hourly rates are not imported as lump sums', () => {
  assert.deepEqual(parseText('Schematic Design 20%\nConstruction Administration $200 per hour\nConcept Design 2 months\nDesign Development 3 visits').rows, []);
});

function word(text, x, y, width = text.length * 9) { return {text, bbox:{x0:x,y0:y,x1:x+width,y1:y+16}}; }

test('spatial reading pairs two-column form labels with the amounts beneath the correct column', () => {
  const result = parseWords([
    word('CONCEPT',0,0),word('DESIGN',75,0),word('SCHEMATIC',400,0),word('DESIGN',490,0),
    word('114,534',0,48),word('196,344',400,48),
    word('DESIGN',0,100),word('DEVELOPMENT',65,100),word('CONSTRUCTION',400,100),word('DOCUMENTS',525,100),
    word('245,430',0,148),word('81,810',400,148)
  ]);
  assert.deepEqual(result.rows.map(r => [r.key,r.amount]), [['concept','114534'],['schematic','196344'],['designDevelopment','245430'],['constructionDocuments','81810']]);
});

test('spatial reading pairs chart labels with right-side amounts and ignores row numbers', () => {
  const result = parseWords([
    word('01',0,0),word('SCHEMATIC',50,0),word('DESIGN',145,0),word('$668,745',350,0),
    word('02',0,50),word('DESIGN',50,50),word('DEVELOPMENT',115,50),word('$802,494',350,50),
    word('TOTAL',0,120),word('$1,471,239',350,120)
  ]);
  assert.deepEqual(result.rows.map(r => r.amount), ['668745','802494']);
  assert.equal(result.totalMatches, true);
});

const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { runProcess, detectChromiumExecutable, serveStaticFile } = require('../server');

test('paste, drop, and file imports update only their fee structure, undo, persist, and reject stale OCR results', async () => {
  const root = path.resolve(__dirname, '..');
  const source = await fs.readFile(path.join(root,'app.js'),'utf8');
  const expose = 'window.feeImportTest={defaults:createDefaultProposal,get:function(){return proposal;},set:function(p){proposal=normalizeProposal(p);activeTab="sections";activeSectionId="compensationPage";renderAll();},state:feeImageImportState};';
  const instrumented = source.replace(/\}\(\)\);\s*$/,expose+'\n}());');
  assert.notEqual(source,instrumented);
  const checks = String.raw`
    function check(v,m){if(!v)throw Error(m);}
    async function until(fn){for(var n=0;n<300;n++){if(fn())return;await new Promise(r=>setTimeout(r,20));}throw Error('Timed out waiting for image import');}
    var reference='01 SCHEMATIC DESIGN $668,745\n02 DESIGN DEVELOPMENT $802,494\n03 CONSTRUCTION DOCUMENTS $222,915\n04 CONSTRUCTION ADMINISTRATION $312,080\nTOTAL $2,006,234';
    var delayed=null,fail=false,terminated=0,readCount=0;
    window.Tesseract={createWorker:async function(){if(fail)throw Error('test unavailable');return {setParameters:async function(){},recognize:async function(){readCount++;if(delayed)await delayed;return {data:{text:reference,words:[]}};},terminate:async function(){terminated++;}};}};
    function file(){var canvas=document.createElement('canvas');canvas.width=400;canvas.height=200;var ctx=canvas.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,400,200);ctx.fillStyle='black';ctx.fillText('Schematic Design $668,745',20,40);var binary=atob(canvas.toDataURL().split(',')[1]);return new File([Uint8Array.from(binary,c=>c.charCodeAt(0))],'fees.png',{type:'image/png'});}
    function paste(index){var transfer=new DataTransfer();transfer.items.add(file());document.querySelectorAll('.fee-image-drop')[index].dispatchEvent(new ClipboardEvent('paste',{clipboardData:transfer,bubbles:true,cancelable:true}));}
    function button(text){return Array.from(document.querySelectorAll('.fee-image-import button')).find(b=>b.textContent===text);}
    async function idle(structure){await until(()=>!window.feeImportTest.state(structure).busy&&!window.feeImportTest.state(structure).clipboardReading);}
    async function run(){
      await document.fonts.ready;
      var api=window.feeImportTest,p=api.defaults();
      Object.keys(p.sectionInclusion).forEach(k=>p.sectionInclusion[k]=k==='compensationPage');
      p.feeStructures=[{concept:'99',schematic:'10',designDevelopment:'20',constructionDocuments:'30',bid:'40',constructionObservation:'50',heading:'Keep heading',belowText:'Keep supporting copy'},{concept:'777',phaseLabels:{concept:'Other chart'}}];
      api.set(p);
      var structure=api.get().feeStructures[0],other=JSON.stringify(api.get().feeStructures[1]),before=JSON.stringify(structure);
      var clipboardReads=0,clipboardBlocked=false,clipboardEmpty=false;
      Object.defineProperty(navigator,'clipboard',{configurable:true,value:{read:async function(){clipboardReads++;if(clipboardBlocked)throw new DOMException('Denied','NotAllowedError');return clipboardEmpty?[]:[{types:['image/png'],getType:async function(){return file();}}];}}});
      document.querySelector('.fee-image-drop').click();check(clipboardReads===1,'Clicking Paste reference image must read the clipboard');await idle(structure);
      check(structure.schematic==='668745'&&structure.designDevelopment==='802494'&&structure.constructionObservation==='312080','Paste fills correct phase amounts: '+JSON.stringify(structure)+' / '+api.state(structure).status);
      check(!structure.includedPhases.concept&&!structure.includedPhases.bid,'Complete reference excludes absent phases without deleting their values');
      check(structure.concept==='99'&&structure.heading==='Keep heading'&&structure.belowText==='Keep supporting copy','Unrelated text and hidden amounts retained');
      check(JSON.stringify(api.get().feeStructures[1])===other,'Other fee structure unchanged');
      check(document.querySelector('.fee-ledger tfoot').textContent==='Total$2,006,234','Formatted chart recalculates');
      check(!JSON.stringify(api.get()).includes('Pasted reference')&&!JSON.stringify(api.get()).includes('fees.png'),'Reference image is not stored in proposal data');
      check(document.getElementById('fee-structure-0-schematic').value==='668,745','Editor updates');
      var saved=JSON.parse(JSON.stringify(api.get()));
      button('Undo import').click();check(JSON.stringify(api.get().feeStructures[0])===before,'Undo restores every changed field');
      api.set(saved);check(api.get().feeStructures[0].schematic==='668745','Imported fields survive normalization');
      structure=api.get().feeStructures[0];
      var transfer=new DataTransfer();transfer.items.add(file());document.querySelectorAll('.fee-image-drop')[1].dispatchEvent(new DragEvent('drop',{dataTransfer:transfer,bubbles:true,cancelable:true}));
      await idle(api.get().feeStructures[1]);check(api.get().feeStructures[1].schematic==='668745','Drop targets second structure');
      var input=document.querySelector('input[aria-label="Choose fee reference image 1"]');transfer=new DataTransfer();transfer.items.add(file());input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));await idle(structure);check(structure.schematic==='668745','File input reads image');
      clipboardBlocked=true;document.querySelector('.fee-image-drop').click();await idle(structure);
      var pasteTarget=document.querySelector('.fee-image-paste-target');
      check(pasteTarget.isContentEditable&&!pasteTarget.hidden&&document.activeElement===pasteTarget,'Blocked clipboard access shows and focuses a real paste box');
      transfer=new DataTransfer();transfer.items.add(file());pasteTarget.dispatchEvent(new ClipboardEvent('paste',{clipboardData:transfer,bubbles:true,cancelable:true}));await idle(structure);
      check(structure.schematic==='668745','Keyboard paste works after clipboard permission is denied');
      clipboardBlocked=false;clipboardEmpty=true;var emptyBefore=JSON.stringify(structure);document.querySelector('.fee-image-drop').click();await idle(structure);
      check(JSON.stringify(structure)===emptyBefore&&api.state(structure).status.includes('does not contain an image'),'Empty clipboard reports a clear message without changing fields');
      clipboardEmpty=false;
      var filesOnly=new Event('paste',{bubbles:true,cancelable:true});Object.defineProperty(filesOnly,'clipboardData',{value:{files:[file()],items:[]}});
      document.getElementById('fee-structure-0-schematic').dispatchEvent(filesOnly);await idle(structure);
      check(filesOnly.defaultPrevented&&structure.schematic==='668745','Pasting an image into a phase input uses the correct fee structure and supports files-only clipboards');
      var plainPaste=new Event('paste',{bubbles:true,cancelable:true});Object.defineProperty(plainPaste,'clipboardData',{value:{files:[],items:[]}});
      document.getElementById('fee-structure-0-schematic').dispatchEvent(plainPaste);check(!plainPaste.defaultPrevented,'Ordinary text pasting in phase inputs is preserved');
      // Field edits made while OCR is running are preserved until the user applies the values.
      var release;delayed=new Promise(r=>release=r);var reads=readCount;paste(0);await until(()=>readCount>reads);
      structure.schematic='123';release();await idle(structure);delayed=null;
      check(structure.schematic==='123'&&document.querySelector('.fee-image-import-status').textContent.includes('fields changed'),'Concurrent input edit is preserved');
      button('Apply recognized values').click();check(structure.schematic==='668745','Recognized results can be explicitly applied after edits');
      // Removing or switching projects during recognition must never update the next target.
      delayed=new Promise(r=>release=r);reads=readCount;paste(0);await until(()=>readCount>reads);var next=api.defaults();next.feeStructures=[{schematic:'555'}];api.set(next);release();await new Promise(r=>setTimeout(r,80));delayed=null;
      check(api.get().feeStructures[0].schematic==='555','Switching projects discards stale OCR result');
      structure=api.get().feeStructures[0];fail=true;paste(0);await idle(structure);check(structure.schematic==='555'&&document.querySelector('.fee-image-import-status').textContent.includes('Could not read'),'OCR errors preserve inputs and allow retry');
      fail=false;paste(0);await idle(structure);check(structure.schematic==='668745','Reader can retry after failure');
      var state=api.state(structure),unchanged=JSON.stringify(structure);state.text='There are no usable fee rows here';state.result=null;
      button('Apply recognized values').click();check(JSON.stringify(structure)===unchanged,'No-match text cannot overwrite values');
      check(terminated>=6,'OCR workers are terminated after use');
      var pre=document.createElement('pre');pre.id='fee-import-result';pre.textContent='passed';document.body.appendChild(pre);
    }
    function start(){if(!window.feeImportTest||!document.querySelector('#proposal-preview .proposal-page')){setTimeout(start,30);return;}run().catch(e=>document.body.setAttribute('data-fee-import-error',e.stack||e.message));}start();
  `;
  const html=(await fs.readFile(path.join(root,'index.html'),'utf8')).replace('</body>',()=>'<script>'+checks+'</script></body>');
  const fixture=http.createServer(async(req,res)=>{
    if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html'});res.end(html);}
    else if(req.url==='/app.js'){res.writeHead(200,{'Content-Type':'application/javascript'});res.end(instrumented);}
    else if(req.url.startsWith('/api/')){for await(const chunk of req){}res.writeHead(200,{'Content-Type':'application/json'});res.end(req.url==='/api/drafts'?'{"drafts":{},"revisions":{}}':req.url==='/api/project-images'?'{"images":[]}':'{"revision":"test"}');}
    else serveStaticFile(req,res);
  });
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'proposal-fee-import-'));
  try{
    await new Promise(resolve=>fixture.listen(0,'127.0.0.1',resolve));
    const {stdout}=await runProcess(detectChromiumExecutable(),['--headless','--no-sandbox','--disable-gpu','--no-first-run','--disable-extensions','--user-data-dir='+path.join(directory,'profile'),'--virtual-time-budget=25000','--window-size=1600,1200','--dump-dom','http://127.0.0.1:'+fixture.address().port+'/'],{timeoutMs:60000});
    assert.ok(stdout.includes('<pre id="fee-import-result">passed</pre>'),stdout.match(/data-fee-import-error="[^"]*/)?.[0]||stdout.slice(-2500));
  }finally{
    if(fixture.listening)await new Promise(resolve=>fixture.close(resolve));
    await fs.rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});
  }
});

test('form helper text and repeated phase-name editors cannot pair with amounts from later fields', () => {
  const result = parseWords([
    word('BIDDING',0,0),word('CONSTRUCTION',400,0),word('ADMINISTRATION',525,0),
    word('Bidding',0,30),word('Construction',400,30),word('Administration',525,30),
    word('CONCEPT',0,150),word('DESIGN',75,150),word('Showin',300,150),word('chart',365,150),word('SCHEMATIC',400,150),word('DESIGN',490,150),word('Show',700,150),word('in',745,150),word('chart',770,150),
    word('114,534',0,198),word('196,344',400,198),
    word('BIDDING',0,250),word('Showin',300,250),word('chart',365,250),word('CONSTRUCTION',400,250),word('ADMINISTRATION',525,250),word('Show',700,250),word('in',745,250),word('chart',770,250),
    word('16,362',0,298),word('81,810',400,298)
  ]);
  assert.deepEqual(result.rows.map(r => [r.key,r.amount]), [['concept','114534'],['schematic','196344'],['bid','16362'],['constructionObservation','81810']]);
});

test('M+A Fee table imports rightmost dollar amounts while ignoring both percentage columns', () => {
  const result = parseText('Phase Full Fee % M+A % M+A Fee\nConceptual Design 5 % 4 % $70,032\nSchematic Design 15 % 11 % $192,589\nDesign Development 25 % 20 % $350,161\nConstruction Documents 30 % 5 % $87,540\nBid 5 % 0 % $0\nConstruction Administration 20 % 5 % $87,540\nTotal 100.00% 45.00% $787,862\n0.93%\nM+A of construction');
  assert.deepEqual(result.rows.map(row => [row.key,row.label,row.amount]), [
    ['concept','Conceptual Design','70032'],['schematic','Schematic Design','192589'],
    ['designDevelopment','Design Development','350161'],['constructionDocuments','Construction Documents','87540'],
    ['bid','Bid','0'],['constructionObservation','Construction Administration','87540']
  ]);
  assert.equal(result.totalMatches,true);
});

test('unmarked percentage cells and separated percent symbols cannot become fee amounts', () => {
  const result = parseText('Conceptual Design 5 4 $70,032\nSchematic Design 15 11 $192,589\nBid 5 0 $0');
  assert.deepEqual(result.rows.map(row => row.amount),['70032','192589','0']);
  assert.deepEqual(parseText('Conceptual Design 5 % 4 %\nSchematic Design 15 % 11 %').rows,[]);
  assert.deepEqual(parseText('Schematic Design $200 per hour').rows,[]);
});

test('table preprocessing removes grid lines and magenta circles while retaining blue fee digits', () => {
  const {cleanTablePixels} = require('../compensation-import');
  const width=100,height=60,pixels={data:new Uint8ClampedArray(width*height*4).fill(255)};
  function set(x,y,r,g,b){const i=(y*width+x)*4;pixels.data.set([r,g,b,255],i);}
  for(let x=0;x<width;x++)set(x,10,0,0,0);
  for(let y=0;y<height;y++)set(10,y,0,0,0);
  set(80,30,255,0,255);set(50,30,0,48,112);set(40,30,0,0,0);set(70,20,215,30,45);
  cleanTablePixels(pixels,width,height);
  function rgb(x,y){return Array.from(pixels.data.slice((y*width+x)*4,(y*width+x)*4+3));}
  assert.deepEqual(rgb(50,10),[255,255,255]);assert.deepEqual(rgb(10,30),[255,255,255]);
  assert.deepEqual(rgb(80,30),[255,255,255]);assert.deepEqual(rgb(70,20),[255,255,255]);
  assert.deepEqual(rgb(50,30),[0,0,0]);assert.deepEqual(rgb(40,30),[0,0,0]);
});

test('spatial table reader selects the dollar fee when bare percentage cells are also present', () => {
  const result = parseWords([
    word('Conceptual',20,100),word('Design',120,100),word('5',430,100),word('4',570,100),word('$70,032',730,100),
    word('Schematic',20,150),word('Design',120,150),word('15',430,150),word('11',570,150),word('$192,589',730,150),
    word('Bid',20,200),word('5',430,200),word('0',570,200),word('$0',730,200)
  ]);
  assert.deepEqual(result.rows.map(row => [row.key,row.amount]),[['concept','70032'],['schematic','192589'],['bid','0']]);
});

test('column-style OCR never uses percentages as fees when cells are returned as separate blocks', () => {
  const result=parseText('Phase\nFull Fee %\nM+A %\nM+A Fee\nConceptual Design\n5\n4\n$70,032\nSchematic Design\n15\n11\n$192,589\nDesign Development\n25\n20\n$350,161\nConstruction Documents\n30\n5\n$87,540\nBid\n5\n0\n$0\nConstruction Administration\n20\n5\n$87,540\nTotal\n100.00%\n45.00%\n$787,862');
  assert.deepEqual(result.rows.map(row=>row.amount),['70032','192589','350161','87540','0','87540']);
  assert.equal(result.totalMatches,true);
  assert.deepEqual(parseText('Full Fee %\nM+A %\nConceptual Design\n5\n4\n032\nSchematic Design\n15\n11').rows,[]);
});

test('OCR periods used as thousands separators retain every fee digit without changing real cents', () => {
  const result=parseText('Conceptual Design 5 % 4 % $70,032\nSchematic Design 15 % 11 % $192,589\nDesign Development 25 % 20 % $350,161\nConstruction Documents 30 % 5 % $87,540\nBid 5 % 0 % $0\nConstruction Administration 20 % 5 % $87.540 /\nTotal 100.00% 45.00% $787.8 /');
  assert.deepEqual(result.rows.map(row=>row.amount),['70032','192589','350161','87540','0','87540']);
  assert.equal(result.rows.reduce((sum,row)=>sum+row.cents,0),78786200);
  assert.equal(parseText('Schematic Design $87.54').rows[0].amount,'87.54');
});
