
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, AlertTriangle, Wallet } from 'lucide-react';
import { calculateTwoPotTax, formatCurrency } from '@/lib/utils';

export default function TwoPotPage() {
  const [income, setIncome] = useState<string>('450000');
  const [withdrawal, setWithdrawal] = useState<string>('30000');
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    setResults(calculateTwoPotTax(parseFloat(income) || 0, parseFloat(withdrawal) || 0));
  }, [income, withdrawal]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 p-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-black text-xs uppercase tracking-widest">
            <ArrowLeft size={16} /> Back
          </Link>
          <span className="font-black uppercase text-[10px] tracking-widest text-slate-300">Savings Pot Engine / 2026</span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest">Effective Sept 2024</div>
          <h1 className="text-6xl font-black tracking-tighter">TWO-POT <span className="text-orange-500">TAX</span></h1>
          <p className="text-slate-500 text-xl font-medium max-w-xl leading-relaxed">Calculate the immediate tax impact of accessing your retirement savings early.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
             <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Annual Taxable Income</label>
                   <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-2xl font-black focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Withdrawal Amount</label>
                   <input type="number" value={withdrawal} onChange={(e) => setWithdrawal(e.target.value)} className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-2xl font-black focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
             </div>

             <div className="p-8 bg-orange-50 border border-orange-100 rounded-[2.5rem] flex gap-4">
                <AlertTriangle className="text-orange-600 shrink-0" size={24} />
                <p className="text-sm font-bold text-orange-900 leading-relaxed">Early access withdrawals are taxed as gross income at your marginal rate.</p>
             </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
             {results && (
               <>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-10 bg-slate-950 rounded-[3rem] text-white space-y-4 shadow-2xl">
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Immediate SARS Cut</p>
                       <h2 className="text-5xl font-black text-red-400 tracking-tighter tabular-nums">{formatCurrency(results.taxOnWithdrawal)}</h2>
                    </div>
                    <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem] space-y-4">
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Effective Rate</p>
                       <h2 className="text-5xl font-black text-slate-900 tracking-tighter tabular-nums">{results.effectiveRate.toFixed(1)}%</h2>
                    </div>
                 </div>

                 <div className="p-12 bg-slate-950 rounded-[3.5rem] flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><Wallet size={120} className="text-white" /></div>
                    <div className="space-y-2 relative z-10">
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Est. Cash in Hand (Net)</p>
                       <h3 className="text-8xl font-black text-emerald-400 tracking-tighter tabular-nums">{formatCurrency(results.netAmount)}</h3>
                    </div>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Includes admin fee of {formatCurrency(results.adminFee)}</p>
                 </div>
               </>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}
