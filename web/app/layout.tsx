
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


    
        
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 font-inter">
        {children}
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
          
<Analytics />

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga-manual" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); 
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    console.log('GA4 initialized manually – check network tab');
  `}
</Script>

      </body>
    </html>
  );
}
