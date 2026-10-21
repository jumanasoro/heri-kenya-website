// Builds public/og-image.jpg: the 1200x630 preview shown when a page is shared on
// WhatsApp, Facebook, LinkedIn or X. Run with: node scripts/make-og-image.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const W = 1200;
const H = 630;
const panel = 560; // white panel on the left; photo on the right

const photo = await sharp(`${root}src/assets/images/home/community-forum.jpg`)
  .resize(W - panel, H, { fit: 'cover', position: 'centre' })
  .toBuffer();

const logo = await sharp(`${root}src/assets/images/heri-logo.png`).resize({ width: 260 }).toBuffer();

const text = Buffer.from(`
<svg width="${panel}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff"/>
  <rect x="0" y="${H - 14}" width="100%" height="14" fill="#379237"/>
  <text x="56" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="50" font-weight="800" fill="#0f172a">Healthier</text>
  <text x="56" y="392" font-family="Segoe UI, Arial, sans-serif" font-size="50" font-weight="800" fill="#379237">Environments and</text>
  <text x="56" y="454" font-family="Segoe UI, Arial, sans-serif" font-size="50" font-weight="800" fill="#379237">Communities</text>
  <text x="56" y="530" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#475569">Diani, Kenya · heri-kenya.org</text>
</svg>`);

await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } })
  .composite([
    { input: text, left: 0, top: 0 },
    { input: logo, left: 56, top: 56 },
    { input: photo, left: panel, top: 0 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(`${root}public/og-image.jpg`);

console.log('Wrote public/og-image.jpg');

// Plain logo for search engines (organisation details in src/layouts/Base.astro).
await sharp(`${root}src/assets/images/heri-logo.png`)
  .resize({ width: 512 })
  .flatten({ background: '#ffffff' })
  .png({ compressionLevel: 9 })
  .toFile(`${root}public/logo.png`);

console.log('Wrote public/logo.png');
