const sharp = require('sharp');

const previews = new Map();
const pending = new Map();
const waiting = [];
const MAX_CACHE_BYTES = 64 * 1024 * 1024;
const MAX_IMAGE_SOURCE_BYTES = 1024 * 1024 * 1024;
let cacheBytes = 0;
let active = 0;

// Large source TIFFs stay on the share. Only their browser-ready first page is cached.
sharp.cache({ memory: 16, files: 0, items: 64 });

async function projectImagePreview(filePath, stats) {
  if (stats.size > MAX_IMAGE_SOURCE_BYTES) throw new Error('TIFF source exceeds the 1 GB preview size limit.');
  const key = JSON.stringify([filePath, stats.mtimeMs, stats.ctimeMs, stats.size]);
  if (previews.has(key)) {
    const bytes = previews.get(key);
    previews.delete(key);
    previews.set(key, bytes);
    return bytes;
  }
  if (pending.has(key)) return pending.get(key);
  const work = (async () => {
    const bytes = await convertImage(filePath);
    if (bytes.length <= MAX_CACHE_BYTES) {
      while (cacheBytes + bytes.length > MAX_CACHE_BYTES) {
        const oldest = previews.keys().next().value;
        cacheBytes -= previews.get(oldest).length;
        previews.delete(oldest);
      }
      previews.set(key, bytes);
      cacheBytes += bytes.length;
    }
    return bytes;
  })();
  pending.set(key, work);
  try { return await work; }
  finally { pending.delete(key); }
}

// Keep uploads compact enough to display and save; preserve alpha when present.
async function convertImage(input, preserveTransparency = false) {
  if (active >= 2) await new Promise(resolve => waiting.push(resolve));
  else active += 1;
  try {
    // Allow Photoshop TIFF tags while bounding source pixels and concurrent work.
    let image = sharp(input, { page: 0, pages: 1, unlimited: true, limitInputPixels: 100000000 })
      .autoOrient()
      .toColourspace('srgb');
    const alpha = preserveTransparency && (await image.metadata()).hasAlpha;
    const maxSize = preserveTransparency ? 2400 : 4096;
    image = image.resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true });
    image = alpha ? image.png({ compressionLevel: 9 }) : image.flatten({ background: '#ffffff' }).jpeg({ quality: preserveTransparency ? 90 : 92, chromaSubsampling: '4:4:4' });
    return await image.toBuffer();
  } finally {
    if (waiting.length) waiting.shift()();
    else active -= 1;
  }
}

module.exports = { projectImagePreview, convertImage, MAX_IMAGE_SOURCE_BYTES };
