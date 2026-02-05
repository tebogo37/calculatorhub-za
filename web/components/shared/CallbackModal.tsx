'use client';

import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const CallbackModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-xl overflow-hidden relative">
        <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 z-10">
          <X size={24} />
        </button>

        <div className="p-12 space-y-8">
          {!submitted ? (
            <>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-500/20">
                  <PhoneCall size={32} />
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Compliance Callback</h3>
                <p className="text-slate-500 text-lg leading-relaxed">Need help with a SARS audit or complex registration? Our partner practitioners will call you back within 2 business hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                 <div className="space-y-4">
                    <input required type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none font-bold" />
                    <input required type="tel" placeholder="Phone Number" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none font-bold" />
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none font-bold">
                       <option>VAT Compliance Help</option>
                       <option>Personal Income Tax Query</option>
                       <option>Corporate Audit Support</option>
                       <option>Property Transfer Query</option>
                    </select>
                 </div>
                 <button 
                  disabled={loading}
                  className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 text-lg group"
                 >
                   {loading ? 'Queuing Request...' : 'Send Callback Request'}
                   {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                 </button>
              </form>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <ShieldCheck className="text-emerald-500" size={20} />
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your data is processed according to POPIA compliance standards.</p>
              </div>
            </>
          ) : (
            <div className="text-center space-y-8 py-12 animate-in zoom-in-95 duration-500">
               <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                  <CheckCircle size={56} />
               </div>
               <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Request Received!</h3>
                  <p className="text-slate-500 text-lg">A certified tax practitioner from our network will reach out to you shortly.</p>
               </div>
               <button 
                onClick={onClose}
                className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all text-lg"
               >
                 Close & Return
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};