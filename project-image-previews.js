const sharp = require('sharp');

const previews = new Map();
const pending = new Map();
const waiting = [];
const MAX_CACHE_BYTES = 64 * 1024 * 1024;
let cacheBytes = 0;
let active = 0;

// Large source TIFFs stay on the share. Only their browser-ready first page is cached.
sharp.cache({ memory: 16, files: 0, items: 64 });

async function projectImagePreview(filePath, stats) {
  if (stats.size > 256 * 1024 * 1024) throw new Error('TIFF source exceeds the preview size limit.');
  const key = JSON.stringify([filePath, stats.mtimeMs, stats.ctimeMs, stats.size]);
  if (previews.has(key)) {
    const bytes = previews.get(key);
    previews.delete(key);
    previews.set(key, bytes);
    return bytes;
  }
  if (pending.has(key)) return pending.get(key);
  const work = (async () => {
    // Limit concurrent conversions when the photo grid requests many TIFFs.
    if (active >= 2) await new Promise(resolve => waiting.push(resolve));
    else active += 1;
    try {
      // Layered Photoshop TIFFs can exceed libtiff's metadata allocation cap.
      // Bound file size, pixel count and concurrency while allowing those tags.
      const bytes = await sharp(filePath, { page: 0, pages: 1, unlimited: true, limitInputPixels: 100000000 })
        .autoOrient()
        .resize({ width: 4096, height: 4096, fit: 'inside', withoutEnlargement: true })
        .flatten({ background: '#ffffff' })
        .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
        .toBuffer();
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
    } finally {
      if (waiting.length) waiting.shift()();
      else active -= 1;
    }
  })();
  pending.set(key, work);
  try { return await work; }
  finally { pending.delete(key); }
}

module.exports = { projectImagePreview };
