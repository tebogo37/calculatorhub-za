// web/lib/liveDataConstants.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all financial data used across the app.
// Every component, hook, and API route imports from here.
// The crawler overwrites this via KV. If KV is cold, these values show.
// Update these manually whenever the crawler's fallback drifts.
// ─────────────────────────────────────────────────────────────────────────────

export const LIVE_DATA_VERSION = '2026-10'

// ── Fuel prices (DMRE — updated first Wednesday of each month) ────────────────
export const FUEL_DEFAULTS = {
  last_updated:   '06 October 2026',
  effective_date: '2026-10-07',
  source:         'DMRE via AA South Africa',
  inland: {
    unleaded_95:   21.84,
    unleaded_93:   21.59,
    diesel_50ppm:  19.78,
    diesel_500ppm: 19.70,
  },
  coastal: {
    unleaded_95:   21.01,
    unleaded_93:   20.74,
    diesel_50ppm:  19.03,
    diesel_500ppm: 18.95,
  },
}

// ── Exchange rates (updated daily by crawler) ─────────────────────────────────
// Sources: USD/ZAR ~16.53 (6 Oct 2026); GBP/ZAR ~22.01; EUR/ZAR ~18.67
// SARB repo 7.25% / prime 10.75% effective 25 Sep 2026
export const EXCHANGE_DEFAULTS = {
  zar_usd:      16.53,
  zar_gbp:      22.01,
  zar_eur:      18.67,
  usd_zar:      16.53,
  repo_rate:     7.25,
  prime_rate:   10.75,
  source:       'static fallback · 6 Oct 2026',
  last_updated: '6 October 2026',
}

// ── JSE + Oil (updated daily by crawler) ─────────────────────────────────────
// FTSE/JSE Top 40 close 6 Oct 2026 ≈ 101,162 · All Share ≈ 108,881
// Brent crude ≈ USD 100.25 (6 Oct 2026)
export const JSE_DEFAULTS = {
  top40:        101_162,
  all_share:    108_881,
  source:       'static fallback · 6 Oct 2026',
  last_updated: '6 October 2026',
}

export const OIL_DEFAULTS = {
  brent_usd:    100.25,
  source:       'static fallback · 6 Oct 2026',
  last_updated: '6 October 2026',
}

// ── Grocery basket (updated weekly by crawler) ────────────────────────────────
// Indicative SA retail averages (Oct 2026 planning levels) — not a formal Stats SA series
export const GROCERY_DEFAULTS = {
  average_basket: 742.5,
  last_updated:   'October 2026',
  items_scraped:  0,
  stores_averaged: ['Pick n Pay', 'Checkers', 'Shoprite', 'Woolworths'],
  items: {
    full_cream_milk_2l:   41.5,
    large_eggs_dozen:     42.0,
    white_bread_700g:     20.5,
    sunflower_oil_2l:     68.0,
    white_sugar_2_5kg:    57.5,
    chicken_pieces_1kg:   78.0,
    beef_mince_500g:      72.0,
    maize_meal_5kg:       69.0,
    potatoes_2kg:         36.0,
    onions_1kg:           28.0,
    tomatoes_500g:        18.5,
    rice_tastic_2kg:      46.0,
    butter_500g:          89.0,
    peanut_butter_400g:   46.0,
    frozen_chips_1kg:     38.0,
    toilet_paper_9rolls:  52.0,
  },
}

// ── Full assembled default payload (matches the shape the crawler POSTs) ──────
export const DEFAULT_LIVE_DATA = {
  timestamp:      new Date().toISOString(),
  source:         'static fallback',
  exchange:       EXCHANGE_DEFAULTS,
  fuel:           FUEL_DEFAULTS,
  jse:            JSE_DEFAULTS,
  oil:            OIL_DEFAULTS,
  grocery_basket: GROCERY_DEFAULTS,
}

// ── Type exports ──────────────────────────────────────────────────────────────
export type FuelRegion  = typeof FUEL_DEFAULTS.inland
export type LivePayload = typeof DEFAULT_LIVE_DATA