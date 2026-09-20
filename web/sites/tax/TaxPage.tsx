'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { Card } from '../../components/ui/Card';
import { Input, Select } from '../../components/ui/Input';
import { calculateIncomeTax, formatCurrency } from '../../lib/utils';
import { Sparkles, Calculator } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

const SITE_URL = 'https://www.calculatorhub.co.za';

interface TaxPageProps {
  recentPosts?: any[];
  siteContent?: any;
}

export const TaxPage: React.FC<TaxPageProps> = ({
  recentPosts = [],
  siteContent,
}) => {
  const router = useRouter();
  const [salary, setSalary] = useState<string>('450000');
  const [period, setPeriod] = useState<'monthly' | 'annual'>('annual');
  const [age, setAge] = useState<number>(25);

  const content = siteContent || MOCK_SITE_CONTENT.tax;

  const [results, setResults] = useState({
    grossAnnual: 0,
    taxAnnual: 0,
    netAnnual: 0,
    netMonthly: 0,
    effectiveRate: 0,
  });

  useEffect(() => {
    const val = parseFloat(salary) || 0;
    const grossAnnual = period === 'monthly' ? val * 12 : val;
    const taxAnnual = calculateIncomeTax(grossAnnual, age);
    const netAnnual = grossAnnual - taxAnnual;

    setResults({
      grossAnnual,
      taxAnnual,
      netAnnual,
      netMonthly: netAnnual / 12,
      effectiveRate: grossAnnual > 0 ? (taxAnnual / grossAnnual) * 100 : 0,
    });
  }, [salary, period, age]);

  const faqs = (content?.faqs || []).map((f: any) => ({
    q: f.q || f.question,
    a: f.a || f.answer,
  }));

  const pageTitle =
    content?.seoTitle || content?.title || 'Income Tax Calculator 2026';
  const pageDescription =
    content?.metaDescription ||
    content?.summary ||
    'Free South Africa income tax calculator for the 2026 tax year.';

  // deepContent: Portable Text array OR plain string
  const deep = content?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CalculatorHub SA',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    description:
      'South African financial calculators for tax, VAT, property transfer duty, Two-Pot and everyday essentials.',
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/tax`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CalculatorHub SA',
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name: 'South African income tax / PAYE',
    },
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SA Income Tax Calculator 2026',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ZAR',
    },
    description: pageDescription,
    url: `${SITE_URL}/tax`,
    provider: {
      '@type': 'Organization',
      name: 'CalculatorHub SA',
      url: SITE_URL,
    },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 py-12 px-4">
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

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">
            Budget 2026 Updated
          </div>
          <h1 className="text-5xl font-black text-slate-900 leading-tight">
            Income Tax <span className="text-emerald-500">Calculator</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            {content?.summary}
          </p>
        </div>

        <button
          onClick={() => router.push('/refund-estimator')}
          className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-[1.5rem] font-black hover:bg-slate-800 transition-all shadow-2xl active:scale-95"
        >
          <Sparkles className="text-emerald-400" size={24} /> Refund Estimator
        </button>
      </div>

      <AdSpace slot="tax-top" />

      {/* Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <Card title="Taxpayer Profile" className="border-slate-100 shadow-xl p-8">
            <div className="space-y-6">
              <Input
                label="Salary Amount"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <Select
                label="Interval"
                value={period}
                onChange={(e: any) => setPeriod(e.target.value)}
              >
                <option value="annual">Annual</option>
                <option value="monthly">Monthly</option>
              </Select>
              <Input
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 0)}
              />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-slate-50 border-none p-8">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Gross
              </p>
              <p className="text-xl font-black tabular-nums">
                {formatCurrency(results.grossAnnual)}
              </p>
            </Card>
            <Card className="bg-orange-50 border-none p-8">
              <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">
                Rate
              </p>
              <p className="text-xl font-black tabular-nums">
                {results.effectiveRate.toFixed(1)}%
              </p>
            </Card>
            <Card className="bg-red-50 border-none p-8">
              <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">
                Tax
              </p>
              <p className="text-xl font-black tabular-nums">
                {formatCurrency(results.taxAnnual)}
              </p>
            </Card>
          </div>

          <Card className="bg-slate-900 text-white border-none shadow-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 p-8 opacity-5">
              <Calculator size={120} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
              Take-Home Pay
            </p>
            <p className="text-7xl font-black text-emerald-400 tabular-nums tracking-tighter">
              {formatCurrency(results.netMonthly)}
            </p>
          </Card>
        </div>
      </div>

      {/* LONG BODY from Sanity deepContent */}
      {(hasPortableDeep || hasStringDeep) && (
        <section className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            How PAYE works in 2026
          </h2>
          {hasPortableDeep ? (
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
              <PortableText value={deep} />
            </div>
          ) : (
            <div className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
              {deep}
            </div>
          )}
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-white p-12 rounded-[3rem] border border-slate-100 space-y-8 shadow-sm">
          <h2 className="text-4xl font-black text-slate-900">Income Tax FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq: any, i: number) => (
              <div
                key={i}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <RecentPosts
        posts={recentPosts}
        onNavigate={(path) => router.push(`/${path}`)}
      />
    </div>
  );
};