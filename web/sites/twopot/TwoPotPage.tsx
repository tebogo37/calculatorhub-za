'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTwoPotTax, formatCurrency } from '../../lib/utils';
import { AlertTriangle, Wallet } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

const SITE_URL = 'https://www.calculatorhub.co.za';

interface TwoPotPageProps {
  recentPosts?: any[];
  siteContent?: any;
}

export const TwoPotPage: React.FC<TwoPotPageProps> = ({
  recentPosts = [],
  siteContent,
}) => {
  const router = useRouter();
  const [income, setIncome] = useState<string>('450000');
  const [withdrawal, setWithdrawal] = useState<string>('30000');
  const [results, setResults] = useState<any>(null);
  const content = siteContent || MOCK_SITE_CONTENT.twopot;

  useEffect(() => {
    const incVal = parseFloat(income) || 0;
    const withVal = parseFloat(withdrawal) || 0;
    setResults(calculateTwoPotTax(incVal, withVal));
  }, [income, withdrawal]);

  const faqs = (content?.faqs || []).map((f: any) => ({
    q: f.q || f.question,
    a: f.a || f.answer,
  }));

  const deep = content?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const pageTitle =
    content?.seoTitle || content?.title || 'Two-Pot Savings Pot Withdrawal Calculator';
  const pageDescription =
    content?.metaDescription ||
    content?.summary ||
    'Estimate tax on a Two-Pot Savings Pot withdrawal in South Africa.';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CalculatorHub SA',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    description:
      'South African financial calculators for tax, VAT, property transfer duty, Two-Pot and everyday essentials.',
    areaServed: { '@type': 'Country', name: 'South Africa' },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/twopot`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CalculatorHub SA',
      url: SITE_URL,
    },
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Two-Pot Savings Pot Withdrawal Calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ZAR' },
    description: pageDescription,
    url: `${SITE_URL}/twopot`,
    provider: {
      '@type': 'Organization',
      name: 'CalculatorHub SA',
      url: SITE_URL,
    },
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

      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-widest">
            Effective Sept 2024
          </div>
          <h1 className="text-5xl font-black text-slate-900 leading-tight">
            Two-Pot <span className="text-orange-500">Calculator</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">{content?.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <Card title="Withdrawal Profile" className="border-slate-100 shadow-xl p-8">
            <div className="space-y-6">
              <Input
                label="Annual Gross Income"
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
              <Input
                label="Withdrawal Amount (Min R2000)"
                type="number"
                value={withdrawal}
                onChange={(e) => setWithdrawal(e.target.value)}
              />
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                Note: Limited to 1/3 of Savings Pot annually.
              </p>
            </div>
          </Card>

          <div className="p-8 bg-orange-50 border border-orange-100 rounded-[2rem] space-y-4">
            <AlertTriangle className="text-orange-600" size={24} />
            <h4 className="font-bold text-orange-900 leading-tight">Early Access Penalty</h4>
            <p className="text-sm text-orange-800 leading-relaxed">
              Withdrawals are taxed as income. If you are in the 45% bracket, you only keep R1,650
              for every R3,000 withdrawn.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {results && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-slate-50 border-none p-8">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Est. Admin Fee
                  </p>
                  <p className="text-xl font-black tabular-nums">
                    {formatCurrency(results.adminFee)}
                  </p>
                </Card>
                <Card className="bg-orange-50 border-none p-8">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">
                    Tax Rate
                  </p>
                  <p className="text-xl font-black tabular-nums">
                    {results.effectiveRate.toFixed(1)}%
                  </p>
                </Card>
                <Card className="bg-red-50 border-none p-8">
                  <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">
                    SARS Cut
                  </p>
                  <p className="text-xl font-black tabular-nums">
                    {formatCurrency(results.taxOnWithdrawal)}
                  </p>
                </Card>
              </div>
              <Card className="bg-slate-900 text-white border-none shadow-2xl p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Wallet size={120} />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Total Net Payout
                </p>
                <p className="text-7xl font-black text-emerald-400 tabular-nums tracking-tighter">
                  {formatCurrency(results.netAmount)}
                </p>
              </Card>
            </>
          )}
        </div>
      </div>

      {(hasPortableDeep || hasStringDeep) && (
        <section className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            How Savings Pot tax works
          </h2>
          {hasPortableDeep ? (
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-a:text-emerald-600">
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
        <section className="bg-white p-12 rounded-[3.5rem] border border-slate-100 space-y-8 shadow-sm">
          <h2 className="text-4xl font-black text-slate-900">Savings Pot FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq: any, i: number) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
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