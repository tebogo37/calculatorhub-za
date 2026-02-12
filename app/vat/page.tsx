
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BarChart3, ShieldCheck } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { VAT_RATE } from '@/lib/constants';

export default function VatPage() {
  const [amount, setAmount] = useState<string>('1000');
  const [isInclusive, setIsInclusive] = useState(false);
  const [results, setResults] = useState({ ex: 0, vat: 0, inc: 0 });

  useEffect(() => {
    const val = parseFloat(amount) || 0;
    if (isInclusive) {
      const vat = val - (val / (1 + VAT_RATE));
      setResults({ ex: val - vat, vat, inc: val });
    } else {
      const vat = val * VAT_RATE;
      setResults({ ex: val, vat, inc: val + vat });
    }
  }, [amount, isInclusive]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 p-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-black text-xs uppercase tracking-widest">
            <ArrowLeft size={16} /> Back
          </Link>
          <span className="font-black uppercase text-[10px] tracking-widest text-slate-300">VAT Core / 15%</span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tighter">VAT <span className="text-emerald-500">15%</span></h1>
          <p className="text-slate-500 text-xl font-medium max-w-xl leading-relaxed">Calculate add-on or inclusive VAT components for South African transactions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
             <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Amount (ZAR)</label>
                   <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-2xl font-black focus:outline-none" />
                </div>
                <div className="flex bg-white p-1 rounded-xl border border-slate-200">
                  <button onClick={() => setIsInclusive(false)} className={`flex-1 py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${!isInclusive ? 'bg-slate-950 text-white shadow-xl' : 'text-slate-400'}`}>Excl.</button>
                  <button onClick={() => setIsInclusive(true)} className={`flex-1 py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${isInclusive ? 'bg-slate-950 text-white shadow-xl' : 'text-slate-400'}`}>Incl.</button>
                </div>
             </div>
             <div className="flex items-center gap-2 px-6 py-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-emerald-600">
                <ShieldCheck size={14} /> SARS Standard Rate: 15%
             </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem] space-y-4">
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Exclusive Amount</p>
                   <h2 className="text-4xl font-black text-slate-900 tracking-tight tabular-nums">{formatCurrency(results.ex)}</h2>
                </div>
                <div className="p-10 bg-blue-50 border border-blue-100 rounded-[3rem] space-y-4">
                   <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest">VAT Portion</p>
                   <h2 className="text-4xl font-black text-blue-900 tracking-tight tabular-nums">{formatCurrency(results.vat)}</h2>
                </div>
             </div>
             <div className="p-12 bg-slate-950 rounded-[4rem] text-center shadow-2xl">
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">Total Inclusive Amount</p>
                <h3 className="text-8xl font-black text-emerald-400 tracking-tighter tabular-nums">{formatCurrency(results.inc)}</h3>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
