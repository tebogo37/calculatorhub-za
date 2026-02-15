
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { TaxPage } from '../../sites/tax/TaxPage';

export default function TaxRoute() {
  const router = useRouter();
  
  return (
    <Layout 
      activeSite="tax" 
      currentPage="tools"
      onNavigate={(path) => router.push(path)}
      onSiteChange={(site) => router.push(`/${site}`)}
    >
      <TaxPage onNavigatePost={(slug) => router.push(`/${slug}`)} />
    </Layout>
  );
}
