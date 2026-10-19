const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { pathToFileURL } = require('node:url');
const { runProcess, detectChromiumExecutable, layoutExtractionScript, parseLayoutDump, prepareEditableNativeLayout, buildEditableInDesignIdmlBuffer } = require('../server');

async function frontendFunctions(names) {
  const source = await fs.readFile(path.join(__dirname, '..', 'app.js'), 'utf8');
  return names.map(name => {
    const start = source.search(new RegExp('  (?:async )?function ' + name + '\\('));
    assert.ok(start >= 0, name);
    const next = source.slice(start + 1).search(/\n  (?:async )?function /);
    return source.slice(start, next < 0 ? undefined : start + 1 + next);
  }).join('\n');
}

const selectionFunctions = ['normalizePhotoScale', 'photoSelectionForSlot', 'normalizePhotoSelectionSnapshot', 'normalizePhotoSelectionHistory', 'clonePhotoSelectionSnapshot', 'photoHistoryState', 'updatePreviewPhotoSelection', 'stepPreviewPhotoHistory'];

test('photo scale defaults preserve old projects and history restores zoom and position', async () => {
  const context = vm.createContext({ PHOTO_PAN_SCALE: 1.1, proposal: { photoSelections: { photo: { photoId: 'image', x: 30, y: 60 } } } });
  vm.runInContext(await frontendFunctions(selectionFunctions), context);
  assert.equal(context.photoSelectionForSlot('photo').scale, 1.1);
  assert.equal(context.normalizePhotoScale(0.1), 1);
  assert.equal(context.normalizePhotoSelectionSnapshot({ photoId: 'old-photo', x: 20, y: 70, scale: 0.5 }).scale, 1);
  assert.equal(context.normalizePhotoScale(5), 3);
  assert.equal(context.updatePreviewPhotoSelection('photo', { photoId: 'image', x: 30, y: 60, scale: 1.75 }, true), true);
  assert.equal(context.stepPreviewPhotoHistory('photo', 'back'), true);
  assert.equal(context.photoSelectionForSlot('photo').scale, 1.1);
  assert.equal(context.stepPreviewPhotoHistory('photo', 'forward'), true);
  const restored = context.normalizePhotoSelectionSnapshot(JSON.parse(JSON.stringify(context.proposal.photoSelections.photo)));
  assert.equal(restored.scale, 1.75);
  assert.equal(restored.x, 30);
  assert.equal(restored.y, 60);
});

test('frame sizes reject invalid saved values and retain each sheet separately', async () => {
  const context = vm.createContext({});
  vm.runInContext(await frontendFunctions(['normalizePhotoFrameHeight', 'normalizePhotoFrameHeights']), context);
  const heights = context.normalizePhotoFrameHeights({ first: 4.25, second: 1.5, invalid: 'bad', enormous: 80, tiny: 0.1 });
  assert.equal(heights.first, 4.25);
  assert.equal(heights.second, 1.5);
  assert.equal(heights.enormous, 6.5);
  assert.equal(heights.tiny, 0.75);
  assert.equal(heights.invalid, undefined);
});

test('browser controls resize, save, cancel, and export image crops at scaled preview sizes', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'proposal-photo-sizing-test-'));
  try {
    const functions = await frontendFunctions(selectionFunctions.concat([
      'renderEditablePhotoImage', 'setPreviewPhotoScale', 'normalizePhotoFrameHeight', 'normalizePhotoFrameHeights',
      'landscapePhotoPageStyle', 'renderPhotoFrameResizeHandle', 'applyPreviewPhotoFrameHeight', 'savePreviewPhotoFrameHeight',
      'beginPreviewPhotoFrameResize', 'movePreviewPhotoFrameResize', 'finishPreviewPhotoFrameResize', 'endPreviewPhotoFrameResize',
      'cancelPreviewPhotoFrameResize', 'keyPreviewPhotoFrameResize', 'renderLandscapePagePhoto', 'renderStructuredLandscapeBodyPage',
      'beginPreviewPhotoPan', 'movePreviewPhotoPan', 'endPreviewPhotoPan', 'clampPercent', 'twoDigit',
      'renderNorthlineLandscapeModelPage', 'renderStudioLandscapeBodyPage', 'renderStudioSchedulePage', 'renderStudioCompensationThemePage'
    ]));
    const css = await fs.readFile(path.join(__dirname, '..', 'styles.css'), 'utf8');
    const extraction = layoutExtractionScript().replace(/^<script>/, '').replace(/<\/script>$/, '');
    const fixture = await fs.readFile(path.join(__dirname, 'fixtures', 'photo-layout.html'), 'utf8');
    const htmlPath = path.join(directory, 'sizing.html');
    await fs.writeFile(htmlPath, fixture.replace('__CSS__', () => css).replace('__FUNCTIONS__', () => functions).replace('__EXTRACTION__', () => extraction));
    const { stdout } = await runProcess(detectChromiumExecutable(), [
      '--headless', '--no-sandbox', '--disable-gpu', '--no-first-run', '--disable-extensions',
      '--user-data-dir=' + path.join(directory, 'profile'), '--virtual-time-budget=3000', '--window-size=1100,1400',
      '--dump-dom', pathToFileURL(htmlPath).href
    ], { timeoutMs: 30000 });
    assert.ok(stdout.includes('<pre id="test-result">passed</pre>'), stdout.match(/data-test-error="[^"]*/)?.[0] || stdout.slice(-1200));
    const layout = parseLayoutDump(stdout, 1, 816, 1056);
    const picture = layout.items.find(item => item.type === 'image');
    assert.ok(picture);
    assert.ok(Math.abs(picture.bounds.height - 4.02 * 96) < 1, JSON.stringify(picture));
    assert.ok(picture.graphicBounds.width > picture.bounds.width * 1.7);
    assert.ok(picture.graphicBounds.x < 0);
    const links = path.join(directory, 'Links');await fs.mkdir(links);
    const prepared = prepareEditableNativeLayout([layout], 612, 792, links);
    const image = prepared.pages[0].items.find(item => item.type === 'image');
    assert.ok(image.imageBounds.width > image.bounds.width * 1.7);
    const idml = buildEditableInDesignIdmlBuffer(prepared).toString('utf8');
    assert.ok(idml.includes('FittingOnEmptyFrame="None"'));
    assert.ok(idml.includes('Right="' + image.imageBounds.width + '"'));
  } finally {
    await fs.rm(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
});
