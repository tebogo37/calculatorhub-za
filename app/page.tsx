
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calculator, Zap, Home, BarChart3, 
  ArrowRight, Flame, TrendingUp, Globe, 
  ShieldCheck, ArrowUpRight 
} from 'lucide-react';

export default function RootPage() {
  const braaiIndex = [
    { item: 'Ribeye (2kg)', sa: 'R310', uk: 'R680', usa: 'R620', icon: '🥩' },
    { item: 'Charcoal (5kg)', sa: 'R90', uk: 'R240', usa: 'R210', icon: '🔥' },
    { item: 'Beer (6-Pack)', sa: 'R115', uk: 'R340', usa: 'R305', icon: '🍺' },
  ];

  const tools = [
    { name: 'Income Tax', path: '/tax', icon: <Calculator />, desc: 'PAYE & Rebate Modeling', color: 'emerald' },
    { name: 'VAT Hub', path: '/vat', icon: <BarChart3 />, desc: 'Instant 15% Analysis', color: 'blue' },
    { name: 'Two-Pot', path: '/twopot', icon: <Zap />, desc: 'Withdrawal Tax Logic', color: 'orange' },
    { name: 'Property', path: '/property', icon: <Home />, desc: 'Transfer Duty Estimator', color: 'indigo' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <nav className="bg-slate-950 text-white h-20 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-emerald-500 p-1.5 rounded-lg text-slate-950 group-hover:rotate-12 transition-all">
              <Calculator size={20} />
            </div>
            <span className="font-black text-xl tracking-tighter italic">Calculator<span className="text-emerald-400">Hub</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            {tools.map(t => (
              <Link key={t.path} href={t.path} className="hover:text-emerald-400 transition-colors">
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] -mr-96 -mt-96"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
             SARS Budget Cycle 2026 Live
          </div>
          <h1 className="text-6xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter italic">
            FISCAL<br/><span className="text-emerald-500 underline decoration-white/10 underline-offset-[20px]">POWER.</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-relaxed">
            The premium SA utility for Tax, VAT, and Two-Pot modeling. Built for absolute financial transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
             <Link href="/tax" className="bg-emerald-500 text-slate-950 font-black px-12 py-6 rounded-2xl text-lg hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/30 active:scale-95">
               Start PAYE Modeling
             </Link>
             <Link href="/resources" className="bg-white/5 border border-white/10 text-white font-black px-12 py-6 rounded-2xl text-lg hover:bg-white/10 transition-all backdrop-blur-md">
               Expert Resources
             </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-6">
        {tools.map((t) => (
          <Link key={t.path} href={t.path} className="bg-white border border-slate-200 p-12 rounded-[3.5rem] group hover:bg-slate-950 hover:text-white transition-all duration-500 shadow-xl hover:-translate-y-2">
            <div className={`w-16 h-16 bg-slate-100 text-slate-950 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:text-white transition-colors`}>
              {React.cloneElement(t.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">{t.name}</h3>
            <p className="text-slate-500 group-hover:text-slate-400 mb-10 font-medium text-lg">{t.desc}</p>
            <div className="text-emerald-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group-hover:translate-x-3 transition-transform">
               Open Engine <ArrowUpRight size={14} />
            </div>
          </Link>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-slate-950 rounded-[5rem] p-16 md:p-24 relative overflow-hidden border border-slate-800 shadow-3xl">
           <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
           <div className="relative z-10 space-y-20">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                 <div className="space-y-4">
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter flex items-center gap-6">
                      THE BRAAI INDEX <Flame className="text-orange-500 animate-pulse" />
                    </h2>
                    <p className="text-slate-400 text-2xl font-medium max-w-xl leading-relaxed">Purchasing power compared via a traditional SA Braai basket vs global equivalents.</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {braaiIndex.map((b, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl group hover:bg-white/10 transition-all border-b-[8px] border-b-emerald-500/20">
                    <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{b.icon}</div>
                    <h4 className="text-white font-black text-3xl mb-10 tracking-tight">{b.item}</h4>
                    <div className="space-y-6">
                       <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">South Africa</span>
                         <span className="font-black text-emerald-400 text-3xl tabular-nums">{b.sa}</span>
                       </div>
                       <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 shadow-[0_0_20px_#10b981]" style={{width: '32%'}}></div>
                       </div>
                       <div className="flex justify-between text-sm font-bold text-slate-400">
                         <span>UK (Equiv)</span>
                         <span className="tabular-nums">{b.uk}</span>
                       </div>
                       <div className="flex justify-between text-sm font-bold text-slate-400">
                         <span>USA (Equiv)</span>
                         <span className="tabular-nums">{b.usa}</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100 py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
          <div className="space-y-6 group">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-emerald-500/5">
              <Globe size={40} />
            </div>
            <h4 className="font-black text-3xl tracking-tight">Institutional Precision</h4>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">Verified against the 2026 National Treasury fiscal gazette and latest SARS directives.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/5">
              <TrendingUp size={40} />
            </div>
            <h4 className="font-black text-3xl tracking-tight">Inflation Modeling</h4>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">Advanced benchmarks comparing current fiscal policy against 10-year CPI averages.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-orange-500/5">
              <ShieldCheck size={40} />
            </div>
            <h4 className="font-black text-3xl tracking-tight">POPIA Compliant</h4>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">Institutional grade data security ensuring your inputs remain private and secure.</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-24 mt-auto border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-emerald-500 p-1 rounded text-slate-950 font-black"><Calculator size={16} /></div>
            <span className="font-black text-white text-xl tracking-tighter italic">Calculator<span className="text-emerald-400">Hub</span></span>
          </div>
          <p className="font-black uppercase text-[10px] tracking-widest text-slate-600">CalculatorHub South Africa © 2026 | Financial Precision Ecosystem</p>
          <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <Link href="/tax" className="hover:text-white">Tax</Link>
            <Link href="/vat" className="hover:text-white">VAT</Link>
            <Link href="/twopot" className="hover:text-white">Two-Pot</Link>
            <Link href="/property" className="hover:text-white">Property</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
