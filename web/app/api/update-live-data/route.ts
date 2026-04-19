    // web/app/api/update-live-data/route.ts
// Receives POST from the AWS crawler and writes to a local JSON cache.
// Vercel Serverless — data is written to /tmp

import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'



const SECRET   = process.env.LIVE_DATA_SECRET ?? 'chub2026za!live12345strongsecret'
const CACHE_DIR = join('/tmp', 'chub-cache')
const CACHE_FILE = join(CACHE_DIR, 'live-rates.json')

export async function POST(req: NextRequest) {
  // ── Auth ──────────────────────────────────────────────────────────────────
  const incoming = req.headers.get('x-calculatorhub-secret')
  if (incoming !== SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ── Parse body ────────────────────────────────────────────────────────────
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // ── Basic validation ──────────────────────────────────────────────────────
  if (!body.timestamp) {
    return NextResponse.json({ error: 'Missing timestamp' }, { status: 400 })
  }

  // ── Write to /tmp cache ───────────────────────────────────────────────────
  try {
    if (!existsSync(CACHE_DIR)) {
      await mkdir(CACHE_DIR, { recursive: true })
    }
    await writeFile(CACHE_FILE, JSON.stringify(body, null, 2), 'utf8')
    console.log(`[live-data] ✅ Saved update at ${body.timestamp}`)
  } catch (err) {
    console.error('Cache write failed:', err)
  }

  return NextResponse.json({
    ok: true,
    timestamp: body.timestamp,
    received: {
      hasExchange: !!body.exchange,
      hasFuel:     !!body.fuel,
      hasJSE:      !!body.jse,
      hasOil:      !!body.oil,
      hasGroceries: !!body.grocery_basket,
    },
  })
}

// Block GET requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}