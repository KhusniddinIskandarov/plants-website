# Development Log

---

## v0.3.0 — UI Phase

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

### feature/services-section

- `ServicesSection.js` added — services section with inline `ServiceCard` component
- four service cards added — Fast Delivery, Customer Service, Original Plants, Affordable Price
- `Index.js` updated — `ServicesSection` integrated into page entry point

---

### feature/about-section

- `AboutSection.js` added — about section with inline `AboutItem` component
- two about items added with alternating layout (normal and reversed)
- `plant-1.png`, `plant-2.png`, `leaf-3.png` added — about section image assets
- `.title` base style added to `custom.css` — shared title style for section headings
- `Index.js` updated — `AboutSection` integrated into page entry point

---

### feature/popular-section

- `PopularSection.js` added — popular plants section with inline `PopularCard` component
- four plant cards added — Boston Fern, Rubber Plant, Peace Lily, Desert Rose
- `cart-1.png`, `cart-2.png`, `cart-3.png`, `cart-4.png` added — popular plant image assets
- `.popular__card:hover img` style added to `custom.css` — card image lift effect on hover
- `Index.js` updated — `PopularSection` integrated into page entry point

---

### feature/review-section

- `ReviewSection.js` added — customer review section with inline `ReviewCard` component
- four review cards added with reviewer avatar images
- `review-1.jpg`, `review-2.jpg`, `review-3.jpg`, `review-4.jpg` added — reviewer avatar assets
- `leaf-4.png` added — leaf decoration asset for review section
- swiper pagination styles added to `custom.css` — custom bullet size and color
- `Index.js` updated — `ReviewSection` integrated into page entry point
- swiper library integration deferred to UX phase

---

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

---

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
| Hero section        | ✔      |
