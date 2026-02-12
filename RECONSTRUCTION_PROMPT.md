
# CalculatorHub SA Reconstruction Prompt

**Objective**: Build "CalculatorHub SA", a high-precision utility site for the South African 2026 tax year.

## Tech Stack
- **Framework**: Next.js 15.1.7 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS
- **AI**: Gemini 3 Flash (`@google/genai`)
- **CMS**: Sanity.io

## The Critical Deployment Blocker
**Error**: `Error: No Next.js version detected.`
**Cause**: Presence of `index.html` and `index.tsx` in the root directory. 
**Solution**: These files MUST be deleted. The project must rely solely on the `app/` directory and `package.json`.

## Core Logic (SARS 2026)
- **VAT**: 15% Standard Rate.
- **Income Tax**: Brackets 18%–45%, Primary Rebate R17,235.
- **Two-Pot**: Savings pot taxed at marginal rate + R500 capped fee.
- **Property**: Transfer duty starts > R1.1m.

## Aesthetic
- **Palette**: Slate 900 (Backgrounds), Emerald 500 (Primary Action), White (Cards).
- **Style**: "Modern Fintech" - Rounded 3xl, Heavy weights (900), Inter typography.

## Current Structure
- `/app`: App Router Pages.
- `/components`: Shared UI & AIAssistant.
- `/lib`: SARS Calculation Engine and Constants.
- `/web`: (DEPRECATED - Needs consolidation into root).
