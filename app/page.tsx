'use client';

import React from 'react';
// Fix: Import the more feature-rich Layout component from web/ directory to support 'home' site and 'currentPage' prop
import { Layout } from '../web/components/shared/Layout';
import { HomePage } from '../sites/Home/HomePage';

export default function Home() {
  const navigateTo = (path: string) => {
    window.location.href = `/${path}`;
  };

  const handleSiteChange = (site: string) => {
    // In a multi-domain setup, this might redirect to the subdomain
    const domain = window.location.hostname.split('.').slice(-2).join('.');
    window.location.href = `https://${site}.${domain}`;
  };

  return (
    <Layout 
      activeSite="home" 
      currentPage="tools"
      onSiteChange={handleSiteChange} 
      onNavigate={navigateTo}
    >
      <HomePage 
        onNavigate={navigateTo} 
        onNavigateSite={handleSiteChange} 
      />
    </Layout>
  );
}