
'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, Zap, Home, BarChart3, ArrowRight, Flame, TrendingUp, Globe } from 'lucide-react';

export default function RootPage() {
  const braaiIndex = [
    { item: 'Ribeye (2kg)', sa: 'R310', uk: 'R680', usa: 'R620', icon: '🥩' },
    { item: 'Charcoal (5kg)', sa: 'R90', uk: 'R240', usa: 'R210', icon: '🔥' },
    { item: 'Beer (6-Pack)', sa: 'R115', uk: 'R340', usa: 'R305', icon: '🍺' },
  ];

  const tools = [
    { name: 'Income Tax', path: '/tax', icon: <Calculator />, desc: 'PAYE & Rebate Modeling' },
    { name: 'VAT Hub', path: '/vat', icon: <BarChart3 />, desc: 'Instant 15% Analysis' },
    { name: 'Two-Pot', path: '/twopot', icon: <Zap />, desc: 'Withdrawal Tax Logic' },
    { name: 'Property', path: '/property', icon: <Home />, desc: 'Transfer Duty Estimator' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dynamic Nav */}
      <nav className="bg-slate-950 text-white h-20 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-1.5 rounded-lg text-slate-950 font-black"><Calculator size={20} /></div>
            <span className="font-black text-xl tracking-tighter">Calculator<span className="text-emerald-400">Hub</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            {tools.map(t => <Link key={t.path} href={t.path} className="hover:text-white transition-colors">{t.name}</Link>)}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-950 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
             Budget 2026 Core Live
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter italic">
            FISCAL<br/><span className="text-emerald-500">POWER.</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            The premium SA utility for Tax, VAT, and Two-Pot modeling. Built for high-net-worth transparency.
          </p>
          <div className="flex justify-center gap-4 pt-4">
             <Link href="/tax" className="bg-emerald-500 text-slate-950 font-black px-12 py-5 rounded-2xl text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">Calculate Now</Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-6">
        {tools.map((t) => (
          <Link key={t.path} href={t.path} className="bg-white border border-slate-200 p-10 rounded-[3rem] group hover:bg-slate-950 hover:text-white transition-all shadow-xl hover:-translate-y-2">
            <div className="w-16 h-16 bg-slate-100 text-slate-950 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 transition-colors">
              {/* Fix: cast to React.ReactElement<any> to allow 'size' prop in cloneElement */}
              {React.cloneElement(t.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">{t.name}</h3>
            <p className="text-slate-500 group-hover:text-slate-400 mb-10 font-medium">{t.desc}</p>
            <div className="text-emerald-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
               Open <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </section>

      {/* Braai Index */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-slate-800 shadow-2xl">
           <div className="relative z-10 space-y-16">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                 <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter flex items-center gap-4">
                      THE BRAAI INDEX <Flame className="text-orange-500" />
                    </h2>
                    <p className="text-slate-400 text-xl font-medium">Purchasing power compared via a traditional SA Braai basket.</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {braaiIndex.map((b, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md group hover:bg-white/10 transition-all">
                    <div className="text-5xl mb-6">{b.icon}</div>
                    <h4 className="text-white font-black text-2xl mb-8 tracking-tight">{b.item}</h4>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-500 uppercase">South Africa</span><span className="font-black text-emerald-400 text-2xl">{b.sa}</span></div>
                       <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" style={{width: '35%'}}></div></div>
                       <div className="flex justify-between text-xs font-bold text-slate-400"><span>UK (Equiv)</span><span>{b.uk}</span></div>
                       <div className="flex justify-between text-xs font-bold text-slate-400"><span>USA (Equiv)</span><span>{b.usa}</span></div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-t border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-4">
            <Globe size={40} className="mx-auto text-emerald-500" />
            <h4 className="font-black text-2xl tracking-tight">Institutional Accuracy</h4>
            <p className="text-slate-500 font-medium leading-relaxed">Verified against the 2026 National Treasury fiscal gazette.</p>
          </div>
          <div className="space-y-4">
            <TrendingUp size={40} className="mx-auto text-blue-500" />
            <h4 className="font-black text-2xl tracking-tight">Inflation Benchmarked</h4>
            <p className="text-slate-500 font-medium leading-relaxed">Historical modeling against 10-year CPI averages.</p>
          </div>
          <div className="space-y-4">
            <Zap size={40} className="mx-auto text-orange-500" />
            <h4 className="font-black text-2xl tracking-tight">Real-Time Engine</h4>
            <p className="text-slate-500 font-medium leading-relaxed">Instant processing of the latest two-pot withdrawal logic.</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-20 mt-auto border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-black uppercase text-[10px] tracking-widest mb-4">CalculatorHub South Africa © 2026</p>
          <p className="text-sm">Engineered for absolute financial clarity.</p>
        </div>
      </footer>
    </div>
  );
}
