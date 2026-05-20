# Deployment

---

## Current Status

Deployment configuration complete. Live deployment pending production release.

The project is configured for deployment across three platforms — Vercel (primary), Netlify (backup), and GitHub Pages (CI/CD). Live URLs will be updated after deployment.

---

## Platforms

### Vercel (Primary)

- Platform: [vercel.com](https://vercel.com)
- Config: `vercel.json`
- Deploy: automatic on push to `main`
- URL: coming soon

### Netlify (Backup)

- Platform: [netlify.com](https://netlify.com)
- Config: `netlify.toml`
- Deploy: automatic on push to `main`
- URL: coming soon

### GitHub Pages (CI/CD)

- Platform: GitHub Actions
- Config: `.github/workflows/deploy.yml`
- Deploy: automatic on push to `main` via `peaceiris/actions-gh-pages`
- URL: coming soon

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
- ✅ Lighthouse Performance — 97
- ✅ Lighthouse Accessibility — 90
- ✅ Lighthouse Best Practices — 100
- ✅ Lighthouse SEO — 92
- ✅ Images optimized — WebP format
- ✅ SEO meta tags finalized
- ✅ OG tags configured
- ✅ Preview image optimized

---

## Notes

- Vercel is the primary deployment platform — fastest and most optimized for Vite
- Netlify serves as backup deployment
- GitHub Pages uses CI/CD workflow via GitHub Actions
- SPA redirects configured on both Vercel and Netlify — prevents 404 on page refresh
- Base path `/plants-website/` required for GitHub Pages — not needed for Vercel and Netlify
- Live URLs will be updated after production deployment
