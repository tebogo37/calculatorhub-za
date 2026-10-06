// web/lib/liveDataConstants.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all financial data used across the app.
// Every component, hook, and API route imports from here.
// The crawler overwrites this via KV. If KV is cold, these values show.
// Update these manually whenever the crawler's fallback drifts.
// Last manual refresh: 6–7 October 2026
// ─────────────────────────────────────────────────────────────────────────────

export const LIVE_DATA_VERSION = '2026-10'

// ── Fuel prices (DMPR / CEF — effective 07 October 2026) ──────────────────────
// Petrol = regulated retail · Diesel = gazetted wholesale (pump may vary)
export const FUEL_DEFAULTS = {
  last_updated:   '07 October 2026',
  effective_date: '2026-10-07',
  source:         'DMPR / CEF official adjustment',
  inland: {
    unleaded_95:   30.25,
    unleaded_93:   29.88,
    diesel_50ppm:  33.29,
    diesel_500ppm: 31.95,
  },
  coastal: {
    unleaded_95:   29.38,
    unleaded_93:   29.09,
    diesel_50ppm:  32.03,
    diesel_500ppm: 31.08,
  },
}

// ── Exchange rates (snapshot ~6 October 2026) ─────────────────────────────────
// USD/ZAR ~16.53 · GBP/ZAR ~22.01 · EUR/ZAR ~18.67
// SARB repo 7.25% / prime 10.75% (effective 25 September 2026)
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

// ── JSE + Oil (snapshot ~6 October 2026) ─────────────────────────────────────
// FTSE/JSE Top 40 ≈ 101,162 · All Share ≈ 108,881 · Brent ≈ USD 100.25
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

// ── Grocery basket (indicative national retail averages — October 2026) ───────
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