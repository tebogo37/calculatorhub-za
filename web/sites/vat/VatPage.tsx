
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { VAT_RATE } from '../../lib/constants';
import { formatCurrency } from '../../lib/utils';
import { Calculator, ArrowRightLeft, ShieldCheck, HelpCircle } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

export const VatPage: React.FC<{ onNavigatePost: (slug: string) => void }> = ({ onNavigatePost }) => {
  const [amount, setAmount] = useState<string>('1000');
  const [isInclusive, setIsInclusive] = useState<boolean>(false);
  const content = MOCK_SITE_CONTENT.vat;
  
  const [results, setResults] = useState({
    exclusive: 0,
    vat: 0,
    inclusive: 0
  });

  useEffect(() => {
    const val = parseFloat(amount) || 0;
    if (isInclusive) {
      const vat = val - (val / (1 + VAT_RATE));
      setResults({
        exclusive: val - vat,
        vat: vat,
        inclusive: val
      });
    } else {
      const vat = val * VAT_RATE;
      setResults({
        exclusive: val,
        vat: vat,
        inclusive: val + vat
      });
    }
  }, [amount, isInclusive]);

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
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700 py-12">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <div className="space-y-4 text-center md:text-left max-w-2xl">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 leading-tight">VAT Calculator <span className="text-emerald-500">15% SA</span></h1>
        <p className="text-slate-500 text-lg leading-relaxed">{content.summary}</p>
      </div>

      <AdSpace slot="vat-header-banner" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-6">
          <Card title="Input Settings" className="border-slate-100 shadow-xl p-8">
            <div className="space-y-6">
              <Input
                label="Transaction Amount (ZAR)"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg font-bold"
              />
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculation Type</label>
                <div className="flex bg-slate-100 p-1.5 rounded-xl">
                  <button onClick={() => setIsInclusive(false)} className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${!isInclusive ? 'bg-white shadow-md text-emerald-600' : 'text-slate-500'}`}>Add VAT</button>
                  <button onClick={() => setIsInclusive(true)} className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${isInclusive ? 'bg-white shadow-md text-emerald-600' : 'text-slate-500'}`}>Remove VAT</button>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-emerald-500" /> Current Rate: 15%
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-slate-50 border-slate-100 p-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Exclusive Amount</p>
              <p className="text-3xl font-black text-slate-900 tabular-nums">{formatCurrency(results.exclusive)}</p>
            </Card>
            <Card className="bg-blue-50 border-blue-100 p-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">VAT (15%)</p>
              <p className="text-3xl font-black text-blue-900 tabular-nums">{formatCurrency(results.vat)}</p>
            </Card>
          </div>
          <Card className="bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group p-12">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Inclusive Amount</p>
                  <p className="text-6xl font-black text-emerald-400 tabular-nums tracking-tighter">{formatCurrency(results.inclusive)}</p>
                </div>
                <button onClick={() => window.print()} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-95">Download PDF</button>
             </div>
          </Card>
        </div>
      </div>

      <section className="bg-white p-12 rounded-[3.5rem] border border-slate-100 space-y-8 shadow-sm">
        <h2 className="text-4xl font-black text-slate-900">VAT Policy FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.faqs.map((faq: any, i: number) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <RecentPosts site="vat" onNavigate={onNavigatePost} />
    </div>
  );
};
