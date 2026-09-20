// web/lib/sanity.ts
import { createClient } from '@sanity/client';

// ─── CLIENT ───────────────────────────────────────────────────────────────────
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pvj13q77',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-03-01',
});

const isSanityConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder_id';

// ─── GROQ QUERIES ─────────────────────────────────────────────────────────────
export const queries = {
  // Existing
  postBySlug: `*[_type == "post" && slug.current == $slug][0]{
    ...,
    "slug": slug.current,
    mainImage
  }`,
  recentPosts: `*[_type == "post" && targetSite == $site] | order(publishedAt desc)[0...6]{
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    targetSite,
    mainImage
  }`,
  siteContent: `*[_type == "siteContent" && siteKey == $siteKey][0]`,
  essentials: `*[_type == "essentials" && category == $category][0]`,

  // New – Tax Guides
  allTaxGuides: `*[_type == "taxGuide"] | order(title asc){
    title,
    "slug": slug.current,
    description,
    icon,
    checklistItems,
    pdfUrl,
    seoTitle,
    seoDescription
  }`,
  taxGuideBySlug: `*[_type == "taxGuide" && slug.current == $slug][0]{
    ...,
    "slug": slug.current
  }`,

  // New – All Posts (for resources / blog page)
  allPosts: `*[_type == "post"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    targetSite,
    mainImage,
    seoTitle
  }`,
};

// ─── FETCH HELPERS ────────────────────────────────────────────────────────────

export async function getSiteContent(siteKey: string) {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch(queries.siteContent, { siteKey });
  } catch {
    return null;
  }
}

export async function getEssentials(category: string) {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch(queries.essentials, { category });
  } catch {
    return null;
  }
}

export async function getRecentPosts(site: string) {
  if (!isSanityConfigured) return [];
  try {
    return await client.fetch(queries.recentPosts, { site });
  } catch {
    return [];
  }
}

export async function getAllTaxGuides() {
  if (!isSanityConfigured) return [];
  try {
    return await client.fetch(queries.allTaxGuides);
  } catch {
    return [];
  }
}

export async function getTaxGuideBySlug(slug: string) {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch(queries.taxGuideBySlug, { slug });
  } catch {
    return null;
  }
}

export async function getAllPosts() {
  if (!isSanityConfigured) return [];
  try {
    return await client.fetch(queries.allPosts);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch(queries.postBySlug, { slug });
  } catch {
    return null;
  }
}

export const MOCK_SITE_CONTENT = {
  home: {
    heroTitle: 'SA Financial Precision.',
    heroSubtitle: 'The unified engine for South African Tax, VAT, and Property Duty. Built for the 2026 Budget cycle.',
  },
  tax: {
    title: 'Income Tax Master Calculator 2026',
    summary: 'Accurate PAYE modeling for the latest SARS progressive tax brackets.',
    deepFooter: 'Personal Income Tax accounts for 38% of SA revenue. Maximize your Retirement Annuity deductions.',
    faqs: [
      {
        q: 'What are the 2026 tax brackets?',
        a: 'Rates start at 18% for income over R95,750 and go up to 45% for income over R1.817 million.',
      },
      {
        q: 'How much is the primary tax rebate?',
        a: 'For 2026, the primary rebate is R17,235, providing relief to all individual taxpayers.',
      },
    ],
  },
  vat: {
    title: 'SA VAT Compliance Hub 2026',
    summary: 'Standard 15% VAT calculations for South African vendors.',
    deepFooter: 'VAT is the cornerstone of the SA revenue system. Mandatory for turnovers exceeding R1 million.',
    faqs: [
      {
        q: 'What is the VAT registration threshold for 2026?',
        a: 'Mandatory registration is required if your taxable supplies exceed R1 million in a 12-month period.',
      },
      {
        q: 'Can I claim VAT back on a car purchase?',
        a: 'Generally, VAT cannot be claimed on passenger vehicles unless the business is a car dealer or rental company.',
      },
    ],
  },
  property: {
    title: 'Property Transfer Duty Estimator 2026',
    summary: 'SARS thresholds for property acquisition tax.',
    deepFooter: 'Exempt threshold remains R1.1 million for 2026.',
    faqs: [
      {
        q: 'Do I pay Transfer Duty on new developments?',
        a: 'No, you usually pay 15% VAT instead of Transfer Duty when buying directly from a developer.',
      },
      {
        q: 'Is the solar credit available for home buyers?',
        a: 'Yes, if you install panels after purchase, you can claim 25% of the cost back from SARS (max R15,000).',
      },
    ],
  },
  twopot: {
    title: 'Two-Pot Retirement Withdrawal Tax Tool',
    summary: 'Calculate the tax impact of withdrawing from your Savings Pot.',
    deepFooter: 'Withdrawals are taxed as gross income at your marginal rate.',
    faqs: [
      {
        q: 'Is the first withdrawal tax-free?',
        a: 'No. Every cent withdrawn from your Savings Pot is taxed as income at your marginal rate.',
      },
      {
        q: 'How often can I withdraw from the Savings Pot?',
        a: 'You are allowed one withdrawal per tax year (March to February).',
      },
    ],
  },
};

