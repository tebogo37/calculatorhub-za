
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { TwoPotPage } from '../../sites/twopot/TwoPotPage';

export default function TwoPotRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="twopot" currentPage="tools">
      <TwoPotPage onNavigatePost={(slug) => router.push(`/${slug}`)} />
    </Layout>
  );
}
