'use client';

import React from 'react';
// Fix: Import the more feature-rich Layout component from web/ directory to support 'currentPage' and 'onNavigate' props
import { Layout } from '../../../web/components/shared/Layout';
import { TaxPage } from '../../../sites/tax/TaxPage';

export default function TaxSubdomainPage() {
  const navigateTo = (path: string) => {
    window.location.href = `/${path}`;
  };

  const handleSiteChange = (site: string) => {
    const domain = window.location.hostname.split('.').slice(-2).join('.');
    window.location.href = `https://${site}.${domain}`;
  };

  return (
    <Layout 
      activeSite="tax" 
      currentPage="tools"
      onSiteChange={handleSiteChange} 
      onNavigate={navigateTo}
    >
      <TaxPage onNavigatePost={navigateTo} />
    </Layout>
  );
}