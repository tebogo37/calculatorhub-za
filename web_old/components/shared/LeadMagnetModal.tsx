
import React, { useState } from 'react';
import { X, Mail, Download, CheckCircle, Lock, CheckSquare, FileText } from 'lucide-react';
import { MOCK_GUIDES } from '../../lib/sanity';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  guideSlug?: string;
  onSuccess?: (email: string) => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose, title, description, guideSlug, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const guide = MOCK_GUIDES.find(g => g.slug === guideSlug);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Simulated PDF Download
    const dummyContent = `CalculatorHub Professional Guide: ${title}\n\nThis is a dummy PDF content for demonstration. In production, this would be a link to your Sanity-hosted PDF asset.`;
    const blob = new Blob([dummyContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${guideSlug || 'tax-guide'}-2026.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess(email);
      handleDownload(); // Trigger download immediately on success
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
          <X size={20} />
        </button>

        <div className="p-10 md:p-12 space-y-8">
          {!isSuccess ? (
            <>
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
                  <Lock size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="email" 
                    required 
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all text-lg font-medium"
                    placeholder="your@email.co.za"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-2xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  {isSubmitting ? 'Unlocking Hub...' : 'Unlock & Download PDF'}
                  {!isSubmitting && <Download size={22} />}
                </button>
              </form>
            </>
          ) : (
            <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-none">Access Granted!</h3>
                <p className="text-slate-500 text-lg">Your download has started. We've also sent a copy to <strong>{email}</strong>.</p>
              </div>

              {guide && (
                <div className="bg-slate-50 rounded-3xl p-8 space-y-4 border border-slate-100">
                   <h4 className="font-bold text-slate-900 uppercase text-[10px] tracking-[0.2em] text-slate-400">Content Breakdown:</h4>
                   <ul className="space-y-3">
                      {guide.checklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-bold leading-relaxed">
                           <CheckSquare size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              )}

              <button 
                onClick={handleDownload}
                className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all text-lg shadow-xl flex items-center justify-center gap-3"
              >
                <FileText size={20} /> Restart Download
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
