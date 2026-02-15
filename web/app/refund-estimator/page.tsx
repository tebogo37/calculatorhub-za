
'use client';

import { Layout } from '../../components/shared/Layout';
import { RefundEstimator } from '../../sites/tax/RefundEstimator';

export default function RefundRoute() {
  return (
    <Layout activeSite="tax" currentPage="refund-estimator">
      <RefundEstimator />
    </Layout>
  );
}
