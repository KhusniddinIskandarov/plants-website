# 🧠 Developer Notes

This file tracks decisions, reasoning, and architectural thinking behind the project.

---

## 💡 Current Ideas

- follow documentation-driven workflow
- keep commits and branches small and focused
- build project in incremental, testable steps
- prefer clarity over premature optimization

---

## ❓ Open Questions

- how will scaling strategy evolve after v0.2.0?
- how will UI sections be organized during the UI phase?

---

## ⚙️ Decision Notes

### setup-vite-tailwind

- Chose Vite for fast development and modern tooling
- Integrated TailwindCSS for utility-first styling approach
- Removed default scaffold to keep project clean and controlled
- Introduced minimal folder structure to avoid early over-engineering

---

### gitignore-setup

- Introduced comprehensive `.gitignore` rules to prevent unnecessary files from being tracked
- Ensured sensitive environment files are excluded from version control
- Standardized ignore patterns for consistency across environments

---

### code-quality-setup

- Introduced ESLint as the primary linting tool for code quality enforcement
- Configured ESLint using modern flat config approach
- Added Prettier to handle consistent code formatting
- Integrated Prettier with ESLint to avoid rule conflicts
- Ensured support for multiple file types (JS, JSON, CSS, Markdown)
- Added `.editorconfig` to standardize editor settings across team
- Added `.env.example` as a safe template for environment variables

---

### git-hooks-setup

- Introduced Husky to manage Git hooks in the project
- Used lint-staged to run checks only on staged files for better performance
- Configured pre-commit hook to automatically run ESLint and Prettier
- Enforced code quality rules at commit stage
- Reduced risk of inconsistent or broken code entering repository

---

### html-head-setup

- Established a complete HTML `<head>` structure for SEO and performance
- Added metadata for search engines and social media platforms
- Configured Open Graph and Twitter cards for link previews
- Implemented resource optimization using preconnect
- Integrated fonts and icon libraries for UI consistency
- Standardized head structure for scalability and maintainability

---

### main-layout

- separated layout from components — `layouts/` handles structure, `components/` handles UI
- `MainLayout.js` acts as a pure wrapper — renders Header, main content area, and Footer
- `Header.js` and `Footer.js` kept as simple functions returning HTML strings
- used named exports for Header and Footer, consistent with component pattern
- `main` content area given `id="main"` for scroll and accessibility targeting later

---

### ui-components

- Introduced reusable UI components for shared interface elements
- Separated common buttons, social links, and scroll control into dedicated components
- Kept components simple and markup-focused during the architecture phase
- Deferred advanced styling and behavior refinements to later feature cycles

---

### style-foundation

- Moved global styling from a single root stylesheet into a dedicated `src/styles/` folder
- Established `main.css` as the stylesheet entry point
- Used `custom.css` for project-specific base styles and shared component classes
- Kept this phase limited to foundation styles to avoid mixing UI section or UX animation work into the architecture phase

---

### entry-point

- Established `main.js` as the application entry point
- Used `#app` in `index.html` as the single DOM mount target
- Rendered `MainLayout` through the application entry point instead of static HTML
- Kept runtime initialization limited to layout rendering during the architecture phase
- Deferred interactive modules to the UX phase to keep branch scope focused

---

### architecture-phase

- Consolidated the architecture phase documentation after completing all v0.2.0 feature branches
- Documented the current project structure in `ARCHITECTURE.md`
- Preserved v0.1.0 foundation decisions as architecture history instead of mixing them with the current state
- Clarified that UI sections, animations, scroll behavior, swiper integration, and deployment are outside the v0.2.0 scope

---

### release/v0.2.0

- confirmed version bump to `0.2.0` follows SemVer conventions
- verified build, lint, and format checks before release
- README and CHANGELOG updated to reflect architecture phase completion

---

### hotfix/navbar-pointer-events

