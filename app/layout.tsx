
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { AIAssistant } from '@/components/shared/AIAssistant';

export const metadata: Metadata = {
  title: 'CalculatorHub SA | Tax, VAT & Two-Pot 2026',
  description: 'Professional-grade financial tools for South Africa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 font-inter">
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
