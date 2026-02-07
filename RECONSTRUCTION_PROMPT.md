# CalculatorHub SA Reconstruction Prompt

**Role**: Act as a Senior Full Stack Next.js Engineer.
**Objective**: Build "CalculatorHub SA", a multi-subdomain financial utility site for the South African 2026 tax year.

**Tech Stack**:
- Next.js 15.1.7 (App Router)
- React 19
- Tailwind CSS
- Lucide React Icons
- Sanity.io (Mock data fallback)

**Architecture Requirements**:
1. **Middleware Subdomain Routing**: Implement `middleware.ts` to detect hostnames (`tax.`, `vat.`, `property.`, `twopot.`) and rewrite paths to internal folders within `/app/sites/`.
2. **Fintech Aesthetic**: Use a "Slate 900" (Primary) and "Emerald 500" (Accent) color palette. Design should feel high-end, using heavy font weights (Black/900) for headings and rounded-3xl corners for cards.
3. **Calculation Logic (SARS 🇿🇦)**:
   - **VAT**: 15% standard rate.
   - **PAYE**: 2025/2026 brackets (18% to 45%) with Primary Rebate (R17,235).
   - **Property**: Transfer Duty thresholds starting at R1.1m exempt.
   - **Two-Pot**: Savings pot withdrawal logic taxed at marginal rates + R500 capped admin fee.

**Unique Features to Include**:
- **Braai Basket Index**: A comparison table showing cost of a standard BBQ in SA vs UK/USA.
- **SARS Refund Estimator**: A tool that inputs RA contributions and Medical Scheme credits to estimate year-end tax returns.
- **Lead Magnets**: Lockable PDF guide sections that open an email capture modal.
- **Market Marquee**: A sticky top-nav scrolling ticker showing ZAR/USD, Repo Rate, and JSE indices.

**File Structure**:
- `/app/layout.tsx`: Root layout with Inter font and AdSense scripts.
- `/app/page.tsx`: The "Home" site experience.
- `/app/sites/[subdomain]/page.tsx`: The dynamic entry points for subdomains.
- `/web/lib/utils.ts`: The core SARS math engine.
- `/web/components/shared/`: Layout, SEO, AdSpace, and RecentPosts components.

**Design Constraints**:
- Animations: Use `animate-in fade-in slide-in-from-bottom`.
- Typography: Inter (variable).
- Mobile: 100% responsive with a custom sliding mobile menu.

**Prompt Goal**: "Generate a production-ready financial ecosystem that looks like a high-end banking app but functions as a free public utility."