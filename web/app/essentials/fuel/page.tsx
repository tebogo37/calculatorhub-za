import { Layout } from '../../../components/shared/Layout';
import { FuelCalculator } from '../../../sites/essentials/FuelCalculator';
import { getSiteContent, getFuelRelatedPosts } from '../../../lib/sanity';

export default async function FuelRoute() {
  const [siteContent, recentPosts] = await Promise.all([
    getSiteContent('fuel'),
    getFuelRelatedPosts(),
  ]);

  return (
    <Layout activeSite="home" currentPage="essentials">
      <FuelCalculator siteContent={siteContent} recentPosts={recentPosts} />
    </Layout>
  );
}