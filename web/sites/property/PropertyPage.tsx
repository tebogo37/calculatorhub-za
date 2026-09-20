'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { calculateTransferDuty, formatCurrency } from '../../lib/utils';
import { Home, Zap, ShieldCheck, ArrowRight, Sun } from 'lucide-react';
import { RecentPosts } from '../../components/shared/RecentPosts';
import { AdSpace } from '../../components/shared/AdSpace';
import { MOCK_SITE_CONTENT } from '../../lib/sanity';

const SITE_URL = 'https://www.calculatorhub.co.za';

interface PropertyPageProps {
  recentPosts?: any[];
  siteContent?: any;
}

export const PropertyPage: React.FC<PropertyPageProps> = ({
  recentPosts = [],
  siteContent,
}) => {
  const router = useRouter();
  const [propertyPrice, setPropertyPrice] = useState<string>('2500000');
  const [solarSpend, setSolarSpend] = useState<string>('0');
  const [duty, setDuty] = useState<number>(0);
  const content = siteContent || MOCK_SITE_CONTENT.property;

  useEffect(() => {
    const val = parseFloat(propertyPrice) || 0;
    setDuty(calculateTransferDuty(val));
  }, [propertyPrice]);

  const solarCredit = Math.min((parseFloat(solarSpend) || 0) * 0.25, 15000);

  const faqs = (content?.faqs || []).map((f: any) => ({
    q: f.q || f.question,
    a: f.a || f.answer,
  }));

  const deep = content?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const pageTitle =
    content?.seoTitle || content?.title || 'Property Transfer Duty Calculator 2026';
  const pageDescription =
    content?.metaDescription ||
    content?.summary ||
    'Estimate SARS transfer duty on property purchases in South Africa.';

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
    url: `${SITE_URL}/property`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CalculatorHub SA',
      url: SITE_URL,
    },
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Property Transfer Duty Calculator 2026',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ZAR' },
    description: pageDescription,
    url: `${SITE_URL}/property`,
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

      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-[2rem] shadow-xl shadow-emerald-500/10">
          <Home size={40} />
        </div>
        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Property Transfer <span className="text-emerald-500">Duty 2026</span>
        </h1>
        <p className="text-slate-500 text-xl leading-relaxed">{content?.summary}</p>
      </div>

      <AdSpace slot="property-top" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          <Card title="Acquisition Price" className="border-slate-100 shadow-2xl p-8">
            <Input
              label="Purchase Price (ZAR)"
              type="number"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(e.target.value)}
              className="text-2xl font-black"
            />
          </Card>

          <Card className="border-emerald-100 bg-emerald-50/30">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-emerald-700">
                <Sun size={24} />
                <h4 className="font-bold">2026 Solar Tax Credit</h4>
              </div>
              <Input
                label="Proposed Solar Panel Spend"
                type="number"
                value={solarSpend}
                onChange={(e) => setSolarSpend(e.target.value)}
                helperText="Claim 25% of panel cost (max R15,000 credit)."
              />
              <div className="pt-4 border-t border-emerald-100 flex justify-between items-center">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                  Potential Rebate
                </span>
                <span className="font-black text-lg text-emerald-700">
                  {formatCurrency(solarCredit)}
                </span>
              </div>
            </div>
          </Card>

          <AdSpace slot="property-sidebar" format="rectangle" />
        </div>

        <div className="lg:col-span-7 space-y-6">
          <Card className="bg-slate-900 text-white border-none shadow-2xl p-12 text-center relative overflow-hidden group">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
              Total SARS Transfer Duty
            </p>
            <h2 className="text-7xl font-black text-emerald-400 tracking-tighter mb-4">
              {formatCurrency(duty)}
            </h2>
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <ShieldCheck size={14} /> Exempt Threshold: R1.1M
            </div>
          </Card>

          <div className="p-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] text-white relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-black leading-tight">
                Save R15,000 on your Home Upgrade
              </h3>
              <p className="text-indigo-100 text-lg leading-relaxed">
                Purchasing a property with solar? Ensure the invoices are in your name to claim the
                Section 6B energy rebate this tax year.
              </p>
              <button
                onClick={() => router.push('/resources')}
                className="flex items-center gap-2 font-black uppercase text-xs tracking-widest group"
              >
                Read the 2026 Energy Guide{' '}
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          <AdSpace slot="property-middle" />
        </div>
      </div>

      {(hasPortableDeep || hasStringDeep) && (
        <section className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Transfer duty scale 2026 &amp; the R1.1m exemption
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
          <h2 className="text-4xl font-black text-slate-900">Property FAQ</h2>
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