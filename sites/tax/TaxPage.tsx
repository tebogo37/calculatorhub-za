
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input, Select } from '../../components/ui/Input';
import { calculateIncomeTax, formatCurrency } from '../../lib/utils';
import { Info, TrendingUp, Wallet, ArrowUpCircle, Sparkles, PieChart, ShieldCheck } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

export const TaxPage: React.FC<{ onNavigatePost: (slug: string) => void }> = ({ onNavigatePost }) => {
  const [salary, setSalary] = useState<string>('450000');
  const [period, setPeriod] = useState<'monthly' | 'annual'>('annual');
  const [age, setAge] = useState<number>(25);
  const content = MOCK_SITE_CONTENT.tax;
  
  const [results, setResults] = useState({
    grossAnnual: 0,
    taxAnnual: 0,
    netAnnual: 0,
    netMonthly: 0,
    effectiveRate: 0,
  });

  useEffect(() => {
    const val = parseFloat(salary) || 0;
    const grossAnnual = period === 'monthly' ? val * 12 : val;
    const taxAnnual = calculateIncomeTax(grossAnnual, age);
    const netAnnual = grossAnnual - taxAnnual;
    setResults({ grossAnnual, taxAnnual, netAnnual, netMonthly: netAnnual / 12, effectiveRate: grossAnnual > 0 ? (taxAnnual / grossAnnual) * 100 : 0 });
  }, [salary, period, age]);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">Budget 2026 Updated</div>
          <h1 className="text-5xl font-black text-slate-900 leading-tight">Income Tax <span className="text-emerald-500">Calculator</span></h1>
          <p className="text-slate-500 text-lg">{content.summary}</p>
        </div>
        <button onClick={() => window.history.pushState({}, '', '/refund-estimator')} className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-[1.5rem] font-black hover:bg-slate-800 transition-all shadow-2xl">
          <Sparkles className="text-emerald-400" size={24} /> Refund Estimator
        </button>
      </div>

      <AdSpace slot="tax-top" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <Card title="Taxpayer Profile" className="border-slate-100 shadow-xl">
            <div className="space-y-6">
              <Input label="Salary Amount" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
              <Select label="Interval" value={period} onChange={(e: any) => setPeriod(e.target.value)}>
                <option value="annual">Annual</option>
                <option value="monthly">Monthly</option>
              </Select>
              <Input label="Age" type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value) || 0)} />
            </div>
          </Card>
          <AdSpace slot="tax-sidebar" format="rectangle" />
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-slate-50 border-none"><p className="text-[10px] font-black text-slate-400 uppercase">Gross</p><p className="text-xl font-black">{formatCurrency(results.grossAnnual)}</p></Card>
            <Card className="bg-orange-50 border-none"><p className="text-[10px] font-black text-orange-400 uppercase">Rate</p><p className="text-xl font-black">{results.effectiveRate.toFixed(1)}%</p></Card>
            <Card className="bg-red-50 border-none"><p className="text-[10px] font-black text-red-400 uppercase">Tax</p><p className="text-xl font-black">{formatCurrency(results.taxAnnual)}</p></Card>
          </div>
          <Card className="bg-slate-900 text-white border-none shadow-2xl p-10 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Take-Home Pay</p>
            <p className="text-7xl font-black text-emerald-400 tabular-nums tracking-tighter">{formatCurrency(results.netMonthly)}</p>
          </Card>
          <AdSpace slot="tax-middle" />
        </div>
      </div>

      <section className="bg-white p-12 rounded-[3rem] border border-slate-100 space-y-8">
        <h2 className="text-4xl font-black text-slate-900">{content.title}</h2>
        <p className="text-slate-600 leading-relaxed text-lg">{content.summary}</p>
      </section>

      <RecentPosts site="tax" onNavigate={onNavigatePost} />

      <section className="space-y-8 py-12 border-t border-slate-100">
        <h3 className="text-2xl font-black text-slate-900">PAYE Deep Dive</h3>
        <p className="text-slate-500 leading-relaxed text-sm">{content.deepFooter}</p>
        <AdSpace slot="tax-footer" />
      </section>
    </div>
  );
};
