import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/shared/Layout';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms governing use of CalculatorHub SA calculators and educational content.',
  alternates: { canonical: 'https://www.calculatorhub.co.za/terms' },
};

export default function TermsPage() {
  return (
    <Layout activeSite="home" currentPage="resources">
      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-slate prose-lg">
        <h1>Terms of Use</h1>
        <p className="text-sm text-slate-500">Last updated: 6 October 2026</p>

        <p>
          By using https://www.calculatorhub.co.za (&quot;the Site&quot;), you agree to these
          Terms. If you do not agree, do not use the Site.
        </p>

        <h2>1. Educational tools only — not professional advice</h2>
        <p>
          Calculators and articles on CalculatorHub SA are for <strong>general information and
          education</strong> only. They are not tax, legal, investment, accounting or financial
          advice. Results are estimates based on simplified models and published rules that may
          change.
        </p>
        <p>
          Always verify figures with SARS, your employer, fund administrator, conveyancer or a
          registered professional before making decisions. We are not affiliated with SARS, the
          National Treasury or the SARB.
        </p>

        <h2>2. No warranty</h2>
        <p>
          The Site is provided &quot;as is&quot;. We do not warrant that calculators are
          error-free, complete or up to date. Live rates (fuel, exchange, markets, groceries) may
          lag official sources or use averages.
        </p>

        <h2>3. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, CalculatorHub SA and its operators are not
          liable for any loss or damage arising from use of the Site or reliance on any
          calculation or article, including tax assessments, investment outcomes or purchase
          decisions.
        </p>

        <h2>4. Acceptable use</h2>
        <ul>
          <li>Do not misuse the Site, attempt to disrupt it, or scrape it aggressively</li>
          <li>Do not use automated tools in a way that overloads our services</li>
          <li>Do not submit unlawful, harmful or misleading content via forms</li>
        </ul>

        <h2>5. Intellectual property</h2>
        <p>
          Site design, branding, original text and code are owned by us or our licensors. You may
          not copy substantial content for commercial reuse without permission. You may link to
          our pages.
        </p>

        <h2>6. Third-party links and ads</h2>
        <p>
          The Site may show third-party advertisements (including Google AdSense) and links. We
          are not responsible for third-party sites, products or privacy practices.
        </p>

        <h2>7. Privacy</h2>
        <p>
          Use of personal information is described in our{' '}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>8. Changes</h2>
        <p>
          We may update these Terms at any time. Continued use after changes means you accept the
          updated Terms.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These Terms are governed by the laws of the Republic of South Africa. Courts of South
          Africa have jurisdiction, subject to mandatory consumer protections where they apply.
        </p>

        <h2>10. Contact</h2>
        <p>
          <a href="mailto:hello@calculatorhub.co.za">hello@calculatorhub.co.za</a>
          {/* Change to your real email */}
        </p>
      </article>
    </Layout>
  );
}