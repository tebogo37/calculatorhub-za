import { Layout } from '../../components/shared/Layout';
import { RefundEstimator } from '../../sites/tax/RefundEstimator';
import { getSiteContent } from '../../lib/sanity';

export default async function RefundRoute() {
  const siteContent = await getSiteContent('refund');

  return (
    <Layout activeSite="tax" currentPage="refund-estimator">
      <RefundEstimator siteContent={siteContent} />
    </Layout>
  );
}