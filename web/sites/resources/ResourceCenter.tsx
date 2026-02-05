'use client';

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { LeadMagnetModal } from '../../components/shared/LeadMagnetModal';
import { FileText, ExternalLink, Book, BarChart3, Download, Calculator, PiggyBank, ShieldCheck } from 'lucide-react';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_GUIDES } from '../../lib/sanity';

export const ResourceCenter: React.FC<{ onNavigate: (path: string) => void; onOpenCallback?: () => void }> = ({ onNavigate, onOpenCallback }) => {
  const [modalState, setModalState] = useState<{ open: boolean; title: string; desc: string; slug: string }>({
    open: false,
    title: '',
    desc: '',
    slug: ''
  });

  const handleGuideClick = (guide: any) => {
    if (guide.slug === 'tfsa-guide') {
      onNavigate('tfsa-guide');
      return;
    }
    setModalState({
      open: true,
      title: `Unlock: ${guide.title}`,
      desc: guide.description,
      slug: guide.slug
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <LeadMagnetModal 
        isOpen={modalState.open} 
        onClose={() => setModalState({ ...modalState, open: false })}
        title={modalState.title}
        description={modalState.desc}
        guideSlug={modalState.slug}
      />

      <header className="text-center space-y-6">
        <h1 className="text-6xl font-black text-slate-900 leading-tight">Expert Finance <span className="text-emerald-500">Resource Hub</span></h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed">Verified guides, visual tax data, and educational clusters for the 2026 SARS tax year.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div onClick={() => onNavigate('refund-estimator')} className="bg-slate-900 rounded-[3rem] p-12 text-white cursor-pointer group hover:scale-[1.01] transition-all relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-3xl flex items-center justify-center text-slate-900 shadow-xl shadow-emerald-500/20">
                     <Calculator size={32} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">SARS Refund Estimator</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-sm">Estimate your likelihood of a refund based on Retirement Annuity, Medical and PAYE data.</p>
               </div>
               <div className="flex items-center gap-3 text-emerald-400 font-black uppercase text-xs tracking-widest group-hover:translate-x-3 transition-transform">
                  Launch Tool <Calculator size={20} />
               </div>
            </div>
         </div>

         <div onClick={() => handleGuideClick(MOCK_GUIDES[3])} className="bg-emerald-600 rounded-[3rem] p-12 text-white cursor-pointer group hover:scale-[1.01] transition-all relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-xl">
                     <PiggyBank size={32} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">TFSA Master Checklist</h3>
                  <p className="text-emerald-50 text-lg leading-relaxed max-w-sm">Maximize your R36,000 allowance correctly. View our 2026 checklist.</p>
               </div>
               <div className="flex items-center gap-3 text-white font-black uppercase text-xs tracking-widest group-hover:translate-x-3 transition-transform">
                  Open Checklist <BarChart3 size={20} />
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-black text-slate-900 flex items-center gap-4"><FileText className="text-emerald-500" /> Educational PDF Vault</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {MOCK_GUIDES.slice(0, 3).map((g, i) => (
                 <Card key={i} className="group hover:border-emerald-500 transition-all cursor-pointer border-slate-100 shadow-none hover:shadow-xl p-8 rounded-[2rem]">
                   <div onClick={() => handleGuideClick(g)} className="space-y-6 h-full flex flex-col justify-between">
                     <div className="space-y-4">
                        <div className="p-4 bg-slate-50 w-fit rounded-2xl text-slate-400 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-colors">
                           {i === 0 ? <Book size={24} /> : i === 1 ? <Download size={24} /> : <PiggyBank size={24} />}
                        </div>
                        <h4 className="font-black text-slate-800 text-2xl leading-tight">{g.title.replace('RA', 'Retirement Annuity')}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{g.description}</p>
                     </div>
                     <div className="flex items-center gap-3 text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]"><Download size={14} /> Access PDF</div>
                   </div>
                 </Card>
               ))}
             </div>
          </div>

          <Card title="Interactive Insights" className="border-none shadow-2xl bg-slate-900 text-white rounded-[3rem] p-12 overflow-hidden relative">
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full -mb-48 -mr-48"></div>
             <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:w-1/2 space-y-6">
                   <BarChart3 className="text-emerald-400" size={56} />
                   <h3 className="text-4xl font-black leading-tight">Visual Tax History</h3>
                   <p className="text-slate-400 text-lg">A decade of high-res analysis of SA tax brackets from 2016 to 2026.</p>
                   <button onClick={() => onNavigate('tax-history')} className="w-full py-5 bg-emerald-500 rounded-2xl font-black text-slate-900 hover:bg-emerald-400 transition-all shadow-xl">Launch Data Viz</button>
                </div>
                <div className="md:w-1/2 bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 space-y-4">
                   <h4 className="font-black text-emerald-400 uppercase text-xs tracking-widest">2026 Policy Shifts</h4>
                   <ul className="space-y-4">
                     {[{ t: 'Two-Pot Withdrawal Limits', d: 'New rules for early access to retirement funds.' }, { t: 'Solar Rebate Final Call', d: 'Claim 25% of panel costs before tax sunset.' }].map((u, i) => (
                       <li key={i} className="flex items-start gap-4 text-sm group">
                         <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 shrink-0 group-hover:scale-150 transition-all"></div>
                         <div><p className="font-bold text-white">{u.t}</p><p className="text-xs text-slate-400">{u.d}</p></div>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] text-white text-center space-y-6 shadow-2xl">
             <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto"><ShieldCheck size={40} className="text-blue-100" /></div>
             <div className="space-y-2">
                <h4 className="font-black text-2xl leading-tight">Compliance Help</h4>
                <p className="text-blue-100 leading-relaxed">Need a verified Tax Practitioner? Our verified network offers SARS audits from R750.</p>
             </div>
             <button onClick={onOpenCallback} className="w-full bg-white text-blue-600 font-black py-4 rounded-2xl shadow-xl hover:bg-blue-50 transition-colors">Book Consultation</button>
          </div>
          
          <Card title="Government Portals" className="bg-white border-slate-100 rounded-[2.5rem] p-8">
             <ul className="space-y-4">
               <li><a href="https://www.sars.gov.za" target="_blank" className="flex items-center justify-between group p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all"><span className="font-bold text-slate-700 group-hover:text-emerald-600">SARS eFiling</span><ExternalLink size={16} className="text-slate-400" /></a></li>
               <li><a href="https://www.treasury.gov.za" target="_blank" className="flex items-center justify-between group p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all"><span className="font-bold text-slate-700 group-hover:text-emerald-600">National Treasury</span><ExternalLink size={16} className="text-slate-400" /></a></li>
             </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};