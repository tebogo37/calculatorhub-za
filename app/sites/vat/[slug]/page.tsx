
'use client';

import React, { use } from 'react';
import { Layout } from '@/components/shared/Layout';
import { PostDetailPage } from '@/web/sites/vat/PostDetailPage';

export default function VatPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrapping async params - Required for Next.js 15
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  return (
    <Layout 
      activeSite="vat" 
      currentPage="blog"
    >
      <PostDetailPage 
        site="vat" 
        slug={slug} 
        onBack={() => window.location.href = '/'} 
      />
    </Layout>
  );
}
