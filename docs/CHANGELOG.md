# Changelog

All notable changes in this project are documented in this file.

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

- v0.3.0 = UI release (all page sections, footer sub-components, page entry point, section styles)
- v0.2.0 = architecture release (layout, navigation, reusable UI components, style foundation, and app entry point)
- v0.1.0 = foundation release (tooling + setup only)
- interactive behavior and animations are not included yet
- deployment is intentionally deferred until the production phase
- future releases will focus on UX behavior and production readiness
