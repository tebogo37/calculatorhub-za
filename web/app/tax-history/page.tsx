
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TaxHistory } from '../../sites/resources/TaxHistory';
import { Layout } from '../../components/shared/Layout';

export default function TaxHistoryRoute() {
  const router = useRouter();

  return (
    // FIX: Changed "resources" to "links" (which is a valid option in your Layout)
    <Layout activeSite="links" currentPage="Tax History">
      
      <TaxHistory onBack={() => router.back()} />
      
    </Layout>
  );
}