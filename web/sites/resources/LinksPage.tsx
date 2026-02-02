
import React from 'react';
import { Card } from '../../components/ui/Card';
import { ExternalLink, Globe, ArrowLeft, ShieldCheck } from 'lucide-react';
import { MOCK_FINANCIAL_LINKS } from '../../lib/sanity';

export const LinksPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20 pt-12">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
        <ArrowLeft size={16} /> Back to Hub
      </button>

      <header className="space-y-4">
        <h1 className="text-5xl font-black text-slate-900 leading-tight">Financial <span className="text-emerald-500">Directory</span></h1>
        <p className="text-slate-500 text-xl leading-relaxed">Verified links to South African financial institutions, government portals, and regulatory bodies.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_FINANCIAL_LINKS.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="group">
            <Card className="hover:border-emerald-500 hover:shadow-xl transition-all p-8 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{link.category}</p>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{link.title}</h3>
                <p className="text-sm text-slate-500 flex items-center gap-1"><Globe size={12} /> {new URL(link.url).hostname}</p>
              </div>
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <ExternalLink size={20} />
              </div>
            </Card>
          </a>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
         <ShieldCheck size={64} className="text-emerald-500 shrink-0" />
         <div className="space-y-2">
            <h3 className="text-2xl font-black">Institutional Integrity</h3>
            <p className="text-slate-400">All links are verified periodically to ensure they lead to secure, official platforms. CalculatorHub is not affiliated with these institutions but provides this directory as a public service.</p>
         </div>
      </div>
    </div>
  );
};
