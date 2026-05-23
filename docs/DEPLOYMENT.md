# Deployment

---

## Current Status

Deployment complete. All platforms live.

The project is deployed across three platforms — Vercel (primary), Netlify (backup), and GitHub Pages (CI/CD).

---

## Platforms

### Vercel (Primary)

- Platform: [vercel.com](https://vercel.com)
- Config: auto-detected (Vite)
- Deploy: automatic on push to `main`
- URL: https://khusniddn-plants-website.vercel.app

### Netlify (Backup)

- Platform: [netlify.com](https://netlify.com)
- Config: `netlify.toml`
- Deploy: automatic on push to `main`
- URL: https://khusniddin-plants-website.netlify.app

### GitHub Pages (CI/CD)

- Platform: GitHub Actions
- Config: `.github/workflows/deploy.yml`
- Deploy: automatic on push to `main` via `peaceiris/actions-gh-pages`
- URL: https://khusniddiniskandarov.github.io/plants-website

---

## Build Configuration

- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Base path: `/plants-website/` (GitHub Pages only)

---

## Pre-deployment Checklist

- ✅ Build verified — `npm run build` passes
- ✅ Lint verified — `npm run lint` passes
- ✅ Format verified — `npm run format:check` passes
- ✅ Images optimized — WebP format with responsive srcset
- ✅ SEO meta tags finalized
- ✅ OG tags configured
- ✅ Preview image optimized
- ✅ Local fonts and icons — no CDN dependency
- ✅ Accessibility improvements — semantic HTML, aria-labels
- ✅ LCP and CLS optimized

### Lighthouse Desktop

- ✅ Performance — 100
- ✅ Accessibility — 96
- ✅ Best Practices — 100
- ✅ SEO — 100

### Lighthouse Mobile

- ✅ Performance — 87
- ✅ Accessibility — 100
- ✅ Best Practices — 100
- ✅ SEO — 100

---

## Notes

- Vercel is the primary deployment platform — fastest and most optimized for Vite
- Netlify serves as backup deployment
- GitHub Pages uses CI/CD workflow via GitHub Actions
- SPA redirects configured on both Vercel and Netlify — prevents 404 on page refresh
- Base path `/plants-website/` required for GitHub Pages — not needed for Vercel and Netlify
