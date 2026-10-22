// Download HERI's whole WordPress media library into photos/original-site/<YYYY-MM>/.
// Writes photos/original-site/index.json describing every file. Safe to re-run: existing files are skipped.
import fs from 'node:fs';
import path from 'node:path';

const WP_URL = (process.env.WP_URL ?? 'https://heri-kenya.org').replace(/\/$/, '');
const OUT = 'photos/original-site';
const base = `${WP_URL}/wp-json/wp/v2/media?per_page=100&_fields=id,date,source_url,mime_type,title,media_details`;

const first = await fetch(`${base}&page=1`);
const total = Number(first.headers.get('x-wp-total'));
let all = await first.json();
for (let p = 2; p <= Math.ceil(total / 100); p++) all = all.concat(await (await fetch(`${base}&page=${p}`)).json());

let downloaded = 0;
let skipped = 0;
const failed = [];
const index = [];

for (const m of all) {
  const dir = path.join(OUT, m.date.slice(0, 7));
  fs.mkdirSync(dir, { recursive: true });
  const name = decodeURIComponent(m.source_url.split('/').pop());
  const out = path.join(dir, name);
  index.push({
    id: m.id,
    file: path.relative(OUT, out).split(path.sep).join('/'),
    type: m.mime_type,
    title: m.title.rendered,
    width: m.media_details?.width ?? null,
    height: m.media_details?.height ?? null,
  });
  if (fs.existsSync(out)) {
    skipped++;
    continue;
  }
  try {
    const res = await fetch(m.source_url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    downloaded++;
  } catch (err) {
    failed.push(`${name} (${err.message})`);
  }
}

fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index, null, 1));
console.log(`library: ${total} | downloaded: ${downloaded} | already there: ${skipped} | failed: ${failed.length}`);
if (failed.length) console.log(failed.join('\n'));
