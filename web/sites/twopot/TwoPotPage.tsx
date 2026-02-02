
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTwoPotTax, formatCurrency } from '../../lib/utils';
import { Zap, ShieldCheck, AlertTriangle, Wallet, Info } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

export const TwoPotPage: React.FC<{ onNavigatePost: (slug: string) => void }> = ({ onNavigatePost }) => {
  const [income, setIncome] = useState<string>('450000');
  const [withdrawal, setWithdrawal] = useState<string>('30000');
  const [results, setResults] = useState<any>(null);
  const content = MOCK_SITE_CONTENT.twopot;

  useEffect(() => {
    const incVal = parseFloat(income) || 0;
    const withVal = parseFloat(withdrawal) || 0;
    setResults(calculateTwoPotTax(incVal, withVal));
  }, [income, withdrawal]);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-widest">Effective Sept 2024</div>
          <h1 className="text-5xl font-black text-slate-900 leading-tight">Two-Pot <span className="text-orange-500">Calculator</span></h1>
          <p className="text-slate-500 text-lg leading-relaxed">{content.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <Card title="Withdrawal Profile" className="border-slate-100 shadow-xl p-8">
            <div className="space-y-6">
              <Input label="Annual Gross Income" type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
              <Input label="Withdrawal Amount (Min R2000)" type="number" value={withdrawal} onChange={(e) => setWithdrawal(e.target.value)} />
              <p className="text-[10px] text-slate-400 font-bold uppercase">Note: Limited to 1/3 of Savings Pot annually.</p>
            </div>
          </Card>

          <div className="p-8 bg-orange-50 border border-orange-100 rounded-[2rem] space-y-4">
             <AlertTriangle className="text-orange-600" size={24} />
             <h4 className="font-bold text-orange-900 leading-tight">Early Access Penalty</h4>
             <p className="text-sm text-orange-800 leading-relaxed">Withdrawals are taxed as income. If you are in the 45% bracket, you only keep R1,650 for every R3,000 withdrawn.</p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {results && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-slate-50 border-none p-8"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Admin Fee</p><p className="text-xl font-black tabular-nums">{formatCurrency(results.adminFee)}</p></Card>
                <Card className="bg-orange-50 border-none p-8"><p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Tax Rate</p><p className="text-xl font-black tabular-nums">{results.effectiveRate.toFixed(1)}%</p></Card>
                <Card className="bg-red-50 border-none p-8"><p className="text-[10px] font-black text-red-400 uppercase tracking-widest">SARS Cut</p><p className="text-xl font-black tabular-nums">{formatCurrency(results.taxOnWithdrawal)}</p></Card>
              </div>
              <Card className="bg-slate-900 text-white border-none shadow-2xl p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5"><Wallet size={120} /></div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Total Net Payout</p>
                <p className="text-7xl font-black text-emerald-400 tabular-nums tracking-tighter">{formatCurrency(results.netAmount)}</p>
              </Card>
            </>
          )}
        </div>
      </div>

      <section className="bg-white p-12 rounded-[3.5rem] border border-slate-100 space-y-8 shadow-sm">
        <h2 className="text-4xl font-black text-slate-900">Savings Pot Rules</h2>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
           <p>{content.deepFooter}</p>
        </div>
        
        <div className="pt-8 border-t border-slate-100">
           <h3 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.faqs.map((faq: any, i: number) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                   <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <RecentPosts site="twopot" onNavigate={onNavigatePost} />
    </div>
  );
};
