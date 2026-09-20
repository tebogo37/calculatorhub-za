// web/lib/sanity.ts
import { createClient } from '@sanity/client';

// ─── 1. CLIENT ───────────────────────────────────────────────────────────────
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-03-01',
});

const isSanityConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder_id';

// ─── 2. GROQ QUERIES ─────────────────────────────────────────────────────────
export const queries = {
  postBySlug: `*[_type == "post" && slug.current == $slug][0] { ..., "slug": slug.current }`,
  recentPosts: `*[_type == "post" && targetSite == $site] | order(publishedAt desc)[0...5]`,
  siteContent: `*[_type == "siteContent" && siteKey == $siteKey][0]`,
  essentials: `*[_type == "essentials" && category == $category][0]`,
  allEssentials: `*[_type == "essentials"] | order(category asc)`,
};

// ─── 3. FETCH HELPERS ────────────────────────────────────────────────────────
/**
 * Fetch Sanity site content for a given page key, with mock data fallback.
 * Usage: const content = await getSiteContent('vat');
 */
export async function getSiteContent(siteKey: string) {
  if (!isSanityConfigured) return MOCK_SITE_CONTENT[siteKey] ?? null;
  try {
    const data = await client.fetch(queries.siteContent, { siteKey });
    return data ?? MOCK_SITE_CONTENT[siteKey] ?? null;
  } catch {
    return MOCK_SITE_CONTENT[siteKey] ?? null;
  }
}

/**
 * Fetch SA Essentials data from Sanity with mock fallback.
 */
export async function getEssentials(category: string) {
  if (!isSanityConfigured) return MOCK_ESSENTIALS[category] ?? null;
  try {
    const data = await client.fetch(queries.essentials, { category });
    return data ?? MOCK_ESSENTIALS[category] ?? null;
  } catch {
    return MOCK_ESSENTIALS[category] ?? null;
  }
}

