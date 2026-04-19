// web/components/shared/LiveRatesDashboard.tsx
// Drop this anywhere in the app to show the live data panel.
// Used on the home page and essentials hub.

'use client'

import React from 'react'
import { useLiveRates } from '../../hooks/useLiveRates' 
import {
  TrendingUp, TrendingDown, Fuel, RefreshCw,
  ShoppingCart, DollarSign, Zap, BarChart3
} from 'lucide-react'

// ── Helper ────────────────────────────────────────────────────────────────────

function Pill({ label, value, sub, icon, color = 'slate', loading = false }: {
  label:    string
  value:    string
  sub?:     string
  icon:     React.ReactNode
  color?:   'emerald' | 'orange' | 'blue' | 'red' | 'slate'
  loading?: boolean
}) {
  const colors = {
    emerald: 'text-emerald-400',
    orange:  'text-orange-400',
    blue:    'text-blue-400',
    red:     'text-red-400',
    slate:   'text-slate-200',
  }
  return (
    <div className="flex flex-col gap-1 px-5 py-4 bg-slate-800/60 rounded-2xl min-w-[140px]">
      <div className="flex items-center gap-1.5 text-slate-500">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <span className={`text-xl font-black tabular-nums ${colors[color]} ${loading ? 'animate-pulse' : ''}`}>
        {loading ? '···' : value}
      </span>
      {sub && <span className="text-[10px] text-slate-600">{sub}</span>}
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export const LiveRatesDashboard: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { rates, loading, lastFetched, refresh } = useLiveRates()

  const { exchange, fuel, jse, oil, grocery_basket } = rates

  if (compact) {
    // Compact mode — horizontal scrolling ticker (used in the Layout marquee)
    return null // The Layout ticker already handles this separately
  }

  return (
    <div className="space-y-4">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">
            Live SA Market Data
          </h2>
          {lastFetched && (
            <p className="text-[10px] text-slate-600 mt-0.5">
              Updated {lastFetched.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' })}
            </p>
          )}
        </div>
        <button
          onClick={refresh}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl text-xs font-bold transition-all"
        >
          <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* ── Rate pills ── */}
      <div className="flex flex-wrap gap-3">
        <Pill
          label="ZAR / USD"
          value={`R${exchange.zar_usd.toFixed(2)}`}
          sub="exchange rate"
          icon={<DollarSign size={12} />}
          color="emerald"
          loading={loading}
        />
        <Pill
          label="Brent Crude"
          value={`$${oil.brent_usd.toFixed(2)}`}
          sub="per barrel"
          icon={<Zap size={12} />}
          color="orange"
          loading={loading}
        />
        <Pill
          label="JSE Top 40"
          value={jse.top40.toLocaleString('en-ZA')}
          sub="index"
          icon={<BarChart3 size={12} />}
          color="blue"
          loading={loading}
        />
        <Pill
          label="Repo Rate"
          value={`${exchange.repo_rate}%`}
          sub={`Prime: ${exchange.prime_rate}%`}
          icon={<TrendingUp size={12} />}
          color="slate"
          loading={loading}
        />
        <Pill
          label="Petrol 95"
          value={`R${fuel.inland.unleaded_95.toFixed(2)}`}
          sub={`Inland · ${fuel.last_updated}`}
          icon={<Fuel size={12} />}
          color="orange"
          loading={loading}
        />
        <Pill
          label="Basket"
          value={`R${grocery_basket.average_basket.toFixed(2)}`}
          sub="16 essentials avg"
          icon={<ShoppingCart size={12} />}
          color="emerald"
          loading={loading}
        />
      </div>

      {/* ── Source note ── */}
      <p className="text-[10px] text-slate-700 font-mono">
        {rates.source} · Data refreshed automatically on SA weekdays
      </p>
    </div>
  )
}
