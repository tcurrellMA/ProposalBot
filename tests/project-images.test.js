const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');

test('image URLs serve the configured folder while blocking private files and traversal', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-images-test-'));
  const previous = process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR;
  process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR = directory;
  const { serveStaticFile } = require('../server');
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
  } finally {
    if (previous === undefined) delete process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR;
    else process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR = previous;
    await fs.rm(directory, { recursive: true, force: true });
  }
});
