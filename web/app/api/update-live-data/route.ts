    // web/app/api/update-live-data/route.ts
// Receives POST from the AWS crawler and writes to a local JSON cache.
// Vercel Serverless — data is written to /tmp const SECRET   = process.env.LIVE_DATA_SECRET ?? 'chub2026za!live12345strongsecret'

// web/app/api/update-live-data/route.ts
// ─────────────────────────────────────────────────────────────────────────────
// Receives POST from the AWS crawler. Stores in Vercel KV (persistent across
// all serverless instances — fixes the /tmp problem).
//
// Setup: vercel env add KV_URL + KV_REST_API_TOKEN via `vercel env pull`
// or add them manually in Vercel Dashboard → Storage → KV → your store.
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'

const SECRET   = process.env.LIVE_DATA_SECRET ?? 'chub2026za!live12345strongsecret'
const KV_KEY   = 'live-rates-v1'

// Lazy-import KV so the build doesn't break if KV env vars are missing
async function getKV() {
  try {
    const { kv } = await import('@vercel/kv')
    return kv
  } catch {
    return null
  }
}

export async function POST(req: NextRequest) {
  // ── Auth ──────────────────────────────────────────────────────────────────
  const incoming = req.headers.get('x-calculatorhub-secret')
  if (incoming !== SECRET) {
    console.warn('[update-live-data] Unauthorized attempt')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ── Parse ─────────────────────────────────────────────────────────────────
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.timestamp) {
    return NextResponse.json({ error: 'Missing timestamp' }, { status: 400 })
  }

  // ── Store in Vercel KV ────────────────────────────────────────────────────
  const kv = await getKV()
  if (kv) {
    try {
      // TTL: 48 hours — if crawler dies for a weekend, data stays fresh
      await kv.set(KV_KEY, JSON.stringify(body), { ex: 60 * 60 * 48 })
      console.log(`[update-live-data] ✅ KV stored at ${body.timestamp}`)
    } catch (err) {
      // KV write failed — log but don't return error to crawler
      console.error('[update-live-data] KV write error:', err)
    }
  } else {
    console.warn('[update-live-data] ⚠️ KV not available — data not persisted')
  }

  return NextResponse.json({
    ok: true,
    timestamp: body.timestamp,
    stored: !!kv,
    received: {
      hasExchange:  !!body.exchange,
      hasFuel:      !!body.fuel,
      hasJSE:       !!body.jse,
      hasOil:       !!body.oil,
      hasGroceries: !!body.grocery_basket,
    },
  })
}

export async function GET() {
  return NextResponse.json({ error: 'POST only' }, { status: 405 })
}