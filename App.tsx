
import React, { useState, useEffect } from 'react';
import { Layout } from './web/components/shared/Layout';
import { VatPage } from './web/sites/vat/VatPage';
import { TaxPage } from './web/sites/tax/TaxPage';
import { PropertyPage } from './web/sites/property/PropertyPage';
import { PostDetailPage } from './web/sites/vat/PostDetailPage';
import { ResourceCenter } from './web/sites/resources/ResourceCenter';
import { TaxHistory } from './web/sites/resources/TaxHistory';
import { RefundEstimator } from './web/sites/tax/RefundEstimator';
import { TFSAGuide } from './web/sites/resources/TFSAGuide';
import { SEO } from './web/components/shared/SEO';
import { client, queries, MOCK_POSTS } from './web/lib/sanity';

type SiteType = 'vat' | 'tax' | 'property';
type PageType = 'tools' | 'resources' | 'tax-history' | 'refund-estimator' | 'tfsa-guide';

const App: React.FC = () => {
  const [activeSite, setActiveSite] = useState<SiteType>('tax');
  const [currentPage, setCurrentPage] = useState<PageType>('tools');
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [currentPost, setCurrentPost] = useState<any>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const hostname = window.location.hostname;
      const path = window.location.pathname;
      
      if (hostname.startsWith('vat.')) setActiveSite('vat');
      else if (hostname.startsWith('property.')) setActiveSite('property');
      else if (hostname.startsWith('tax.')) setActiveSite('tax');

      if (path === '/resources') setCurrentPage('resources');
      else if (path === '/tax-history') setCurrentPage('tax-history');
      else if (path === '/refund-estimator') setCurrentPage('refund-estimator');
      else if (path === '/tfsa-guide') setCurrentPage('tfsa-guide');
      else {
        const slug = path.split('/').filter(Boolean)[0];
        if (slug && !['vat', 'tax', 'property', 'resources', 'tax-history', 'refund-estimator', 'tfsa-guide'].includes(slug)) {
          setCurrentPage('tools');
          setCurrentSlug(slug);
          fetchPostData(slug, activeSite);
        } else {
          setCurrentPage('tools');
          setCurrentSlug(null);
          setCurrentPost(null);
        }
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [activeSite]);

  const fetchPostData = async (slug: string, site: string) => {
    try {
      const data = await client.fetch(queries.postBySlug, { site, slug });
      if (data) setCurrentPost(data);
      else {
        const mock = MOCK_POSTS.find(p => p.slug === slug && p.targetSite === site);
        setCurrentPost(mock || null);
      }
    } catch (err) {
      const mock = MOCK_POSTS.find(p => p.slug === slug && p.targetSite === site);
      setCurrentPost(mock || null);
    }
  };

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', `/${path}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  const navigateToPost = (slug: string) => {
    window.history.pushState({}, '', `/${slug}`);
    setCurrentSlug(slug);
    setCurrentPage('tools');
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentSlug(null);
    setCurrentPage('tools');
    setCurrentPost(null);
  };

  const handleSiteChange = (site: SiteType) => {
    setActiveSite(site);
    navigateHome();
  };

  const renderActiveContent = () => {
    if (currentPage === 'resources') return <ResourceCenter onNavigate={navigateTo} />;
    if (currentPage === 'tax-history') return <TaxHistory onBack={() => navigateTo('resources')} />;
    if (currentPage === 'refund-estimator') return <RefundEstimator />;
    if (currentPage === 'tfsa-guide') return <TFSAGuide onBack={() => navigateTo('resources')} />;

    if (currentSlug) {
      return (
        <PostDetailPage 
          site={activeSite} 
          slug={currentSlug} 
          onBack={navigateHome} 
        />
      );
    }

    switch (activeSite) {
      case 'vat': return <VatPage onNavigatePost={navigateToPost} />;
      case 'property': return <PropertyPage onNavigatePost={navigateToPost} />;
      default: return <TaxPage onNavigatePost={navigateToPost} />;
    }
  };

  return (
    <>
      <SEO site={activeSite} slug={currentSlug} post={currentPost} />
      {/* 
        Fix: Correcting Layout props to match LayoutProps interface in web/components/shared/Layout.tsx.
        The updated Layout component uses 'onNavigate' instead of 'onNavigateResources' 
        and requires 'currentPage' and 'activeSite' (casted to handle union compatibility).
      */}
      <Layout 
        activeSite={activeSite as any} 
        currentPage={currentPage}
        onSiteChange={handleSiteChange} 
        onNavigate={navigateTo}
      >
        {renderActiveContent()}
      </Layout>
    </>
  );
};

export default App;
