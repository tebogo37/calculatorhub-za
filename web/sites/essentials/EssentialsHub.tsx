// web/app/essentials/page.tsx  (and also the hub component below)
// ─────────────────────────────────────────────────────────────────────────────
// ROUTE FILE: web/app/essentials/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
/*
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { EssentialsHub } from '../../sites/essentials/EssentialsHub';

export default function EssentialsRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="home" currentPage="essentials" onNavigate={(p) => router.push(p)}>
      <EssentialsHub />
    </Layout>
  );
}
*/

// ─────────────────────────────────────────────────────────────────────────────
// HUB COMPONENT: web/sites/essentials/EssentialsHub.tsx
// ─────────────────────────────────────────────────────────────────────────────
'use client';

import React from 'react';
import Link from 'next/link';
import { Fuel, ShoppingCart, MapPin, Zap, ArrowRight, TrendingUp } from 'lucide-react';

const tools = [
  {
    path: '/essentials/fuel',
    name: 'Fuel Calculator',
    desc: 'Tank fill costs, road trip planner & popular SA routes with toll estimates.',
    icon: <Fuel size={32} />,
    emoji: '⛽',
    badge: 'Updated Monthly',
    badgeColor: 'orange',
    highlight: 'JHB Inland 95: R21.84/L',
  },
  {
    path: '/essentials/groceries',
    name: 'Grocery Basket',
    desc: 'Build your basket, track against your budget, monitor SA food price trends.',
    icon: <ShoppingCart size={32} />,
    emoji: '🛒',
    badge: 'April 2026',
    badgeColor: 'emerald',
    highlight: '16 essential items tracked',
  },
  {
    path: '/essentials/fuel', // road trip is a tab inside fuel
    name: 'Road Trip Planner',
    desc: 'Total cost from JHB to CPT, Durban, Nelspruit and more popular SA routes.',
    icon: <MapPin size={32} />,
    emoji: '🗺️',
    badge: 'Tolls Included',
    badgeColor: 'blue',
    highlight: '10 popular SA routes',
  },
  {
    path: '#coming-soon',
    name: 'Load Shedding Cost',
    desc: 'Estimate the monthly cost of load shedding on your household or business.',
    icon: <Zap size={32} />,
    emoji: '💡',
    badge: 'Coming Soon',
    badgeColor: 'slate',
    highlight: 'Inverter ROI calculator',
    disabled: true,
  },
];

const badgeStyles: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  blue: 'bg-blue-100 text-blue-700',
  slate: 'bg-slate-100 text-slate-500',
};

export const EssentialsHub: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 py-16 px-4 animate-in fade-in duration-700">
      {/* ── Hero ── */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest">
          🇿🇦 South African Lifestyle Calculators
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter">
          SA <span className="text-emerald-500">Essentials</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Real prices. Real SA data. From filling your tank to your weekly grocery run — know
          exactly what things cost before you spend.
        </p>
      </section>

      {/* ── Stats bar ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Petrol 95 (Inland)', value: 'R21.84', sub: 'per litre · Apr 2026' },
          { label: 'Eggs (dozen)', value: 'R41.99', sub: 'average retail price' },
          { label: 'JHB → CPT', value: '1,401km', sub: 'R3,090 est. fuel cost' },
          { label: 'Grocery Basket', value: 'R680', sub: '16 essential items avg' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              {s.label}
            </p>
            <p className="text-2xl font-black text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </section>

      {/* ── Tool Grid ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.path + tool.name}
            href={tool.disabled ? '#' : tool.path}
            className={`group bg-white border border-slate-200 rounded-[2.5rem] p-10 transition-all duration-300 shadow-sm ${
              tool.disabled
                ? 'opacity-60 cursor-not-allowed'
                : 'hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-700 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    badgeStyles[tool.badgeColor]
                  }`}
                >
                  {tool.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{tool.name}</h3>
                <p className="text-slate-500 leading-relaxed">{tool.desc}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  {tool.highlight}
                </span>
                {!tool.disabled && (
                  <div className="flex items-center gap-1 text-emerald-500 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Open <ArrowRight size={14} />
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ── Coming soon teaser ── */}
      <section className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 space-y-6">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
            Roadmap
          </p>
          <h2 className="text-4xl font-black">More calculators coming</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '💡 Load Shedding Cost',
              '🏠 Rent vs Buy',
              '📱 Data Cost Tracker',
              '💊 Medical Aid Comparator',
              '🎓 Education Cost Estimator',
              '🚰 Water & Rates Calculator',
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-white/10 text-slate-300 rounded-full text-sm font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
