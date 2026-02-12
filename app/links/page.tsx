
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '@/web/components/shared/Layout';
import { LinksPage } from '@/web/sites/resources/LinksPage';

export default function LinksRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="links" currentPage="tools">
      <LinksPage onBack={() => router.push('/')} />
    </Layout>
  );
}
