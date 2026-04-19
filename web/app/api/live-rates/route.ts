// app/api/live-rates/route.ts
// Public GET endpoint — frontend fetches this to get the latest cached data.

import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

const CACHE_FILE = join('/tmp', 'chub-cache', 'live-rates.json')

// ── Fallback data (used when cache is cold) ─────────────────────────────────
const FALLBACK = {
  timestamp: new Date().toISOString(),
  source: 'static fallback',
  exchange: {
    zar_usd:    16.38,
    zar_gbp:    23.15,
    zar_eur:    19.87,
    usd_zar:    16.38,
    repo_rate:   6.75,
    prime_rate: 10.25,
    source:     'fallback',
    last_updated: 'checking...',
  },
  fuel: {
    last_updated: 'April 2026',
    inland:  { unleaded_93: 23.25, unleaded_95: 23.36, diesel_50ppm: 26.11 },
    coastal: { unleaded_93: 22.46, unleaded_95: 22.49, diesel_50ppm: 25.31 },
  },
  jse: {
    top40:  113485.58,
    source: 'fallback',
    last_updated: 'checking...',
  },
  oil: {
    brent_usd: 82.40,
    source:    'fallback',
    last_updated: 'checking...',
  },
  grocery_basket: {
    average_basket: 692.89,
    last_updated:   'April 2026',
    items: {
      full_cream_milk_2l:   35.49,
      large_eggs_dozen:     29.99,
      white_bread_700g:     20.49,
      sunflower_oil_2l:     81.99,
      white_sugar_2_5kg:    43.99,
      chicken_braai_pack_2kg: 92.99,
      beef_mince_500g:      66.99,
      maize_meal_5kg:       76.49,
      potatoes_7kg:         71.99,
      onions_1kg:           19.49,
      tomatoes_500g:        15.49,
      rice_2kg:             47.99,
      butter_500g:          49.99,
      peanut_butter_400g:   33.99,
      frozen_chips_1kg:     41.49,
      toilet_paper_9_rolls: 46.99,
    },
  },
}

export async function GET() {
  // Try reading the cached file written by the crawler
  if (existsSync(CACHE_FILE)) {
    try {
      const raw = await readFile(CACHE_FILE, 'utf8')
      const data = JSON.parse(raw)
      return NextResponse.json(data, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      })
    } catch (err) {
      console.error('Cache read failed:', err)
    }
  }

  // Return fallback
  return NextResponse.json(FALLBACK, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      'X-Data-Source': 'fallback',
    },
  })
}