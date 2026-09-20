import type { Metadata } from 'next';
import { Layout } from '../components/shared/Layout';
import { HomePage } from '../sites/Home/HomePage';
import { getSiteContent } from '../lib/sanity';

const SITE_URL = 'https://www.calculatorhub.co.za';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent('home');

  const title =
    content?.seoTitle || 'SA Tax, VAT & Fuel Calculators';
  const description =
    content?.metaDescription ||
    content?.summary ||
    content?.heroSubtitle ||
    'Free South African calculators for income tax, VAT, transfer duty, Two-Pot, fuel and groceries. Built for the 2026 Budget cycle.';

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/`,
      siteName: 'CalculatorHub SA',
      locale: 'en_ZA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function RootPage() {
  const siteContent = await getSiteContent('home');

  return (
    <Layout activeSite="home" currentPage="tools">
      <HomePage siteContent={siteContent} />
    </Layout>
  );
}