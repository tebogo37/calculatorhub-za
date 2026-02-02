
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Use CDN for faster read-only queries
  apiVersion: '2024-03-01',
});

export const queries = {
  postBySlug: `*[_type == "post" && slug.current == $slug && targetSite == $site][0] { ..., "slug": slug.current }`,
  recentPosts: `*[_type == "post" && targetSite == $site] | order(publishedAt desc)[0...5] {
    title, "slug": slug.current, publishedAt, excerpt, body, focusKeywords, seoTitle, seoDescription
  }`,
  siteContent: `*[_type == "siteContent" && siteKey == $site][0] {
    title, summary, deepFooter, keywords, metaDescription
  }`,
  taxGuides: `*[_type == "taxGuide"] {
    title, description, slug, "icon": icon.current, checklistItems
  }`
};

export const MOCK_SITE_CONTENT: Record<string, any> = {
  vat: {
    title: "South African VAT Calculator 2026",
    summary: "Our 2026 VAT Calculator is designed for South African vendors and consumers. Since 2018, the standard VAT rate in SA has remained at 15%. This utility helps you calculate the tax component for any invoice with precision.",
    deepFooter: "Value-Added Tax (VAT) is the largest source of indirect revenue for the South African government. As a vendor, compliance is non-negotiable. Whether you are adding VAT to a quote or removing it from a receipt to find the base cost, our tool uses the exact fractions mandated by SARS. Remember, registering for VAT becomes mandatory once your taxable supplies exceed R1 million in a 12-month period.",
    keywords: "VAT calculator, SARS 15%, invoice tax SA, South Africa VAT registration",
    metaDescription: "Calculate VAT add/remove for South Africa. Standard 15% rate updated for 2026. Fast, free and SARS compliant."
  },
  tax: {
    title: "SA Income Tax (PAYE) Calculator 2026",
    summary: "Calculate your take-home salary after PAYE and rebates. The 2025/2026 tax year introduces slight shifts in thresholds to counter fiscal drag. This tool applies the primary rebate of R17,235 automatically.",
    deepFooter: "Personal Income Tax is South Africa's primary source of funding for social services. For the 2026 budget, the National Treasury has maintained the progressive tax brackets from 18% to 45%. To lower your tax liability, consider Section 11F deductions via Retirement Annuities or utilizing the Section 6A Medical Scheme Fees Tax Credits. Our calculator is updated daily against official SARS government gazettes.",
    keywords: "PAYE calculator 2026, tax brackets South Africa, SARS income tax, take home pay SA",
    metaDescription: "Work out your net salary for the 2026 tax year with our accurate PAYE calculator. Includes all SARS rebates."
  },
  property: {
    title: "Property Transfer Duty Estimator 2026",
    summary: "Buying a home in 2026? Use our Transfer Duty tool to budget for your acquisition tax. The R1.1 million exemption threshold remains a key benefit for first-time buyers in South Africa.",
    deepFooter: "In South Africa, property acquisition is subject to Transfer Duty, a tax paid by the purchaser. However, buying from a developer usually entails VAT (15%) instead of Transfer Duty. It is vital to confirm which tax applies to your specific sale agreement. Our 2026 tool covers the progressive scale up to 13% for properties exceeding R12.1 million. Don't forget to also budget for conveyancing and bond registration fees!",
    keywords: "transfer duty SA 2026, property tax calculator, SARS home buying, house transfer costs",
    metaDescription: "Calculate your property transfer duty for the 2026 budget year. Updated SARS thresholds and exemptions."
  }
};

export const MOCK_GUIDES = [
  {
    title: "2026 Personal Tax Pocket Guide",
    slug: "tax-pocket-guide",
    description: "A printable PDF for all 2026 tax brackets, rebates, and thresholds.",
    checklist: [
      "Full 2026 Tax Brackets Table (18% - 45%)",
      "Primary, Secondary, and Tertiary Rebates",
      "Tax Thresholds by Age Group",
      "Medical Scheme Fee Credit Rates",
      "Subsistence & Travel Allowance Rules"
    ]
  },
  {
    title: "Property Cost Checklist",
    slug: "property-checklist",
    description: "Avoid hidden fees when buying your first home in South Africa.",
    checklist: [
      "Transfer Duty (SARS) Calculation",
      "Conveyancing Attorney Fees (plus VAT)",
      "Bond Registration Attorney Fees",
      "Bank Initiation & Admin Fees",
      "FICA & Deeds Office Levies",
      "Pro-rata Municipal Rates Clearance"
    ]
  },
  {
    title: "Retirement Annuity Pro Tips",
    slug: "ra-pro-tips",
    description: "Master Section 11F. How to calculate your max contribution for the highest refund.",
    checklist: [
      "27.5% Annual Deduction Cap Rules",
      "R350,000 Total Annual Limit",
      "Impact on Effective Tax Rate",
      "Carrying over excess contributions",
      "Two-Pot System (Savings vs Retirement Pots)"
    ]
  }
];

export const MOCK_POSTS = [
  // (Previous articles remain same, but add content for guides if needed as detail pages)
  {
    title: "The Ultimate 2026 VAT Compliance Guide",
    slug: "vat-compliance-2026",
    targetSite: "vat",
    publishedAt: "2026-02-18T10:00:00Z",
    excerpt: "A deep dive into SARS VAT registration, zero-rated supplies, and electronic services.",
    body: [{ _type: 'block', children: [{ text: 'Content about VAT compliance...' }] }]
  },
  // ... (additional 14 articles from previous step)
];
