
import React, { useState, useEffect } from 'react';
import { client, queries, MOCK_POSTS } from '../../lib/sanity';
import { Card } from '../ui/Card';
import { ArrowRight, BookOpen } from 'lucide-react';

interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
}

export const RecentPosts: React.FC<{ site: string; onNavigate: (slug: string) => void }> = ({ site, onNavigate }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(queries.recentPosts, { site });
        if (data && data.length > 0) {
          setPosts(data);
        } else {
          const filteredMocks = MOCK_POSTS.filter(p => p.targetSite === site);
          setPosts(filteredMocks);
        }
      } catch (err) {
        const filteredMocks = MOCK_POSTS.filter(p => p.targetSite === site);
        setPosts(filteredMocks);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [site]);

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse mt-16">
      {[1, 2, 3].map(i => <div key={i} className="h-48 bg-slate-100 rounded-xl"></div>)}
    </div>
  );

  if (posts.length === 0) return null;

  return (
    <div className="space-y-6 mt-16 border-t border-slate-200 pt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="text-emerald-500" size={20} />
          Latest from {site.toUpperCase()} Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card 
            key={post.slug} 
            className="hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer group"
          >
            <div onClick={() => onNavigate(post.slug)} className="h-full flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {new Date(post.publishedAt).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                {post.excerpt && <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>}
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                READ ARTICLE <ArrowRight size={14} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
