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
