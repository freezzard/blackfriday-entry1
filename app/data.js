// LowCheck deal data. Every deal below was found and checked by hand during
// Black Friday, Friday 27 November 2026 (checked in the evening, WIB), after
// the sales opened. Prices are the ones the named source showed at check
// time; where a roundup and the store's own product page disagreed, the
// store page price is the one printed. Discounts and scores are computed
// from these numbers in score.js, never typed in by hand.

export const CHECKED_LABEL = 'Fri 27 Nov 2026, evening (WIB)';

export const DEALS = [
  {
    id: 'beats-studio-pro-walmart',
    name: 'Beats Studio Pro Wireless Headphones — Matte White',
    brand: 'Beats',
    category: 'Audio',
    store: 'Walmart',
    price: 99.0,
    was: 299.0,
    url: 'https://www.walmart.com/ip/Beats-by-Dr-Dre-Studio-Pro-Wireless-Headphones-Matte-White-Bundle/14280620660',
    checked: CHECKED_LABEL,
    source: 'Walmart product page; DealNews',
    verdict: 'New low',
    evidence:
      'DealNews calls $99 the best price it has seen on these, $40 less than Best Buy or Target. Walmart\u2019s own page shows \u201cYou save $200\u201d on a Black Friday Deal listing sold by Walmart.com.',
    blurb: 'Flagship Beats over-ears with active noise cancelling and up to 40 hours of battery, in the Matte White finish at the $99 price.',
  },
  {
    id: 'shark-powerdetect-bestbuy',
    name: 'Shark PowerDetect Speed Cordless Stick Vacuum (IA1121)',
    brand: 'Shark',
    category: 'Home',
    store: 'Best Buy',
    price: 199.99,
    was: 499.99,
    url: 'https://www.bestbuy.com/product/shark-powerdetect-speed-cordless-stick-vacuum-cleaner-hepa-filtration-60-min-runtime-ia1121-ivory/JXJVXL847Y/sku/6689453?ref=166_625&loc=SOC_MDF_ASC_1692337_120240331555350259_FY27_None_SMAPP_SHKNJA_10005970_OG_PDSOC_MULTI_META_CVR_Socialplus_MDF_April2026_Others&media_type=image',
    checked: CHECKED_LABEL,
    source: 'Best Buy product page (SKU 6689453)',
    verdict: 'Strong deal',
    evidence:
      'Best Buy\u2019s own listing shows \u201cSave $300\u201d against a $499.99 comparable value, flagged as a Black Friday Deal and sold by Best Buy.',
    blurb: 'Cordless stick vacuum with HEPA filtration and up to 60 minutes of runtime; the dirt-sensing PowerDetect line at 60% off.',
  },
  {
    id: 'sony-xm5-bestbuy',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones — Black',
    brand: 'Sony',
    category: 'Audio',
    store: 'Best Buy',
    price: 169.99,
    was: 398.0,
    url: 'https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG/sku/6505727?utm_source=meta&utm_medium=feed&fs=toxl8r&country=US',
    checked: CHECKED_LABEL,
    source: 'Best Buy product page (SKU 6505727)',
    verdict: 'Strong deal',
    evidence:
      'A Best Buy Doorbuster: the store\u2019s page shows save $228.01 off the $398 comparable value, sold by Best Buy itself. One roundup quoted $169 flat; the store page says $169.99, so $169.99 is what we print.',
    blurb: 'Sony\u2019s flagship noise cancelling over-ears with up to 30 hours of battery, at well under half their usual $398.',
  },
  {
    id: 'tcl-65-s4cf-bestbuy',
    name: 'TCL 65\u2033 S4CF Series 4K UHD Fire TV (2026)',
    brand: 'TCL',
    category: 'TVs',
    store: 'Best Buy',
    price: 229.99,
    was: 469.99,
    url: 'https://www.bestbuy.com/site/-/6687112.p?skuId=6687112',
    checked: CHECKED_LABEL,
    source: 'Best Buy product page (SKU 6687112); DealNews',
    verdict: 'Strong deal',
    evidence:
      'DealNews: \u201cthe best deal we\u2019ve seen for this model\u201d after another $40 drop. Best Buy lists it as a Doorbuster, save $240, in stock.',
    blurb: 'A 65-inch 4K Dolby Vision TV with Fire TV built in for $229.99 — the cheapest big-screen in this list per inch.',
    group: 'big-tvs',
  },
  {
    id: 'hp-omnibook-5-bestbuy',
    name: 'HP OmniBook 5 14\u2033 2K OLED Touch Laptop (8GB / 256GB)',
    brand: 'HP',
    category: 'Laptops',
    store: 'Best Buy',
    price: 449.99,
    was: 799.99,
    url: 'https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-ssd-starlit-blue/6690110',
    checked: CHECKED_LABEL,
    source: 'Best Buy product page (SKU 6690110)',
    verdict: 'Strong deal',
    evidence:
      'Doorbuster pricing in Best Buy\u2019s Black Friday sale: $350 off the $799.99 comparable value, sold by Best Buy, in stock at check time.',
    blurb: 'A 14-inch 2K OLED touchscreen laptop (Intel Core 5 Series 3, model 14-mh0013dx) at a Chromebook-class price.',
  },
  {
    id: 'airpods-pro-3-amazon',
    name: 'Apple AirPods Pro 3',
    brand: 'Apple',
    category: 'Audio',
    store: 'Amazon',
    price: 149.0,
    was: 249.0,
    url: 'https://amzn.to/4djdcLU',
    checked: CHECKED_LABEL,
    source: '9to5Toys Black Friday main-event roundup (updated today); CNN Underscored',
    verdict: 'New low',
    evidence:
      '9to5Toys tracks this as the lowest price ever on AirPods Pro 3; CNN Underscored calls it a new low \u2014 $100 off for the first time. Walmart matches it (see the comparison below); Best Buy charges $30 more.',
    blurb: 'Apple\u2019s newest noise-cancelling earbuds at $100 off. The same earbuds are tracked at four stores in the comparison table on this page.',
    group: 'airpods-pro-3',
    alsoAt: [
      { store: 'Walmart', price: 149.0, url: 'https://www.walmart.com/ip/AirPods-Pro-3/17835006350' },
      { store: 'Target', price: 149.99 },
      { store: 'Best Buy', price: 179.99 },
    ],
  },
  {
    id: 'airpods-pro-3-walmart',
    name: 'Apple AirPods Pro 3',
    brand: 'Apple',
    category: 'Audio',
    store: 'Walmart',
    price: 149.0,
    was: 249.0,
    url: 'https://www.walmart.com/ip/AirPods-Pro-3/17835006350',
    checked: CHECKED_LABEL,
    source: 'Walmart product page',
    verdict: 'New low',
    evidence:
      'Walmart\u2019s own page shows \u201cYou save $100\u201d, sold and shipped by Walmart.com — it matches Amazon\u2019s record-low price, so pick by shipping, not price.',
    blurb: 'The same record-low $149 as Amazon, from Walmart\u2019s own listing. Handy if Amazon sells out first.',
    group: 'airpods-pro-3',
    alsoAt: [
      { store: 'Amazon', price: 149.0, url: 'https://amzn.to/4djdcLU' },
      { store: 'Target', price: 149.99 },
      { store: 'Best Buy', price: 179.99 },
    ],
  },
  {
    id: 'hisense-65-h5r1-walmart',
    name: 'Hisense 65\u2033 H5R1 Series 4K UHD Roku TV (2026)',
    brand: 'Hisense',
    category: 'TVs',
    store: 'Walmart',
    price: 228.0,
    was: 398.0,
    url: 'https://www.walmart.com/ip/20206324665',
    checked: CHECKED_LABEL,
    source: 'Walmart product page; DealNews',
    verdict: 'Good price',
    evidence:
      'DealNews re-verified this price less than an hour before our check; Walmart\u2019s page shows save $170, in stock, 4.4 stars from 3,000+ ratings. A solid price, not a tracked record low.',
    blurb: 'A 65-inch 4K Roku TV with Dolby Vision for $228 — two dollars under the TCL across the page, with Roku instead of Fire TV.',
    group: 'big-tvs',
  },
  {
    id: 'switch-2-bundle-walmart',
    name: 'Nintendo Switch 2 + Mario Kart World Bundle',
    brand: 'Nintendo',
    category: 'Gaming',
    store: 'Walmart',
    price: 499.0,
    was: 549.99,
    url: 'https://www.walmart.com/ip/Nintendo-Switch-2-Mario-Kart-World-Bundle/20865751029',
    checked: CHECKED_LABEL,
    source: 'Walmart product page; CNN Underscored',
    verdict: 'Modest cut',
    evidence:
      'Only $50.99 off (9%). The honest value here is the bundle itself — a Mario Kart World download plus 3 months of Switch Online — not the size of the discount. Amazon matches $499; Best Buy and Target charge $500.',
    blurb: 'The Switch 2 console with Mario Kart World and 3 months of Switch Online included. Buy it for the bundle, not for a big percentage off.',
    group: 'switch-2',
    alsoAt: [
      { store: 'Amazon', price: 499.0 },
      { store: 'Best Buy', price: 500.0 },
      { store: 'Target', price: 500.0 },
    ],
  },
];

export const CATEGORIES = ['All', ...new Set(DEALS.map((d) => d.category))];
export const STORES = ['All', ...new Set(DEALS.map((d) => d.store))];
