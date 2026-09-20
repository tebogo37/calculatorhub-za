'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTaxRefund, formatCurrency } from '../../lib/utils';
import {
  Coins,
  ShieldCheck,
  Info,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

const SITE_URL = 'https://www.calculatorhub.co.za';

interface RefundEstimatorProps {
  siteContent?: any;
}

export const RefundEstimator: React.FC<RefundEstimatorProps> = ({
  siteContent,
}) => {
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

  const summary =
    siteContent?.summary ||
    'Enter your annual figures to estimate your potential tax refund for the 2025/26 cycle.';

  const deep = siteContent?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const faqs = (siteContent?.faqs || []).map((f: any) => ({
    q: f.q || f.question,
    a: f.a || f.answer,
  }));

  const pageTitle =
    siteContent?.seoTitle || siteContent?.title || 'SARS Refund Estimator 2026';
  const pageDescription =
    siteContent?.metaDescription || summary;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CalculatorHub SA',
    url: SITE_URL,
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/refund-estimator`,
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SARS Refund Estimator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ZAR' },
    url: `${SITE_URL}/refund-estimator`,
    description: pageDescription,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
          2026 Refund Estimator
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Will SARS owe you money?
        </h1>
        <p className="text-slate-500 text-lg">{summary}</p>
        <p className="text-sm text-slate-400">
          Also try the{' '}
          <Link href="/tax" className="text-emerald-600 font-bold hover:underline">
            Income Tax Calculator
          </Link>
          .
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
                  onChange={(e) =>
                    setInputs({ ...inputs, dependents: e.target.value })
                  }
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
                  This estimation assumes standard Section 11F and 6A/6B-style relief.
                  Individual cases vary. Not formal tax advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {results && (
            <>
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
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-semibold text-slate-800">Detailed Summary</h3>
                </div>
                <div className="p-6 space-y-4 text-sm">
                  <div className="flex justify-between border-b border-slate-50 pb-4">
                    <span className="text-slate-500">Actual Tax Liability</span>
                    <span className="font-black tabular-nums">
                      {formatCurrency(results.finalTaxLiability)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-4">
                    <span className="text-slate-500">Total PAYE Paid</span>
                    <span className="font-black tabular-nums">
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
            </>
          )}
        </div>
      </div>

      {(hasPortableDeep || hasStringDeep) && (
        <section className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-3xl font-black text-slate-900">
            How tax refunds work in South Africa
          </h2>
          {hasPortableDeep ? (
            <div className="prose prose-slate prose-lg max-w-none prose-a:text-emerald-600">
              <PortableText value={deep} />
            </div>
          ) : (
            <div className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
              {deep}
            </div>
          )}
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Refund FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq: any, i: number) => (
              <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};