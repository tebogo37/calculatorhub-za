
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { PropertyPage } from '../../sites/property/PropertyPage';

export default function PropertyRoute() {
  const router = useRouter();
  
  return (
    <Layout 
      activeSite="property" 
      currentPage="tools"
      onNavigate={(path) => router.push(path)}
      onSiteChange={(site) => router.push(`/${site}`)}
    >
      <PropertyPage onNavigatePost={(slug) => router.push(`/${slug}`)} />
    </Layout>
  );
}
