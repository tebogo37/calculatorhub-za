'use client';

import React from 'react';
// Fix: Import the more feature-rich Layout component from web/ directory to support 'currentPage' and 'onNavigate' props
import { Layout } from '../../../web/components/shared/Layout';
import { PropertyPage } from '../../../sites/property/PropertyPage';

export default function PropertySubdomainPage() {
  const navigateTo = (path: string) => {
    window.location.href = `/${path}`;
  };

  const handleSiteChange = (site: string) => {
    const domain = window.location.hostname.split('.').slice(-2).join('.');
    window.location.href = `https://${site}.${domain}`;
  };

  return (
    <Layout 
      activeSite="property" 
      currentPage="tools"
      onSiteChange={handleSiteChange} 
      onNavigate={navigateTo}
    >
      <PropertyPage onNavigatePost={navigateTo} />
    </Layout>
  );
}