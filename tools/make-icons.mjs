// Builds favicon.ico, app icons and the default social-share image
// (public/og-default.jpg, 1200×630) from the CB logo. Run once after
// changing the logo or business details: npm run media:icons
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const LOGO = 'src/assets/brand/cb-decor-logo.png';
const CREAM = '#f7f1e7';

// Logo cropped tight to the black circle.
const circle = await sharp(LOGO).trim({ background: '#ffffff', threshold: 30 }).png().toBuffer();

const square = (size, pad, bg) =>
  sharp(circle)
    .resize(Math.round(size * (1 - pad * 2)))
    .toBuffer()
    .then((img) =>
      sharp({ create: { width: size, height: size, channels: 4, background: bg } })
        .composite([{ input: img, gravity: 'center' }])
        .png()
        .toBuffer(),
    );

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
writeFileSync('public/icon-192.png', await square(192, 0.02, transparent));
writeFileSync('public/icon-512.png', await square(512, 0.02, transparent));
writeFileSync('public/apple-touch-icon.png', await square(180, 0.1, CREAM));

// favicon.ico holding 32×32 and 48×48 PNGs (ICO allows PNG payloads).
const pngs = [await square(32, 0, transparent), await square(48, 0, transparent)];
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = 6 + 16 * pngs.length;
const dir = pngs.map((png, i) => {
  const size = [32, 48][i];
  const e = Buffer.alloc(16);
  e.writeUInt8(size, 0);
  e.writeUInt8(size, 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(png.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += png.length;
  return e;
});
writeFileSync('public/favicon.ico', Buffer.concat([header, ...dir, ...pngs]));

// Social share image.
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3d2a1c"/><stop offset="1" stop-color="#1f150d"/>
    </linearGradient>
    <pattern id="grain" width="46" height="630" patternUnits="userSpaceOnUse" patternTransform="rotate(4)">
      <rect width="2" height="630" x="20" fill="#000" opacity="0.14"/>
      <rect width="1" height="630" x="36" fill="#ffe6be" opacity="0.06"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grain)"/>
  <rect x="0" y="0" width="1200" height="10" fill="#c9231a"/>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#fff8ec">
    <text x="420" y="230" font-size="64" font-weight="700">Cee Bee Enterprises</text>
    <text x="420" y="292" font-size="40" fill="#d6a24e">&amp; CB Decor</text>
  </g>
  <g font-family="Segoe UI, Arial, sans-serif" fill="#eadcc6">
    <text x="420" y="370" font-size="34" font-weight="600">Hardware &amp; Plywood Shop in Hazaribagh</text>
    <text x="420" y="420" font-size="28">Bajrangi Chowk · Since 2001 · +91 94313 94626</text>
    <text x="420" y="470" font-size="24" fill="#bfae95">Plywood · Laminates · Locks · Kitchen hardware · Interiors · King Koil</text>
  </g>
</svg>`;
const ogLogo = await sharp(circle).resize(300).toBuffer();
await sharp(Buffer.from(og))
  .composite([{ input: ogLogo, left: 70, top: 165 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og-default.jpg');

console.log('Icons and og-default.jpg written to public/');
