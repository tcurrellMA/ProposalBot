const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const { pathToFileURL } = require('node:url');
const {
  buildLayoutCaptureHtml, parseLayoutDump, detectChromiumExecutable,
  runProcess, buildEditableInDesignPackageBufferFromLayout
} = require('../server');

const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64');
const dataUrl = 'data:image/png;base64,' + png.toString('base64');

async function frontendFunction(name) {
  const source = await fs.readFile(path.join(__dirname, '..', 'app.js'), 'utf8');
  const start = source.search(new RegExp('  (?:async )?function ' + name + '\\('));
  assert.ok(start >= 0, name);
  const next = source.slice(start + 1).search(/\n  (?:async )?function /);
  return source.slice(start, next < 0 ? undefined : start + 1 + next);
}

function zipEntries(buffer) {
  const result = new Map();
  let offset = 0;
  while (buffer.readUInt32LE(offset) === 0x04034b50) {
    assert.equal(buffer.readUInt16LE(offset + 8), 0, 'stored ZIP entry');
    const size = buffer.readUInt32LE(offset + 18);
    const nameSize = buffer.readUInt16LE(offset + 26);
    const extraSize = buffer.readUInt16LE(offset + 28);
    const name = buffer.toString('utf8', offset + 30, offset + 30 + nameSize);
    const start = offset + 30 + nameSize + extraSize;
    result.set(name, buffer.subarray(start, start + size));
    offset = start + size;
  }
  return result;
}

test('export embeds original image bytes, handles blob URLs, and reuses repeated images', async () => {
  const calls = [];
  const context = vm.createContext({
    Map,
    absoluteExportAssetUrl: src => new URL(src, 'https://proposals.example/').href,
    fetch: async (url, options) => {
      calls.push({ url, options });
      return { ok: true, blob: async () => new Blob([png], { type: 'image/png' }) };
    },
    blobToDataUrl: async blob => 'data:' + blob.type + ';base64,' + Buffer.from(await blob.arrayBuffer()).toString('base64')
  });
  vm.runInContext(await frontendFunction('inDesignImageDataUrl'), context);
  const cache = new Map();
  assert.equal(await context.inDesignImageDataUrl(dataUrl, cache), dataUrl);
  const values = await Promise.all([
    context.inDesignImageDataUrl('/Project%20Images/Office/photo.png', cache),
    context.inDesignImageDataUrl('/Project%20Images/Office/photo.png', cache),
    context.inDesignImageDataUrl('blob:https://proposals.example/upload', cache)
  ]);
  assert.deepEqual(values, [dataUrl, dataUrl, dataUrl]);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].options.credentials, 'same-origin');
});

test('export reports missing images and sign-in HTML instead of silently leaving broken links', async () => {
  for (const response of [
    { ok: false, status: 404 },
    { ok: true, blob: async () => new Blob(['Sign in'], { type: 'text/html' }) }
  ]) {
    const context = vm.createContext({ Map, absoluteExportAssetUrl: src => src, fetch: async () => response });
    vm.runInContext(await frontendFunction('inDesignImageDataUrl'), context);
    await assert.rejects(context.inDesignImageDataUrl('/missing.png', new Map()), /could not be included/);
  }
});

