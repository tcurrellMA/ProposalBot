const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');

test('image URLs serve the configured folder while blocking private files and traversal', async (t) => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-images-test-'));
  const previous = process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR;
  process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR = directory;
  const { serveStaticFile, listProjectImages } = require('../server');
  const sharp = require('sharp');
  const request = (url) => new Promise((resolve) => {
    let status;
    let headers;
    serveStaticFile({ url }, {
      writeHead(code, values) { status = code; headers = values; },
      end(body) { resolve({ status, headers, body }); }
    });
  });
  try {
    await fs.mkdir(path.join(directory, 'Office'));
    const bytes = Buffer.from('image route fixture');
    await fs.writeFile(path.join(directory, 'Office', 'Sample Image.jpg'), bytes);
    await fs.writeFile(path.join(directory, 'private.json'), '{}');
    const image = await request('/Project%20Images/Office/Sample%20Image.jpg?v=123');
    assert.equal(image.status, 200);
    assert.equal(image.headers['Content-Type'], 'image/jpeg');
    assert.deepEqual(image.body, bytes);
    assert.equal((await request('/Project%20Images/private.json')).status, 403);
    assert.equal((await request('/Project%20Images/..%2Foutside.jpg')).status, 403);
    assert.equal((await request('/Project%20Images/..%5Coutside.jpg')).status, 403);
    assert.equal((await request('/.env')).status, 403);
    assert.equal((await request('/Project%20Images/missing.jpg')).status, 404);

    await t.test('TIFFs are listed and served as oriented browser-compatible JPEGs without changing originals', async () => {
      const source = await sharp({create:{width:40,height:24,channels:3,background:'#c0392b'}})
        .toColourspace('cmyk').withMetadata({orientation:6}).tiff({compression:'lzw'}).toBuffer();
      const sourcePath = path.join(directory, 'Office', 'CMYK Scan.TIFF');
      await fs.writeFile(sourcePath, source);
      await fs.writeFile(path.join(directory, 'Office', 'Another scan.tif'), source);
      const listed = await listProjectImages(directory, '');
      assert.equal(listed.filter(item => item.typology === 'Office').length, 3);
      const entry = listed.find(item => item.name === 'CMYK Scan.TIFF');
      const [first, duplicate] = await Promise.all([request(entry.url), request(entry.url)]);
      assert.equal(first.status, 200);
      assert.equal(first.headers['Content-Type'], 'image/jpeg');
      assert.deepEqual(first.body, duplicate.body);
      const info = await sharp(first.body).metadata();
      assert.deepEqual([info.format, info.width, info.height, info.space], ['jpeg', 24, 40, 'srgb']);
      assert.deepEqual(await fs.readFile(sourcePath), source);
      const replacement = await sharp({create:{width:18,height:12,channels:3,background:'#3498db'}}).tiff().toBuffer();
      await fs.writeFile(sourcePath, replacement);
      const refreshed = await request(entry.url);
      assert.notDeepEqual(refreshed.body, first.body);
      assert.equal((await sharp(refreshed.body).metadata()).width, 18);
      await fs.writeFile(path.join(directory, 'Office', 'Damaged.tif'), 'not a TIFF');
      assert.equal((await request('/Project%20Images/Office/Damaged.tif')).status, 422);
      await fs.writeFile(path.join(directory, 'Office', 'Damaged.tif'), replacement);
      assert.equal((await request('/Project%20Images/Office/Damaged.tif')).status, 200);
    });
    await t.test('TIFF links inside the library work while links outside it remain inaccessible', async () => {
      const target = path.join(directory, 'Office', 'Another scan.tif');
      const inside = path.join(directory, 'Office', 'Linked scan.tiff');
      const outside = path.join(directory, 'Office', 'Outside.tif');
      try {
        await fs.symlink(target, inside);
        await fs.symlink(path.join(__dirname, '..', 'version.json'), outside);
      } catch (error) {
        if (error.code === 'EPERM' || error.code === 'EACCES') { t.skip('Creating file symlinks is unavailable on this Windows host'); return; }
        throw error;
      }
      const listed = await listProjectImages(directory, '');
      assert.ok(listed.some(item => item.name === 'Linked scan.tiff'));
      assert.ok(!listed.some(item => item.name === 'Outside.tif'));
      assert.equal((await request('/Project%20Images/Office/Linked%20scan.tiff')).status, 200);
      assert.equal((await request('/Project%20Images/Office/Outside.tif')).status, 404);
    });

  } finally {
    if (previous === undefined) delete process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR;
    else process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR = previous;
    await fs.rm(directory, { recursive: true, force: true });
  }
});