- `#nav-menu` on desktop was taking full width and height of the page — blocking hover and click interactions on sections below
- root cause: missing `lg:h-auto`, `lg:w-auto`, `lg:py-0`, `lg:overflow-visible` — menu was not collapsing to content size on desktop
- fix: added explicit reset classes for lg breakpoint — menu now collapses to its content dimensions
- `LeafDecoration.js` had absolute import paths (`/src/assets/`) — replaced with relative paths (`../../assets/`) for consistency

---

### hero-section

- Introduced `src/pages/` directory to separate page-level concerns from layout and reusable components
- Used `src/pages/main/sections/` for page sections and `src/pages/main/components/` for section-specific components
- `HeroSection.js` uses `export default` — consistent with page-level section pattern
- `DecorativeIcons.js` kept as a separate component to isolate decorative markup from section logic
- `Index.js` acts as the page entry point — renders all main sections in order
- `MainLayout.js` updated to use `export function` for consistency with all other layout and component files
- images kept in `.png` format during development — format conversion deferred to production phase
- animation styles added to `custom.css` under `feature/hero-section` comment marker for traceability
- relative import paths used throughout — no path alias configured in `vite.config.js`

---

### services-section

- `ServicesSection.js` uses `export default` — consistent with page-level section pattern
- `ServiceCard` kept as a private function inside `ServicesSection.js` — not exported, only used internally
- no separate assets needed for this section — icon-based design using Remix Icon library
- section background set to white (`bg-white`) with dark green text — intentional contrast against dark hero section

---

### about-section

- `AboutSection.js` uses `export default` — consistent with page-level section pattern
- `AboutItem` kept as a private function inside `AboutSection.js` — not exported, only used internally
- `reverse` parameter used to alternate layout direction — avoids code duplication
- `index` parameter used for unique BEM class names per item — allows section-specific styling later
- `.title` style added to `custom.css` — shared across multiple sections, not about-specific
- images kept in `.png` format — format conversion deferred to production phase

---

### popular-section

- `PopularSection.js` uses `export default` — consistent with page-level section pattern
- `PopularCard` kept as a private function inside `PopularSection.js` — not exported, only used internally
- card image hover effect added via CSS — image lifts on card hover using `popular__card:hover img`
- `mb-40` used in section header to create space for overlapping card images
- `gap-y-36` used in grid to maintain vertical spacing between cards with overflowing images
- images kept in `.png` format — format conversion deferred to production phase

---

### review-section

- `ReviewSection.js` uses `export default` — consistent with page-level section pattern
- `ReviewCard` kept as a private function inside `ReviewSection.js` — not exported, only used internally
- swiper HTML structure added — `swiper`, `swiper-wrapper`, `swiper-slide`, `swiper-pagination` classes in place
- swiper library installation and initialization deferred to UX phase — UI structure ready, behavior comes later
- swiper pagination styles added to `custom.css` — custom green bullet colors matching project palette
- images kept in `.jpg` format — format conversion deferred to production phase

---

### footer-section

- `src/components/footer/` directory created — footer-specific components separated from shared UI components
- footer sub-components kept small and focused — each component handles one responsibility
- `NewsletterForm.js` placed in `src/pages/main/components/` — page-specific component, not shared
- `SocialIcons.js` reuses `SocialNetworks` component from shared UI layer — avoids duplication
- `FloralDecoration.js` uses `pointer-events-none` — prevents decoration from blocking interactions
- `ScrollUp` button kept hidden via `-bottom-1/2` — show/hide behavior deferred to UX phase
- `Footer.js` updated to integrate all sub-components — layout wrapper pattern consistent with architecture phase
- images kept in `.png` format — format conversion deferred to production phase

---

### ui-phase

- all UI sections follow `export default function` pattern — consistent page-level section convention
- private helper functions (ServiceCard, AboutItem, PopularCard, ReviewCard) kept inside their parent section files — not exported, reduces module surface
- `src/pages/` directory introduced to separate page-level concerns from shared layout and components
- `src/pages/main/components/` used for page-specific components — DecorativeIcons and NewsletterForm not shared globally
- `src/components/footer/` introduced for footer sub-components — footer complexity managed through decomposition
- swiper HTML structure added in ReviewSection — library installation and initialization deferred to UX phase
- ScrollUp button hidden via `-bottom-1/2` — visibility behavior deferred to UX phase
- all images kept in `.png` format during UI phase — format optimization deferred to production phase
- custom.css grows incrementally — each feature branch adds its styles under a named comment block

