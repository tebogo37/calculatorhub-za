// web/app/tax-history/page.tsx
import React from 'react';
import { TaxHistory } from '@/sites/resources/TaxHistory';
import { Layout } from '@/components/shared/Layout';

export default function TaxHistoryRoute() {
  return (
    <Layout>
      <TaxHistory />
    </Layout>
  );
}