import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Calculator, BarChart3, Home, Zap, ArrowRight, 
  Flame, TrendingUp, Globe, Sparkles, 
  Send, X, Bot, Loader2, ShieldCheck, PhoneCall,
  Menu, Wallet, AlertTriangle, CheckCircle, Sun
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// --- SHARED SARS 2026 LOGIC ---
const VAT_RATE = 0.15;
const TAX_BRACKETS_2026 = [
  { limit: 237100, rate: 0.18, base: 0 },
  { limit: 370500, rate: 0.26, base: 42678 },
  { limit: 512800, rate: 0.31, base: 77362 },
  { limit: 673000, rate: 0.36, base: 121475 },
  { limit: 857900, rate: 0.39, base: 179147 },
  { limit: 1817000, rate: 0.41, base: 251258 },
  { limit: Infinity, rate: 0.45, base: 644489 },
];
const TAX_REBATES_2026 = { primary: 17235 };

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', minimumFractionDigits: 0 }).format(val || 0);

const calculateIncomeTax = (salary: number) => {
  let tax = 0; let prevLimit = 0;
  for (const b of TAX_BRACKETS_2026) {
    if (salary > b.limit) { prevLimit = b.limit; continue; }
    tax = b.base + ((salary - prevLimit) * b.rate); break;
  }
  return Math.max(0, tax - TAX_REBATES_2026.primary);
};

// --- COMPONENTS ---

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Senior SARS Consultant online. How can I assist with your 2026 planning?' }]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: (window as any).process?.env?.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: { systemInstruction: "Act as a Senior SARS Tax Analyst. Provide professional, concise advice for the 2026 tax year. Include a disclaimer." }
      });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Service error." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily restricted." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white p-5 rounded-[2rem] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 border border-slate-700">
        <Sparkles className="text-emerald-400" /> <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">Consult AI Analyst</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-[420px] md:h-[600px] z-[60] bg-white border border-slate-200 rounded-none md:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-slate-950 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white"><Bot className="text-emerald-400" /> <h3 className="font-black text-xs uppercase tracking-widest">Tax Assistant 2026</h3></div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
          </div>
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'user' ? "bg-emerald-600 text-white rounded-tr-none shadow-lg" : "bg-white text-slate-700 rounded-tl-none shadow-sm border border-slate-200"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="flex items-center gap-2 text-slate-400"><Loader2 className="animate-spin" size={14} /><span className="text-[10px] font-bold uppercase">Analyzing Budget...</span></div>}
          </div>
          <form onSubmit={handleAsk} className="p-4 border-t flex gap-2"><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about Two-Pot tax..." className="flex-grow bg-slate-100 rounded-xl px-4 py-2 text-sm outline-none" /><button className="bg-slate-950 text-white p-3 rounded-xl"><Send size={18} /></button></form>
        </div>
      )}
    </>
  );
};

