# CalculatorHub SA 🇿🇦
### High-Precision Financial Utility Ecosystem (2025/2026)

CalculatorHub SA is a premium, multi-tenant utility platform designed for the South African financial landscape. It provides SARS-compliant modeling for personal tax, business VAT, and property acquisition, wrapped in a high-performance Next.js 15 architecture.

## 🚀 The Core Idea
In a landscape of outdated financial tools, CalculatorHub provides a **single source of truth** for the 2025/2026 budget cycle. It leverages a "Multi-Subdomain" strategy where specific financial niches (VAT, Tax, Property) live on their own sub-brands but share a unified calculation engine.

## 🛠 Features & Capabilities
- **Multi-Subdomain Routing**: Uses Next.js Middleware to serve unique experiences for `tax.`, `vat.`, and `property.` subdomains from a single codebase.
- **SARS 2026 Engine**: 
    - **Income Tax**: Progressive brackets (18%-45%) including primary, secondary, and tertiary rebates.
    - **VAT Hub**: Add/Remove 15% VAT with precision fractions.
    - **Property Duty**: SARS 2026 thresholds with the R1.1m exemption logic.
    - **Two-Pot System**: High-fidelity withdrawal tax modeling (Sept 2024 legislation).
- **Fintech Aesthetic**: Built with a "Slate & Emerald" design system, optimized for professional trust and high readability.
- **Braai Basket Index**: A unique purchasing power parity (PPP) tool comparing SA food costs globally.
- **Lead Generation**: Integrated Lead Magnet modals and "Compliance Help" callback systems for tax practitioners.

## 🏗 Technical Stack
- **Framework**: Next.js 15.1.7 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **CMS**: Sanity.io (Content-driven SEO and Blog)
- **Deployment**: Vercel (Edge-ready Middleware)

## 📈 Calculation Formulas
- **Income Tax**: `Tax = Base + (Income - BracketFloor) * Rate - Rebates`
- **Two-Pot Withdrawal**: `Net = Gross - MarginalTax - AdminFee(Capped R500)`
- **Transfer Duty**: Progressive scale from 0% (up to R1.1m) to 13% (over R12.1m).

## 🛑 Deployment Notes
**IMPORTANT**: To deploy on Vercel, ensure the root directory is cleaned of legacy files:
1. Delete `index.html`
2. Delete `index.tsx`
3. Delete `metadata.json`
Next.js 15 requires these to be removed to prevent entry-point conflicts.

---
*Created by Senior Engineers for the South African Finance Community.*