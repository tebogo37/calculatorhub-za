import { Layout } from '../../components/shared/Layout';
import { TwoPotPage } from '../../sites/twopot/TwoPotPage';
import { getRecentPosts, getSiteContent } from '../../lib/sanity';

export default async function TwoPotRoute() {
  const [recentPosts, siteContent] = await Promise.all([
    getRecentPosts('twopot'),
    getSiteContent('twopot'),
  ]);

  return (
    <Layout activeSite="twopot" currentPage="tools">
      <TwoPotPage recentPosts={recentPosts} siteContent={siteContent} />
    </Layout>
  );
}