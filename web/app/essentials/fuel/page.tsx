'use client';
import { useRouter } from 'next/navigation';
import { Layout } from '../../../components/shared/Layout';
import { FuelCalculator } from '../../../sites/essentials/FuelCalculator';

export default function FuelRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="home" currentPage="essentials" onNavigate={(p) => router.push(p)}>
      <FuelCalculator />
    </Layout>
  );
}