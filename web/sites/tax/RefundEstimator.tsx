'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTaxRefund, formatCurrency } from '../../lib/utils';
import { Coins, ShieldCheck, Info, TrendingDown, TrendingUp, ArrowRight } from 'lucide-react';

export const RefundEstimator: React.FC = () => {
  const [inputs, setInputs] = useState({
    salary: '550000',
    paye: '120000',
    ra: '30000',
    dependents: '1',
    age: '30',
  });

  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const res = calculateTaxRefund({
      annualSalary: parseFloat(inputs.salary) || 0,
      payePaid: parseFloat(inputs.paye) || 0,
      raContributions: parseFloat(inputs.ra) || 0,
      medicalDependents: parseInt(inputs.dependents) || 0,
      age: parseInt(inputs.age) || 30,
    });
    setResults(res);
  }, [inputs]);

  const isRefund = results?.refundAmount > 0;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 py-12 px-4">
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
          2026 Refund Estimator
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Will SARS owe you money?
        </h1>
        <p className="text-slate-500 text-lg">
          Enter your annual figures to estimate your potential tax refund for the 2025/26 cycle.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ── Inputs ── */}
        <div className="lg:col-span-5 space-y-6">
          <Card title="Your Annual Figures" className="shadow-xl border-slate-100">
            <div className="space-y-4">
              <Input
                label="Gross Annual Income"
                type="number"
                value={inputs.salary}
                onChange={(e) => setInputs({ ...inputs, salary: e.target.value })}
              />
              <Input
                label="Total PAYE Paid (from IRP5)"
                type="number"
                value={inputs.paye}
                onChange={(e) => setInputs({ ...inputs, paye: e.target.value })}
                helperText="Total tax deducted by your employer over the year."
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Retirement Annuity"
                  type="number"
                  value={inputs.ra}
                  onChange={(e) => setInputs({ ...inputs, ra: e.target.value })}
                />
                <Input
                  label="Medical Dependents"
                  type="number"
                  value={inputs.dependents}
                  onChange={(e) => setInputs({ ...inputs, dependents: e.target.value })}
                  helperText="Excluding yourself."
                />
              </div>
            </div>
          </Card>

          <div className="p-6 bg-slate-900 rounded-3xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-emerald-400 shrink-0 mt-1" size={22} />
              <div className="space-y-1">
                <h4 className="font-bold text-white">SARS Compliance Note</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  This estimation assumes standard Section 11F and 6A/6B deductions. Individual
                  cases vary based on travel allowances, donations, or fringe benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="lg:col-span-7 space-y-5">
          {results && (
            <>
              {/* ── Main result card ── */}
              <div
                className={`rounded-[2rem] p-10 text-center relative overflow-hidden shadow-2xl ${
                  isRefund
                    ? 'bg-emerald-50 border-2 border-emerald-200'
                    : 'bg-red-50 border-2 border-red-200'
                }`}
              >
                <div className="relative z-10 space-y-3">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest ${
                      isRefund
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {isRefund ? (
                      <>
                        <Coins size={16} /> Estimated SARS Refund
                      </>
                    ) : (
                      <>
                        <Info size={16} /> Estimated Balance Owed
                      </>
                    )}
                  </div>

                  <p
                    className={`text-6xl md:text-7xl font-black tabular-nums tracking-tighter ${
                      isRefund ? 'text-emerald-600' : 'text-red-600'
                    }`}
                  >
                    {formatCurrency(Math.abs(results.refundAmount))}
                  </p>

                  <p className="text-slate-500 text-sm font-medium">
                    {isRefund
                      ? 'Expected cash back when you file your return'
                      : 'Possible additional payment due to SARS'}
                  </p>
                </div>
              </div>

              {/* ── Savings breakdown ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="text-emerald-500" size={18} />
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      RA Tax Saving
                    </p>
                  </div>
                  <p className="text-2xl font-black text-emerald-700 tabular-nums">
                    {formatCurrency(results.savingsFromRetirementAnnuity)}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Reduced taxable income via Section 11F.
                  </p>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="text-blue-500" size={18} />
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Medical Credits
                    </p>
                  </div>
                  <p className="text-2xl font-black text-blue-700 tabular-nums">
                    {formatCurrency(results.medicalCreditTotal)}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Direct tax reduction via Section 6A.
                  </p>
                </div>
              </div>

              {/* ── Detailed summary ── */}
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-semibold text-slate-800">Detailed Summary</h3>
                </div>
                <div className="p-6 space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                    <span className="text-slate-500 font-medium">Actual Tax Liability</span>
                    <span className="font-black text-slate-900 tabular-nums">
                      {formatCurrency(results.finalTaxLiability)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                    <span className="text-slate-500 font-medium">Total PAYE Paid</span>
                    <span className="font-black text-slate-900 tabular-nums">
                      {formatCurrency(parseFloat(inputs.paye) || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-900 font-black uppercase text-xs tracking-widest">
                      Projected Outcome
                    </span>
                    <div className="flex items-center gap-2">
                      {isRefund ? (
                        <TrendingUp className="text-emerald-500" size={18} />
                      ) : (
                        <TrendingDown className="text-red-500" size={18} />
                      )}
                      <span
                        className={`text-2xl font-black tabular-nums ${
                          isRefund ? 'text-emerald-600' : 'text-red-600'
                        }`}
                      >
                        {isRefund ? '+' : ''}
                        {formatCurrency(results.refundAmount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CTA ── */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                <Info size={14} />
                Estimate only — consult a tax practitioner for a definitive assessment.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
