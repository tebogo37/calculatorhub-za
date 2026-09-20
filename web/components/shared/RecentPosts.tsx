// web/components/shared/RecentPosts.tsx
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RecentPostsProps {
  posts: any[];
  onNavigate?: (path: string) => void;
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ posts = [], onNavigate }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16 space-y-6">
      <h2 className="text-2xl font-black text-slate-900">Related Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => onNavigate?.(`resources/${post.slug}`)}
            className="bg-white border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">
              {post.targetSite}
            </p>
            <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold mt-4 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Read article <ArrowRight size={12} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};