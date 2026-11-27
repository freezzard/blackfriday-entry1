// Deal detail view (#/deal/<id>): the full check record for one deal —
// price block, verdict with its evidence, the check time and source, and
// the same product's prices at the other stores that were checked.

import { money } from './score.js';
import { verdictClass } from './render.js';

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function detailHtml(d) {
  const also = (d.alsoAt || [])
    .map(
      (a) => `<tr${a.price < d.price ? ' class="cheaper"' : ''}><td>${esc(a.store)}</td><td class="num">${money(a.price)}</td><td>${a.url ? `<a href="${a.url}" target="_blank" rel="noopener">View &rarr;</a>` : 'price seen in roundup'}</td><td>${a.price < d.price ? 'cheaper than here' : a.price === d.price ? 'same price' : 'costs more'}</td></tr>`,
    )
    .join('');
  return `
  <p class="back"><a href="#/">&larr; All deals</a></p>
  <article class="detail">
    <div class="card-top">
      <span class="store-chip">${esc(d.store)}</span>
      <span class="cat">${esc(d.category)}</span>
      <span class="score" title="LowCheck score">${d.score}<small>/99</small></span>
    </div>
    <h2>${esc(d.name)}</h2>
    <p class="blurb">${esc(d.blurb)}</p>
    <div class="price-row big">
      <span class="price">${money(d.price)}</span>
      <span class="was">${money(d.was)}</span>
      <span class="pct">-${d.pct}%</span>
    </div>
    <p class="save">You save ${money(d.save)} off the usual price of ${money(d.was)}.</p>
    <p class="verdict"><span class="stamp ${verdictClass(d.verdict)}">${esc(d.verdict)}</span></p>
    <h3>Why this verdict</h3>
    <p class="evidence">${esc(d.evidence)}</p>
    <h3>The check</h3>
    <p class="meta">Checked ${esc(d.checked)}<br>Source: ${esc(d.source)}<br>Store link: <a href="${d.url}" target="_blank" rel="noopener">${esc(d.store)} product page &rarr;</a></p>
    ${also ? `<h3>Same product at other stores</h3><table class="also"><thead><tr><th>Store</th><th>Price</th><th></th><th></th></tr></thead><tbody>${also}</tbody></table>` : ''}
    <p class="detail-actions"><a class="buy" href="${d.url}" target="_blank" rel="noopener">View at ${esc(d.store)} &rarr;</a></p>
  </article>`;
}

export function notFoundHtml() {
  return `<p class="back"><a href="#/">&larr; All deals</a></p><p class="empty">That deal is not in the checked list.</p>`;
}
