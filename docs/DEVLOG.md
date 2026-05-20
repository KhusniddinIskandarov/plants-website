# Development Log

---

## v1.0.0 — Production Phase

### release/v1.0.0

- version bumped to `1.0.0` in `package.json`
- CHANGELOG finalized for v1.0.0 — Unreleased heading replaced with version and date
- version badge updated in README and README-short
- README.md updated — added Project Goals, Features, Responsive Design, Code Quality, Git Hooks, SEO & Performance, Accessibility and Status sections
- README-short.md updated — added Why This Project Matters, Key Highlights, Project Goals and Features sections
- ARCHITECTURE.md updated — minor corrections for release accuracy
- DEPLOYMENT.md updated — minor corrections for release accuracy
- build verified successfully
- lint and format checks passed
- Prettier formatting applied across all files

### docs/production-phase

- `README.md` updated — added preview image, live demo section and production status
- `README-short.md` updated — added preview image, live demo section and production status
- `CHANGELOG.md` updated — added Unreleased v1.0.0 production phase changes
- `ARCHITECTURE.md` updated — current v1.0.0 project structure documented
- `DEPLOYMENT.md` updated — finalized deployment strategy and platform configuration
- `DevNotes.md` updated — added production phase decisions and notes

### chore/performance-audit

- `sharp` package installed — image optimization tool
- `scripts/optimize-images.js` added — converts PNG/JPG images to WebP format
- all PNG and JPG image assets converted to WebP format
- original PNG and JPG assets removed
- `cart-1.webp` resized from 4000px to 600px width and re-optimized
- JS import paths updated to WebP format across all section components
- `aria-label` added to social network links — accessibility improvement
- `aria-label` added to popular section cart button — accessibility improvement
- `preview.png` optimized — reduced from 1.5MB to 137KB
- Lighthouse scores: Performance 97, Accessibility 90, Best Practices 100, SEO 92

### chore/seo-optimization

- `preview.png` updated — new screenshot replacing placeholder image
- `og:locale` added to `index.html` — language and region metadata
- `og:site_name` added to `index.html` — site name for Open Graph
- `apple-touch-icon` added to `index.html` — iOS home screen icon support

### feature/deploy-config

- `vercel.json` added — Vercel deploy configuration with build command and SPA rewrites
- `netlify.toml` added — Netlify deploy configuration with build command and SPA redirects
- `.github/workflows/deploy.yml` added — GitHub Pages CI/CD workflow
- `vite.config.js` updated — added base path for GitHub Pages deployment

### feature/scroll-reveal

## v0.4.0 — UX Phase

### release/v0.4.0

- version bumped to `0.4.0` in `package.json`
- CHANGELOG finalized for v0.4.0
- version badge updated in README and README-short
- build verified successfully
- lint and format checks passed
- Prettier formatting applied across all files

### docs/ux-phase

- `ARCHITECTURE.md` updated — current v0.4.0 project structure documented
- module strategy section added — all interactive modules documented
- application entry updated — all initialized modules listed
- UX phase boundaries documented
- v0.3.0 UI phase added to architecture history
- next phase updated — v1.0.0 production phase scope listed

### hotfix/navbar-styles

- `custom.css` updated — added `.show-menu` class for mobile menu visibility
- `custom.css` updated — added `#nav-menu` scrollbar hiding styles for Chrome, Firefox and IE

### feature/swiper-integration

- `swiper` package installed
- `swiper.module.js` added — swiper initialization with pagination and autoplay
- `main.js` updated — `initSwiperModule` integrated into app entry

### feature/scroll-reveal

- `scrollreveal` package installed
- `scrollReveal.js` added — scroll reveal animations for all major sections and components
- `NewsletterForm.js` updated — added `newsletter__form` class for scroll reveal targeting
- `main.js` updated — `initScrollReveal` integrated into app entry

### feature/scroll-up-button

- `scrollUp.js` added — scroll-up button visibility based on scroll position
- `main.js` updated — `initScrollUp` integrated into app entry

### feature/active-nav-links

- `scrollActiveLink.js` added — scroll-based active navigation link tracking
- `main.js` updated — `initActiveLink` integrated into app entry

### feature/scroll-header

- `src/modules/` directory created
- `navbarController.js` added — hamburger menu toggle and nav link click handlers
- `scrollHeader.js` added — scroll-based header border effect
- `main.js` updated — `initNavbarController` and `initScrollHeader` integrated into app entry

### hotfix/navbar-pointer-events

- `Navbar.js` updated — fixed `#nav-menu` overflow issue blocking page interactions on desktop
- added `lg:h-auto`, `lg:w-auto`, `lg:py-0`, `lg:overflow-visible` to nav-menu — menu collapses to content size on desktop
- `LeafDecoration.js` updated — fixed import paths from `/src/assets/` to relative `../../assets/`

