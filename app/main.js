// LowCheck entry point: a tiny hash router. "#/" (with optional filter
// query) renders the finder home; "#/deal/<id>" renders one deal's check
// record. Filter state lives in the hash, so every view is linkable.

import { DEALS } from './data.js';
import { withStats } from './score.js';
import { stateFromHash } from './filters.js';
import { homeHtml, bindHome } from './render.js';
import { detailHtml, notFoundHtml } from './detail.js';

const deals = DEALS.map(withStats);
const app = document.getElementById('app');

function render() {
  const hash = location.hash || '#/';
  const dealMatch = hash.match(/^#\/deal\/([\w-]+)/);
  if (dealMatch) {
    const deal = deals.find((d) => d.id === dealMatch[1]);
    app.innerHTML = deal ? detailHtml(deal) : notFoundHtml();
    window.scrollTo(0, 0);
    return;
  }
  const state = stateFromHash(hash);
  app.innerHTML = homeHtml(deals, state);
  bindHome(state);
}

window.addEventListener('hashchange', render);
render();