// ─── SA ESSENTIALS MOCK DATA ──────────────────────────────────────────────────
export const MOCK_ESSENTIALS: Record<string, any> = {
  fuel: {
    category: 'fuel',
    title: 'SA Fuel Price Calculator',
    summary:
      'Current inland petrol prices updated monthly by the DMRE. Calculate tank fill costs and road trip fuel spend.',
    lastUpdated: '2026-04-02T00:00:00Z',
    commonCarTanks: [
      { make: 'VW Polo Vivo', tankLitres: 45, avgConsumption: 6.8 },
      { make: 'Toyota Corolla Quest', tankLitres: 50, avgConsumption: 7.2 },
      { make: 'Toyota Hilux (2.4)', tankLitres: 80, avgConsumption: 9.5 },
      { make: 'Ford Ranger (2.0)', tankLitres: 80, avgConsumption: 8.9 },
      { make: 'VW Golf 8 GTI', tankLitres: 50, avgConsumption: 7.6 },
      { make: 'Suzuki Swift', tankLitres: 37, avgConsumption: 5.4 },
      { make: 'Hyundai i20', tankLitres: 40, avgConsumption: 5.8 },
      { make: 'Kia Picanto', tankLitres: 35, avgConsumption: 5.2 },
      { make: 'Renault Kwid', tankLitres: 28, avgConsumption: 5.0 },
    ],
    popularRoutes: [
      { from: 'Johannesburg', to: 'Cape Town', distanceKm: 1401, tollsZar: 480 },
      { from: 'Johannesburg', to: 'Durban', distanceKm: 588, tollsZar: 220 },
      { from: 'Johannesburg', to: 'Pretoria', distanceKm: 58, tollsZar: 35 },
      { from: 'Cape Town', to: 'George', distanceKm: 438, tollsZar: 0 },
      { from: 'Johannesburg', to: 'Port Elizabeth', distanceKm: 1062, tollsZar: 310 },
      { from: 'Durban', to: 'Cape Town', distanceKm: 1753, tollsZar: 290 },
      { from: 'Johannesburg', to: 'Bloemfontein', distanceKm: 396, tollsZar: 120 },
      { from: 'Johannesburg', to: 'Nelspruit', distanceKm: 358, tollsZar: 95 },
    ],
    faqs: [
      {
        q: 'When are fuel prices updated in South Africa?',
        a: 'The DMRE adjusts fuel prices on the first Wednesday of each month.',
      },
      {
        q: 'What is the difference between inland and coastal prices?',
        a: 'Inland prices are slightly higher due to transport levies to inland provinces.',
      },
      {
        q: 'Does the fuel price include all levies?',
        a: 'Yes. The pump price includes the General Fuel Levy, Road Accident Fund levy, and applicable taxes.',
      },
    ],
  },

  groceries: {
    category: 'groceries',
    title: 'SA Grocery Basket Price Tracker',
    summary:
      'Average prices for everyday South African grocery staples. Compare costs and track your monthly household spend.',
    lastUpdated: '2026-04-01T00:00:00Z',
    groceryItems: [
      { name: 'Full Cream Milk', unit: 'per 2L', price: 32.99, icon: '🥛' },
      { name: 'Eggs (Large)', unit: 'per dozen', price: 41.99, icon: '🥚' },
      { name: 'White Bread (700g)', unit: 'per loaf', price: 19.99, icon: '🍞' },
      { name: 'Sunflower Oil', unit: 'per 2L', price: 64.99, icon: '🫙' },
      { name: 'White Sugar', unit: 'per 2.5kg', price: 39.99, icon: '🍚' },
      { name: 'Chicken Braai Pack', unit: 'per 1kg', price: 64.99, icon: '🍗' },
      { name: 'Beef Mince', unit: 'per 500g', price: 59.99, icon: '🥩' },
      { name: 'Maize Meal (Super)', unit: 'per 5kg', price: 74.99, icon: '🌽' },
      { name: 'Potatoes', unit: 'per 2kg', price: 29.99, icon: '🥔' },
      { name: 'Onions', unit: 'per 1kg', price: 15.99, icon: '🧅' },
      { name: 'Tomatoes', unit: 'per 500g', price: 18.99, icon: '🍅' },
      { name: 'Rice (Tastic)', unit: 'per 2kg', price: 54.99, icon: '🍚' },
      { name: 'Butter (Clover)', unit: 'per 500g', price: 76.99, icon: '🧈' },
      { name: 'Peanut Butter (Jif)', unit: 'per 400g', price: 44.99, icon: '🥜' },
      { name: 'Frozen Chips', unit: 'per 1kg', price: 34.99, icon: '🍟' },
      { name: 'Toilet Paper (9 rolls)', unit: 'per pack', price: 49.99, icon: '🧻' },
    ],
    faqs: [
      {
        q: 'Where do these grocery prices come from?',
        a: 'Prices are averaged across major SA retailers (Pick n Pay, Shoprite, Checkers, Woolworths) and updated monthly.',
      },
      {
        q: 'How has food inflation affected SA grocery prices?',
        a: 'SA food inflation has been running above CPI. Items like cooking oil, eggs and maize meal saw significant price increases in recent years.',
      },
    ],
  },
};