---

### scroll-header

- `src/modules/` directory introduced — separates interactive behavior from layout and components
- `navbarController.js` handles hamburger toggle and nav link click — closes menu on link click for better UX
- `scrollHeader.js` adds border effect on scroll — visual feedback for sticky header position
- null guards added to both modules — prevents errors if elements are not found in DOM
- modules initialized inside `initApp` after `app.innerHTML = MainLayout()` — ensures DOM is ready before querying elements
- interactive modules intentionally deferred from architecture phase — added now as UX phase begins

---

### active-nav-links

- `scrollActiveLink.js` tracks scroll position against section offsets — updates active class on nav links dynamically
- `current` defaults to `hero` — ensures first nav link is active on page load before any scrolling
- offset of `60px` used in section detection — accounts for fixed header height
- null guard added — prevents errors if sections or nav links are not found in DOM

---

### scroll-up-button

- `scrollUp.js` shows scroll-up button after 250px scroll — threshold chosen for comfortable UX
- button hidden via `-bottom-1/2` by default — shown by swapping to `bottom-4` on scroll
- null guard added — prevents errors if scroll-up element is not found in DOM

---

### scroll-reveal

- `scrollreveal` library used for scroll-based reveal animations — lightweight and easy to configure
- `reset: false` — elements animate once and stay visible, standard for professional sites
- `viewFactor: 0.7` — element 70% visible before animation triggers — ensures element is well in view
- `distance: 80px` — elements travel 80px to their final position — gives a noticeable but smooth effect
- `duration: 2000ms` — smooth and deliberate animation speed
- `delay: 300ms` — slight pause before animation starts
- different reveal directions used per element type — top, left, right for visual variety
- `interval: 100` used for cards — staggers card animations for a cascading effect
- `newsletter__form` class added to NewsletterForm — enables scroll reveal targeting without modifying component logic

---

### swiper-integration

- `swiper` library installed for review section carousel functionality
- `Pagination` and `Autoplay` modules imported from swiper — only needed modules loaded, not full bundle
- `speed: 400` — smooth slide transition speed
- `spaceBetween: 30` — consistent spacing between slides
- `autoplay delay: 3000` — 3 second auto-advance, `disableOnInteraction: false` keeps autoplay after user interaction
- `grabCursor: true` — improves desktop UX with grab cursor on hover
- breakpoints configured — 1 slide on mobile, 2 on tablet, 3 on desktop
- swiper CSS imported — `swiper/css` and `swiper/css/pagination` for pagination styles

---

## 📊 Architectural Insights

- The setup phase is not about UI, but about building a reliable foundation.
- Early architectural decisions directly affect long-term scalability.
- Keeping the initial structure minimal allows the architecture to evolve flexibly.
- Separating layouts, navigation, UI components, styles, and the entry point keeps future work focused.
- Clear boundaries between `layouts/` and `components/` improve maintainability.
- Simple function-based layout components avoid unnecessary abstraction at this stage.
- Proper `.gitignore` configuration is important for repository hygiene and security.
- Separating ESLint and Prettier responsibilities makes code quality easier to maintain.
- Commit-stage automation helps prevent inconsistent code from entering the repository.
- Structured HTML metadata improves SEO, performance, and sharing behavior.

---

## 🧠 Key Takeaways

- ESLint + Prettier = code consistency layer
- Husky + lint-staged = quality gate at commit level
- Git workflow + documentation = predictable development flow
- HTML head standardization improves SEO and performance early
- layout + component separation creates a clearer UI foundation
- dedicated style entry points make future styling easier to manage
- small decisions compound into large architectural impact

---

## 🚀 Engineering Principle

> "Stability is not built at the end — it is enforced at every commit."
