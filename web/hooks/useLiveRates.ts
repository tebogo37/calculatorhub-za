// web/hooks/useLiveRates.ts
// ─────────────────────────────────────────────────────────────────────────────
// THE single hook every component uses for live data.
// - Fetches /api/live-rates once on mount
// - 5-min sessionStorage cache so switching tabs doesn't re-fetch
// - Returns typed data + loading/error state
// - Never returns undefined — always has values from DEFAULT_LIVE_DATA
// ─────────────────────────────────────────────────────────────────────────────

'use client'

import { useState, useEffect, useCallback } from 'react'
import { DEFAULT_LIVE_DATA, type LivePayload } from '../lib/liveDataConstants'

export type { LivePayload }

interface UseLiveRatesReturn {
  rates:       LivePayload
  loading:     boolean
  error:       string | null
  isLive:      boolean           // true when data came from KV (not fallback)
  lastFetched: Date | null
  refresh:     () => void
}

const CACHE_KEY = 'chub_live_v1'
const CACHE_TTL = 5 * 60 * 1000  // 5 min

export function useLiveRates(): UseLiveRatesReturn {
  const [rates,       setRates]       = useState<LivePayload>(DEFAULT_LIVE_DATA)
  const [loading,     setLoading]     = useState(true)
  const [error,       setError]       = useState<string | null>(null)
  const [isLive,      setIsLive]      = useState(false)
  const [lastFetched, setLastFetched] = useState<Date | null>(null)

  const fetchRates = useCallback(async (force = false) => {
    // ── Check sessionStorage cache ─────────────────────────────────────────
    if (!force) {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, ts } = JSON.parse(cached)
          if (Date.now() - ts < CACHE_TTL) {
            setRates(data)
            setIsLive(data.source !== 'static fallback')
            setLastFetched(new Date(ts))
            setLoading(false)
            return
          }
        }
      } catch { /* SSR or private browsing */ }
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/live-rates', { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data: LivePayload = await res.json()

      // Merge with defaults so any missing fields are always populated
      const merged: LivePayload = {
        ...DEFAULT_LIVE_DATA,
        ...data,
        exchange:       { ...DEFAULT_LIVE_DATA.exchange,       ...data.exchange },
        fuel:           { ...DEFAULT_LIVE_DATA.fuel,           ...data.fuel,
          inland:  { ...DEFAULT_LIVE_DATA.fuel.inland,  ...data.fuel?.inland },
          coastal: { ...DEFAULT_LIVE_DATA.fuel.coastal, ...data.fuel?.coastal },
        },
        jse:            { ...DEFAULT_LIVE_DATA.jse,            ...data.jse },
        oil:            { ...DEFAULT_LIVE_DATA.oil,            ...data.oil },
        grocery_basket: { ...DEFAULT_LIVE_DATA.grocery_basket, ...data.grocery_basket,
          items: { ...DEFAULT_LIVE_DATA.grocery_basket.items, ...data.grocery_basket?.items },
        },
      }

      setRates(merged)
      setIsLive(merged.source !== 'static fallback')
      const now = Date.now()
      setLastFetched(new Date(now))

      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: merged, ts: now }))
      } catch { /* ignore */ }

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error'
      setError(msg)
      // Keep showing current rates — don't blank the UI
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchRates() }, [fetchRates])

  return { rates, loading, error, isLive, lastFetched, refresh: () => fetchRates(true) }
}