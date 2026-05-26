# Changelog

All notable changes in this project are documented in this file.

---

## v1.1.1 - 2026-05-26

### Changed - v1.1.1

- `README.md` — `Recruiter-Friendly Version` section expanded with docs and repo links
- `README.md` — `Showcase Documents` section added with showcase repo links
- `README.md` — Live Demos list updated with `👉` emoji
- `README.md` — Lighthouse tables converted to side-by-side HTML table format
- `README-short.md` — `Recruiter-Friendly Version` section added with full README and docs links
- `README-short.md` — `Responsive Full pages Screenshots` renamed to `Responsive Views`
- `README-short.md` — Lighthouse tables converted to side-by-side HTML table format
- `scrollReveal.js` — animation parameters retuned: `distance: 60px`, `duration: 1200ms`, `delay: 300ms`, `viewFactor: 0.2`
- `scrollReveal.js` — footer elements (`footer__icon`, `footer__content`, `copy__right`) separated with `viewFactor: 0`
- `scrollReveal.js` — `about__leaf` origin set to `right`, `review__leaf` and `footer__floral` set to `left` with `viewFactor: 0`

---

## v1.1.0 - 2026-05-23

### Added - v1.1.0

- added `Thumbs.db`, Vite temp and cache entries to `.gitignore`
- added `@fontsource/jost`, `@fontsource/lobster` — local font packages replacing Google Fonts CDN
- added `@fortawesome/fontawesome-free`, `remixicon` — local icon packages replacing CDN links
- added responsive hero image variants — `home-480.webp`, `home-720.webp`, `home-1080.webp`
- added `srcset` and `sizes` attributes to hero image — responsive image loading
- added `fetchpriority="high"` and `loading="eager"` to hero image — LCP optimization
- added `width` and `height` attributes to all images — prevents layout shift (CLS)
- added `alt` text to all images missing it — accessibility improvement
- added `aria-label` to hamburger button and scroll-up link — screen reader support
- added `public/robots.txt` — search engine crawl configuration

### Changed - v1.1.0

- replaced hamburger `<div>` with `<button>` — semantic HTML for accessibility
- replaced CDN font and icon links in `index.html` with local npm imports in `main.js`
- refactored `scrollReveal.js` — lazy dynamic import, tuned animation parameters
- refactored `swiper.module.js` — lazy dynamic import, adjusted speed and breakpoints
- deferred `initScrollReveal` and `initSwiperModule` to `load` event — improves LCP

### Fixed - v1.1.0

- fixed `vite.config.js` — base path now dynamic via `GITHUB_ACTIONS` environment variable
- fixed `eslint.config.js` — added Node.js globals for `vite.config.js`
- fixed `FloralDecoration.js` — changed floral image `loading` from `lazy` to `eager`, image was not rendering in some browsers

### Removed - v1.1.0

- removed `vercel.json` — Vercel auto-detects Vite projects, manual config was causing conflicts
- removed CDN preconnect and stylesheet links from `index.html`
- removed `src/assets/icons/.gitkeep` — unused placeholder

### Performance - v1.1.0

#### Desktop

- Performance: 100
- Accessibility: 96
- Best Practices: 100
- SEO: 100

#### Mobile

- Performance: 87
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## v1.0.0 - 2026-05-20

### Added - v1.0.0

- added `vercel.json` — Vercel deployment configuration with build command and SPA rewrites
- added `netlify.toml` — Netlify deployment configuration with build command and SPA redirects
- added `.github/workflows/deploy.yml` — GitHub Pages CI/CD workflow triggered on main push
- added `scripts/optimize-images.js` — automated image optimization script using sharp
- added `sharp` as dev dependency — image optimization tool for WebP conversion
- added optimized WebP versions of all section images — cart, home, leaf, plant, review assets
- added `og:locale` meta tag — language and region metadata for search engines
- added `og:site_name` meta tag — site name for Open Graph link previews
- added `apple-touch-icon` — iOS home screen icon support

### Changed - v1.0.0

- updated `vite.config.js` — added base path for GitHub Pages deployment
- updated `preview.png` — replaced placeholder with actual project screenshot, reduced from 1.5MB to 137KB
- updated all image imports to `.webp` format across section and navigation components
- updated `SocialNetworks.js` — added `aria-label` to social network links for accessibility
- updated `ARCHITECTURE.md` with v1.0.0 production phase structure
- updated `DEVLOG.md` with production phase progress
- updated `DevNotes.md` with production phase decisions
- updated `DEPLOYMENT.md` with finalized deployment strategy
- updated `README.md` and `README-short.md` for v1.0.0

### Removed - v1.0.0

- removed all original PNG image assets — cart-1 through cart-4, home, leaf-1 through leaf-4, plant-1, plant-2
- removed all original JPG image assets — review-1 through review-4

### Performance - v1.0.0

- Lighthouse Performance: 97
- Lighthouse Accessibility: 90
- Lighthouse Best Practices: 100
- Lighthouse SEO: 92

---

## v0.4.0 - 2026-05-16

### Added in v0.4.0

- added `src/modules/` directory for interactive behavior modules
- added `navbarController.js` — hamburger menu toggle and nav link click handlers
- added `scrollHeader.js` — scroll-based header border effect
- added `scrollActiveLink.js` — scroll-based active navigation link tracking
- added `scrollUp.js` — scroll-up button visibility based on scroll position
- added `scrollReveal.js` — scroll reveal animations using ScrollReveal library
- added `swiper.module.js` — review section swiper carousel using Swiper library
- added `scrollreveal` as runtime dependency
- added `swiper` as runtime dependency
- added `.show-menu` class to `custom.css` — mobile menu visibility
- added `#nav-menu` scrollbar hiding styles to `custom.css`
- added `newsletter__form` class to `NewsletterForm.js` for scroll reveal targeting

