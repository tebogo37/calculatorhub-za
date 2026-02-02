
import React, { useState } from 'react';
import { X, Mail, Download, CheckCircle, Lock } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSuccess: (email: string) => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose, title, description, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSuccess(email);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
          <X size={20} />
        </button>

        <div className="p-8 md:p-12 space-y-6">
          {!isSuccess ? (
            <>
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <Lock size={32} />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-black text-slate-900">{title}</h3>
                <p className="text-slate-500">{description}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    required 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Unlocking...' : 'Unlock Instant Access'}
                  {!isSubmitting && <Download size={18} />}
                </button>
              </form>
              <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">
                No spam. Only high-value SARS updates.
              </p>
            </>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20 animate-bounce">
                <CheckCircle size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">Successfully Unlocked!</h3>
                <p className="text-slate-500">The PDF has been sent to <strong>{email}</strong>. You can also download it directly below.</p>
              </div>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 transition-all"
              >
                Download Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
