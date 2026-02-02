
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTransferDuty, formatCurrency } from '../../lib/utils';
import { Home, Zap, ShieldCheck, ArrowRight, Sun } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

export const PropertyPage: React.FC<{ onNavigatePost: (slug: string) => void }> = ({ onNavigatePost }) => {
  const [propertyPrice, setPropertyPrice] = useState<string>('2500000');
  const [solarSpend, setSolarSpend] = useState<string>('0');
  const [duty, setDuty] = useState<number>(0);
  const content = MOCK_SITE_CONTENT.property;

  useEffect(() => {
    const val = parseFloat(propertyPrice) || 0;
    setDuty(calculateTransferDuty(val));
  }, [propertyPrice]);

  const solarCredit = Math.min(parseFloat(solarSpend) * 0.25 || 0, 15000);

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-[2rem] shadow-xl shadow-emerald-500/10"><Home size={40} /></div>
        <h1 className="text-5xl font-black text-slate-900 leading-tight">Property Transfer <span className="text-emerald-500">Duty 2026</span></h1>
        <p className="text-slate-500 text-xl leading-relaxed">{content.summary}</p>
      </div>

      <AdSpace slot="property-top" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          <Card title="Acquisition Price" className="border-slate-100 shadow-2xl p-8">
            <Input label="Purchase Price (ZAR)" type="number" value={propertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} className="text-2xl font-black" />
          </Card>

          <Card className="border-emerald-100 bg-emerald-50/30">
             <div className="space-y-6">
                <div className="flex items-center gap-3 text-emerald-700">
                   <Sun size={24} />
                   <h4 className="font-bold">2026 Solar Tax Credit</h4>
                </div>
                <Input 
                  label="Proposed Solar Panel Spend" 
                  type="number" 
                  value={solarSpend} 
                  onChange={(e) => setSolarSpend(e.target.value)} 
                  helperText="Claim 25% of panel cost (max R15,000 credit)."
                />
                <div className="pt-4 border-t border-emerald-100 flex justify-between items-center">
                   <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Potential Rebate</span>
                   <span className="font-black text-lg text-emerald-700">{formatCurrency(solarCredit)}</span>
                </div>
             </div>
          </Card>
          
          <AdSpace slot="property-sidebar" format="rectangle" />
        </div>
        
        <div className="lg:col-span-7 space-y-6">
          <Card className="bg-slate-900 text-white border-none shadow-2xl p-12 text-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Total SARS Transfer Duty</p>
             <h2 className="text-7xl font-black text-emerald-400 tracking-tighter mb-4">{formatCurrency(duty)}</h2>
             <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck size={14} /> Exempt Threshold: R1.1M
             </div>
          </Card>

          <div className="p-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] text-white relative overflow-hidden">
             <div className="absolute bottom-0 left-0 p-8 opacity-10"><Zap size={120} /></div>
             <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-black leading-tight">Save R15,000 on your Home Upgrade</h3>
                <p className="text-indigo-100 text-lg leading-relaxed">Purchasing a property with solar? Ensure the invoices are in your name to claim the Section 6B energy rebate this tax year.</p>
                <button className="flex items-center gap-2 font-black uppercase text-xs tracking-widest group">
                   Read the 2026 Energy Guide <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>
          <AdSpace slot="property-middle" />
        </div>
      </div>

      <section className="bg-white p-12 rounded-[3.5rem] border border-slate-100 space-y-8 shadow-sm">
        <h2 className="text-4xl font-black text-slate-900">{content.title}</h2>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
           <p>{content.summary}</p>
        </div>
      </section>

      <RecentPosts site="property" onNavigate={onNavigatePost} />

      <section className="space-y-8 py-12 border-t border-slate-100">
        <h3 className="text-3xl font-black text-slate-900">Transfer Duty Laws Explained</h3>
        <p className="text-slate-500 leading-relaxed text-lg italic">{content.deepFooter}</p>
        <AdSpace slot="property-footer" />
      </section>
    </div>
  );
};
