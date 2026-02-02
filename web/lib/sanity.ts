
import { createClient } from '@sanity/client';

// Use environment variables for production security. 
// Locally, you can create a .env file with these keys.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-03-01',
});

export const queries = {
  postBySlug: `*[_type == "post" && slug.current == $slug][0] { ..., "slug": slug.current }`,
  recentPosts: `*[_type == "post" && targetSite == $site] | order(publishedAt desc)[0...5]`,
  siteContent: `*[_type == "siteContent" && siteKey == $site][0]`,
};

export const MOCK_SITE_CONTENT: Record<string, any> = {
  home: {
    heroTitle: "SA Financial Precision.",
    heroSubtitle: "The unified engine for South African Tax, VAT, and Property Duty. Built for the 2026 Budget cycle.",
    heroBg: "https://images.unsplash.com/photo-1454165833767-027ff33027ff?auto=format&fit=crop&q=80&w=2400",
  },
  vat: {
    title: "SA VAT Compliance Hub 2026",
    summary: "Standard 15% VAT calculations for South African vendors.",
    deepFooter: "VAT is the cornerstone of the SA revenue system. Mandatory for turnovers exceeding R1 million.",
    faqs: [
      { q: "What is the VAT registration threshold for 2026?", a: "Mandatory registration is required if your taxable supplies exceed R1 million in a 12-month period." },
      { q: "Can I claim VAT back on a car purchase?", a: "Generally, VAT cannot be claimed on passenger vehicles unless the business is a car dealer or rental company." }
    ]
  },
  tax: {
    title: "Income Tax Master Calculator 2026",
    summary: "Accurate PAYE modeling for the latest SARS progressive tax brackets.",
    deepFooter: "Personal Income Tax accounts for 38% of SA revenue. Maximize your Retirement Annuity deductions.",
    faqs: [
      { q: "What are the 2026 tax brackets?", a: "Rates start at 18% for income over R95,750 and go up to 45% for income over R1.817 million." },
      { q: "How much is the primary tax rebate?", a: "For 2026, the primary rebate is R17,235, providing relief to all individual taxpayers." }
    ]
  },
  property: {
    title: "Property Transfer Duty Estimator 2026",
    summary: "SARS thresholds for property acquisition tax.",
    deepFooter: "Exempt threshold remains R1.1 million for 2026.",
    faqs: [
      { q: "Do I pay Transfer Duty on new developments?", a: "No, you usually pay 15% VAT instead of Transfer Duty when buying directly from a developer." },
      { q: "Is the solar credit available for home buyers?", a: "Yes, if you install panels after purchase, you can claim 25% of the cost back from SARS (max R15,000)." }
    ]
  },
  twopot: {
    title: "Two-Pot Retirement Withdrawal Tax Tool",
    summary: "Calculate the tax impact of withdrawing from your Savings Pot.",
    deepFooter: "Withdrawals are taxed as gross income at your marginal rate.",
    faqs: [
      { q: "Is the first withdrawal tax-free?", a: "No. Every cent withdrawn from your Savings Pot is taxed as income at your marginal rate." },
      { q: "How often can I withdraw from the Savings Pot?", a: "You are allowed one withdrawal per tax year (March to February)." }
    ]
  }
};

export const MOCK_FINANCIAL_LINKS = [
  { title: "SARS eFiling", url: "https://www.sars.gov.za", category: "Government" },
  { title: "National Treasury", url: "https://www.treasury.gov.za", category: "Policy" },
  { title: "Financial Sector Conduct Authority (FSCA)", url: "https://www.fsca.co.za", category: "Regulation" },
  { title: "JSE Limited", url: "https://www.jse.co.za", category: "Markets" },
  { title: "Reserve Bank (SARB)", url: "https://www.resbank.co.za", category: "Monetary" },
  { title: "Department of Finance", url: "http://www.finance.gov.za", category: "Government" }
];

export const MOCK_GUIDES = [
  {
    title: "2026 Personal Tax Pocket Guide",
    slug: "tax-pocket-guide",
    description: "Downloadable PDF including all 2026 Tax Brackets and Medical Scheme Credits.",
    checklist: ["SARS Tax Table 2026", "Medical Credit Rates", "Travel Allowance Rules"]
  },
  {
    title: "Property Cost Checklist",
    slug: "property-checklist",
    description: "Avoid R50k+ in hidden fees when buying property.",
    checklist: ["Transfer Duty Scale", "Conveyancing Fees", "Bond Registration Estimates"]
  },
  {
    title: "Retirement Annuity Pro Tips",
    slug: "ra-pro-tips",
    description: "Master the 27.5% deduction rule for Retirement Annuities.",
    checklist: ["Section 11F Deduction Limits", "Retirement Annuity vs TFSA", "Tax Refund Maximization"]
  },
  {
    title: "TFSA Master Checklist",
    slug: "tfsa-guide",
    description: "Maximize your R36,000 annual allowance.",
    checklist: ["R36,000 Annual Limit", "40% Penalty Clause", "Compounding Visualization"]
  }
];

export const MOCK_POSTS = [
  {
    title: "Two-Pot: Is a Withdrawal Worth the Tax?",
    slug: "two-pot-tax-worth-it",
    targetSite: "twopot",
    publishedAt: "2026-02-20T08:00:00Z",
    excerpt: "We calculate the high cost of early retirement pot access.",
    body: [{ _type: 'block', children: [{ text: 'The tax on two-pot withdrawals is based on your marginal rate...' }] }]
  },
  {
    title: "5 Things to Know Before Withdrawing from your Savings Pot",
    slug: "savings-pot-essentials",
    targetSite: "twopot",
    publishedAt: "2026-02-19T08:00:00Z",
    excerpt: "Avoid the R500 admin fee and 45% tax trap.",
    body: [{ _type: 'block', children: [{ text: 'SARS takes a significant cut of two-pot withdrawals...' }] }]
  },
  {
    title: "SARS Budget 2026: Key Changes",
    slug: "sars-budget-2026-changes",
    targetSite: "tax",
    publishedAt: "2026-02-18T08:00:00Z",
    excerpt: "The 2026 budget speech has implications for middle-income earners.",
    body: [{ _type: 'block', children: [{ text: 'Detailed budget analysis...' }] }]
  }
];

export const MOCK_FAQS = [
  { q: "Why did the top tax rate increase in 2017?", a: "The 2017 Budget introduced a new top marginal income tax bracket of 45% for individuals with taxable income above R1.5 million to increase revenue." },
  { q: "What is 'Fiscal Drag' or 'Bracket Creep'?", a: "Fiscal drag occurs when inflation pushes taxpayers into higher tax brackets, effectively increasing their tax burden even if their real income hasn't increased, because tax thresholds are not adjusted fully for inflation." },
  { q: "How has the VAT rate changed recently?", a: "The standard VAT rate in South Africa was increased from 14% to 15% effective from 1 April 2018, which was the first increase in VAT since 1993." }
];