---

## v0.3.0 — UI Phase

### release/v0.3.0

- version bumped to `0.3.0` in `package.json`
- CHANGELOG finalized for v0.3.0
- version badge updated in README and README-short
- build verified successfully
- lint and format checks passed
- Prettier formatting applied across all files

### docs/ui-phase

- `ARCHITECTURE.md` updated — current v0.3.0 project structure documented
- folder structure updated with all new directories and files
- page structure section added — sections, page entry point, page-specific components
- component strategy updated — footer sub-components layer added
- styling strategy updated — custom.css section markers documented
- export conventions table added
- phase boundaries updated — UI phase scope documented
- architecture history updated — v0.2.0 summary added
- next phase updated — v0.4.0 UX phase scope listed

### feature/footer-section

- `src/components/footer/` directory created
- `FooterLogo.js` added — footer logo component
- `FooterLinks.js` added — quick links and popular services columns
- `ContactInfo.js` added — contact details component
- `Copyright.js` added — copyright notice component
- `FloralDecoration.js` added — floral decoration image component
- `SocialIcons.js` added — social icons with divider component
- `NewsletterForm.js` added — newsletter subscription form component
- `floral-1.png` added — floral decoration image asset
- `Footer.js` updated — all footer components integrated

### feature/review-section

- `ReviewSection.js` added — customer review section with inline `ReviewCard` component
- four review cards added with reviewer avatar images
- `review-1.jpg`, `review-2.jpg`, `review-3.jpg`, `review-4.jpg` added — reviewer avatar assets
- `leaf-4.png` added — leaf decoration asset for review section
- swiper pagination styles added to `custom.css` — custom bullet size and color
- `Index.js` updated — `ReviewSection` integrated into page entry point
- swiper library integration deferred to UX phase

### feature/popular-section

- `PopularSection.js` added — popular plants section with inline `PopularCard` component
- four plant cards added — Boston Fern, Rubber Plant, Peace Lily, Desert Rose
- `cart-1.png`, `cart-2.png`, `cart-3.png`, `cart-4.png` added — popular plant image assets
- `.popular__card:hover img` style added to `custom.css` — card image lift effect on hover
- `Index.js` updated — `PopularSection` integrated into page entry point

### feature/about-section

- `AboutSection.js` added — about section with inline `AboutItem` component
- two about items added with alternating layout (normal and reversed)
- `plant-1.png`, `plant-2.png`, `leaf-3.png` added — about section image assets
- `.title` base style added to `custom.css` — shared title style for section headings
- `Index.js` updated — `AboutSection` integrated into page entry point

### feature/services-section

- `ServicesSection.js` added — services section with inline `ServiceCard` component
- four service cards added — Fast Delivery, Customer Service, Original Plants, Affordable Price
- `Index.js` updated — `ServicesSection` integrated into page entry point

### feature/hero-section

- `src/pages/` directory created
- `src/pages/main/` directory created
- `src/pages/main/sections/` directory created
- `src/pages/main/components/` directory created
- `HeroSection.js` added — hero section with layout, content, image, and social links
- `DecorativeIcons.js` added — animated leaf, flower, and plant decorative icons
- `src/assets/images/home.png` added — hero section main image
- `Index.js` added — page entry point rendering all main sections
- `MainLayout.js` updated — `Index` integrated, `export const` replaced with `export function`
- hero-specific animation styles added to `custom.css` — `animate-movingY`, `animate-rotating`, `animate-scalingUp`

---

## v0.2.0 — Architecture Phase

### release/v0.2.0

- version bumped to `0.2.0` in `package.json`
- CHANGELOG finalized for v0.2.0
- version badge updated in README and README-short
- build verified successfully
- lint and format checks passed

### docs/architecture-phase

- `ARCHITECTURE.md` updated — current v0.2.0 project architecture documented
- Architecture history preserved with v0.1.0 foundation summary
- Architecture phase boundaries clarified
- Next UI phase scope documented

### feature/entry-point

- `index.html` updated — app mount point added
- `index.html` updated — Vite module script connected
- `main.js` updated — `MainLayout` rendered into `#app`
- `MainLayout.js` updated — export naming fixed for entry-point rendering
- Initial DOMContentLoaded app initialization added

### feature/style-foundation

- `src/style.css` removed
- `src/styles/` folder created
- `main.css` added — Tailwind entry point and style imports
- `custom.css` added — base styles, navigation styles, and button styles
- `main.js` updated — stylesheet import changed to `src/styles/main.css`

### feature/ui-components

