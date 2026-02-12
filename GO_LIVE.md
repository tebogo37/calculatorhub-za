# 🚀 CalculatorHub SA - Production Deployment Guide

Your application is now optimized for a Next.js 15 production environment. Follow these commands to go live.

## 1. Local Production Build Test
Ensure everything compiles perfectly without dev-mode overhead:
```bash
npm install
npm run build
```

## 2. Version Control (Git)
If you haven't pushed to a remote repository yet:
```bash
# 1. Initialize Git
git init

# 2. Add all files (Next.js automatically ignores .next via .gitignore)
git add .

# 3. Commit the production-ready state
git commit -m "feat: complete next.js 15 conversion for production"

# 4. Create a repo on GitHub/GitLab and link it
git remote add origin https://github.com/YOUR_USERNAME/calculatorhub-sa.git
git branch -M main
git push -u origin main
```

## 3. Deployment to Vercel (Recommended)
Vercel is the native home for Next.js and will handle your App Router logic best.

1.  Log in to [Vercel](https://vercel.com).
2.  Click **"Add New"** > **"Project"**.
3.  Import your GitHub repository.
4.  **Environment Variables**: Add your Sanity keys in the dashboard:
    - `NEXT_PUBLIC_SANITY_PROJECT_ID`
    - `NEXT_PUBLIC_SANITY_DATASET`
5.  Click **Deploy**.

## 4. Troubleshooting "No Next.js version detected"
If a platform fails to see Next.js, check:
- **Root Directory**: Ensure Vercel is looking at the root where `package.json` lives.
- **Build Command**: Ensure it is set to `next build`.
- **Output Directory**: Ensure it is set to `.next`.

---
*Senior Engineer Note: The legacy index.html/tsx files have been cleared to prevent build conflicts.*
