
import React, { useState } from 'react';
import { Card } from '../../../web/components/ui/Card';
import { LeadMagnet } from '../../../web/components/shared/LeadMagnet';
import { LeadMagnetModal } from '../../../web/components/shared/LeadMagnetModal';
import { FileText, ExternalLink, Book, BarChart3, Download, Calculator, PiggyBank, ShieldCheck } from 'lucide-react';
import { AdSpace } from '../../../web/components/shared/AdSpace';

export const ResourceCenter: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [modalState, setModalState] = useState<{ open: boolean; title: string; desc: string }>({
    open: false,
    title: '',
    desc: ''
  });

  const guides = [
    { 
      title: "2026 Personal Tax Pocket Guide", 
      desc: "Printable PDF with all thresholds, rebates, and tax brackets for the 2025/26 cycle.", 
      icon: <Book />,
      slug: 'tax-pocket-guide'
    },
    { 
      title: "Property Cost Checklist", 
      desc: "Detailed breakdown of hidden fees: Conveyancing, Bond Reg, and Transfer Duty rates.", 
      icon: <Download />,
      slug: 'property-checklist'
    },
    { 
      title: "Retirement Annuity Pro Tips", 
      desc: "Master Section 11F. How to calculate your max contribution for the highest refund.", 
      icon: <PiggyBank />,
      slug: 'ra-pro-tips'
    },
    { 
      title: "TFSA Master Guide", 
      desc: "The 'Golden Rules' of Tax-Free Savings in SA. Limits, penalties and best providers.", 
      icon: <ShieldCheck />,
      slug: 'tfsa-guide'
    },
  ];

  const handleGuideClick = (guide: any) => {
    if (guide.slug === 'tfsa-guide') {
      onNavigate('tfsa-guide');
      return;
    }
    setModalState({
      open: true,
      title: `Download: ${guide.title}`,
      desc: guide.desc
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <LeadMagnetModal 
        isOpen={modalState.open} 
        onClose={() => setModalState({ ...modalState, open: false })}
        title={modalState.title}
        description={modalState.desc}
        onSuccess={(email) => console.log("Collected email:", email)}
      />

      <header className="text-center space-y-4">
        <h1 className="text-5xl font-black text-slate-900 leading-tight">Expert Finance <span className="text-emerald-500">Resource Hub</span></h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Downloadable guides, visual data analysis, and educational clusters for the 2026 SARS tax year.</p>
      </header>

      <AdSpace slot="resource-top" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div 
           onClick={() => onNavigate('refund-estimator')}
           className="bg-slate-900 rounded-[2.5rem] p-10 text-white cursor-pointer group hover:scale-[1.01] transition-all relative overflow-hidden shadow-2xl shadow-slate-900/20"
         >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div className="space-y-4">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-xl shadow-emerald-500/20">
                     <Calculator size={28} />
                  </div>
                  <h3 className="text-3xl font-black">SARS Refund Estimator</h3>
                  <p className="text-slate-400 max-w-xs">Interactive tool: Estimate your cash back based on RA, Medical Aid and Income levels.</p>
               </div>
               <div className="mt-8 flex items-center gap-2 text-emerald-400 font-bold group-hover:translate-x-2 transition-transform uppercase text-xs tracking-widest">
                  Launch Premium Tool <Calculator size={16} />
               </div>
            </div>
         </div>

         <div 
           onClick={() => handleGuideClick(guides[3])}
           className="bg-emerald-600 rounded-[2.5rem] p-10 text-white cursor-pointer group hover:scale-[1.01] transition-all relative overflow-hidden shadow-2xl shadow-emerald-600/20"
         >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div className="space-y-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600">
                     <PiggyBank size={28} />
                  </div>
                  <h3 className="text-3xl font-black">TFSA Opportunity</h3>
                  <p className="text-emerald-50 text-sm">Are you using your full R36,000 allowance? Read our 2026 checklist.</p>
               </div>
               <div className="mt-8 flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform uppercase text-xs tracking-widest">
                  View TFSA Guide <BarChart3 size={16} />
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <FileText className="text-emerald-500" /> Educational Guides (Locked Content)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.slice(0, 3).map((g, i) => (
              <Card key={i} className="group hover:border-emerald-500 transition-colors cursor-pointer border-slate-100 shadow-none">
                <div onClick={() => handleGuideClick(g)} className="flex flex-col gap-4">
                  <div className="p-3 bg-slate-50 w-fit rounded-xl text-slate-400 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-colors">{g.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{g.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{g.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-2">
                    <Download size={12} /> Unlock PDF
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <AdSpace slot="resource-middle" />

          <Card title="Interactive Insights" className="border-none shadow-xl bg-slate-50">
             <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                <div className="p-8 bg-slate-900 rounded-3xl md:w-1/2 shadow-xl">
                   <BarChart3 className="text-emerald-400 mb-4" size={40} />
                   <h3 className="text-xl font-bold mb-2 text-white">SA Tax History Trajectory</h3>
                   <p className="text-slate-400 text-sm mb-6">High-resolution visual data comparing tax brackets over the last 10 years.</p>
                   <button 
                    onClick={() => onNavigate('tax-history')}
                    className="w-full py-3 bg-emerald-500 rounded-xl font-bold text-slate-900 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                   >
                     View Visual Data
                   </button>
                </div>
                <div className="md:w-1/2 space-y-4">
                   <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Budget 2026 Key Takeaways</h4>
                   <ul className="space-y-3">
                     {[
                       { t: 'Solar Tax Credit Sunset', d: 'Final window to claim residential solar installation costs.' },
                       { t: 'The "Two-Pot" Retirement Update', d: 'Critical changes to access and taxation of savings.' },
                       { t: 'Capital Gains Thresholds', d: 'Adjustment to the annual exclusion amount.' }
                     ].map((u, i) => (
                       <li key={i} className="flex items-start gap-3 text-sm group cursor-help">
                         <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0 group-hover:scale-150 transition-transform"></div>
                         <div>
                            <p className="font-bold text-slate-800">{u.t}</p>
                            <p className="text-xs text-slate-500">{u.d}</p>
                         </div>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Government Links" className="bg-white border-slate-100">
             <ul className="space-y-3">
               <li>
                 <a href="https://www.sars.gov.za" target="_blank" className="flex items-center justify-between group p-3 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-200">
                   <div className="flex items-center gap-3">
                     <ExternalLink size={16} className="text-slate-400" />
                     <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-600">Official SARS Portal</span>
                   </div>
                 </a>
               </li>
               <li>
                 <a href="https://www.treasury.gov.za" target="_blank" className="flex items-center justify-between group p-3 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-200">
                   <div className="flex items-center gap-3">
                     <ExternalLink size={16} className="text-slate-400" />
                     <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-600">National Treasury</span>
                   </div>
                 </a>
               </li>
             </ul>
          </Card>
          
          <AdSpace slot="resource-sidebar" format="rectangle" />
          
          <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white text-center space-y-4 shadow-2xl shadow-blue-600/20">
             <FileText className="mx-auto" size={40} />
             <h4 className="font-bold text-xl leading-tight">Need Professional Help?</h4>
             <p className="text-sm text-blue-100">Our partner tax practitioners provide verified consultations starting at R750.</p>
             <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-2xl shadow-lg hover:bg-blue-50 transition-colors">Find a Practitioner</button>
          </div>
        </div>
      </div>
    </div>
  );
};
