'use client';
import { useRouter } from 'next/navigation';
import { Layout } from '../../../components/shared/Layout';
import { GroceryCalculator } from '../../../sites/essentials/GroceryCalculator';

export default function GroceriesRoute() {
  const router = useRouter();
  return (
    <Layout activeSite="home" currentPage="essentials" onNavigate={(p) => router.push(p)}>
      <GroceryCalculator />
    </Layout>
  );
}