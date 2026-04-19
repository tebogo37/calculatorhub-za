// web/components/shared/LiveMarquee.tsx
// Drop-in replacement for the hardcoded metrics array in Layout.tsx
// Fetches from /api/live-rates and shows live ZAR/USD, Brent, JSE, Repo, Petrol 95

'use client'

import React, { useState, useEffect } from 'react'

interface MarqueeItem {
  label:    string
  value:    string
  change?:  string
  positive?: boolean
}

// Static fallback shown while loading
const STATIC_ITEMS: MarqueeItem[] = [
  { label: 'ZAR / USD',   value: 'R18.42',   change: '...',    positive: true },
  { label: 'BRENT CRUDE', value: '$82.40',   change: '...',    positive: false },
  { label: 'JSE TOP 40',  value: '74,210',   change: '...',    positive: true },
  { label: 'REPO RATE',   value: '7.50%',    change: '0.00%',  positive: true },
  { label: 'PETROL 95',   value: 'R21.84/L', change: 'Inland', positive: true },
]

export const LiveMarquee: React.FC = () => {
  const [items, setItems] = useState<MarqueeItem[]>(STATIC_ITEMS)

  useEffect(() => {
    fetch('/api/live-rates')
      .then(r => r.json())
      .then(data => {
        const newItems: MarqueeItem[] = [
          {
            label:    'ZAR / USD',
            value:    `R${data.exchange?.zar_usd?.toFixed(2) ?? '18.42'}`,
            change:   data.exchange?.source === 'fallback' ? 'est.' : 'live',
            positive: true,
          },
          {
            label:    'BRENT CRUDE',
            value:    `$${data.oil?.brent_usd?.toFixed(2) ?? '82.40'}`,
            change:   'per barrel',
            positive: false,
          },
          {
            label:    'JSE TOP 40',
            value:    data.jse?.top40
              ? Number(data.jse.top40).toLocaleString('en-ZA')
              : '74,210',
            change:   'index',
            positive: true,
          },
          {
            label:    'REPO RATE',
            value:    `${data.exchange?.repo_rate ?? '7.50'}%`,
            change:   `Prime ${data.exchange?.prime_rate ?? '11.00'}%`,
            positive: true,
          },
          {
            label:    'PETROL 95',
            value:    `R${data.fuel?.inland?.unleaded_95?.toFixed(2) ?? '21.84'}/L`,
            change:   data.fuel?.last_updated ?? 'Inland',
            positive: true,
          },
          {
            label:    'ZAR / GBP',
            value:    `R${data.exchange?.zar_gbp?.toFixed(2) ?? '23.15'}`,
            change:   'live',
            positive: true,
          },
        ]
        setItems(newItems)
      })
      .catch(() => { /* keep static fallback */ })
  }, [])

  // Triple the items so the marquee loops smoothly
  const repeated = [...items, ...items, ...items]

  return (
    <div className="bg-slate-900 border-b border-slate-800 py-2.5 overflow-hidden flex items-center relative">
      <div className="flex animate-marquee whitespace-nowrap gap-12 flex-grow">
        {repeated.map((m, i) => (
          <div key={i} className="flex items-center gap-3 px-6 border-r border-slate-800 last:border-none">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              {m.label}
            </span>
            <span className="text-sm font-bold text-white">{m.value}</span>
            {m.change && (
              <span className={`text-[10px] font-bold ${m.positive ? 'text-emerald-400' : 'text-orange-400'}`}>
                {m.change}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── HOW TO USE IN Layout.tsx ────────────────────────────────────────────────
// 1. Import:  import { LiveMarquee } from './LiveMarquee'
// 2. Replace the entire hardcoded marquee <div> block with:  <LiveMarquee />
// 3. Delete the hardcoded `const metrics = [...]` array — no longer needed
