// web/lib/liveDataConstants.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all financial data used across the app.
// Every component, hook, and API route imports from here.
// The crawler overwrites this via KV. If KV is cold, these values show.
// Update these manually whenever the crawler's fallback drifts.
// ─────────────────────────────────────────────────────────────────────────────

export const LIVE_DATA_VERSION = '2026-04'

// ── Fuel prices (DMRE — updated first Wednesday of each month) ────────────────
export const FUEL_DEFAULTS = {
  last_updated:   '02 April 2026',
  effective_date: '2026-04-02',
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
export const EXCHANGE_DEFAULTS = {
  zar_usd:     18.42,   // April 2026
  zar_gbp:     23.61,
  zar_eur:     20.14,
  usd_zar:     18.42,
  repo_rate:    7.50,   // SARB — March 2025 cut
  prime_rate:  11.00,   // repo + 3.5
  source:      'static fallback',
  last_updated: 'loading...',
}

// ── JSE + Oil (updated daily by crawler) ─────────────────────────────────────
export const JSE_DEFAULTS = {
  top40:        74_210,
  all_share:    82_540,
  source:       'static fallback',
  last_updated: 'loading...',
}

export const OIL_DEFAULTS = {
  brent_usd:    82.40,
  source:       'static fallback',
  last_updated: 'loading...',
}

// ── Grocery basket (updated weekly by crawler) ────────────────────────────────
export const GROCERY_DEFAULTS = {
  average_basket: 680.85,
  last_updated:   'April 2026',
  items_scraped:  0,
  stores_averaged: ['Pick n Pay', 'Checkers', 'Shoprite', 'Woolworths'],
  items: {
    full_cream_milk_2l:   32.99,
    large_eggs_dozen:     41.99,
    white_bread_700g:     19.99,
    sunflower_oil_2l:     64.99,
    white_sugar_2_5kg:    39.99,
    chicken_pieces_1kg:   64.99,
    beef_mince_500g:      59.99,
    maize_meal_5kg:       74.99,
    potatoes_2kg:         29.99,
    onions_1kg:           15.99,
    tomatoes_500g:        18.99,
    rice_tastic_2kg:      54.99,
    butter_500g:          76.99,
    peanut_butter_400g:   44.99,
    frozen_chips_1kg:     34.99,
    toilet_paper_9rolls:  49.99,
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