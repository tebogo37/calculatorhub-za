
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input, Select } from '../../components/ui/Input';
import { calculateIncomeTax, formatCurrency } from '../../lib/utils';
import { Sparkles, HelpCircle, Calculator } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

export const TaxPage: React.FC<{ onNavigatePost: (path: string) => void }> = ({ onNavigatePost }) => {
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map((f: any) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 py-12">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">Budget 2026 Updated</div>
          <h1 className="text-5xl font-black text-slate-900 leading-tight">Income Tax <span className="text-emerald-500">Calculator</span></h1>
          <p className="text-slate-500 text-lg leading-relaxed">{content.summary}</p>
        </div>
        <button 
          onClick={() => onNavigatePost('refund-estimator')} 
          className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-[1.5rem] font-black hover:bg-slate-800 transition-all shadow-2xl active:scale-95"
        >
          <Sparkles className="text-emerald-400" size={24} /> Refund Estimator
        </button>
      </div>

      <AdSpace slot="tax-top" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <Card title="Taxpayer Profile" className="border-slate-100 shadow-xl p-8">
            <div className="space-y-6">
              <Input label="Salary Amount" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
              <Select label="Interval" value={period} onChange={(e: any) => setPeriod(e.target.value)}>
                <option value="annual">Annual</option>
                <option value="monthly">Monthly</option>
              </Select>
              <Input label="Age" type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value) || 0)} />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-slate-50 border-none p-8"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gross</p><p className="text-xl font-black tabular-nums">{formatCurrency(results.grossAnnual)}</p></Card>
            <Card className="bg-orange-50 border-none p-8"><p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Rate</p><p className="text-xl font-black tabular-nums">{results.effectiveRate.toFixed(1)}%</p></Card>
            <Card className="bg-red-50 border-none p-8"><p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Tax</p><p className="text-xl font-black tabular-nums">{formatCurrency(results.taxAnnual)}</p></Card>
          </div>
          <Card className="bg-slate-900 text-white border-none shadow-2xl p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 p-8 opacity-5"><Calculator size={120} /></div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Take-Home Pay</p>
             <p className="text-7xl font-black text-emerald-400 tabular-nums tracking-tighter">{formatCurrency(results.netMonthly)}</p>
          </Card>
        </div>
      </div>

      <section className="bg-white p-12 rounded-[3rem] border border-slate-100 space-y-8 shadow-sm">
        <h2 className="text-4xl font-black text-slate-900">Income Tax FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.faqs.map((faq: any, i: number) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <RecentPosts site="tax" onNavigate={onNavigatePost} />
    </div>
  );
};
