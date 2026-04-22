// web/app/api/live-rates/route.ts
// ─────────────────────────────────────────────────────────────────────────────
// Public GET — frontend fetches this for all live data.
// Reads from Vercel KV (written by the crawler via POST /api/update-live-data).
// Falls back to DEFAULT_LIVE_DATA from liveDataConstants.ts if KV is cold.
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { DEFAULT_LIVE_DATA } from '../../../lib/liveDataConstants'

const KV_KEY = 'live-rates-v1'

async function getKV() {
  try {
    const { kv } = await import('@vercel/kv')
    return kv
  } catch {
    return null
  }
}

export async function GET() {
  const kv = await getKV()

  if (kv) {
    try {
      const raw = await kv.get<string>(KV_KEY)
      if (raw) {
        const data = typeof raw === 'string' ? JSON.parse(raw) : raw
        return NextResponse.json(data, {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
            'X-Data-Source': 'vercel-kv',
          },
        })
      }
    } catch (err) {
      console.error('[live-rates] KV read error:', err)
    }
  }

  // KV cold or unavailable — return typed defaults
  console.warn('[live-rates] Serving static fallback')
  return NextResponse.json(DEFAULT_LIVE_DATA, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      'X-Data-Source': 'static-fallback',
    },
  })
}