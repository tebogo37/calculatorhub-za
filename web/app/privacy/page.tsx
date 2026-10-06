import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/shared/Layout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How CalculatorHub SA collects, uses and protects personal information, including cookies, analytics and advertising.',
  alternates: { canonical: 'https://www.calculatorhub.co.za/privacy' },
};

export default function PrivacyPage() {
  return (
    <Layout activeSite="home" currentPage="resources">
      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-slate prose-lg">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 6 October 2026</p>

        <p>
          CalculatorHub SA (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates{' '}
          <a href="https://www.calculatorhub.co.za">https://www.calculatorhub.co.za</a>{' '}
          and related tools for South African tax, VAT, property, retirement and cost-of-living
          calculations. This policy explains what information we process and why.
        </p>

        <h2>1. Who we are</h2>
        <p>
          CalculatorHub SA provides free financial utility calculators and educational content.
          Contact for privacy questions:{' '}
          <a href="mailto:privacy@calculatorhub.co.za">privacy@calculatorhub.co.za</a>
          {/* Change to your real email */}
        </p>

        <h2>2. Information we collect</h2>
        <h3>2.1 Information you provide</h3>
        <ul>
          <li>Email address or name if you submit a contact form, newsletter or lead-magnet form</li>
          <li>Messages you send us voluntarily</li>
        </ul>

        <h3>2.2 Information collected automatically</h3>
        <ul>
          <li>IP address, browser type, device type and approximate location (country/city level)</li>
          <li>Pages visited, referring URL and interaction events (e.g. calculator use)</li>
          <li>Cookies and similar technologies (see section 4)</li>
        </ul>

        <h3>2.3 Calculator inputs</h3>
        <p>
          Figures you type into calculators (income, property price, fuel litres, etc.) are used
          in your browser to produce estimates. We do not require an account. Unless you submit a
          form, these inputs are not stored as a personal profile on our servers.
        </p>

        <h2>3. How we use information</h2>
        <ul>
          <li>To operate, secure and improve the website and calculators</li>
          <li>To measure traffic and feature usage (analytics)</li>
          <li>To respond to enquiries and deliver requested downloads or callbacks</li>
          <li>To show advertising (including via Google AdSense) where enabled</li>
          <li>To comply with law and enforce our Terms</li>
        </ul>

        <h2>4. Cookies, analytics and advertising</h2>
        <p>We use:</p>
        <ul>
          <li>
            <strong>Essential cookies</strong> — site function, security and remembering consent
            choices
          </li>
          <li>
            <strong>Analytics</strong> — Google Analytics 4 (Measurement ID configured on this
            site) to understand aggregate usage
          </li>
          <li>
            <strong>Advertising</strong> — Google AdSense and related Google advertising services
            may use cookies to serve and measure ads, including personalised ads where you consent
          </li>
        </ul>
        <p>
          Where required, we use a consent banner and Google Consent Mode so non-essential
          analytics and advertising storage only run after you allow them. You can change your
          mind via the banner controls or browser settings.
        </p>
        <p>
          Google&apos;s use of data is described in{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites that use its services
          </a>
          .
        </p>

        <h2>5. Third-party services</h2>
        <p>We may use providers such as:</p>
        <ul>
          <li>Vercel (hosting)</li>
          <li>Google Analytics and Google AdSense / Google advertising tags</li>
          <li>Sanity (content management)</li>
          <li>Email or form tools if you subscribe or request a callback</li>
        </ul>
        <p>
          Live market figures (fuel, FX, indices) may be refreshed from public sources or our own
          update process; they are estimates for education only.
        </p>

        <h2>6. Legal basis and POPIA</h2>
        <p>
          If you are in South Africa, we process personal information in line with the Protection
          of Personal Information Act (POPIA), including for legitimate interests in running a
          public website, analytics, security, and—where applicable—consent for non-essential
          cookies and marketing.
        </p>
        <p>
          Visitors in the European Economic Area or United Kingdom may have additional rights under
          GDPR/UK GDPR. Consent Mode and cookie choices support those requirements for Google tags.
        </p>

        <h2>7. Sharing</h2>
        <p>
          We do not sell your personal information. We share data with service providers who help
          us run the site (hosting, analytics, ads, email) under appropriate arrangements, or when
          required by law.
        </p>

        <h2>8. Retention</h2>
        <p>
          Analytics and server logs are kept only as long as needed for security, debugging and
          aggregate reporting. Form submissions are kept only as long as needed to respond or as
          required by law.
        </p>

        <h2>9. Security</h2>
        <p>
          We use HTTPS and standard hosting security practices. No method of transmission is 100%
          secure.
        </p>

        <h2>10. Children</h2>
        <p>
          The site is aimed at adults making financial decisions. We do not knowingly collect
          personal information from children.
        </p>

        <h2>11. Your rights</h2>
        <p>Subject to applicable law, you may request access, correction or deletion of personal
          information we hold about you, or object to certain processing. Contact us using the
          address above. You may also control cookies via our banner and your browser.
        </p>

        <h2>12. Changes</h2>
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date at the top
          will change when we do.
        </p>

        <h2>13. Related documents</h2>
        <p>
          <Link href="/terms">Terms of Use</Link>
        </p>
      </article>
    </Layout>
  );
}