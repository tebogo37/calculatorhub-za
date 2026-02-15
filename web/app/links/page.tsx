
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { LinksPage } from '../../sites/resources/LinksPage';

export default function LinksRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="links" currentPage="tools">
      <LinksPage onBack={() => router.push('/')} />
    </Layout>
  );
}
