// Compresses the showroom reel for the web.
// Usage: npm run media:video -- [input] [--start=0] [--duration=90]
// Reads the first video in media-source/ when no input is given and writes
// public/video/<name>.mp4 and a .webp poster (VP9 WebM came out larger,
// so only H.264 is produced). Audio is removed
// because browsers only autoplay muted video.
import { spawnSync } from 'node:child_process';
import { mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import ffmpeg from 'ffmpeg-static';

const NAME = 'cee-bee-enterprises-showroom-hazaribag';
const OUT = 'public/video';

const args = process.argv.slice(2);
const flag = (k) => args.find((a) => a.startsWith(`--${k}=`))?.split('=')[1];
const input =
  args.find((a) => !a.startsWith('--')) ??
  join('media-source', readdirSync('media-source').find((f) => /\.(mp4|mov|m4v|webm)$/i.test(f)));
const trim = [
  ...(flag('start') ? ['-ss', flag('start')] : []),
  ...(flag('duration') ? ['-t', flag('duration')] : []),
];
// Portrait reel: cap width at 405px (720px tall), never upscale.
const scale = "scale='min(405,iw)':-2";

mkdirSync(OUT, { recursive: true });

function run(label, ffArgs) {
  console.log(`\n▶ ${label}`);
  const r = spawnSync(ffmpeg, ['-hide_banner', '-y', ...trim, '-i', input, ...ffArgs], { stdio: 'inherit' });
  if (r.status !== 0) throw new Error(`${label} failed`);
}

run('MP4 (H.264)', [
  '-an', '-vf', scale, '-c:v', 'libx264', '-preset', 'slow', '-crf', '29',
  '-maxrate', '500k', '-bufsize', '1000k', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
  join(OUT, `${NAME}.mp4`),
]);
run('Poster', ['-ss', '1.5', '-frames:v', '1', '-vf', scale, '-c:v', 'libwebp', '-quality', '72', join(OUT, `${NAME}-poster.webp`)]);

for (const f of readdirSync(OUT)) {
  console.log(`${f}: ${(statSync(join(OUT, f)).size / 1024 / 1024).toFixed(2)} MB`);
}
