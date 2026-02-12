
import { Layout } from '@/web/components/shared/Layout';
import { HomePage } from '@/web/sites/Home/HomePage';

export default function RootPage() {
  return (
    <Layout activeSite="home" currentPage="tools">
      <HomePage />
    </Layout>
  );
}
