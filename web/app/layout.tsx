
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CalculatorHub SA - Tax, VAT & Finance 2026',
  description: 'The premium South African utility engine for VAT, Income Tax, and Property Duty.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

       
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MVBD2RBGT5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MVBD2RBGT5');
</script>
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 font-inter">
        {children}
      </body>
    </html>
  );
}
