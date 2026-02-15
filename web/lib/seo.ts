
export interface MetaData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  schema?: any;
}

const DEFAULT_DESCRIPTION = "Accurate South African financial calculators updated for the 2025/2026 budget. Free VAT, Tax and Property Duty tools.";

export const getMetaData = (site: string, slug?: string, post?: any): MetaData => {
  const domain = "calculatorhub.co.za";
  const baseUrl = `https://${site}.${domain}`;
  
  if (post) {
    return {
      title: `${post.title} | ${site.toUpperCase()} Blog | CalculatorHub`,
      description: post.excerpt || post.seoDescription || DEFAULT_DESCRIPTION,
      keywords: `${site}, tax, SARS, 2026, ${post.focusKeywords || ''}`,
      canonical: `${baseUrl}/${post.slug}`,
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.publishedAt,
        "author": { "@type": "Organization", "name": "CalculatorHub SA" }
      }
    };
  }

  const configs: Record<string, any> = {
    vat: {
      title: "VAT Calculator 15% South Africa | 2026 SARS Updated",
      description: "Calculate VAT add/remove for South Africa. Standard 15% rate updated for 2026. Fast, free and SARS compliant.",
      keywords: "VAT calculator, South Africa, SARS VAT, 15% VAT, VAT inclusive, VAT exclusive",
    },
    tax: {
      title: "Income Tax Calculator 2025/2026 | PAYE Take Home Pay SA",
      description: "Calculate your take-home pay with the latest 2026 South African tax brackets. Includes primary, secondary, and tertiary rebates.",
      keywords: "Income tax calculator, PAYE calculator, tax brackets 2026, SARS tax, monthly salary calculator",
    },
    property: {
      title: "Property Transfer Duty Calculator 2026 | SARS Thresholds",
      description: "Work out your property transfer duty costs. Updated 2026 thresholds for South African property buyers.",
      keywords: "transfer duty calculator, property tax SA, SARS property duty, house buying costs South Africa",
    }
  };

  const current = configs[site] || configs.tax;

  return {
    ...current,
    canonical: baseUrl,
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": current.title,
      "operatingSystem": "All",
      "applicationCategory": "FinanceApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ZAR" }
    }
  };
};
