'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { VAT_RATE } from '../../lib/constants';
import { formatCurrency } from '../../lib/utils';
import { ShieldCheck } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

const SITE_URL = 'https://www.calculatorhub.co.za';

interface VatPageProps {
  recentPosts?: any[];
  siteContent?: any;
}

export const VatPage: React.FC<VatPageProps> = ({
  recentPosts = [],
  siteContent,
}) => {
  const router = useRouter();
  const [amount, setAmount] = useState<string>('1000');
  const [isInclusive, setIsInclusive] = useState<boolean>(false);
  const content = siteContent || MOCK_SITE_CONTENT.vat;

  const [results, setResults] = useState({
    exclusive: 0,
    vat: 0,
    inclusive: 0,
  });

  useEffect(() => {
    const val = parseFloat(amount) || 0;
    if (isInclusive) {
      const vat = val - val / (1 + VAT_RATE);
      setResults({ exclusive: val - vat, vat, inclusive: val });
    } else {
      const vat = val * VAT_RATE;
      setResults({ exclusive: val, vat, inclusive: val + vat });
    }
  }, [amount, isInclusive]);

  const faqs = (content?.faqs || []).map((f: any) => ({
    q: f.q || f.question,
    a: f.a || f.answer,
  }));

  const deep = content?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const pageTitle = content?.seoTitle || content?.title || 'SA VAT Calculator 15%';
  const pageDescription =
    content?.metaDescription ||
    content?.summary ||
    'Free South Africa VAT calculator. Add or remove 15% VAT.';

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
    url: `${SITE_URL}/vat`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CalculatorHub SA',
      url: SITE_URL,
    },
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SA VAT Calculator 15%',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ZAR' },
    description: pageDescription,
    url: `${SITE_URL}/vat`,
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
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700 py-12 px-4">
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

      <div className="space-y-4 text-center md:text-left max-w-2xl">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 leading-tight">
          VAT Calculator <span className="text-emerald-500">15% SA</span>
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed">{content?.summary}</p>
      </div>

      <AdSpace slot="vat-header-banner" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-6">
          <Card title="Input Settings" className="border-slate-100 shadow-xl p-8">
            <div className="space-y-6">
              <Input
                label="Transaction Amount (ZAR)"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg font-bold"
              />
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Calculation Type
                </label>
                <div className="flex bg-slate-100 p-1.5 rounded-xl">
                  <button
                    onClick={() => setIsInclusive(false)}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
                      !isInclusive ? 'bg-white shadow-md text-emerald-600' : 'text-slate-500'
                    }`}
                  >
                    Add VAT
                  </button>
                  <button
                    onClick={() => setIsInclusive(true)}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
                      isInclusive ? 'bg-white shadow-md text-emerald-600' : 'text-slate-500'
                    }`}
                  >
                    Remove VAT
                  </button>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-emerald-500" /> Current Rate: 15%
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-slate-50 border-slate-100 p-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Exclusive Amount
              </p>
              <p className="text-3xl font-black text-slate-900 tabular-nums">
                {formatCurrency(results.exclusive)}
              </p>
            </Card>
            <Card className="bg-blue-50 border-blue-100 p-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">
                VAT (15%)
              </p>
              <p className="text-3xl font-black text-blue-900 tabular-nums">
                {formatCurrency(results.vat)}
              </p>
            </Card>
          </div>
          <Card className="bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group p-12">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Total Inclusive Amount
                </p>
                <p className="text-6xl font-black text-emerald-400 tabular-nums tracking-tighter">
                  {formatCurrency(results.inclusive)}
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-4 px-8 rounded-2xl transition-all shadow-xl active:scale-95"
              >
                Download PDF
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Body from Sanity */}
      {(hasPortableDeep || hasStringDeep) && (
        <section className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            VAT in South Africa — registration &amp; 15% calculations
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
          <h2 className="text-4xl font-black text-slate-900">VAT Policy FAQ</h2>
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