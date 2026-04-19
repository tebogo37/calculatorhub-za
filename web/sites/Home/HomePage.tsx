
'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '../../components/ui/Card';
import { TrendingUp, ArrowRight, Zap, Calculator, Home, BarChart3, Globe, Flame, Share2 } from 'lucide-react';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';
import { LiveRatesDashboard } from '../../components/shared/LiveRatesDashboard'


export const HomePage: React.FC = () => {
  const content = MOCK_SITE_CONTENT.home;

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'CalculatorHub SA Braai Basket Index',
        text: 'Compare purchasing power globally with the SA Braai Index 2026.',
        url: window.location.href,
      });
    } catch (err) {
      alert('Link copied to clipboard!');
    }
  };

  const braaiIndex = [
    { item: 'Braai Meat (2kg)', sa: 'R280', uk: 'R640', usa: 'R580', icon: '🥩' },
    { item: 'Charcoal (5kg)', sa: 'R85', uk: 'R210', usa: 'R190', icon: '🔥' },
    { item: 'Sides & Salads', sa: 'R120', uk: 'R310', usa: 'R290', icon: '🥗' },
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
           <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/30 opacity-50"></div>
        
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
             <Link href="/tax" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-emerald-500/20 active:scale-95">Start Calculating</Link>
             <Link href="/resources" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-black px-10 py-5 rounded-2xl text-lg transition-all active:scale-95">Explore Resources</Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { path: '/tax', name: 'Income Tax', desc: 'PAYE modeling for 2026.', icon: <Calculator size={32} />, color: 'emerald' },
             { path: '/vat', name: 'VAT Hub', desc: 'Add/Remove 15% VAT instantly.', icon: <BarChart3 size={32} />, color: 'emerald' },
             { path: '/property', name: 'Property', desc: 'Transfer Duty logic for 2026.', icon: <Home size={32} />, color: 'emerald' },
             { path: '/twopot', name: 'Two-Pot', desc: 'Withdrawal tax impact tool.', icon: <Zap size={32} />, color: 'orange' }
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




             <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-slate-900">
           <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/30 opacity-50"></div>
        
        </div>
   
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-8 py-20">
        
        
          <LiveRatesDashboard />
        </div>
      </section>

        


        <section className="bg-white rounded-[4rem] border border-slate-100 p-12 md:p-20 shadow-2xl relative overflow-hidden group">
           <div className="relative z-10 space-y-12">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              
                 <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-4">
                      The Braai Index <Flame className="text-orange-500" />
                    </h2>
                    <p className="text-slate-500 text-xl font-medium">Global purchasing power compared through the cost of an SA Braai.</p>
                 </div>
                 <button 
                  onClick={handleShare}
                  className="p-4 bg-slate-100 rounded-2xl text-slate-500 hover:bg-emerald-500 hover:text-white transition-all"
                 >
                   <Share2 size={24} />
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {braaiIndex.map((item, i) => (
                   <Card key={i} className="bg-slate-50 border-slate-100 hover:bg-white transition-all p-10 rounded-[3rem]">
                      <div className="space-y-6">
                         <div className="text-5xl">{item.icon}</div>
                         <h4 className="font-black text-2xl text-slate-800">{item.item}</h4>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center"><span className="text-xs font-bold text-slate-400 uppercase tracking-widest">South Africa</span><span className="font-black text-emerald-600 text-xl">{item.sa}</span></div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-emerald-500" style={{ width: '30%' }}></div></div>
                            <div className="flex justify-between items-center text-sm text-slate-400"><span>UK (Equiv)</span><span className="font-bold">{item.uk}</span></div>
                            <div className="flex justify-between items-center text-sm text-slate-400"><span>USA (Equiv)</span><span className="font-bold">{item.usa}</span></div>
                         </div>
                      </div>
                   </Card>
                 ))}
              </div>
           </div>
        </section>

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
