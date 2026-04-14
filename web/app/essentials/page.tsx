'use client';
import { useRouter } from 'next/navigation';
import { Layout } from '../../components/shared/Layout';
import { EssentialsHub } from '../../sites/essentials/EssentialsHub';

export default function EssentialsRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="home" currentPage="essentials" onNavigate={(p) => router.push(p)}>
      <EssentialsHub />
    </Layout>
  );
}