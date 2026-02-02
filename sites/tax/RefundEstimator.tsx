
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTaxRefund, formatCurrency } from '../../lib/utils';
import { Wallet, Coins, ArrowRight, Info, ShieldCheck } from 'lucide-react';

export const RefundEstimator: React.FC = () => {
  const [inputs, setInputs] = useState({
    salary: '550000',
    paye: '120000',
    ra: '30000',
    dependents: '1',
    age: '30'
  });

  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const res = calculateTaxRefund({
      annualSalary: parseFloat(inputs.salary) || 0,
      payePaid: parseFloat(inputs.paye) || 0,
      raContributions: parseFloat(inputs.ra) || 0,
      medicalDependents: parseInt(inputs.dependents) || 0,
      age: parseInt(inputs.age) || 30
    });
    setResults(res);
  }, [inputs]);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
          2026 Refund Estimator
        </div>
        <h1 className="text-4xl font-black text-slate-900 leading-tight">Will SARS owe you money?</h1>
        <p className="text-slate-500 text-lg">Enter your annual figures to estimate your potential tax refund for the 2025/26 cycle.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <Card title="Your Annual Figures">
            <div className="space-y-4">
              <Input 
                label="Gross Annual Income" 
                type="number" 
                value={inputs.salary} 
                onChange={(e) => setInputs({...inputs, salary: e.target.value})} 
              />
              <Input 
                label="Total PAYE Paid (from IRP5)" 
                type="number" 
                value={inputs.paye} 
                onChange={(e) => setInputs({...inputs, paye: e.target.value})} 
                helperText="Total tax deducted by your employer over the year."
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="RA Contributions" 
                  type="number" 
                  value={inputs.ra} 
                  onChange={(e) => setInputs({...inputs, ra: e.target.value})} 
                />
                <Input 
                  label="Medical Dependents" 
                  type="number" 
                  value={inputs.dependents} 
                  onChange={(e) => setInputs({...inputs, dependents: e.target.value})} 
                  helperText="Excluding yourself."
                />
              </div>
            </div>
          </Card>

          <div className="p-6 bg-slate-900 rounded-3xl text-white">
             <div className="flex items-start gap-4">
                <ShieldCheck className="text-emerald-400 shrink-0" size={24} />
                <div className="space-y-2">
                   <h4 className="font-bold">SARS Compliance Note</h4>
                   <p className="text-xs text-slate-400 leading-relaxed">
                     This is an estimation based on standard Section 11F and 6A/6B deductions. Individual cases may vary based on travel allowances, donations, or fringe benefits.
                   </p>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {results && (
            <>
              <Card className={`border-none shadow-2xl overflow-hidden ${results.refundAmount > 0 ? 'bg-emerald-600' : 'bg-slate-800'} text-white`}>
                 <div className="relative p-8 text-center space-y-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">
                      {results.refundAmount > 0 ? 'Estimated SARS Refund' : 'Estimated Balance Owed'}
                    </p>
                    <h2 className="text-6xl font-black tracking-tighter">
                      {formatCurrency(Math.abs(results.refundAmount))}
                    </h2>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-md">
                      {results.refundAmount > 0 ? <Coins size={16} /> : <Info size={16} />}
                      {results.refundAmount > 0 ? 'Cash back in your pocket' : 'Payment due to SARS'}
                    </div>
                 </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">RA Tax Savings</p>
                      <p className="text-xl font-bold text-emerald-600">{formatCurrency(results.savingsFromRA)}</p>
                      <p className="text-[10px] text-slate-500">Lowered your taxable income.</p>
                   </div>
                </Card>
                <Card>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Medical Credits</p>
                      <p className="text-xl font-bold text-blue-600">{formatCurrency(results.medicalCreditTotal)}</p>
                      <p className="text-[10px] text-slate-500">Direct reduction in tax due.</p>
                   </div>
                </Card>
              </div>

              <Card title="Detailed Summary">
                 <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-slate-50 pb-2">
                       <span className="text-slate-500">Actual Tax Liability</span>
                       <span className="font-bold">{formatCurrency(results.finalTaxLiability)}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-50 pb-2">
                       <span className="text-slate-500">Total PAYE Paid</span>
                       <span className="font-bold">{formatCurrency(parseFloat(inputs.paye))}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                       <span className="text-slate-900 font-bold uppercase text-xs">Projected Outcome</span>
                       <span className={`text-lg font-black ${results.refundAmount > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                          {results.refundAmount > 0 ? '+' : ''} {formatCurrency(results.refundAmount)}
                       </span>
                    </div>
                 </div>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
