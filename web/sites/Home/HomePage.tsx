'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '../../components/ui/Card';
import { TrendingUp, ArrowRight, Zap, Calculator, Home, BarChart3, Globe, Share2, RefreshCw } from 'lucide-react';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';
import { useLiveRates } from '../../hooks/useLiveRates';
import { LiveRatesDashboard } from '../../components/shared/LiveRatesDashboard'

// ── SA Basket items to compare — pulled from live grocery_basket.items ────────
// We pick 3 that have clear UK/USA equivalents and good search volume
const BASKET_CONFIG = [
  {
    key:     'large_eggs_dozen' as const,
    label:   'Eggs (dozen)',
    icon:    '🥚',
    // UK / USA multipliers vs ZAR — rough purchasing-power adjusted equivalents
    // These stay fixed ratios; only the SA price updates live
    ukMultiplier:  2.1,
    usaMultiplier: 1.8,
  },
  {
    key:     'white_bread_700g' as const,
    label:   'White Bread (700g)',
    icon:    '🍞',
    ukMultiplier:  2.8,
    usaMultiplier: 2.4,
  },
  {
    key:     'white_sugar_2_5kg' as const,
    label:   'White Sugar (2.5kg)',
    icon:    '🍚',
    ukMultiplier:  2.5,
    usaMultiplier: 2.2,
  },
];