### Changed in v0.4.0

- updated `main.js` — integrated all interactive modules into app entry
- updated `Navbar.js` — fixed nav-menu overflow on desktop
- updated `LeafDecoration.js` — fixed import paths to relative
- updated `ARCHITECTURE.md` with current v0.4.0 project structure
- updated `DEVLOG.md` with UX phase progress
- updated `DevNotes.md` with UX phase architectural decisions

### Fixed in v0.4.0

- fixed `#nav-menu` overflow blocking page interactions on desktop
- fixed `LeafDecoration.js` absolute import paths

---

## v0.3.0 - 2026-05-14

### Added in v0.3.0

- added `src/pages/main/sections/` directory for page-level sections
- added `src/pages/main/components/` directory for page-specific components
- added `src/components/footer/` directory for footer sub-components
- added `HeroSection.js` — hero section with decorative icons and social links
- added `DecorativeIcons.js` — animated leaf, flower and plant decorative icons
- added `ServicesSection.js` — services section with inline ServiceCard component
- added `AboutSection.js` — about section with inline AboutItem component
- added `PopularSection.js` — popular plants section with inline PopularCard component
- added `ReviewSection.js` — customer review section with swiper structure
- added `FooterLogo.js`, `FooterLinks.js`, `ContactInfo.js`, `Copyright.js`
- added `FloralDecoration.js`, `SocialIcons.js` footer sub-components
- added `NewsletterForm.js` — newsletter subscription form
- added `Index.js` — page entry point rendering all main sections
- added hero animation styles to `custom.css` — movingY, rotating, scalingUp
- added `.title` shared style to `custom.css`
- added popular card hover style to `custom.css`
- added swiper pagination styles to `custom.css`
- added image assets — home.png, plant-1.png, plant-2.png, leaf-3.png, leaf-4.png
- added image assets — cart-1.png, cart-2.png, cart-3.png, cart-4.png
- added image assets — review-1.png, review-2.png, review-3.png, review-4.png, floral-1.png

### Changed in v0.3.0

- updated `MainLayout.js` — integrated `Index` page entry point
- updated `MainLayout.js` — replaced `export const` with `export function`
- updated `Footer.js` — integrated all footer sub-components
- updated `ARCHITECTURE.md` with current v0.3.0 project structure
- updated `DEVLOG.md` with UI phase progress
- updated `DevNotes.md` with UI phase architectural decisions

---

## v0.2.0 - 2026-05-08

### Added in v0.2.0

- added main layout structure with `MainLayout.js`, `Header.js`, and `Footer.js`
- added navigation component structure with `Navbar.js` and `LeafDecoration.js`
- added leaf decoration assets for navigation
- added reusable UI components: `Button.js`, `SocialNetworks.js`, and `ScrollUp.js`
- added dedicated styles directory with `main.css` and `custom.css`
- added application mount point in `index.html`
- added `DOMContentLoaded` application initialization flow in `main.js`

### Changed in v0.2.0

- moved stylesheet entry from `src/style.css` to `src/styles/main.css`
- updated `main.js` to import the new stylesheet entry
- updated `main.js` to render `MainLayout` into `#app`
- updated `ARCHITECTURE.md` with the current v0.2.0 project structure
- updated `DEVLOG.md` with architecture phase progress
- updated `DevNotes.md` with architecture phase decisions
- updated deployment documentation to defer deployment until the production phase

### Removed in v0.2.0

- removed old root-level `src/style.css`

### Fixed in v0.2.0

- fixed `MainLayout` export naming for entry-point rendering

---

## v0.1.0 - 2026-05-06

### Added in v0.1.0

- initialized repository structure (main + develop branches)
- introduced full documentation system (README, DEVLOG, DevNotes, SETUP, ARCHITECTURE, CHANGELOG, DEPLOYMENT)
- created Vite + TailwindCSS project setup
- configured project folder structure with path alias (@ → /src)
- added ESLint with multi-language support (JS, JSON, CSS, Markdown)
- integrated Prettier for consistent formatting
- connected ESLint + Prettier via eslint-config-prettier
- added EditorConfig for cross-editor consistency
- introduced environment variable system (.env, .env.example)
- implemented Git hooks using Husky
- added lint-staged for pre-commit automation
- established HTML head structure (SEO + performance optimized)
- integrated Open Graph and Twitter metadata
- added Google Fonts and icon libraries

### Changed in v0.1.0

- improved development workflow structure
- standardized code quality rules across project
- enforced formatting and linting before commits

### Security in v0.1.0

- ensured `.env` files are excluded from version control
- improved repository safety via gitignore rules

---

## Notes

- v1.0.0 = production release (deployment config, SEO finalization, performance audit, image optimization, docs update)
- v0.4.0 = UX release (interactive modules, scroll behavior, swiper, scroll reveal)
- v0.3.0 = UI release (all page sections, footer sub-components, page entry point, section styles)
- v0.2.0 = architecture release (layout, navigation, reusable UI components, style foundation, and app entry point)
- v0.1.0 = foundation release (tooling + setup only)
- v1.1.0 = performance & accessibility release (local fonts/icons, responsive images, LCP optimization, CLS fix, semantic HTML, deployment fixes)
