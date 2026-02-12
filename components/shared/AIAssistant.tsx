
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, X, Bot, Loader2 } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'I am your CalculatorHub AI. Ask me about the 2026 tax brackets, Two-Pot withdrawals, or VAT registration.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a Senior Tax Analyst for CalculatorHub.co.za. Provide accurate, professional advice regarding South African tax laws for the 2026 budget year. Mention advice is for educational purposes.",
        },
      });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I couldn't generate a response." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily unavailable. Please try again shortly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-slate-950 text-emerald-400 p-4 rounded-2xl shadow-2xl border border-slate-800 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 font-black uppercase text-[10px] tracking-widest"
      >
        <Sparkles size={18} /> Ask AI Analyst
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-[420px] md:h-[600px] z-[60] bg-white border border-slate-200 rounded-none md:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-slate-950 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="text-emerald-500" size={24} />
              <h3 className="text-white font-black uppercase text-xs tracking-widest">Tax Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'user' ? "bg-emerald-600 text-white rounded-tr-none shadow-lg" : "bg-white text-slate-700 rounded-tl-none shadow-sm border border-slate-200"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 flex items-center gap-2">
                  <Loader2 className="animate-spin text-emerald-500" size={14} />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Analyzing Regulations...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="How do 2026 brackets affect me?"
              className="flex-grow px-4 py-3 bg-slate-100 rounded-xl focus:outline-none text-sm font-medium"
            />
            <button type="submit" className="bg-slate-950 text-white p-3 rounded-xl hover:bg-emerald-600 transition-all">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
