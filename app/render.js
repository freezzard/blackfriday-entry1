// Home view: masthead stats, the working controls (search, category and
// store chips, minimum discount, sort), the deal cards, and the cross-store
// comparison tables. All state lives in the URL hash via filters.js.

import { CATEGORIES, STORES, DEALS } from './data.js';
import { money } from './score.js';
import { SORTS, applyFilters, hashForState } from './filters.js';

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function verdictClass(verdict) {
  return 'stamp-' + verdict.toLowerCase().replace(/\s+/g, '-');
}

export function cardHtml(d) {
  return `
  <article class="card">
    <div class="card-top">
      <span class="store-chip">${esc(d.store)}</span>
      <span class="cat">${esc(d.category)}</span>
      <span class="score" title="LowCheck score">${d.score}<small>/99</small></span>
    </div>
    <h3><a href="#/deal/${d.id}">${esc(d.name)}</a></h3>
    <p class="blurb">${esc(d.blurb)}</p>
    <div class="price-row">
      <span class="price">${money(d.price)}</span>
      <span class="was">${money(d.was)}</span>
      <span class="pct">-${d.pct}%</span>
    </div>
    <p class="save">You save ${money(d.save)}</p>
    <p class="verdict"><span class="stamp ${verdictClass(d.verdict)}">${esc(d.verdict)}</span></p>
    <p class="evidence">${esc(d.evidence)}</p>
    <p class="meta">Checked ${esc(d.checked)}<br>Source: ${esc(d.source)}</p>
    <div class="card-actions">
      <a class="buy" href="${d.url}" target="_blank" rel="noopener">View at ${esc(d.store)} &rarr;</a>
      <a class="details" href="#/deal/${d.id}">Details</a>
    </div>
  </article>`;
}

function chips(label, key, values, current, state) {
  const items = values
    .map((v) => {
      const next = { ...state, [key]: v };
      const active = v === current ? ' chip-active' : '';
      return `<a class="chip${active}" href="${hashForState(next)}">${esc(v)}</a>`;
    })
    .join('');
  return `<div class="chip-row"><span class="chip-label">${label}</span>${items}</div>`;
}

function compareHtml(deals) {
  const airpods = deals.filter((d) => d.group === 'airpods-pro-3');
  const tvs = deals.filter((d) => d.group === 'big-tvs');
  const rows = [];
  const seen = new Set();
  for (const d of airpods) {
    rows.push({ store: d.store, price: d.price, url: d.url });
    seen.add(d.store);
    for (const a of d.alsoAt || []) if (!seen.has(a.store)) { rows.push(a); seen.add(a.store); }
  }
  rows.sort((a, b) => a.price - b.price);
  const airpodsRows = rows
    .map((r) => `<tr><td>${esc(r.store)}</td><td class="num">${money(r.price)}</td><td>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">View &rarr;</a>` : 'in roundup'}${r.price === rows[0].price ? ' <span class="best">cheapest</span>' : ''}</td></tr>`)
    .join('');
  const tvRows = tvs
    .map((d) => `<tr><td><a href="#/deal/${d.id}">${esc(d.name)}</a></td><td>${esc(d.store)}</td><td class="num">${money(d.price)}</td><td class="num">-${d.pct}%</td></tr>`)
    .join('');
  return `
  <section class="compare">
    <h2>Same product, checked across stores</h2>
    <div class="compare-grid">
      <div class="compare-box">
        <h3>Apple AirPods Pro 3 — 4 stores</h3>
        <table><thead><tr><th>Store</th><th>Price</th><th></th></tr></thead><tbody>${airpodsRows}</tbody></table>
        <p class="compare-note">Amazon and Walmart tie at the $149 record low; Best Buy charges $30.99 more for the same earbuds.</p>
      </div>
      <div class="compare-box">
        <h3>Two 65&Prime; 4K TVs under $230</h3>
        <table><thead><tr><th>TV</th><th>Store</th><th>Price</th><th>Off</th></tr></thead><tbody>${tvRows}</tbody></table>
        <p class="compare-note">Two dollars apart: pick Fire TV (TCL) or Roku (Hisense) — the discount is deep either way.</p>
      </div>
    </div>
  </section>`;
}

export function homeHtml(deals, state) {
  const shown = applyFilters(deals, state);
  const totalSave = deals.reduce((s, d) => s + d.save, 0);
  const avgPct = Math.round(deals.reduce((s, d) => s + d.pct, 0) / deals.length);
  const sortOptions = SORTS.map(
    (s) => `<option value="${s.id}"${state.sort === s.id ? ' selected' : ''}>${s.label}</option>`,
  ).join('');
  const minOptions = ['', '40', '50'].map((v) =>
    v === ''
      ? `<option value=""${!state.min ? ' selected' : ''}>Any discount</option>`
      : `<option value="${v}"${state.min === v ? ' selected' : ''}>${v}% off or more</option>`,
  ).join('');
  return `
  <section class="stats">
    <div><strong>${DEALS.length}</strong><span>deals checked by hand</span></div>
    <div><strong>${STORES.length - 1}</strong><span>stores tracked</span></div>
    <div><strong>${avgPct}%</strong><span>average discount</span></div>
    <div><strong>${money(totalSave)}</strong><span>total tracked savings</span></div>
  </section>
  <section class="controls">
    <label class="search">Search deals
      <input id="q" type="search" placeholder="Try &quot;headphones&quot; or &quot;TV&quot;" value="${esc(state.q)}">
    </label>
    ${chips('Category', 'cat', CATEGORIES, state.cat, state)}
    ${chips('Store', 'store', STORES, state.store, state)}
    <div class="select-row">
      <label>Discount <select id="min">${minOptions}</select></label>
      <label>Sort <select id="sort">${sortOptions}</select></label>
      <span class="count">Showing ${shown.length} of ${DEALS.length} deals</span>
    </div>
  </section>
  <section class="grid">${shown.map(cardHtml).join('') || '<p class="empty">No deals match that search — try clearing a filter.</p>'}</section>
  ${compareHtml(deals)}
  <section class="how">
    <h2>How LowCheck checks a deal</h2>
    <ol>
      <li><strong>Found in the wild.</strong> Deals were gathered from the stores&rsquo; own Black Friday listings and the day&rsquo;s deal roundups on Friday 27 November 2026, after the sales opened.</li>
      <li><strong>Priced from the store page.</strong> Where a roundup and the store&rsquo;s product page disagreed, the store page price is the one printed (it happened with the Sony headphones: $169 in print, $169.99 at Best Buy).</li>
      <li><strong>Verdict with evidence.</strong> Every card carries an honest verdict — New low, Strong deal, Good price or Modest cut — and the evidence behind it, so a routine sale is never dressed up as a record low.</li>
    </ol>
    <p class="formula">Score = discount % + verdict bonus (New low 18, Strong 12, Good 6, Modest 0) + savings bonus (dollars saved, capped at $250, &divide; 25). Prices can move during the sale; the check time on each card says when its price was seen.</p>
  </section>`;
}

export function bindHome(state) {
  const go = (patch) => { location.hash = hashForState({ ...state, ...patch }); };
  const q = document.getElementById('q');
  q.addEventListener('change', () => go({ q: q.value }));
  q.addEventListener('keydown', (e) => { if (e.key === 'Enter') go({ q: q.value }); });
  document.getElementById('min').addEventListener('change', (e) => go({ min: e.target.value }));
  document.getElementById('sort').addEventListener('change', (e) => go({ sort: e.target.value }));
}
