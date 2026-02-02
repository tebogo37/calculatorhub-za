
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTransferDuty, formatCurrency } from '../../lib/utils';
import { Home, Key, FileText, CheckCircle2, ShieldAlert, Info } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

export const PropertyPage: React.FC<{ onNavigatePost: (slug: string) => void }> = ({ onNavigatePost }) => {
  const [propertyPrice, setPropertyPrice] = useState<string>('2500000');
  const [duty, setDuty] = useState<number>(0);
  const content = MOCK_SITE_CONTENT.property;

  useEffect(() => {
    const val = parseFloat(propertyPrice) || 0;
    setDuty(calculateTransferDuty(val));
  }, [propertyPrice]);

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
          <AdSpace slot="property-sidebar" format="rectangle" />
        </div>
        <div className="lg:col-span-7 space-y-6">
          <Card className="bg-slate-900 text-white border-none shadow-2xl p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32"></div>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Total SARS Transfer Duty</p>
             <h2 className="text-7xl font-black text-emerald-400 tracking-tighter">{formatCurrency(duty)}</h2>
          </Card>
          <AdSpace slot="property-middle" />
        </div>
      </div>

      <section className="bg-white p-12 rounded-[3.5rem] border border-slate-100 space-y-8">
        <h2 className="text-4xl font-black text-slate-900">{content.title}</h2>
        <p className="text-slate-600 leading-relaxed text-lg">{content.summary}</p>
      </section>

      <RecentPosts site="property" onNavigate={onNavigatePost} />

      <section className="space-y-8 py-12 border-t border-slate-100">
        <h3 className="text-2xl font-black text-slate-900">Transfer Duty Laws Explained</h3>
        <p className="text-slate-500 leading-relaxed text-sm">{content.deepFooter}</p>
        <AdSpace slot="property-footer" />
      </section>
    </div>
  );
};
