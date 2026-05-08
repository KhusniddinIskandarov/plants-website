# Changelog

All notable changes in this project are documented in this file.

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

## Next Cycle (v0.3.0 — UI Phase)

- build hero section
- build services section
- build about section
- build popular plants section
- build review section
- build footer section

---

## Notes

- v0.2.0 = architecture release (layout, navigation, reusable UI components, style foundation, and app entry point)
- v0.1.0 = foundation release (tooling + setup only)

- UI sections and interactive behavior are not included yet
- deployment is intentionally deferred until the production phase
- future releases will focus on UI sections, UX behavior, and production readiness
