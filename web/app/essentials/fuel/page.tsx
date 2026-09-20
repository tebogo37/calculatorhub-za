import { Layout } from '../../../components/shared/Layout';
import { FuelCalculator } from '../../../sites/essentials/FuelCalculator';
import { getSiteContent } from '../../../lib/sanity';

export default async function FuelRoute() {
  const siteContent = await getSiteContent('fuel');
  return (
    <Layout activeSite="home" currentPage="essentials">
      <FuelCalculator siteContent={siteContent} />
    </Layout>
  );
}