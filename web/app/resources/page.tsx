
'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { ResourceCenter } from '../../sites/resources/ResourceCenter';

export default function ResourcesRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="home" currentPage="resources">
      <ResourceCenter onNavigate={(path) => router.push(`/${path}`)} />
    </Layout>
  );
}
