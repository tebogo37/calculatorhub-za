'use client';

import React, { useState, useEffect } from 'react';
import { client, queries, MOCK_POSTS } from '../../lib/oldbkupsanity';
import { RichText } from '../../components/shared/RichText';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';

export const PostDetailPage: React.FC<{ site: string; slug: string; onBack: () => void }> = ({ site, slug, onBack }) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(queries.postBySlug, { site, slug });
        if (data) {
          setPost(data);
        } else {
          const mock = MOCK_POSTS.find(p => p.slug === slug);
          setPost(mock || null);
        }
      } catch (err) {
        const mock = MOCK_POSTS.find(p => p.slug === slug);
        setPost(mock || null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [site, slug]);

  if (loading) return (
    <div className="max-w-3xl mx-auto py-20 space-y-8 animate-pulse">
      <div className="h-4 w-24 bg-slate-100 rounded"></div>
      <div className="h-12 w-3/4 bg-slate-100 rounded"></div>
      <div className="h-96 w-full bg-slate-100 rounded-2xl"></div>
    </div>
  );

  if (!post) return (
    <div className="max-w-3xl mx-auto py-32 text-center space-y-4">
      <h1 className="text-2xl font-bold">Post not found</h1>
      <p className="text-slate-500">The requested article could not be located in our archives.</p>
      <button onClick={onBack} className="text-emerald-600 font-bold px-6 py-2 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">Return to tools</button>
    </div>
  );

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to {site.toUpperCase()} Tools
      </button>

      <header className="space-y-6 mb-12">
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString('en-ZA')}</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span className="text-emerald-600">{site.toUpperCase()} GUIDE</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">CH</div>
            <div>
              <p className="text-sm font-bold text-slate-900">CalculatorHub Team</p>
              <p className="text-xs text-slate-500">Tax & Regulatory Research</p>
            </div>
          </div>
          <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </header>

      <div className="prose prose-emerald prose-lg max-w-none">
        <RichText value={post.body} />
      </div>
      
      <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-emerald-500/10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 italic">Ready to run the numbers?</h3>
          <p className="text-slate-400 mb-8 max-w-md">Our updated 2026 {site.toUpperCase()} tool uses the exact same data discussed in this article.</p>
          <button 
            onClick={onBack}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
          >
            Launch Calculator
          </button>
        </div>
      </div>
    </article>
  );
};