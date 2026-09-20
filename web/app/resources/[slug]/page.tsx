import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Layout } from '../../../components/shared/Layout';
import { getPostBySlug } from '../../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) : Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Article not found' };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || '',
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout activeSite="home" currentPage="resources">
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 animate-in fade-in duration-700">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-500 uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Resources
        </Link>

        <header className="space-y-4">
          {post.targetSite && (
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
              {post.targetSite}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-slate-500 leading-relaxed">{post.excerpt}</p>
          )}
          {post.publishedAt && (
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {new Date(post.publishedAt).toLocaleDateString('en-ZA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </header>

        {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-a:text-emerald-600">
            <PortableText value={post.body} />
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
            <p className="text-slate-500 leading-relaxed">
              {post.excerpt ||
                'This article does not have a full body yet. Add content in Sanity Studio under Body, then publish.'}
            </p>
          </div>
        )}

        {post.faqs && post.faqs.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-black text-slate-900">FAQs</h2>
            <div className="grid gap-4">
              {post.faqs.map((faq: any, i: number) => (
                <div
                  key={i}
                  className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <h3 className="font-black text-slate-900 mb-2">
                    {faq.question || faq.q}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {faq.answer || faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="pt-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-black px-6 py-3 rounded-xl hover:bg-slate-800 transition-all text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> All resources
          </Link>
        </div>
      </article>
    </Layout>
  );
}