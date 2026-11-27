// LowCheck entrypoint for black-friday-deal-finder-01 (Node 22, standard
// library only). The finder itself is the static site in app/ beside this
// file — plain HTML, CSS and ES modules, no build step, nothing loaded
// over the network; every deal in it was checked by hand on Black Friday,
// 27 November 2026, and links out to its store.
//
// This program hands the site in: it copies app/ and screenshots/ into
// the output directory and writes dossier.json with the vendored make.fun
// library (vendor/makefun-frontend.ts, left byte for byte as the kit
// shipped it, because the scorer requires the dossier its own copy
// writes). Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail loudly rather than hand in an empty shell: the site must be there.
if (!existsSync(join(here, 'app', 'index.html'))) {
  throw new Error('app/index.html is missing — nothing to hand in');
}

mkdirSync(out, { recursive: true });
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) {
  cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });
}

writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);

console.log(`LowCheck handed in: app/ + screenshots/ copied to ${out}, dossier.json written.`);
