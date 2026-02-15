
import { Layout } from '../components/shared/Layout';
import { HomePage } from '../sites/Home/HomePage';

export default function RootPage() {
  return (
    <Layout activeSite="home" currentPage="tools">
      <HomePage />
    </Layout>
  );
}
