'use client';

import React, { useState } from 'react';
import { Mail, Download, CheckCircle } from 'lucide-react';

export const LeadMagnet: React.FC<{ title: string; description: string; buttonText: string }> = ({ title, description, buttonText }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="bg-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="inline-flex p-3 bg-white/20 rounded-2xl">
            <Download size={24} />
          </div>
          <h3 className="text-2xl font-bold leading-tight">{title}</h3>
          <p className="text-emerald-100">{description}</p>
        </div>

        <div className="w-full md:w-auto min-w-[300px]">
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
              <CheckCircle className="text-white mb-3" size={40} />
              <h4 className="font-bold text-lg">Thank You!</h4>
              <p className="text-sm text-emerald-100">Check your inbox for the download link.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-2xl">
              <input 
                type="email" 
                required
                placeholder="Enter your email..."
                className="flex-grow px-4 py-3 text-slate-900 focus:outline-none rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all whitespace-nowrap"
              >
                {buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};