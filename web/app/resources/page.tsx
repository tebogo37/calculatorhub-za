import { Layout } from '../../components/shared/Layout';
import { ResourceCenter } from '../../sites/resources/ResourceCenter';
import { getAllTaxGuides, getAllPosts, getSiteContent } from '../../lib/sanity';

export default async function ResourcesPage() {
  const [guides, posts, siteContent] = await Promise.all([
    getAllTaxGuides(),
    getAllPosts(),
    getSiteContent('resources'),
  ]);

  return (
    <Layout activeSite="home" currentPage="resources">
      <ResourceCenter guides={guides} posts={posts} siteContent={siteContent} />
    </Layout>
  );
}