- `src/components/ui/` folder created
- `Button.js` added — primary and outline button components
- `SocialNetworks.js` added — social media links component
- `ScrollUp.js` added — scroll-to-top button component

### feature/navbar

- `src/components/navigation/` folder created
- `Navbar.js` added — navigation structure with mobile menu
- `LeafDecoration.js` added — decorative leaf elements for mobile menu
- `src/assets/images/leaf-1.png`, `leaf-2.png` added — leaf assets
- `Header.js` updated — Navbar integrated into header

### feature/main-layout

- created `src/layouts/` directory
- added `MainLayout.js` — layout wrapper rendering Header, main, and Footer
- added `Header.js` — fixed top navigation base structure
- added `Footer.js` — base footer structure with layout classes
- fixed export naming: `MainLayouts` → `MainLayout`

---

## v0.1.0 — Foundation Phase

### release/v0.1.0

- version bumped to `0.1.0` in `package.json`
- CHANGELOG finalized for v0.1.0
- version badge added to README and README-short

### docs/setup-phase

- all setup phase documentation consolidated
- SETUP.md, ARCHITECTURE.md, DEVLOG.md, DevNotes.md finalized
- all decisions and reasoning recorded
- release structure prepared for v0.1.0

### feature/html-head-setup

- `favicon.ico` and `preview.png` added to `public/`
- essential meta tags configured (charset, viewport, compatibility)
- SEO meta tags added (description, keywords, author, robots)
- canonical URL defined
- Open Graph and Twitter card metadata implemented
- favicon and theme color configured
- preconnect optimization applied for font loading
- Google Fonts integrated (Jost, Lobster)
- icon libraries added (Font Awesome, Remix Icon)
- main stylesheet connected

### feature/git-hooks-setup

- Husky initialized, `.husky/` directory created
- lint-staged configured for staged file processing
- pre-commit hook implemented — runs ESLint + Prettier automatically

### feature/code-quality-setup

- ESLint initialized with modern flat config
- JS, JSON, CSS, Markdown linting enabled
- browser environment and ESM modules configured
- Prettier integrated for consistent formatting
- ESLint + Prettier connected via `eslint-config-prettier`
- `.editorconfig` added for cross-editor consistency
- `.env` and `.env.example` added for environment variable management
- lint and format scripts added to `package.json`

### feature/gitignore-setup

- `.gitignore` configured
- `node_modules/`, `dist/`, `build/` excluded
- `.env` files protected
- Editor-specific rules added

### feature/setup-vite-tailwind

- Vite project initialized
- TailwindCSS integrated
- Default scaffold removed
- Folder structure created
- Path alias configured (`@` → `/src`)

---

## v0.0.0 — Initial Setup

### develop

- 7 docs skeleton files created — SETUP.md, ARCHITECTURE.md, DEVLOG.md, DevNotes.md, CHANGELOG.md, README-short.md, DEPLOYMENT.md

### main

- `main` branch created — repository initialized
- `README.md` skeleton added
- `LICENSE.md` added
- `develop` branch opened from main

---

## Summary

### v1.0.0 — Production Phase

| Layer                      | Status |
| -------------------------- | ------ |
| Deployment configuration   | ✔      |
| SEO finalization           | ✔      |
| Image optimization (WebP)  | ✔      |
| Lighthouse 97 performance  | ✔      |
| Accessibility improvements | ✔      |
| Documentation finalization | ✔      |

### v0.4.0 — UX Phase

| Layer              | Status |
| ------------------ | ------ |
| Navbar controller  | ✔      |
| Scroll header      | ✔      |
| Active nav links   | ✔      |
| Scroll up button   | ✔      |
| Scroll reveal      | ✔      |
| Swiper integration | ✔      |

### v0.3.0 — UI Phase

| Layer            | Status |
| ---------------- | ------ |
| Hero section     | ✔      |
| Services section | ✔      |
| About section    | ✔      |
| Popular section  | ✔      |
| Review section   | ✔      |
| Footer section   | ✔      |

### v0.2.0 — Architecture Phase

| Layer            | Status |
| ---------------- | ------ |
| Layout structure | ✔      |
| Navigation layer | ✔      |
| UI components    | ✔      |
| Style foundation | ✔      |
| Entry point      | ✔      |

### v0.1.0 — Foundation Phase

| Layer           | Status |
| --------------- | ------ |
| Tooling         | ✔      |
| Code quality    | ✔      |
| Git automation  | ✔      |
| HTML foundation | ✔      |
| Documentation   | ✔      |

### v0.0.0 — Initial Setup

| Layer           | Status |
| --------------- | ------ |
| Repository init | ✔      |
| README skeleton | ✔      |
| LICENSE         | ✔      |
| Docs skeleton   | ✔      |
