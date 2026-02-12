
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, TrendingUp } from 'lucide-react';
import { calculateIncomeTax, formatCurrency } from '@/lib/utils';

export default function TaxPage() {
  const [salary, setSalary] = useState<string>('450000');
  const [period, setPeriod] = useState<'monthly' | 'annual'>('annual');
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const val = parseFloat(salary) || 0;
    const annual = period === 'monthly' ? val * 12 : val;
    setTax(calculateIncomeTax(annual));
  }, [salary, period]);

  const annualSalary = period === 'monthly' ? (parseFloat(salary) || 0) * 12 : (parseFloat(salary) || 0);
  const netAnnual = annualSalary - tax;

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 p-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-black text-xs uppercase tracking-widest">
            <ArrowLeft size={16} /> Back
          </Link>
          <span className="font-black uppercase text-[10px] tracking-widest text-slate-300">Income Tax Engine / 2026</span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tighter">PAYE <span className="text-emerald-500">2026</span></h1>
          <p className="text-slate-500 text-xl font-medium max-w-xl leading-relaxed">Professional modeling of your take-home pay including the latest R17,235 rebate.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Gross Remuneration</label>
                  <input 
                    type="number" 
                    value={salary} 
                    onChange={(e) => setSalary(e.target.value)} 
                    className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-2xl font-black focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
               </div>
               <div className="flex bg-white p-1 rounded-xl border border-slate-200">
                  <button onClick={() => setPeriod('annual')} className={`flex-1 py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${period === 'annual' ? 'bg-slate-950 text-white' : 'text-slate-400'}`}>Annual</button>
                  <button onClick={() => setPeriod('monthly')} className={`flex-1 py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${period === 'monthly' ? 'bg-slate-950 text-white' : 'text-slate-400'}`}>Monthly</button>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-10 bg-slate-950 rounded-[3rem] text-white space-y-4 shadow-2xl">
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Annual Net Income</p>
                   <h2 className="text-5xl font-black text-emerald-400 tracking-tighter tabular-nums">{formatCurrency(netAnnual)}</h2>
                </div>
                <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem] space-y-4">
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Effective Tax Rate</p>
                   <h2 className="text-5xl font-black text-slate-900 tracking-tighter tabular-nums">
                      {annualSalary > 0 ? ((tax / annualSalary) * 100).toFixed(1) : '0.0'}%
                   </h2>
                </div>
             </div>

             <div className="p-12 bg-emerald-50 border border-emerald-100 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
                <div className="space-y-2">
                   <p className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Monthly Take-Home</p>
                   <h3 className="text-7xl font-black text-slate-950 tracking-tighter tabular-nums">{formatCurrency(netAnnual / 12)}</h3>
                </div>
                <div className="h-20 w-px bg-emerald-200 hidden md:block"></div>
                <div className="space-y-1 text-right">
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">SARS Deduction (Annual)</p>
                   <p className="text-xl font-black text-red-500 tabular-nums">{formatCurrency(tax)}</p>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
