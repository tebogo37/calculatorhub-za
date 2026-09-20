import { Layout } from '../../components/shared/Layout';
import { TaxPage } from '../../sites/tax/TaxPage';
import { getRecentPosts, getSiteContent } from '../../lib/sanity';

export default async function TaxRoute() {
  const [recentPosts, siteContent] = await Promise.all([
    getRecentPosts('tax'),
    getSiteContent('tax'),
  ]);

  return (
    <Layout activeSite="tax" currentPage="tools">
      <TaxPage 
        recentPosts={recentPosts} 
        siteContent={siteContent} 
      />
    </Layout>
  );
}