
import React, { useState, useEffect } from 'react';
import { Layout } from './components/shared/Layout';
import { VatPage } from './sites/vat/VatPage';
import { TaxPage } from './sites/tax/TaxPage';
import { PropertyPage } from './sites/property/PropertyPage';
import { PostDetailPage } from './sites/vat/PostDetailPage';
import { ResourceCenter } from './sites/resources/ResourceCenter';
import { TaxHistory } from './sites/resources/TaxHistory';
import { RefundEstimator } from './sites/tax/RefundEstimator';
import { TFSAGuide } from './sites/resources/TFSAGuide';
import { HomePage } from './sites/Home/HomePage';
import { TwoPotPage } from './sites/twopot/TwoPotPage';
import { LinksPage } from './sites/resources/LinksPage';
import { CallbackModal } from './components/shared/CallbackModal';
import { SEO } from './components/shared/SEO';
import { client, queries, MOCK_POSTS } from './lib/sanity';

type SiteType = 'home' | 'vat' | 'tax' | 'property' | 'twopot' | 'links';
type PageType = 'tools' | 'resources' | 'tax-history' | 'refund-estimator' | 'tfsa-guide';

const App: React.FC = () => {
  const [activeSite, setActiveSite] = useState<SiteType>('home');
  const [currentPage, setCurrentPage] = useState<PageType>('tools');
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [currentPost, setCurrentPost] = useState<any>(null);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      const hostname = window.location.hostname;
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(Boolean);
      const firstSegment = pathSegments[0];
      
      // Determine site based on hostname OR first path segment (for localhost/direct nav)
      let detectedSite: SiteType = 'home';
      
      if (hostname.startsWith('vat.')) detectedSite = 'vat';
      else if (hostname.startsWith('property.')) detectedSite = 'property';
      else if (hostname.startsWith('tax.')) detectedSite = 'tax';
      else if (hostname.startsWith('twopot.')) detectedSite = 'twopot';
      else if (path === '/links') detectedSite = 'links';
      else if (['vat', 'tax', 'property', 'twopot'].includes(firstSegment)) {
        detectedSite = firstSegment as SiteType;
      }
      
      setActiveSite(detectedSite);

      // Determine page based on path
      if (path === '/resources') setCurrentPage('resources');
      else if (path === '/tax-history') setCurrentPage('tax-history');
      else if (path === '/refund-estimator') setCurrentPage('refund-estimator');
      else if (path === '/tfsa-guide') setCurrentPage('tfsa-guide');
      else {
        // Handle Blog Posts
        const possibleSlug = pathSegments.length > 1 ? pathSegments[1] : pathSegments[0];
        const reservedPaths = ['vat', 'tax', 'property', 'twopot', 'resources', 'tax-history', 'refund-estimator', 'tfsa-guide', 'links'];
        
        if (possibleSlug && !reservedPaths.includes(possibleSlug)) {
          setCurrentPage('tools');
          setCurrentSlug(possibleSlug);
          fetchPostData(possibleSlug, detectedSite === 'home' ? 'tax' : detectedSite);
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
  }, []);

  const fetchPostData = async (slug: string, site: string) => {
    try {
      const data = await client.fetch(queries.postBySlug, { site, slug });
      if (data) setCurrentPost(data);
      else {
        const mock = MOCK_POSTS.find(p => p.slug === slug);
        setCurrentPost(mock || null);
      }
    } catch (err) {
      const mock = MOCK_POSTS.find(p => p.slug === slug);
      setCurrentPost(mock || null);
    }
  };

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', `/${path}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  const handleSiteChange = (site: SiteType) => {
    if (site === 'home') navigateTo('');
    else navigateTo(site);
  };

  const renderActiveContent = () => {
    if (activeSite === 'links') return <LinksPage onBack={() => handleSiteChange('home')} />;
    
    if (activeSite === 'home' && currentPage === 'tools' && !currentSlug) {
      return <HomePage onNavigate={navigateTo} onNavigateSite={handleSiteChange} />;
    }

    if (currentPage === 'resources') return <ResourceCenter onNavigate={navigateTo} onOpenCallback={() => setIsCallbackOpen(true)} />;
    if (currentPage === 'tax-history') return <TaxHistory onBack={() => navigateTo('resources')} />;
    if (currentPage === 'refund-estimator') return <RefundEstimator />;
    if (currentPage === 'tfsa-guide') return <TFSAGuide onBack={() => navigateTo('resources')} />;

    if (currentSlug) {
      return (
        <PostDetailPage site={activeSite === 'home' ? 'tax' : activeSite} slug={currentSlug} onBack={() => handleSiteChange(activeSite)} />
      );
    }

    switch (activeSite) {
      case 'vat': return <VatPage onNavigatePost={navigateTo} />;
      case 'property': return <PropertyPage onNavigatePost={navigateTo} />;
      case 'twopot': return <TwoPotPage onNavigatePost={navigateTo} />;
      default: return <TaxPage onNavigatePost={navigateTo} />;
    }
  };

  return (
    <>
      <SEO site={activeSite} slug={currentSlug} post={currentPost} />
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
      <Layout 
        activeSite={activeSite as any} 
        currentPage={currentPage}
        onSiteChange={handleSiteChange} 
        onNavigate={navigateTo}
        onOpenCallback={() => setIsCallbackOpen(true)}
      >
        {renderActiveContent()}
      </Layout>
    </>
  );
};

export default App;
