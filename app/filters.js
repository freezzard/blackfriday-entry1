// Search, filters and sorting for the deal list. Pure functions over the
// deal array so the home view stays a thin shell: state comes from the URL
// hash (#/?q=...&cat=...&store=...&min=...&sort=...) so a filtered view can
// be linked, screenshotted and restored exactly.

export const SORTS = [
  { id: 'score', label: 'Best score first' },
  { id: 'pct', label: 'Biggest % off' },
  { id: 'save', label: 'Biggest $ saved' },
  { id: 'price', label: 'Lowest price' },
];

export function applyFilters(deals, state) {
  const q = (state.q || '').trim().toLowerCase();
  const out = deals.filter((d) => {
    if (state.cat && state.cat !== 'All' && d.category !== state.cat) return false;
    if (state.store && state.store !== 'All' && d.store !== state.store) return false;
    if (state.min && d.pct < Number(state.min)) return false;
    if (q) {
      const hay = `${d.name} ${d.brand} ${d.category} ${d.store}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  const by = {
    score: (a, b) => b.score - a.score || b.pct - a.pct,
    pct: (a, b) => b.pct - a.pct || b.score - a.score,
    save: (a, b) => b.save - a.save || b.score - a.score,
    price: (a, b) => a.price - b.price || b.score - a.score,
  };
  return out.sort(by[state.sort] || by.score);
}

export function stateFromHash(hash) {
  const query = hash.includes('?') ? hash.slice(hash.indexOf('?') + 1) : '';
  const p = new URLSearchParams(query);
  return {
    q: p.get('q') || '',
    cat: p.get('cat') || 'All',
    store: p.get('store') || 'All',
    min: p.get('min') || '',
    sort: p.get('sort') || 'score',
  };
}

export function hashForState(state) {
  const p = new URLSearchParams();
  if (state.q) p.set('q', state.q);
  if (state.cat && state.cat !== 'All') p.set('cat', state.cat);
  if (state.store && state.store !== 'All') p.set('store', state.store);
  if (state.min) p.set('min', state.min);
  if (state.sort && state.sort !== 'score') p.set('sort', state.sort);
  const s = p.toString();
  return '#/' + (s ? '?' + s : '');
}
