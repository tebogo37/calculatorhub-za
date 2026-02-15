
export interface MetaData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  schema?: any;
}

const DEFAULT_DESCRIPTION = "Accurate South African financial calculators updated for 2026. Free VAT, Tax and Property Duty tools.";

export const getMetaData = (site: string, slug?: string, post?: any): MetaData => {
  const domain = "calculatorhub.co.za";
  const baseUrl = `https://${site}.${domain}`;
  
  if (post) {
    return {
      title: `${post.title} | ${site.toUpperCase()} Blog | CalculatorHub`,
      description: post.excerpt || DEFAULT_DESCRIPTION,
      keywords: `${site}, tax, SARS, 2026`,
      canonical: `${baseUrl}/${post.slug}`,
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "author": { "@type": "Organization", "name": "CalculatorHub SA" }
      }
    };
  }

  const configs: Record<string, any> = {
    vat: {
      title: "VAT Calculator 15% South Africa | 2026 Updated",
      description: "Calculate VAT add/remove for South Africa. Standard 15% rate updated for 2026.",
      keywords: "VAT calculator, South Africa, SARS VAT",
    },
    tax: {
      title: "Income Tax Calculator 2025/2026 | PAYE SA",
      description: "Calculate your take-home pay with 2026 South African tax brackets.",
      keywords: "Income tax calculator, PAYE calculator, tax brackets 2026",
    },
    property: {
      title: "Property Transfer Duty Calculator 2026 | SARS",
      description: "Work out your property transfer duty costs. Updated 2026 thresholds.",
      keywords: "transfer duty calculator, property tax SA",
    },
    twopot: {
      title: "Two-Pot Retirement Tax Calculator | SA 2026",
      description: "Calculate the tax you will pay on your Two-Pot retirement withdrawal.",
      keywords: "two pot system, retirement withdrawal tax, SARS savings pot",
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
      "applicationCategory": "FinanceApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ZAR" }
    }
  };
};
