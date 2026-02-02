
import React from 'react';
import { Card } from '../../components/ui/Card';
import { LeadMagnet } from '../../components/shared/LeadMagnet';
import { ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, FileText, Target } from 'lucide-react';
import { AdSpace } from '../../components/shared/AdSpace';

export const TFSAGuide: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const checklist = [
    { t: 'R36,000 Annual Limit', d: 'Maximum amount you can contribute between March 1st and Feb 28th.' },
    { t: 'R500,000 Lifetime Limit', d: 'Total cumulative principal contribution limit for your life.' },
    { t: '40% Penalty Clause', d: 'SARS taxes 40% of any amount contributed above the R36,000 limit.' },
    { t: 'Tax-Free Growth', d: 'Zero tax on Dividends, Capital Gains, or Interest within the account.' },
    { t: 'Withdrawal Rules', d: 'You can withdraw anytime, but withdrawn amounts do not reset your lifetime limit.' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
        <ArrowLeft size={16} /> Back to Resources
      </button>

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
          Section 12T - Wealth Creation
        </div>
        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          TFSA Master <span className="text-emerald-500">Checklist 2026</span>
        </h1>
        <p className="text-slate-500 text-xl leading-relaxed">
          The Tax-Free Savings Account (TFSA) is South Africa's best investment vehicle. Are you maximizing your R36,000 allowance correctly?
        </p>
      </header>

      <AdSpace slot="tfsa-top" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Guide Summary Checklist" className="shadow-2xl border-emerald-100">
           <div className="space-y-6">
              {checklist.map((r, i) => (
                <div key={i} className="flex gap-4 group">
                   <div className="mt-1 flex-shrink-0"><CheckCircle2 className="text-emerald-500" size={20} /></div>
                   <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{r.t}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{r.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </Card>

        <div className="space-y-6">
           <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4 shadow-xl">
              <Sparkles className="text-emerald-400" size={32} />
              <h4 className="text-xl font-bold">Pro Tip: Childrens TFSA</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Opening a TFSA for your child at birth allows them to hit their R500,000 lifetime limit by age 14.
              </p>
           </div>
           <Card className="bg-orange-50 border-orange-100">
              <div className="flex gap-4">
                 <ShieldAlert className="text-orange-600 shrink-0" size={24} />
                 <div className="space-y-2">
                    <h4 className="font-bold text-orange-900">Avoid the "Bank Trap"</h4>
                    <p className="text-xs text-orange-800 leading-relaxed">
                      Use it for <strong>ETFs</strong> where capital gains tax would otherwise be significant.
                    </p>
                 </div>
              </div>
           </Card>
        </div>
      </div>

      <LeadMagnet 
        title="Download TFSA 2026 PDF Cheat Sheet"
        description="Get a high-resolution version of this checklist plus a list of providers."
        buttonText="Get PDF Guide"
      />
    </div>
  );
};