test('all visible images, including images nested in text, are placed and packaged with editable text', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-export-images-test-'));
  try {
    const htmlPath = path.join(directory, 'capture.html');
    const html = '<article class="proposal-page">' +
      '<img src="' + dataUrl + '" alt="Cover">' +
      '<img class="natural" src="' + dataUrl + '" alt="Intrinsic logo">' +
      '<p>Signature <span><img src="' + dataUrl + '" alt="Nested signature"></span></p>' +
      '<div class="photo-slot-tools"><img src="' + dataUrl + '" alt="Editor tool"></div>' +
      '<div style="display:none"><img src="' + dataUrl + '" alt="Hidden"></div>' +
      '</article>';
    await fs.writeFile(htmlPath, buildLayoutCaptureHtml(html, 'img{width:80px;height:40px}img.natural{width:auto;height:auto}p{font:16px Arial}', 816, 1056, '', ''));
    const { stdout } = await runProcess(detectChromiumExecutable(), [
      '--headless', '--no-sandbox', '--disable-gpu', '--no-first-run', '--disable-extensions',
      '--user-data-dir=' + path.join(directory, 'profile'), '--virtual-time-budget=3000',
      '--window-size=816,1056', '--dump-dom', pathToFileURL(htmlPath).href
    ], { timeoutMs: 30000 });
    const layout = parseLayoutDump(stdout, 1, 816, 1056);
    assert.deepEqual(layout.items.filter(item => item.type === 'image').map(item => item.alt), ['Cover', 'Intrinsic logo', 'Nested signature']);
    assert.ok(layout.items.some(item => item.type === 'text' && item.text.includes('Signature')));
    const entries = zipEntries(buildEditableInDesignPackageBufferFromLayout([layout], { width: 612, height: 792 }, 'image-check'));
    const prefix = 'image-check-indesign-package/';
    const links = [...entries.keys()].filter(name => name.startsWith(prefix + 'Links/'));
    assert.equal(links.length, 1, 'shared image is packaged once for all placements');
    assert.deepEqual(entries.get(links[0]), png);
    const idml = zipEntries(entries.get(prefix + 'image-check.idml'));
    const spread = idml.get('Spreads/Spread_pbSpread1.xml').toString('utf8');
    assert.equal((spread.match(/<Image Self=/g) || []).length, 3);
    assert.ok(spread.includes('LinkResourceURI="file:Links/proposal-image.png"'));
    assert.deepEqual(idml.get('Links/proposal-image.png'), png);
    assert.ok([...idml.entries()].some(([name, bytes]) => name.startsWith('Stories/') && bytes.toString().includes('Signature')));
  } finally {
    await fs.rm(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
});


test('browser export payload carries shared-library, uploaded, and blob images without external links', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-export-payload-test-'));
  let imageRequests = 0;
  const functions = await Promise.all([
    'buildInDesignExportPayload', 'buildInDesignPageHtml', 'inDesignImageDataUrl',
    'absoluteExportAssetUrl', 'blobToDataUrl'
  ].map(frontendFunction));
  const html = '<!doctype html><html><body><article class="proposal-page">' +
    '<img loading="lazy" src="/Project%20Images/shared.png" alt="Shared">' +
    '<img src="/Project%20Images/shared.png" alt="Repeated">' +
    '<img src="' + dataUrl + '" alt="Upload">' +
    '<img id="blob-image" alt="Blob">' +
    '<div class="photo-slot-tools"><img src="/must-not-export.png"></div></article>' +
    '<script>' + functions.join('\n') +
    'function currentInDesignPagePixelSize(){return {width:816,height:1056};}' +
    'function currentInDesignPageSize(){return {width:612,height:792};}' +
    'function filenameBase(){return "payload-check";}' +
    'function inDesignExportBodyClasses(){return "";}' +
    'function collectDocumentCssText(){return "";}' +
    'document.getElementById("blob-image").src=URL.createObjectURL(new Blob([Uint8Array.from(atob(' + JSON.stringify(png.toString('base64')) + '),function(c){return c.charCodeAt(0);})],{type:"image/png"}));' +
    'buildInDesignExportPayload([document.querySelector(".proposal-page")]).then(function(payload){var pre=document.createElement("pre");pre.id="export-payload";pre.textContent=btoa(unescape(encodeURIComponent(JSON.stringify(payload))));document.body.appendChild(pre);}).catch(function(error){document.body.setAttribute("data-test-error",error.message);});' +
    '</script></body></html>';
  const fixture = http.createServer((request, response) => {
    if (request.url === '/') {
      response.writeHead(200, { 'Content-Type': 'text/html', 'Set-Cookie': 'image-access=yes; SameSite=Lax' });
      response.end(html);
    } else if (request.url === '/Project%20Images/shared.png') {
      // The page's lazy image may request once as well as the export fetch.
      if (request.headers.cookie !== 'image-access=yes') {
        response.writeHead(401); response.end(); return;
      }
      if (request.headers['sec-fetch-dest'] !== 'image') imageRequests += 1;
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(png);
    } else {
      response.writeHead(404); response.end();
    }
  });
  try {
    await new Promise(resolve => fixture.listen(0, '127.0.0.1', resolve));
    const { stdout } = await runProcess(detectChromiumExecutable(), [
      '--headless', '--no-sandbox', '--disable-gpu', '--no-first-run', '--disable-extensions',
      '--user-data-dir=' + path.join(directory, 'profile'), '--virtual-time-budget=3000',
      '--dump-dom', 'http://127.0.0.1:' + fixture.address().port + '/'
    ], { timeoutMs: 30000 });
    const match = stdout.match(/<pre id="export-payload">([^<]+)<\/pre>/);
    assert.ok(match, stdout.slice(-1500));
    const payload = JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
    assert.equal(imageRequests, 1, 'repeated shared image fetched only once by exporter');
    assert.equal((payload.pages[0].html.match(/src="data:image\/png;base64,/g) || []).length, 4);
    assert.ok(!payload.pages[0].html.includes('photo-slot-tools'));
    assert.ok(!payload.pages[0].html.includes('loading="lazy"'));
    assert.ok(!payload.pages[0].html.includes('src="blob:'));
  } finally {
    if (fixture.listening) await new Promise(resolve => fixture.close(resolve));
    await fs.rm(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
});
