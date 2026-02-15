
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { VatPage } from '../../sites/vat/VatPage';

export default function VatRoute() {
  const router = useRouter();
  
  return (
    <Layout 
      activeSite="vat" 
      currentPage="tools"
      onNavigate={(path) => router.push(path)}
      onSiteChange={(site) => router.push(`/${site}`)}
    >
      <VatPage onNavigatePost={(slug) => router.push(`/${slug}`)} />
    </Layout>
  );
}
