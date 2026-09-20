import { Layout } from '../../components/shared/Layout';
import { EssentialsHub } from '../../sites/essentials/EssentialsHub';
import { getSiteContent } from '../../lib/sanity';

export default async function EssentialsRoute() {
  const siteContent = await getSiteContent('essentials');

  return (
    <Layout activeSite="home" currentPage="essentials">
      <EssentialsHub siteContent={siteContent} />
    </Layout>
  );
}