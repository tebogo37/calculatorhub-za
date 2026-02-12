
'use client';

import { Layout } from '@/web/components/shared/Layout';
import { RefundEstimator } from '@/web/sites/tax/RefundEstimator';

export default function RefundRoute() {
  return (
    <Layout activeSite="tax" currentPage="refund-estimator">
      <RefundEstimator />
    </Layout>
  );
}
