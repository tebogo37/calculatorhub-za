'use client';

import React from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { Fuel, ShoppingCart, MapPin, Zap, ArrowRight, RefreshCw } from 'lucide-react';
import { useLiveRates } from '../../hooks/useLiveRates';

const SITE_URL = 'https://www.calculatorhub.co.za';

const tools = [
  {
    path: '/essentials/fuel',
    name: 'Fuel Calculator',
    desc: 'Tank fill costs, road trip planner & popular SA routes with toll estimates.',
    icon: <Fuel size={32} />,
    badge: 'Updated Monthly',
    badgeColor: 'orange',
  },
  {
    path: '/essentials/groceries',
    name: 'Grocery Basket',
    desc: 'Build your basket, track against your budget, monitor SA food price trends.',
    icon: <ShoppingCart size={32} />,
    badge: 'Weekly Prices',
    badgeColor: 'emerald',
  },
  {
    path: '/essentials/fuel',
    name: 'Road Trip Planner',
    desc: 'Total cost JHB → CPT, Durban, Nelspruit and more popular SA routes.',
    icon: <MapPin size={32} />,
    badge: 'Tolls Included',
    badgeColor: 'blue',
  },
  {
    path: '#coming-soon',
    name: 'Load Shedding Cost',
    desc: 'Estimate the monthly cost of load shedding on your household or business.',
    icon: <Zap size={32} />,
    badge: 'Coming Soon',
    badgeColor: 'slate',
    disabled: true,
  },
];

const badgeStyles: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  blue: 'bg-blue-100 text-blue-700',
  slate: 'bg-slate-100 text-slate-500',
};

interface EssentialsHubProps {
  siteContent?: any;
}

export const EssentialsHub: React.FC<EssentialsHubProps> = ({ siteContent }) => {
  const { rates, loading, isLive, lastFetched, refresh } = useLiveRates();
  const { fuel, grocery_basket } = rates;

  const summary =
    siteContent?.summary ||
    'Real prices. Real SA data. From filling your tank to your weekly grocery run — know exactly what things cost before you spend.';

  const deep = siteContent?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const faqs = (siteContent?.faqs || []).map((f: any) => ({
    q: f.q || f.question,
    a: f.a || f.answer,
  }));

  const stats = [
    {
      label: 'Petrol 95 (Inland)',
      value: `R${fuel.inland.unleaded_95.toFixed(2)}`,
      sub: `per litre · ${fuel.last_updated}`,
    },
    {
      label: 'Eggs (dozen)',
      value: `R${(grocery_basket.items.large_eggs_dozen ?? 0).toFixed(2)}`,
      sub: 'average retail price',
    },
    {
      label: 'JHB → CPT',
      value: '1,401km',
      sub: `≈ R${((1401 * 8.5) / 100 * fuel.inland.unleaded_95).toFixed(0)} fuel cost`,
    },
    {
      label: 'Grocery Basket',
      value: `R${grocery_basket.average_basket.toFixed(0)}`,
      sub: '16 essential items avg',
    },
  ];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CalculatorHub SA',
    url: SITE_URL,
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: siteContent?.title || 'SA Essentials Hub',
    description: siteContent?.metaDescription || summary,
    url: `${SITE_URL}/essentials`,
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16 py-16 px-4 animate-in fade-in duration-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest">
          🇿🇦 South African Lifestyle Calculators
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter">
          SA <span className="text-emerald-500">Essentials</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{summary}</p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {isLive
                ? `Live data · ${lastFetched?.toLocaleTimeString('en-ZA', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`
                : 'Estimated data'}
            </span>
          </div>
          <button
            onClick={refresh}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-500 transition-all"
          >
            <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-center"
            >
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                {s.label}
              </p>
              <p
                className={`text-2xl font-black text-slate-900 tabular-nums ${
                  loading ? 'opacity-40' : ''
                }`}
              >
                {s.value}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

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
              {!tool.disabled && (
                <div className="flex items-center gap-1 text-emerald-500 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Open <ArrowRight size={14} />
                </div>
              )}
            </div>
          </Link>
        ))}
      </section>

      {(hasPortableDeep || hasStringDeep) && (
        <section className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-3xl font-black text-slate-900">About SA Essentials</h2>
          {hasPortableDeep ? (
            <div className="prose prose-slate prose-lg max-w-none prose-a:text-emerald-600">
              <PortableText value={deep} />
            </div>
          ) : (
            <div className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">{deep}</div>
          )}
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Essentials FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq: any, i: number) => (
              <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white text-center space-y-6 relative overflow-hidden">
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