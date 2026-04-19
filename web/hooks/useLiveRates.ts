// web/hooks/useLiveRates.ts
// Fetches live data from /api/live-rates with SWR-style caching.
// Falls back gracefully to static values — UI never breaks.

'use client'

import { useState, useEffect, useCallback } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FuelPrices {
  unleaded_93:  number
  unleaded_95:  number
  diesel_50ppm: number
  diesel_500ppm?: number
}

export interface LiveRates {
  timestamp:    string
  source:       string
  exchange: {
    zar_usd:     number
    zar_gbp:     number
    zar_eur:     number
    usd_zar:     number
    repo_rate:   number
    prime_rate:  number
    source:      string
    last_updated: string
  }
  fuel: {
    last_updated:   string
    effective_date?: string
    source?:        string
    inland:  FuelPrices
    coastal: FuelPrices
  }
  jse: {
    top40:        number
    all_share?:   number
    source:       string
    last_updated: string
  }
  oil: {
    brent_usd:    number
    source:       string
    last_updated: string
  }
  grocery_basket: {
    average_basket: number
    last_updated:   string
    items_scraped?: number
    items:          Record<string, number>
  }
}

// ── Static fallback (used while loading or on error) ──────────────────────────

export const STATIC_RATES: LiveRates = {
  timestamp: new Date().toISOString(),
  source:    'loading...',
  exchange: {
    zar_usd:     18.42,
    zar_gbp:     23.15,
    zar_eur:     19.87,
    usd_zar:     18.42,
    repo_rate:    7.50,
    prime_rate:  11.00,
    source:      'loading...',
    last_updated: '...',
  },
  fuel: {
    last_updated: 'April 2026',
    inland:  { unleaded_93: 21.59, unleaded_95: 21.84, diesel_50ppm: 19.78 },
    coastal: { unleaded_93: 20.74, unleaded_95: 21.01, diesel_50ppm: 19.03 },
  },
  jse: {
    top40:  74210,
    source: 'loading...',
    last_updated: '...',
  },
  oil: {
    brent_usd: 82.40,
    source:    'loading...',
    last_updated: '...',
  },
  grocery_basket: {
    average_basket: 680.85,
    last_updated:   'April 2026',
    items: {},
  },
}

// ── Hook ──────────────────────────────────────────────────────────────────────

interface UseLiveRatesReturn {
  rates:      LiveRates
  loading:    boolean
  error:      string | null
  lastFetched: Date | null
  refresh:    () => void
}

const CACHE_KEY = 'chub_live_rates'
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes client-side cache

export function useLiveRates(): UseLiveRatesReturn {
  const [rates, setRates]           = useState<LiveRates>(STATIC_RATES)
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState<string | null>(null)
  const [lastFetched, setLastFetched] = useState<Date | null>(null)

  const fetchRates = useCallback(async (force = false) => {
    // Check client-side cache first
    if (!force) {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, ts } = JSON.parse(cached)
          if (Date.now() - ts < CACHE_TTL) {
            setRates(data)
            setLastFetched(new Date(ts))
            setLoading(false)
            return
          }
        }
      } catch { /* sessionStorage not available (SSR) */ }
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/live-rates', {
        next: { revalidate: 300 },
      } as RequestInit)

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data: LiveRates = await res.json()
      setRates(data)
      const now = Date.now()
      setLastFetched(new Date(now))

      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: now }))
      } catch { /* ignore */ }

    } catch (err: any) {
      setError(err.message)
      // Keep showing fallback/stale data — don't clear rates
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchRates() }, [fetchRates])

  return { rates, loading, error, lastFetched, refresh: () => fetchRates(true) }
}
