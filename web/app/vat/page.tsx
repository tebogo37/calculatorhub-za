import { Layout } from '../../components/shared/Layout';
import { VatPage } from '../../sites/vat/VatPage';
import { getRecentPosts, getSiteContent } from '../../lib/sanity';

export default async function VatRoute() {
  const [recentPosts, siteContent] = await Promise.all([
    getRecentPosts('vat'),
    getSiteContent('vat'),
  ]);

  return (
    <Layout activeSite="vat" currentPage="tools">
      <VatPage recentPosts={recentPosts} siteContent={siteContent} />
    </Layout>
  );
}