// Post-build SEO checks over dist/. Run: npm run build && npm run check:seo
// Fails (exit 1) on hard errors, including any {{FILL}} / TODO placeholder
// left visible on a page.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const pages = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) pages.push(p);
  }
})(DIST);

const errors = [];
const fills = new Set();
const text = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').trim();
const len = (s) => [...s].length;

for (const file of pages) {
  const url = '/' + relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  const err = (m) => errors.push(`${url}: ${m}`);
  const noindex = /<meta name="robots" content="noindex/.test(html);

  const title = text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  if (!title) err('missing <title>');
  else if (len(title) > 60) err(`title ${len(title)} chars > 60: "${title}"`);

  const desc = text(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!desc) err('missing meta description');
  else if (len(desc) > 155) err(`description ${len(desc)} chars > 155`);

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) err(`${h1s.length} <h1> elements`);

  if (!noindex && !/<link rel="canonical" href="https:\/\//.test(html)) err('missing canonical');

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      if (JSON.stringify(data).includes('{{FILL')) err('JSON-LD contains a {{FILL}} placeholder');
    } catch {
      err('invalid JSON-LD');
    }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    if (!/\balt(=|\s|>)/.test(tag)) err(`img without alt: ${tag.slice(0, 80)}`);
    if (!/\bwidth=/.test(tag) || !/\bheight=/.test(tag)) err(`img without width/height: ${tag.slice(0, 80)}`);
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1];
    if (href.startsWith('/_astro/')) continue;
    const target = join(DIST, href);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!ok) err(`broken internal link ${href}`);
  }

  const body = html.replace(/<script[\s\S]*?<\/script>/g, '');
  for (const m of body.matchAll(/\{\{FILL:[^}]*\}\}|\bTODO\b[^<]*/g)) fills.add(`${url}  ${m[0]}`);
}

console.log(`Checked ${pages.length} pages.`);
for (const f of fills) errors.push(`visible placeholder: ${f}`);
if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log('\nNo SEO errors.');
