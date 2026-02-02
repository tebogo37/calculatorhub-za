
import React from 'react';
import { Card } from '../../components/ui/Card';
import { ArrowLeft, TrendingUp, Info, Activity, AlertTriangle, Download, Share2 } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';
import { AdSpace } from '../../components/shared/AdSpace';

export const TaxHistory: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  // Verified Historical Data (SARS Budget Reviews)
  const data = [
    { year: '2016', rate: 41, threshold: 181900, rebate: 13257 },
    { year: '2017', rate: 41, threshold: 189880, rebate: 13500 },
    { year: '2018', rate: 45, threshold: 189880, rebate: 13635 },
    { year: '2019', rate: 45, threshold: 195850, rebate: 14067 },
    { year: '2020', rate: 45, threshold: 205900, rebate: 14220 },
    { year: '2021', rate: 45, threshold: 216200, rebate: 14958 },
    { year: '2022', rate: 45, threshold: 226000, rebate: 15714 },
    { year: '2023', rate: 45, threshold: 237100, rebate: 16425 },
    { year: '2024', rate: 45, threshold: 237100, rebate: 17235 },
    { year: '2025', rate: 45, threshold: 237100, rebate: 17235 },
    { year: '2026', rate: 45, threshold: 237100, rebate: 17235 },
  ];

  const chartHeight = 300;
  const chartWidth = 800;
  const padding = 40;
  const maxRate = 50;

  // Path Generation for Line Chart
  const points = data.map((d, i) => {
    const x = padding + (i * (chartWidth - 2 * padding) / (data.length - 1));
    const y = chartHeight - padding - ((d.rate / maxRate) * (chartHeight - 2 * padding));
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Resources
        </button>
        <div className="flex gap-2">
           <button className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:bg-slate-200 transition-all"><Share2 size={18} /></button>
           <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-all">
             <Download size={14} /> Export Dataset
           </button>
        </div>
      </div>

      <header className="space-y-4">
        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          SA Tax Trajectory <span className="text-emerald-500">2016 - 2026</span>
        </h1>
        <p className="text-slate-500 text-xl max-w-3xl leading-relaxed">
          The ultimate visual guide to South Africa's fiscal evolution. Analyzing the steady rise of top-tier rates and the stagnation of tax brackets against inflation.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card className="lg:col-span-3 space-y-10 overflow-hidden">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold flex items-center gap-2"><Activity className="text-emerald-500" /> Top Marginal Tax Rate Line</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Validated SARS Statistics</span>
          </div>

          <div className="relative w-full h-[400px] group">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full">
              {/* Background Grid */}
              {[0, 10, 20, 30, 40, 50].map((v) => {
                const y = chartHeight - padding - ((v / maxRate) * (chartHeight - 2 * padding));
                return (
                  <g key={v}>
                    <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke="#f1f5f9" strokeWidth="1" />
                    <text x={padding - 10} y={y + 4} textAnchor="end" className="text-[10px] fill-slate-300 font-bold">{v}%</text>
                  </g>
                );
              })}

              {/* Area under curve */}
              <path 
                d={`M ${padding},${chartHeight - padding} L ${points} L ${chartWidth - padding},${chartHeight - padding} Z`}
                className="fill-emerald-500/5 transition-all duration-1000"
              />

              {/* The Line */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
                className="drop-shadow-lg animate-draw"
              />

              {/* Data Points */}
              {data.map((d, i) => {
                const x = padding + (i * (chartWidth - 2 * padding) / (data.length - 1));
                const y = chartHeight - padding - ((d.rate / maxRate) * (chartHeight - 2 * padding));
                return (
                  <circle 
                    key={i} cx={x} cy={y} r="6" 
                    className="fill-white stroke-emerald-500 stroke-[3] hover:r-8 transition-all cursor-crosshair" 
                  />
                );
              })}

              {/* Years Axis */}
              {data.map((d, i) => {
                if (i % 2 !== 0) return null;
                const x = padding + (i * (chartWidth - 2 * padding) / (data.length - 1));
                return <text key={i} x={x} y={chartHeight - 10} textAnchor="middle" className="text-[10px] fill-slate-400 font-bold">{d.year}</text>;
              })}
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <AlertTriangle size={18} className="text-orange-500" /> Fiscal Drag Impact
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                While the top rate has remained at 45% since 2018, the threshold has only increased by ~25% while cumulative inflation (CPI) has exceeded 40%. This is "Bracket Creep" in action.
              </p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                <TrendingUp size={18} /> Backlink Opportunity
              </h4>
              <p className="text-sm text-emerald-800/80 leading-relaxed">
                This chart demonstrates a historical plateau. Feel free to use this data for academic or financial reporting with a link to CalculatorHub.co.za.
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
           <Card title="Threshold Tracker" className="border-slate-100">
              <div className="space-y-4">
                 <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Annual Entry Point</p>
                 <div className="space-y-2">
                    {data.slice(-4).reverse().map(d => (
                       <div key={d.year} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                          <span className="text-sm font-bold text-slate-600">{d.year}</span>
                          <span className="text-sm font-black text-slate-900">{formatCurrency(d.threshold)}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </Card>

           <AdSpace slot="history-sidebar" format="rectangle" />

           <Card className="bg-slate-900 text-white border-none shadow-2xl">
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                    <Activity size={24} />
                 </div>
                 <h4 className="font-bold">What is next for 2027?</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">
                    Analysts predict a potential decrease in the primary rebate to fund social grants, effectively lowering the tax-free ceiling. Stay tuned.
                 </p>
                 <button className="w-full py-3 bg-emerald-500 text-slate-900 font-bold rounded-xl text-xs hover:bg-emerald-400 transition-all">Get Alert Notifications</button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};
