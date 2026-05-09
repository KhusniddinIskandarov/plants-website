# Development Log

---

## v0.2.0 — Architecture Phase

### feature/main-layout

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

### feature/style-foundation

- `src/style.css` removed
- `src/styles/` folder created
- `main.css` added — Tailwind entry point and style imports
- `custom.css` added — base styles, navigation styles, and button styles
- `main.js` updated — stylesheet import changed to `src/styles/main.css`

---

### feature/entry-point

- `index.html` updated — app mount point added
- `index.html` updated — Vite module script connected
- `main.js` updated — `MainLayout` rendered into `#app`
- `MainLayout.js` updated — export naming fixed for entry-point rendering
- Initial DOMContentLoaded app initialization added

---

### docs/architecture-phase

- `ARCHITECTURE.md` updated — current v0.2.0 project architecture documented
- Architecture history preserved with v0.1.0 foundation summary
- Architecture phase boundaries clarified
- Next UI phase scope documented

---

### release/v0.2.0

- version bumped to `0.2.0` in `package.json`
- CHANGELOG finalized for v0.2.0
- version badge updated in README and README-short
- build verified successfully
- lint and format checks passed

---

## v0.1.0 — Foundation Release

### Repository initialization

- `main` and `develop` branches created
- documentation system established

---

### feature/setup-vite-tailwind

- Vite project initialized
- TailwindCSS integrated
- Default scaffold removed
- Folder structure created
- Path alias configured (`@` → `/src`)

---

### feature/gitignore-setup

- `.gitignore` configured
- `node_modules/`, `dist/`, `build/` excluded
- `.env` files protected
- Editor-specific rules added

---

### feature/code-quality-setup

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

- Husky initialized, `.husky/` directory created
- lint-staged configured for staged file processing
- pre-commit hook implemented — runs ESLint + Prettier automatically

---

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

---

### docs/setup-phase

- all setup phase documentation consolidated
- SETUP.md, ARCHITECTURE.md, DEVLOG.md, DevNotes.md finalized
- all decisions and reasoning recorded
- release structure prepared for v0.1.0

---

### release/v0.1.0

- version bumped to `0.1.0` in `package.json`
- CHANGELOG finalized for v0.1.0
- version badge added to README and README-short

---

## Summary

| Layer               | Status |
| ------------------- | ------ |
| Tooling             | ✔      |
| Code quality        | ✔      |
| Git automation      | ✔      |
| HTML foundation     | ✔      |
| Layout structure    | ✔      |
| Navigation layer    | ✔      |
| UI components       | ✔      |
| Style foundation    | ✔      |
| Entry point         | ✔      |
| Documentation       | ✔      |
| Release v0.1.0      | ✔      |
| Architecture v0.2.0 | ✔      |
| Release v0.2.0      | ✔      |
