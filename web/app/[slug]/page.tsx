import React from 'react';
import { notFound } from 'next/navigation';
import { client, queries, MOCK_POSTS, MOCK_GUIDES } from '@/lib/sanity';
import { ArrowLeft, Calendar, CheckCircle2, FileText } from 'lucide-react';
import Link from 'next/link';

// Helper to find data in either Mock Posts or Mock Guides
async function getData(slug: string) {
  // 1. Try Real Sanity (if connected)
  try {
    const post = await client.fetch(queries.postBySlug, { slug });
    if (post) return { type: 'post', data: post };
  } catch (e) {
    // Sanity not connected, ignore
  }

  // 2. Check Mock Posts
  const mockPost = MOCK_POSTS.find((p) => p.slug === slug);
  if (mockPost) return { type: 'post', data: mockPost };

  // 3. Check Mock Guides
  const mockGuide = MOCK_GUIDES.find((g) => g.slug === slug);
  if (mockGuide) return { type: 'guide', data: mockGuide };

  return null;
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getData(slug);

  if (!result) {
    return notFound();
  }

  const { type, data } = result;

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 animate-in fade-in">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-emerald-600 mb-8 transition-colors font-medium group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>

        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${type === 'guide' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
              {type === 'guide' ? 'Resource Guide' : data.targetSite || 'Blog'}
            </span>
            {data.publishedAt && (
              <span className="flex items-center text-slate-400 text-sm">
                <Calendar size={14} className="mr-1" />
                {new Date(data.publishedAt).toLocaleDateString('en-ZA')}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {data.title}
          </h1>
          
          {data.description && (
            <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-emerald-500 pl-4">
              {data.description}
            </p>
          )}
        </header>

        {/* Content Body */}
        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          
          {/* RENDER LOGIC FOR GUIDES (Checklists) */}
          {type === 'guide' && data.checklist && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                <FileText className="mr-2 text-blue-500" /> 
                Action Checklist
              </h3>
              <div className="grid gap-4">
                {data.checklist.map((item: string, i: number) => (
                  <div key={i} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle2 className="text-emerald-500 mt-1 mr-4 shrink-0" />
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-blue-800 text-sm">
                <strong>Pro Tip:</strong> This guide is updated for the 2026/2027 tax year.
              </div>
            </div>
          )}

          {/* RENDER LOGIC FOR POSTS (Body Text) */}
          {type === 'post' && (
            <div className="prose prose-lg prose-slate max-w-none">
              {Array.isArray(data.body) ? (
                 data.body.map((block: any, i: number) => (
                   <p key={i} className="text-slate-600 leading-relaxed mb-6">
                     {block.children?.[0]?.text || ''}
                   </p>
                 ))
              ) : (
                <p className="text-slate-600 italic">No content details available.</p>
              )}
            </div>
          )}

        </article>
      </div>
    </div>
  );
}