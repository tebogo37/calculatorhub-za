import { Layout } from '../../../components/shared/Layout';
import { GroceryCalculator } from '../../../sites/essentials/GroceryCalculator';
import { getSiteContent } from '../../../lib/sanity';

export default async function GroceriesRoute() {
  const siteContent = await getSiteContent('groceries');
  return (
    <Layout activeSite="home" currentPage="essentials">
      <GroceryCalculator siteContent={siteContent} />
    </Layout>
  );
}