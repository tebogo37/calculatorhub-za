
import React from 'react';
import { Calculator, ShieldCheck, Globe, BookOpen } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSite: 'vat' | 'tax' | 'property';
  onSiteChange: (site: 'vat' | 'tax' | 'property') => void;
  onNavigateResources?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSite, onSiteChange, onNavigateResources }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onSiteChange('tax')}>
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <Calculator size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Calculator<span className="text-emerald-400">Hub</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onSiteChange('vat')} className={`text-sm font-medium transition-colors ${activeSite === 'vat' ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}>VAT Calculator</button>
            <button onClick={() => onSiteChange('tax')} className={`text-sm font-medium transition-colors ${activeSite === 'tax' ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}>Income Tax</button>
            <button onClick={() => onSiteChange('property')} className={`text-sm font-medium transition-colors ${activeSite === 'property' ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}>Property Duty</button>
            <button onClick={onNavigateResources} className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5 border-l border-slate-700 pl-8">
              <BookOpen size={16} /> Resources
            </button>
          </div>

          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               <span className="text-[10px] uppercase font-bold text-slate-400">2025/26 Updated</span>
             </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-xs text-slate-500">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><ShieldCheck size={14} /> SARS Compliant</span>
              <span className="flex items-center gap-1"><Globe size={14} /> South Africa</span>
            </div>
            <div className="hidden sm:block">February 2026 Finance Update</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Calculator size={24} className="text-emerald-600" />
                <span className="font-bold text-lg">CalculatorHub</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">
                Leading utility platform for South African finance. Accurate, up-to-date tools for the 2025/2026 budget year.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 uppercase text-xs tracking-wider">Calculators</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => onSiteChange('vat')} className="hover:text-emerald-600">VAT Calculator</button></li>
                <li><button onClick={() => onSiteChange('tax')} className="hover:text-emerald-600">Income Tax (PAYE)</button></li>
                <li><button onClick={() => onSiteChange('property')} className="hover:text-emerald-600">Transfer Duty</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 uppercase text-xs tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="https://www.sars.gov.za" target="_blank" className="hover:text-emerald-600">SARS Official Site</a></li>
                <li><a href="https://www.treasury.gov.za" target="_blank" className="hover:text-emerald-600">Budget Speech 2026</a></li>
                <li><button onClick={onNavigateResources} className="hover:text-emerald-600">Tax Guides & Brackets</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>&copy; 2026 CalculatorHub South Africa. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
