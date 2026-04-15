
'use client';

import React, { useState } from 'react';
import { Calculator, BookOpen, Sparkles, PhoneCall, Menu, X, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  activeSite: 'home' | 'vat' | 'tax' | 'property' | 'twopot' | 'links' | 'essentials';
  currentPage: string;
  onSiteChange?: (site: any) => void;
  onNavigate?: (path: string) => void;
  onOpenCallback?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSite, currentPage, onOpenCallback }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const metrics = [
    { label: 'ZAR / USD', value: 'R18.42', change: '-0.12%', positive: true },
    { label: 'BRENT CRUDE', value: '$82.40', change: '+1.45%', positive: false },
    { label: 'JSE TOP 40', value: '74,210', change: '+0.88%', positive: true },
    { label: 'REPO RATE', value: '8.25%', change: '0.00%', positive: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-inter selection:bg-emerald-100 selection:text-emerald-900">
      <div className="sticky top-0 z-[60]">
        <nav className="bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-emerald-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <Calculator size={22} className="text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter">Calculator<span className="text-emerald-400">Hub</span></span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <Link href="/vat" className={`text-sm font-bold transition-colors ${activeSite === 'vat' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>VAT</Link>
              <Link href="/tax" className={`text-sm font-bold transition-colors ${activeSite === 'tax' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>Income Tax</Link>
                <Link href="/essentials" className={`text-sm font-bold transition-colors ${activeSite === 'essentials' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>Essentials</Link>
              <Link href="/essentials/fuel" className={`text-sm font-bold transition-colors ${activeSite === 'property' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>Fuel Calculator</Link>
              <Link href="/twopot" className={`text-sm font-bold transition-colors ${activeSite === 'twopot' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'} flex items-center gap-1.5`}>
                 <Zap size={14} className="text-orange-400" /> Two-Pot
              </Link>
              <div className="h-6 w-px bg-slate-800 mx-2"></div>
              <Link href="/refund-estimator" className={`text-sm font-bold flex items-center gap-2 transition-colors ${currentPage === 'refund-estimator' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>
                <Sparkles size={16} /> Refund Tool
              </Link>
              <Link href="/resources" className={`text-sm font-bold flex items-center gap-2 transition-colors ${currentPage === 'resources' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>
                <BookOpen size={16} /> Resources
              </Link>
            
              
            </div>

            <div className="flex items-center gap-4">
              <button onClick={onOpenCallback} className="hidden sm:flex bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black px-6 py-3 rounded-xl text-sm transition-all items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95">
                <PhoneCall size={16} /> Compliance Help
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-3 bg-slate-800 rounded-xl text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        <div className="bg-slate-900 border-b border-slate-800 py-2.5 overflow-hidden flex items-center relative">
           <div className="flex animate-marquee whitespace-nowrap gap-12 flex-grow">
              {[...metrics, ...metrics, ...metrics].map((m, i) => (
                <div key={i} className="flex items-center gap-3 px-6 border-r border-slate-800 last:border-none">
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</span>
                   <span className="text-sm font-bold text-white">{m.value}</span>
                   <span className={`text-[10px] font-bold ${m.positive ? 'text-emerald-400' : 'text-red-400'}`}>{m.change}</span>
                </div>
              ))}
           </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-6 space-y-4 animate-in slide-in-from-top duration-300 shadow-2xl">
            <Link href="/vat" className="block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-white">VAT Hub</Link>
            <Link href="/tax" className="block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-white">Income Tax</Link>
            <Link href="/essentials/fuel" className="block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-white">Fuel Calculator</Link>
            <Link href="/twopot" className="block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-orange-400">Two-Pot System</Link>
            <Link href="/refund-estimator" className="block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-emerald-400">Refund Estimator</Link>
            <Link href="/essentials" className="block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-emerald-300">SA Essentials </Link>
            <button onClick={() => { onOpenCallback?.(); setIsMenuOpen(false); }} className="w-full py-5 bg-emerald-500 text-slate-900 font-black rounded-2xl text-center">Compliance Help</button>
          </div>
        )}
      </div>

      <main className="flex-grow">
        <div className="bg-white border-b border-slate-100 py-3">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <div className="flex gap-6">
              <span className="flex items-center gap-1.5 text-slate-500 italic">SARS Reference: 2026 Budget cycle</span>
            </div>
            <div className="text-slate-300">Updated: February 2026</div>
          </div>
        </div>
        <div>{children}</div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-20 mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Calculator size={32} className="text-emerald-500" />
                <span className="font-black text-2xl text-white tracking-tighter">CalculatorHub</span>
              </div>
              <p className="text-lg text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
                South Africa's premium utility engine for professional tax modeling. Accurate for the 2026 fiscal year.
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-6 uppercase text-xs tracking-[0.2em]">Ecosystem</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/vat" className="hover:text-emerald-400">VAT Hub</Link></li>
                <li><Link href="/tax" className="hover:text-emerald-400">Income Tax (PAYE)</Link></li>
                <li><Link href="/property" className="hover:text-emerald-400">Transfer Duty</Link></li>
                <li><Link href="/twopot" className="hover:text-emerald-400">Two-Pot System</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-6 uppercase text-xs tracking-[0.2em]">Tools</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/refund-estimator" className="hover:text-emerald-400">Refund Estimator</Link></li>
                <li><Link href="/resources" className="hover:text-emerald-400">Education Center</Link></li>
                <li><Link href="/links" className="hover:text-emerald-400 flex items-center justify-center md:justify-start gap-1">Financial Directory <ArrowRight size={12} /></Link></li>
                <li><Link href="/essentials/fuel" className="hover:text-emerald-400">Fuel Calculator</Link></li>
                <li><Link href="/essentials/groceries" className="hover:text-emerald-400">Grocery Basket</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-flex; animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
};