const Layout = ({ children, setView, activeView }: any) => {
  const metrics = [{ l: 'ZAR/USD', v: 'R18.42' }, { l: 'BRENT', v: '$82.40' }, { l: 'JSE TOP 40', v: '74,210' }, { l: 'REPO', v: '8.25%' }];
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-slate-950 text-white h-20 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button onClick={() => setView('home')} className="flex items-center gap-2 group">
            <div className="bg-emerald-500 p-1.5 rounded-lg text-slate-950 group-hover:rotate-12 transition-all"><Calculator size={20} /></div>
            <span className="font-black text-xl tracking-tighter italic">Calculator<span className="text-emerald-400">Hub</span></span>
          </button>
          <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            {['tax', 'vat', 'property', 'twopot'].map(s => (
              <button key={s} onClick={() => setView(s)} className={`hover:text-white transition-colors ${activeView === s ? 'text-emerald-400' : ''}`}>
                {s === 'twopot' ? 'Two-Pot' : s}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="bg-slate-950 border-b border-slate-800 overflow-hidden h-10 flex items-center">
        <div className="animate-marquee whitespace-nowrap gap-12 flex">
          {[...metrics, ...metrics].map((m, i) => (
            <div key={i} className="flex items-center gap-3 px-6"><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.l}</span><span className="text-sm font-bold text-white tabular-nums">{m.v}</span></div>
          ))}
        </div>
      </div>
      <main className="flex-grow">{children}</main>
      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900 text-center">
        <p className="text-[10px] font-black uppercase tracking-widest">CalculatorHub SA © 2026 | Professional Grade Utility</p>
      </footer>
    </div>
  );
};

// --- VIEWS ---

const HomeView = ({ setView }: any) => (
  <div className="space-y-32 pb-32">
    <section className="bg-slate-950 py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
        <h1 className="text-6xl md:text-[9rem] font-black text-white leading-[0.8] tracking-tighter italic">FISCAL<br/><span className="text-emerald-500">POWER.</span></h1>
        <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">Premium SA Utility for Tax, VAT, and Property Duty. Built for the 2026 Budget cycle.</p>
        <button onClick={() => setView('tax')} className="bg-emerald-500 text-slate-950 font-black px-12 py-5 rounded-2xl text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">Launch Engine</button>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { id: 'tax', name: 'Income Tax', icon: <Calculator size={32} />, desc: 'PAYE & Rebate Modeling' },
        { id: 'vat', name: 'VAT Hub', icon: <BarChart3 size={32} />, desc: 'Instant 15% Analysis' },
        { id: 'twopot', name: 'Two-Pot Tax', icon: <Zap size={32} />, desc: 'Withdrawal Tax Logic' },
        { id: 'property', name: 'Property Duty', icon: <Home size={32} />, desc: 'Transfer Duty Estimator' }
      ].map(t => (
        <button key={t.id} onClick={() => setView(t.id)} className="bg-white border border-slate-200 p-12 rounded-[3rem] text-left group hover:bg-slate-950 hover:text-white transition-all shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 transition-colors">{t.icon}</div>
          <h3 className="text-3xl font-black mb-4 tracking-tight">{t.name}</h3>
          <p className="text-slate-500 group-hover:text-slate-400 mb-10 font-medium">{t.desc}</p>
          <div className="text-emerald-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">Open <ArrowRight size={14} /></div>
        </button>
      ))}
    </section>

    <section className="max-w-7xl mx-auto px-6">
      <div className="bg-slate-950 rounded-[4rem] p-16 md:p-24 border border-slate-800 shadow-2xl space-y-20 relative overflow-hidden">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter flex items-center gap-4">THE BRAAI INDEX <Flame className="text-orange-500" /></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: 'Braai Meat (2kg)', sa: 'R310', uk: 'R680', i: '🥩' },
            { n: 'Charcoal (5kg)', sa: 'R90', uk: 'R240', i: '🔥' },
            { n: 'Beer (6-Pack)', sa: 'R115', uk: 'R340', i: '🍺' }
          ].map((b, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] group hover:bg-white/10 transition-all backdrop-blur-md">
              <div className="text-5xl mb-6">{b.i}</div>
              <h4 className="text-white font-black text-2xl mb-8">{b.n}</h4>
              <div className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <div className="flex justify-between text-emerald-400"><span>South Africa</span><span>{b.sa}</span></div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-500" style={{width: '35%'}}></div></div>
                <div className="flex justify-between text-slate-400"><span>Global Equiv</span><span>{b.uk}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const TaxView = () => {
  const [salary, setSalary] = useState(450000);
  const [tax, setTax] = useState(0);
  useEffect(() => { setTax(calculateIncomeTax(salary)); }, [salary]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-12 animate-in fade-in slide-in-from-bottom-4">
      <h1 className="text-6xl font-black tracking-tighter italic">PAYE <span className="text-emerald-500">2026</span></h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 bg-white border border-slate-200 p-10 rounded-[3rem] shadow-xl space-y-8">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Annual Gross Remuneration</label>
          <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full text-4xl font-black outline-none border-b border-slate-100 pb-2 focus:border-emerald-500 transition-colors" />
          <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl text-[10px] font-black text-emerald-600 uppercase tracking-widest"><ShieldCheck size={14} /> SARS 2026 Budget Confirmed</div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-10 bg-slate-950 rounded-[3rem] text-white space-y-4 shadow-2xl">
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Annual SARS Deduction</p>
              <h2 className="text-4xl font-black text-red-400 tabular-nums">{formatCurrency(tax)}</h2>
            </div>
            <div className="p-10 bg-slate-100 rounded-[3rem] border border-slate-200 space-y-4">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Effective Rate</p>
              <h2 className="text-4xl font-black tabular-nums">{salary > 0 ? ((tax/salary)*100).toFixed(1) : 0}%</h2>
            </div>
          </div>
          <div className="p-16 bg-slate-950 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4 relative z-10">Monthly Take-Home Pay</p>
            <h3 className="text-8xl font-black text-emerald-400 tracking-tighter tabular-nums relative z-10">{formatCurrency((salary - tax)/12)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const TwoPotView = () => {
  const [salary, setSalary] = useState(450000);
  const [withdrawal, setWithdrawal] = useState(30000);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const taxBefore = calculateIncomeTax(salary);
    const taxAfter = calculateIncomeTax(salary + withdrawal);
    setTax(taxAfter - taxBefore);
  }, [salary, withdrawal]);

  const adminFee = Math.min(withdrawal * 0.01, 500);

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-12 animate-in fade-in slide-in-from-bottom-4">
      <h1 className="text-6xl font-black tracking-tighter italic text-orange-500">TWO-POT <span className="text-slate-950">IMPACT</span></h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-xl space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Annual Taxable Income</label>
              <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full text-2xl font-black outline-none border-b border-slate-100 pb-2 focus:border-orange-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Withdrawal Amount</label>
              <input type="number" value={withdrawal} onChange={e => setWithdrawal(Number(e.target.value))} className="w-full text-2xl font-black outline-none border-b border-slate-100 pb-2 focus:border-orange-500 transition-colors" />
            </div>
          </div>
          <div className="p-8 bg-orange-50 border border-orange-100 rounded-[2.5rem] flex gap-4 text-orange-900 font-bold text-sm">
            <AlertTriangle className="shrink-0" /> Early access withdrawals are taxed at your marginal rate + admin fees.
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div className="p-16 bg-slate-950 rounded-[4rem] text-center shadow-2xl border border-slate-800 space-y-6">
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Est. Cash in Hand (Net)</p>
            <h3 className="text-8xl font-black text-emerald-400 tracking-tighter tabular-nums">{formatCurrency(withdrawal - tax - adminFee)}</h3>
            <div className="flex justify-center gap-10 pt-4 border-t border-white/5">
               <div className="text-left"><p className="text-[9px] font-black text-slate-500 uppercase">SARS Cut</p><p className="font-black text-red-400 tabular-nums">{formatCurrency(tax)}</p></div>
               <div className="text-left"><p className="text-[9px] font-black text-slate-500 uppercase">Admin Fee</p><p className="font-black text-slate-400 tabular-nums">{formatCurrency(adminFee)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VatView = () => {
  const [val, setVal] = useState(1000);
  const [isIncl, setIsIncl] = useState(false);
  const vat = isIncl ? val - (val / 1.15) : val * 0.15;
  const total = isIncl ? val : val + vat;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-12 animate-in fade-in">
       <h1 className="text-6xl font-black tracking-tighter italic">VAT <span className="text-emerald-500">15% HUB</span></h1>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 p-10 bg-white border border-slate-200 rounded-[3rem] shadow-xl space-y-8">
             <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Transaction Amount</label>
             <input type="number" value={val} onChange={e => setVal(Number(e.target.value))} className="w-full text-4xl font-black outline-none border-b border-slate-100 pb-2 focus:border-emerald-500" />
             <div className="flex bg-slate-100 p-1 rounded-xl">
               <button onClick={() => setIsIncl(false)} className={`flex-1 py-3 text-xs font-black uppercase rounded-lg ${!isIncl ? 'bg-slate-950 text-white' : 'text-slate-400'}`}>Excl.</button>
               <button onClick={() => setIsIncl(true)} className={`flex-1 py-3 text-xs font-black uppercase rounded-lg ${isIncl ? 'bg-slate-950 text-white' : 'text-slate-400'}`}>Incl.</button>
             </div>
          </div>
          <div className="lg:col-span-8 space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem]"><p className="text-[10px] font-black text-slate-400 uppercase mb-2">VAT Portion</p><p className="text-3xl font-black text-emerald-600">{formatCurrency(vat)}</p></div>
                <div className="p-10 bg-slate-100 border border-slate-200 rounded-[3rem]"><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Base Price</p><p className="text-3xl font-black text-slate-900">{formatCurrency(total - vat)}</p></div>
             </div>
             <div className="p-16 bg-slate-950 rounded-[4rem] text-center shadow-2xl text-white"><p className="text-[10px] font-black text-slate-500 uppercase mb-4">Total Amount</p><h3 className="text-8xl font-black text-emerald-400 tracking-tighter">{formatCurrency(total)}</h3></div>
          </div>
       </div>
    </div>
  );
};

const PropertyView = () => {
  const [price, setPrice] = useState(2500000);
  const duty = useMemo(() => {
    const TRANSFER_DUTY_RATES = [
      { limit: 1100000, rate: 0, base: 0 },
      { limit: 1512500, rate: 0.03, base: 0 },
      { limit: 2117500, rate: 0.06, base: 12375 },
      { limit: 2722500, rate: 0.08, base: 48675 },
      { limit: 12100000, rate: 0.11, base: 97075 },
      { limit: Infinity, rate: 0.13, base: 1128600 },
    ];
    let d = 0; let prev = 0;
    for (const b of TRANSFER_DUTY_RATES) {
      if (price > b.limit) { prev = b.limit; continue; }
      d = b.base + ((price - prev) * b.rate); break;
    }
    return Math.max(0, d);
  }, [price]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-12 animate-in fade-in">
       <h1 className="text-6xl font-black tracking-tighter italic">PROPERTY <span className="text-emerald-500">DUTY</span></h1>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 p-10 bg-white border border-slate-200 rounded-[3rem] shadow-xl space-y-8">
             <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Acquisition Price</label>
             <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full text-4xl font-black outline-none border-b border-slate-100 pb-2 focus:border-emerald-500" />
             <div className="p-4 bg-emerald-50 rounded-2xl flex items-center gap-3 text-[10px] font-black text-emerald-600 uppercase tracking-widest"><ShieldCheck size={14} /> Exempt &lt; R1.1M</div>
          </div>
          <div className="lg:col-span-7">
             <div className="p-16 bg-slate-950 rounded-[4rem] text-center shadow-2xl text-white">
                <p className="text-[10px] font-black text-slate-500 uppercase mb-4">SARS Transfer Duty</p>
                <h3 className="text-8xl font-black text-emerald-400 tracking-tighter">{formatCurrency(duty)}</h3>
             </div>
          </div>
       </div>
    </div>
  );
};

// --- MASTER APP ---

const App = () => {
  const [view, setView] = useState('home');
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [view]);

  return (
    <Layout activeView={view} setView={setView}>
      {view === 'home' && <HomeView setView={setView} />}
      {view === 'tax' && <TaxView />}
      {view === 'vat' && <VatView />}
      {view === 'property' && <PropertyView />}
      {view === 'twopot' && <TwoPotView />}
      <AIAssistant />
    </Layout>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
