import { Layout } from '../../components/shared/Layout';
import { PropertyPage } from '../../sites/property/PropertyPage';
import { getRecentPosts, getSiteContent } from '../../lib/sanity';

export default async function PropertyRoute() {
  const [recentPosts, siteContent] = await Promise.all([
    getRecentPosts('property'),
    getSiteContent('property'),
  ]);

  return (
    <Layout activeSite="property" currentPage="tools">
      <PropertyPage recentPosts={recentPosts} siteContent={siteContent} />
    </Layout>
  );
}