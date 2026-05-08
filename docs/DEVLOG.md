# Development Log

---

## v0.2.0 — Architecture Phase

### feature/main-layout

Completed:

- created `src/layouts/` directory
- added `MainLayout.js` — layout wrapper rendering Header, main, and Footer
- added `Header.js` — fixed top navigation base structure
- added `Footer.js` — base footer structure with layout classes
- fixed export naming: `MainLayouts` → `MainLayout`

---

### feature/navbar

- `src/components/navigation/` folder created
- `Navbar.js` added — navigation structure with mobile menu
- `LeafDecoration.js` added — decorative leaf elements for mobile menu
- `src/assets/images/leaf-1.png`, `leaf-2.png` added — leaf assets
- `Header.js` updated — Navbar integrated into header

---

### feature/ui-components

- `src/components/ui/` folder created
- `Button.js` added — primary and outline button components
- `SocialNetworks.js` added — social media links component
- `ScrollUp.js` added — scroll-to-top button component

---

## v0.1.0 — Foundation Release

### Repository initialization

Completed:

- `main` and `develop` branches created
- documentation system established (README, DEVLOG, DevNotes, SETUP, ARCHITECTURE, CHANGELOG, DEPLOYMENT)

---

### feature/setup-vite-tailwind

Completed:

- Vite project initialized
- TailwindCSS integrated
- default scaffold removed, clean structure established
- base folder structure created
- path alias configured (`@` → `/src`)
- development server and build process verified

---

### feature/gitignore-setup

Completed:

- `.gitignore` configured
- `node_modules/`, `dist/`, `dist-ssr/`, `build/` excluded
- `.env`, `.env.*`, `.env*.local` files protected
- log and debug file rules added
- editor-specific ignore rules configured

---

### feature/code-quality-setup

Completed:

- ESLint initialized with modern flat config
- JS, JSON, CSS, Markdown linting enabled
- browser environment and ESM modules configured
- Prettier integrated for consistent formatting
- ESLint + Prettier connected via `eslint-config-prettier`
- `.editorconfig` added for cross-editor consistency
- `.env` and `.env.example` added for environment variable management
- lint and format scripts added to `package.json`

---

### feature/git-hooks-setup

Completed:

- Husky initialized, `.husky/` directory created
- lint-staged configured for staged file processing
- pre-commit hook implemented — runs ESLint + Prettier automatically

---

### feature/html-head-setup

Completed:

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

---

### docs/setup-phase

Completed:

- all setup phase documentation consolidated
- SETUP.md, ARCHITECTURE.md, DEVLOG.md, DevNotes.md finalized
- all decisions and reasoning recorded
- release structure prepared for v0.1.0

---

### release/v0.1.0

Completed:

- version bumped to `0.1.0` in `package.json`
- CHANGELOG finalized for v0.1.0
- version badge added to README and README-short

---

## Summary

| Phase           | Branch                      | Status |
| --------------- | --------------------------- | ------ |
| Initialization  | main / develop              | ✅     |
| Vite + Tailwind | feature/setup-vite-tailwind | ✅     |
| Git hygiene     | feature/gitignore-setup     | ✅     |
| Code quality    | feature/code-quality-setup  | ✅     |
| Git automation  | feature/git-hooks-setup     | ✅     |
| HTML foundation | feature/html-head-setup     | ✅     |
| Documentation   | docs/setup-phase            | ✅     |
| Release v0.1.0  | release/v0.1.0              | ✅     |
| Main layout     | feature/main-layout         | 🔄     |
