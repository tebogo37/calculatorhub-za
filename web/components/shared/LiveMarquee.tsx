// web/components/shared/LiveMarquee.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Drop-in replacement for the hardcoded metrics ticker in Layout.tsx.
// Uses useLiveRates → /api/live-rates → Vercel KV.
// Shows a green dot when data is live, grey when fallback.
// ─────────────────────────────────────────────────────────────────────────────

'use client'

import React from 'react'
import { useLiveRates } from '../../hooks/useLiveRates'

export const LiveMarquee: React.FC = () => {
  const { rates, loading, isLive } = useLiveRates()

  const { exchange, fuel, jse, oil } = rates

  const items = [
    {
      label:    'ZAR / USD',
      value:    `R${exchange.zar_usd.toFixed(2)}`,
      change:   isLive ? 'live' : 'est.',
      positive: true,
    },
    {
      label:    'ZAR / GBP',
      value:    `R${exchange.zar_gbp.toFixed(2)}`,
      change:   isLive ? 'live' : 'est.',
      positive: true,
    },
    {
      label:    'BRENT CRUDE',
      value:    `$${oil.brent_usd.toFixed(2)}`,
      change:   'per barrel',
      positive: false,
    },
    {
      label:    'JSE TOP 40',
      value:    jse.top40.toLocaleString('en-ZA'),
      change:   'index',
      positive: true,
    },
    {
      label:    'REPO RATE',
      value:    `${exchange.repo_rate}%`,
      change:   `Prime ${exchange.prime_rate}%`,
      positive: true,
    },
    {
      label:    'PETROL 95',
      value:    `R${fuel.inland.unleaded_95.toFixed(2)}/L`,
      change:   fuel.last_updated,
      positive: true,
    },
    {
      label:    'DIESEL 50PPM',
      value:    `R${fuel.inland.diesel_50ppm.toFixed(2)}/L`,
      change:   'Inland',
      positive: true,
    },
    {
      label:    'ZAR / EUR',
      value:    `R${exchange.zar_eur.toFixed(2)}`,
      change:   isLive ? 'live' : 'est.',
      positive: true,
    },
  ]

  // Triple for seamless loop
  const repeated = [...items, ...items, ...items]

  return (
    <div className="bg-slate-900 border-b border-slate-800 py-2.5 overflow-hidden flex items-center relative">
      {/* Live indicator dot */}
      <div className="absolute left-3 z-10 flex items-center gap-1 bg-slate-900 pr-2">
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            loading ? 'bg-slate-600 animate-pulse' :
            isLive  ? 'bg-emerald-500' : 'bg-slate-600'
          }`}
        />
      </div>

      <div className="flex animate-marquee whitespace-nowrap gap-12 flex-grow pl-6">
        {repeated.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 border-r border-slate-800 last:border-none"
          >
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              {m.label}
            </span>
            <span className={`text-sm font-bold text-white ${loading ? 'opacity-50' : ''}`}>
              {m.value}
            </span>
            <span className={`text-[10px] font-bold ${m.positive ? 'text-emerald-400' : 'text-orange-400'}`}>
              {m.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
