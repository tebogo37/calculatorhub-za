# 🚀 CalculatorHub SA - Go Live Guide

Follow these steps to deploy your professional financial utility hub.

## 1. Local Verification
Before pushing, ensure your local build is production-ready:
```bash
# Install dependencies
npm install

# Run build to catch any remaining type errors
npm run build
```

## 2. Git Initialization
If you haven't initialized Git yet, run these commands in your project root:
```bash
# Initialize repository
git init

# Add all clean files
git add .

# Initial commit
git commit -m "feat: initial production-ready next.js 15 build"

# Link to your GitHub/GitLab (Replace URL)
git remote add origin https://github.com/YOUR_USERNAME/calculatorhub-sa.git
git branch -M main
git push -u origin main
```

## 3. Deployment (Vercel Recommended)
The fastest way to go live with Next.js 15:

1. **Connect GitHub**: Go to [vercel.com](https://vercel.com) and import your repository.
2. **Set Environment Variables**: In the Vercel dashboard, add the following:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: (Your Sanity ID)
   - `NEXT_PUBLIC_SANITY_DATASET`: `production`
3. **Deploy**: Vercel will automatically run `npm run build` and serve your app.

## 4. Post-Deployment Checklist
- [ ] Verify SSL is active (Automatic on Vercel).
- [ ] Test the **Braai Index** share button on mobile.
- [ ] Check that all calculator routes (`/tax`, `/vat`, etc.) load correctly.
- [ ] Verify that Lead Magnet PDFs trigger correctly on email submission.

---
*Senior Engineer Note: Your path-based routing is now standard. No complex DNS middleware is required.*
