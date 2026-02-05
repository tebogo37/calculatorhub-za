'use client';

import React from 'react';
import { Card } from '../../components/ui/Card';
import { ArrowLeft, TrendingUp, Activity, Share2, HelpCircle, CheckCircle } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';
import { MOCK_FAQS } from '../../lib/sanity';

export const TaxHistory: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const data = [
    { year: '2016', rate: 41, threshold: 181900 },
    { year: '2017', rate: 45, threshold: 189880, event: '45% Bracket Intro' },
    { year: '2018', rate: 45, threshold: 189880, event: 'VAT Hike to 15%' },
    { year: '2019', rate: 45, threshold: 195850 },
    { year: '2020', rate: 45, threshold: 205900 },
    { year: '2021', rate: 45, threshold: 216200 },
    { year: '2022', rate: 45, threshold: 226000 },
    { year: '2023', rate: 45, threshold: 237100 },
    { year: '2024', rate: 45, threshold: 237100, event: 'Two-Pot Launch' },
    { year: '2025', rate: 45, threshold: 237100 },
    { year: '2026', rate: 45, threshold: 237100 },
  ];

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'SA Tax History 2016-2026',
        text: 'Visualizing 10 years of South African tax policy shifts.',
        url: typeof window !== 'undefined' ? window.location.href : '',
      });
    } catch (err) {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    }
  };

  const chartHeight = 300;
  const chartWidth = 800;
  const padding = 40;
  const maxRate = 50;
  const points = data.map((d, i) => {
    const x = padding + (i * (chartWidth - 2 * padding) / (data.length - 1));
    const y = chartHeight - padding - ((d.rate / maxRate) * (chartHeight - 2 * padding));
    return `${x},${y}`;
  }).join(' ');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": MOCK_FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20 animate-in fade-in duration-700 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Hub
        </button>
        <button onClick={handleShare} className="px-6 py-3 bg-slate-900 text-white rounded-xl flex items-center gap-2 font-black uppercase text-xs hover:bg-slate-800 transition-all">
          <Share2 size={18} /> Share Analysis
        </button>
      </div>

      <header className="space-y-4 max-w-4xl">
        <h1 className="text-6xl font-black text-slate-900 leading-tight">
          SA Tax Trajectory <span className="text-emerald-500">2016 - 2026</span>
        </h1>
        <p className="text-slate-500 text-2xl leading-relaxed font-medium">
          Tracking a decade of fiscal evolution: significant marginal rate shifts and the stagnation of tax brackets against inflation.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card className="lg:col-span-3 space-y-10 overflow-hidden p-12 rounded-[4rem] border-slate-100 shadow-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black flex items-center gap-3"><Activity className="text-emerald-500" /> Marginal Tax Rate shifts</h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Validated SARS Statistics</span>
          </div>

          <div className="relative w-full h-[400px]">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full">
              {[0, 10, 20, 30, 40, 50].map((v) => {
                const y = chartHeight - padding - ((v / maxRate) * (chartHeight - 2 * padding));
                return (
                  <g key={v}>
                    <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke="#f1f5f9" strokeWidth="1" />
                    <text x={padding - 10} y={y + 4} textAnchor="end" className="text-[10px] fill-slate-300 font-bold">{v}%</text>
                  </g>
                );
              })}
              <path 
                d={`M ${padding},${chartHeight - padding} L ${points} L ${chartWidth - padding},${chartHeight - padding} Z`}
                className="fill-emerald-500/5 transition-all duration-1000"
              />
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
              />
              {data.map((d, i) => {
                const x = padding + (i * (chartWidth - 2 * padding) / (data.length - 1));
                const y = chartHeight - padding - ((d.rate / maxRate) * (chartHeight - 2 * padding));
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="6" className="fill-white stroke-emerald-500 stroke-[3] transition-all cursor-crosshair" />
                    {d.event && (
                      <foreignObject x={x - 50} y={y - 60} width="100" height="50">
                        <div className="bg-slate-900 text-white text-[8px] font-black uppercase p-2 rounded-lg text-center shadow-lg transform -rotate-3">{d.event}</div>
                      </foreignObject>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50">
             <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2"><TrendingUp className="text-blue-500" /> Policy Shift: 2017</h4>
                <p className="text-slate-500 leading-relaxed">The 2017 Budget introduced the 45% top marginal income tax rate for taxable income above R1.5 million.</p>
             </div>
             <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2"><CheckCircle className="text-emerald-500" /> Bracket Stagnation</h4>
                <p className="text-slate-500 leading-relaxed">Tax thresholds have remained relatively flat in 2025/2026 to increase revenue, causing 'Fiscal Drag'.</p>
             </div>
          </div>
        </Card>

        <div className="space-y-8">
           <Card title="Threshold Tracker" className="border-slate-100 rounded-[2.5rem] p-8">
              <div className="space-y-4">
                 <p className="text-xs text-slate-500 uppercase font-black tracking-widest text-center">Annual Entry Point</p>
                 <div className="space-y-2">
                    {data.slice(-5).reverse().map(d => (
                       <div key={d.year} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all cursor-default">
                          <span className="text-sm font-bold">{d.year}</span>
                          <span className="text-sm font-black text-slate-900">{formatCurrency(d.threshold)}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </Card>

           <div className="p-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3rem] text-white space-y-4 shadow-2xl">
              <HelpCircle className="text-emerald-200" size={32} />
              <h4 className="text-2xl font-black leading-tight">Professional Insights</h4>
              <p className="text-emerald-100 text-sm leading-relaxed italic">Download the full historical whitepaper from the Resource Center for deep policy analysis.</p>
           </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto space-y-12">
         <h2 className="text-4xl font-black text-slate-900 text-center">Historical Context FAQ</h2>
         <div className="grid grid-cols-1 gap-6">
            {MOCK_FAQS.map((faq, i) => (
              <Card key={i} className="p-10 rounded-[2.5rem] border-slate-100 shadow-sm hover:shadow-xl transition-all">
                 <h4 className="text-2xl font-black text-slate-900 mb-4">{faq.q}</h4>
                 <p className="text-slate-500 text-lg leading-relaxed">{faq.a}</p>
              </Card>
            ))}
         </div>
      </section>
    </div>
  );
};