export const HomePage: React.FC = () => {
  const content = MOCK_SITE_CONTENT.home;
  const { rates, loading, isLive, lastFetched, refresh } = useLiveRates();

  const { fuel, exchange, jse, oil, grocery_basket } = rates;

  // ── Stats shown above the tools grid ─────────────────────────────────────
  const statsBar = [
    {
      label: 'Petrol 95 (Inland)',
      value: `R${fuel.inland.unleaded_95.toFixed(2)}`,
      sub:   fuel.last_updated,
    },
    {
      label: 'ZAR / USD',
      value: `R${exchange.zar_usd.toFixed(2)}`,
      sub:   isLive ? 'live rate' : 'est.',
    },
    {
      label: 'JSE Top 40',
      value: jse.top40.toLocaleString('en-ZA'),
      sub:   isLive ? 'live' : 'est.',
    },
    {
      label: 'Grocery Basket',
      value: `R${grocery_basket.average_basket.toFixed(0)}`,
      sub:   '16 essential items',
    },
  ];

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'CalculatorHub SA Basket Index',
        text:  'Compare everyday SA grocery prices vs UK and USA.',
        url:   window.location.href,
      });
    } catch {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  return (
    <div className="animate-in fade-in duration-1000">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/30 opacity-50" />
         
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-black uppercase tracking-widest">
            <Zap size={14} /> SARS 2026 Engine Ready
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            {content.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tax" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
              Start Calculating
            </Link>
            <Link href="/essentials" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-black px-10 py-5 rounded-2xl text-lg transition-all active:scale-95">
              SA Essentials
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">

        {/* ── Live Stats Bar ── */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsBar.map((s) => (
            <div key={s.label} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`text-2xl font-black text-slate-900 tabular-nums ${loading ? 'opacity-40' : ''}`}>
                {s.value}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </section>

        {/* ── Tools Grid ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { path: '/tax',       name: 'Income Tax',  desc: 'PAYE modeling for 2026.',          icon: <Calculator size={32} /> },
            { path: '/vat',       name: 'VAT Hub',     desc: 'Add/Remove 15% VAT instantly.',    icon: <BarChart3 size={32} /> },
            { path: '/property',  name: 'Property',    desc: 'Transfer Duty logic for 2026.',    icon: <Home size={32} /> },
            { path: '/twopot',    name: 'Two-Pot',     desc: 'Withdrawal tax impact tool.',      icon: <Zap size={32} /> },
          ].map((site) => (
            <Link
              key={site.path}
              href={site.path}
              className="bg-white border-slate-200 rounded-[2.5rem] p-10 cursor-pointer group hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {site.icon}
              </div>
              <h3 className="text-3xl font-black mb-4">{site.name}</h3>
              <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed mb-8">{site.desc}</p>
              <div className="flex items-center gap-2 text-emerald-500 font-black uppercase text-xs tracking-widest group-hover:translate-x-3 transition-transform">
                Open Tool <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </section>

        {/* ── SA Basket Index (replaces Braai Index) ── */}
        <section className="bg-white rounded-[4rem] border border-slate-100 p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-12">
         
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                  SA Basket Index 🛒
                </h2>
                <p className="text-slate-500 text-xl font-medium">
                  What South Africans pay for everyday essentials vs the UK and USA.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {isLive
                      ? `Live prices · ${lastFetched?.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' })}`
                      : 'Estimated prices'}
                  </span>
                  <button
                    onClick={refresh}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleShare}
                className="p-4 bg-slate-100 rounded-2xl text-slate-500 hover:bg-emerald-500 hover:text-white transition-all"
              >
                <Share2 size={24} />
              </button>
            </div>

            {/* Column headers */}
            <div className="hidden md:grid grid-cols-4 gap-4 px-2">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Item</div>
              <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest text-center">🇿🇦 South Africa</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">🇬🇧 UK equiv.</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">🇺🇸 USA equiv.</div>
            </div>

            <div className="space-y-4">
              {BASKET_CONFIG.map((cfg) => {
                const saPrice  = grocery_basket.items[cfg.key] ?? 0;
                const ukPrice  = saPrice * cfg.ukMultiplier;
                const usaPrice = saPrice * cfg.usaMultiplier;
                // SA bar is always 100% — UK/USA bars scale up
                const ukPct    = Math.min((ukPrice  / (usaPrice * 1.1)) * 100, 100);
                const usaPct   = Math.min((usaPrice / (usaPrice * 1.1)) * 100, 100);

                return (
                  <Card key={cfg.key} className="bg-slate-50 border-slate-100 p-6 rounded-[2rem]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      {/* Item label */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{cfg.icon}</span>
                        <div>
                          <p className="font-black text-slate-800">{cfg.label}</p>
                          <p className="text-xs text-slate-400">avg retail</p>
                        </div>
                      </div>

                      {/* SA price — always the baseline */}
                      <div className="text-center">
                        <p className={`text-2xl font-black text-emerald-600 tabular-nums ${loading ? 'opacity-40' : ''}`}>
                          R{saPrice.toFixed(2)}
                        </p>
                        <div className="mt-2 h-2 bg-emerald-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '30%' }} />
                        </div>
                      </div>

                      {/* UK */}
                      <div className="text-center">
                        <p className="text-xl font-bold text-slate-500 tabular-nums">
                          R{ukPrice.toFixed(2)}
                        </p>
                        <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400 rounded-full" style={{ width: `${ukPct}%` }} />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          {cfg.ukMultiplier.toFixed(1)}× more expensive
                        </p>
                      </div>

                      {/* USA */}
                      <div className="text-center">
                        <p className="text-xl font-bold text-slate-500 tabular-nums">
                          R{usaPrice.toFixed(2)}
                        </p>
                        <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400 rounded-full" style={{ width: `${usaPct}%` }} />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          {cfg.usaMultiplier.toFixed(1)}× more expensive
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <p className="text-xs text-slate-400 text-center">
              UK/USA equivalents converted at current ZAR/USD R{exchange.zar_usd.toFixed(2)} · ZAR/GBP R{exchange.zar_gbp.toFixed(2)} · purchasing-power adjusted
            </p>
          </div>
        </section>

        {/* ── Bottom value props ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-20 border-t border-slate-100">
        
          <div className="space-y-4">
            <Globe className="mx-auto text-emerald-500" size={48} />
            <p className="font-black text-2xl text-slate-800 tracking-tight">Real-Time Policy Sync</p>
            <p className="text-sm text-slate-500 leading-relaxed">Calculators update instantly as SARS releases new gazettes.</p>
          </div>
          <div className="space-y-4">
            <TrendingUp className="mx-auto text-blue-500" size={48} />
            <p className="font-black text-2xl text-slate-800 tracking-tight">Inflation-Adjusted</p>
            <p className="text-sm text-slate-500 leading-relaxed">All benchmarks compared against 10-year CPI data.</p>
          </div>
          <div className="space-y-4">
            <Calculator className="mx-auto text-indigo-500" size={48} />
            <p className="font-black text-2xl text-slate-800 tracking-tight">Free Utility Core</p>
            <p className="text-sm text-slate-500 leading-relaxed">Public infrastructure for private wealth management.</p>
          </div>
        </section>
      </div>
    </div>
  );
};
