// Deal maths: discount percentage, dollars saved and the LowCheck score.
// Everything is computed from the price fields in data.js so the numbers on
// screen always add up: pct = (was - price) / was, save = was - price.
//
// Score (0-99), explained on the page so anyone can re-check it:
//   score = discount % (0-67)
//         + verdict bonus (New low 18, Strong deal 12, Good price 6, Modest cut 0)
//         + savings bonus (dollars saved, capped at $250, divided by 25 -> 0-10)

const VERDICT_BONUS = { 'New low': 18, 'Strong deal': 12, 'Good price': 6, 'Modest cut': 0 };

export function pctOff(deal) {
  return Math.round((1 - deal.price / deal.was) * 100);
}

export function saved(deal) {
  return Math.round((deal.was - deal.price) * 100) / 100;
}

export function score(deal) {
  const raw = pctOff(deal) + (VERDICT_BONUS[deal.verdict] ?? 0) + Math.min(saved(deal), 250) / 25;
  return Math.min(99, Math.round(raw));
}

export function money(n) {
  return '$' + n.toFixed(2).replace(/\.00$/, '');
}

export function withStats(deal) {
  return { ...deal, pct: pctOff(deal), save: saved(deal), score: score(deal) };
}
