'use client';

import React, { use } from 'react';
import { Layout } from '../../../../web/components/shared/Layout';
import { PostDetailPage } from '../../../../web/sites/vat/PostDetailPage';

export default function VatPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15, params is a Promise that must be awaited or handled via React.use()
  const { slug } = use(params);
  
  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  const handleNavigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/${path}`;
    }
  };

  const handleSiteChange = (site: string) => {
    if (typeof window !== 'undefined') {
      const domain = window.location.hostname.split('.').slice(-2).join('.');
      window.location.href = `https://${site}.${domain}`;
    }
  };

  return (
    <Layout 
      activeSite="vat" 
      currentPage="tools"
      onSiteChange={handleSiteChange} 
      onNavigate={handleNavigate}
    >
      <PostDetailPage site="vat" slug={slug} onBack={handleBack} />
    </Layout>
  );
}