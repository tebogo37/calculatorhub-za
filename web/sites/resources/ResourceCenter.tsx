'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { Card } from '../../components/ui/Card';
import { LeadMagnetModal } from '../../components/shared/LeadMagnetModal';
import {
  FileText,
  ExternalLink,
  Book,
  BarChart3,
  Download,
  Calculator,
  PiggyBank,
  ShieldCheck,
} from 'lucide-react';
import { AdSpace } from '../../components/shared/AdSpace';

const SITE_URL = 'https://www.calculatorhub.co.za';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText />,
  Book: <Book />,
  Download: <Download />,
  PiggyBank: <PiggyBank />,
  ShieldCheck: <ShieldCheck />,
  Calculator: <Calculator />,
  BarChart3: <BarChart3 />,
};

interface ResourceCenterProps {
  guides: any[];
  posts: any[];
  siteContent?: any;
}

export const ResourceCenter: React.FC<ResourceCenterProps> = ({
  guides = [],
  posts = [],
  siteContent,
}) => {
  const router = useRouter();
  const [modalState, setModalState] = useState<{
    open: boolean;
    title: string;
    desc: string;
  }>({
    open: false,
    title: '',
    desc: '',
  });

  const summary =
    siteContent?.summary ||
    'Downloadable guides, visual data analysis, and educational clusters for the 2026 SARS tax year.';

  const deep = siteContent?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const pageTitle =
    siteContent?.seoTitle || siteContent?.title || 'Expert Finance Resource Hub';
  const pageDescription = siteContent?.metaDescription || summary;

  const handleGuideClick = (guide: any) => {
    if (!guide) return;
    if (guide.slug === 'tfsa-guide') {
      router.push('/tfsa-guide');
      return;
    }
    setModalState({
      open: true,
      title: `Download: ${guide.title}`,
      desc: guide.description || '',
    });
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CalculatorHub SA',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    areaServed: { '@type': 'Country', name: 'South Africa' },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/resources`,
    isPartOf: { '@type': 'WebSite', name: 'CalculatorHub SA', url: SITE_URL },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <LeadMagnetModal
        isOpen={modalState.open}
        onClose={() => setModalState({ ...modalState, open: false })}
        title={modalState.title}
        description={modalState.desc}
        onSuccess={(email) => console.log('Collected email:', email)}
      />

      <header className="text-center space-y-4 pt-12">
        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Expert Finance <span className="text-emerald-500">Resource Hub</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">{summary}</p>
      </header>

      <AdSpace slot="resource-top" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          onClick={() => router.push('/refund-estimator')}
          className="bg-slate-900 rounded-[2.5rem] p-10 text-white cursor-pointer group hover:scale-[1.01] transition-all relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-slate-900">
                <Calculator size={28} />
              </div>
              <h3 className="text-3xl font-black">SARS Refund Estimator</h3>
              <p className="text-slate-400 max-w-xs">
                Interactive tool: Estimate your cash back based on RA, Medical Aid and Income
                levels.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-emerald-400 font-bold uppercase text-xs tracking-widest">
              Launch Premium Tool <Calculator size={16} />
            </div>
          </div>
        </div>

        <div
          onClick={() =>
            handleGuideClick(guides.find((g) => g.slug === 'tfsa-guide') || guides[0])
          }
          className="bg-emerald-600 rounded-[2.5rem] p-10 text-white cursor-pointer group hover:scale-[1.01] transition-all relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600">
                <PiggyBank size={28} />
              </div>
              <h3 className="text-3xl font-black">TFSA Opportunity</h3>
              <p className="text-emerald-50 text-sm">
                Are you using your full R36,000 allowance? Read our 2026 checklist.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-white font-bold uppercase text-xs tracking-widest">
              View TFSA Guide <BarChart3 size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <FileText className="text-emerald-500" /> Educational Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guides.length > 0 ? (
                guides.map((guide) => (
                  <Card
                    key={guide.slug}
                    className="group hover:border-emerald-500 transition-colors cursor-pointer border-slate-100"
                  >
                    <div
                      onClick={() => handleGuideClick(guide)}
                      className="flex flex-col gap-4"
                    >
                      <div className="p-3 bg-slate-50 w-fit rounded-xl text-slate-400 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-colors">
                        {iconMap[guide.icon] || <FileText />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-1">{guide.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {guide.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-2">
                        <Download size={12} /> Unlock PDF
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-slate-400">No guides published yet.</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Book className="text-emerald-500" /> Latest Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/resources/${post.slug}`}
                    className="block h-full"
                  >
                    <Card className="border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer h-full">
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                          {post.targetSite}
                        </p>
                        <h4 className="font-bold text-slate-800 text-lg">{post.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
                      </div>
                    </Card>
                  </Link>
                ))
              ) : (
                <p className="text-slate-400">No articles published yet.</p>
              )}
            </div>
          </section>

          {(hasPortableDeep || hasStringDeep) && (
            <section className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-4">
              <h2 className="text-2xl font-black text-slate-900">About this Resource Hub</h2>
              {hasPortableDeep ? (
                <div className="prose prose-slate max-w-none prose-a:text-emerald-600">
                  <PortableText value={deep} />
                </div>
              ) : (
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">{deep}</p>
              )}
            </section>
          )}

          <AdSpace slot="resource-middle" />
        </div>

        <div className="space-y-6">
          <Card title="Government Links" className="bg-white border-slate-100">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.sars.gov.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all"
                >
                  <ExternalLink size={16} className="text-slate-400" />
                  <span className="text-sm font-bold text-slate-700">Official SARS Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.treasury.gov.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all"
                >
                  <ExternalLink size={16} className="text-slate-400" />
                  <span className="text-sm font-bold text-slate-700">National Treasury</span>
                </a>
              </li>
            </ul>
          </Card>

          <AdSpace slot="resource-sidebar" format="rectangle" />
        </div>
      </div>
    </div>
  );
};