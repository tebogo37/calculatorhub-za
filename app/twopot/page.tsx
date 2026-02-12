
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '@/web/components/shared/Layout';
import { TwoPotPage } from '@/web/sites/twopot/TwoPotPage';

export default function TwoPotRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="twopot" currentPage="tools">
      <TwoPotPage onNavigatePost={(slug) => router.push(`/${slug}`)} />
    </Layout>
  );
}
