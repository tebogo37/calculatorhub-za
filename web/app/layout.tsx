
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.calculatorhub.co.za'),
  title: {
    default: 'CalculatorHub SA | Tax, VAT, Property & Essentials',
    template: '%s | CalculatorHub SA',
  },
  description:
    'Free South African calculators for income tax, VAT, transfer duty, Two-Pot, fuel and groceries — 2026 Budget cycle.',
  icons: {
    icon: '/icon', // Points to the icon.tsx we created 
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.calculatorhub.co.za',
    siteName: 'CalculatorHub SA',
  },
  robots: {
    index: true,
    follow: true,
  },
  
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


    
        
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 font-inter">
      {/* GTM noscript immediately after body open */}
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}

        {children}

        <Analytics />

        {GTM_ID ? (
          <>
            <Script id="gcm-defaults" strategy="beforeInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `}</Script>
            <Script id="gtm-js" strategy="afterInteractive">{`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}</Script>
          </>
        ) : null}

      </body>
    </html>
  );
}