// ─── 4. MOCK DATA ─────────────────────────────────────────────────────────────
export const MOCK_SITE_CONTENT: Record<string, any> = {
  home: {
    heroTitle: 'SA Financial Precision.',
    heroSubtitle:
      'The unified engine for South African Tax, VAT, and Property Duty. Built for the 2026 Budget cycle.',
  },
  vat: {
    title: 'SA VAT Compliance Hub 2026',
    summary: 'Standard 15% VAT calculations for South African vendors.',
    deepFooter:
      'VAT is the cornerstone of the SA revenue system. Mandatory for turnovers exceeding R1 million.',
    faqs: [
      {
        q: 'What is the VAT registration threshold for 2026?',
        a: 'Mandatory registration is required if your taxable supplies exceed R1 million in a 12-month period.',
      },
      {
        q: 'Can I claim VAT back on a car purchase?',
        a: "Generally, VAT cannot be claimed on passenger vehicles unless the business is a car dealer or rental company.",
      },
    ],
  },
  tax: {
    title: 'Income Tax Master Calculator 2026',
    summary: 'Accurate PAYE modeling for the latest SARS progressive tax brackets.',
    deepFooter:
      'Personal Income Tax accounts for 38% of SA revenue. Maximize your Retirement Annuity deductions.',
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
  property: {
    title: 'Property Transfer Duty Estimator 2026',
    summary: 'SARS thresholds for property acquisition tax.',
    deepFooter: 'Exempt threshold remains R1.1 million for 2026.',
    faqs: [
      {
        q: 'Do I pay Transfer Duty on new developments?',
        a: "No, you usually pay 15% VAT instead of Transfer Duty when buying directly from a developer.",
      },
      {
        q: 'Is the solar credit available for home buyers?',
        a: "Yes, if you install panels after purchase, you can claim 25% of the cost back from SARS (max R15,000).",
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

// ─── 5. SA ESSENTIALS MOCK DATA ───────────────────────────────────────────────
export const MOCK_ESSENTIALS: Record<string, any> = {
  fuel: {
    category: 'fuel',
    title: 'SA Fuel Price Calculator',
    summary:
      'Current inland petrol prices updated monthly by the DMRE. Calculate tank fill costs and road trip fuel spend.',
    lastUpdated: '2026-04-02T00:00:00Z',
    fuelPrices: {
      unleaded95: 21.84,
      unleaded93: 21.59,
      diesel50ppm: 19.78,
      effectiveDate: '2 April 2026',
    },
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
        a: 'The DMRE (Department of Mineral Resources and Energy) adjusts fuel prices on the first Wednesday of each month.',
      },
      {
        q: 'What is the difference between inland and coastal prices?',
        a: 'Inland prices (Gauteng, Limpopo, etc.) are slightly higher than coastal prices due to transport levies to get fuel to inland provinces.',
      },
      {
        q: 'Does the fuel price include all levies?',
        a: 'Yes. The pump price includes the General Fuel Levy (GFL), Road Accident Fund (RAF) levy, and applicable taxes.',
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

  travel: {
    category: 'travel',
    title: 'SA Road Trip Cost Calculator',
    summary:
      'Calculate the total cost of your South African road trip including fuel, tolls, and accommodation estimates.',
    lastUpdated: '2026-04-01T00:00:00Z',
    popularRoutes: [
      { from: 'Johannesburg', to: 'Cape Town', distanceKm: 1401, tollsZar: 480 },
      { from: 'Johannesburg', to: 'Durban', distanceKm: 588, tollsZar: 220 },
      { from: 'Johannesburg', to: 'Pretoria', distanceKm: 58, tollsZar: 35 },
      { from: 'Cape Town', to: 'George', distanceKm: 438, tollsZar: 0 },
      { from: 'Johannesburg', to: "Port Elizabeth (Gqeberha)", distanceKm: 1062, tollsZar: 310 },
      { from: 'Durban', to: 'Cape Town', distanceKm: 1753, tollsZar: 290 },
      { from: 'Johannesburg', to: 'Bloemfontein', distanceKm: 396, tollsZar: 120 },
      { from: 'Johannesburg', to: 'Nelspruit (Mbombela)', distanceKm: 358, tollsZar: 95 },
      { from: 'Cape Town', to: 'Hermanus', distanceKm: 122, tollsZar: 0 },
      { from: 'Johannesburg', to: 'Sun City', distanceKm: 185, tollsZar: 55 },
    ],
    faqs: [
      {
        q: 'Are e-toll costs included?',
        a: 'The Gauteng e-toll system was officially scrapped in 2023. Our toll estimates cover national road tolls (SANRAL) only.',
      },
      {
        q: 'How accurate are the distance figures?',
        a: 'Distances reflect the most direct major highway route. Actual distance may vary depending on your specific start/end point and preferred route.',
      },
    ],
  },
};

// ─── 6. LEGACY EXPORTS (keep existing pages working) ─────────────────────────
export const MOCK_FINANCIAL_LINKS = [
  { title: 'SARS eFiling', url: 'https://www.sars.gov.za', category: 'Government' },
  { title: 'National Treasury', url: 'https://www.treasury.gov.za', category: 'Policy' },
  {
    title: 'Financial Sector Conduct Authority (FSCA)',
    url: 'https://www.fsca.co.za',
    category: 'Regulation',
  },
  { title: 'JSE Limited', url: 'https://www.jse.co.za', category: 'Markets' },
  { title: 'Reserve Bank (SARB)', url: 'https://www.resbank.co.za', category: 'Monetary' },
  { title: 'Department of Finance', url: 'http://www.finance.gov.za', category: 'Government' },
];

export const MOCK_GUIDES = [
  {
    title: '2026 Personal Tax Pocket Guide',
    slug: 'tax-pocket-guide',
    description: 'Downloadable PDF including all 2026 Tax Brackets and Medical Scheme Credits.',
    checklist: ['SARS Tax Table 2026', 'Medical Credit Rates', 'Travel Allowance Rules'],
  },
  {
    title: 'Property Cost Checklist',
    slug: 'property-checklist',
    description: 'Avoid R50k+ in hidden fees when buying property.',
    checklist: ['Transfer Duty Scale', 'Conveyancing Fees', 'Bond Registration Estimates'],
  },
  {
    title: 'Retirement Annuity Pro Tips',
    slug: 'ra-pro-tips',
    description: 'Master the 27.5% deduction rule for Retirement Annuities.',
    checklist: ['Section 11F Deduction Limits', 'Retirement Annuity vs TFSA', 'Tax Refund Maximization'],
  },
  {
    title: 'TFSA Master Checklist',
    slug: 'tfsa-guide',
    description: 'Maximize your R36,000 annual allowance.',
    checklist: ['R36,000 Annual Limit', '40% Penalty Clause', 'Compounding Visualization'],
  },
];

export const MOCK_POSTS = [
  {
    title: 'Two-Pot: Is a Withdrawal Worth the Tax?',
    slug: 'two-pot-tax-worth-it',
    targetSite: 'twopot',
    publishedAt: '2026-02-20T08:00:00Z',
    excerpt: 'We calculate the high cost of early retirement pot access.',
    body: [{ _type: 'block', children: [{ text: 'The tax on two-pot withdrawals is based on your marginal rate...' }] }],
  },
  {
    title: '5 Things to Know Before Withdrawing from your Savings Pot',
    slug: 'savings-pot-essentials',
    targetSite: 'twopot',
    publishedAt: '2026-02-19T08:00:00Z',
    excerpt: 'Avoid the R500 admin fee and 45% tax trap.',
    body: [{ _type: 'block', children: [{ text: 'SARS takes a significant cut of two-pot withdrawals...' }] }],
  },
  {
    title: 'SARS Budget 2026: Key Changes',
    slug: 'sars-budget-2026-changes',
    targetSite: 'tax',
    publishedAt: '2026-02-18T08:00:00Z',
    excerpt: 'The 2026 budget speech has implications for middle-income earners.',
    body: [{ _type: 'block', children: [{ text: 'Detailed budget analysis...' }] }],
  },
];

export const MOCK_FAQS = [
  {
    q: 'Why did the top tax rate increase in 2017?',
    a: 'The 2017 Budget introduced a new top marginal income tax bracket of 45% for individuals with taxable income above R1.5 million to increase revenue.',
  },
  {
    q: "What is 'Fiscal Drag' or 'Bracket Creep'?",
    a: "Fiscal drag occurs when inflation pushes taxpayers into higher tax brackets, effectively increasing their tax burden even if their real income hasn't increased, because tax thresholds are not adjusted fully for inflation.",
  },
  {
    q: 'How has the VAT rate changed recently?',
    a: 'The standard VAT rate in South Africa was increased from 14% to 15% effective from 1 April 2018, which was the first increase in VAT since 1993.',
  },
];

export const SITE_CONTENT = MOCK_SITE_CONTENT;