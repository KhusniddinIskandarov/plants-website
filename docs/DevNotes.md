# Developer Notes

## Current Ideas

- follow documentation-driven workflow
- keep commits and branches small and focused
- build project in incremental, testable steps
- prefer clarity over premature optimization

---

## Open Questions

- ~~what will be final architecture structure?~~ → resolving in v0.2.0
- which deployment platform will be used later?
- how will scaling strategy evolve after v0.1.0?

---

## Decision Notes

### main-layout

- separated layout from components — `layouts/` handles structure, `components/` handles UI
- `MainLayout.js` acts as a pure wrapper — renders Header, main content area, and Footer
- `Header.js` and `Footer.js` kept as simple functions returning HTML strings
- used named exports for Header and Footer, consistent with component pattern
- `main` content area given `id="main"` for scroll and accessibility targeting later

### setup-vite-tailwind

- Chose Vite for fast development and modern tooling
- Integrated TailwindCSS for utility-first styling approach
- Removed default scaffold to keep project clean and controlled
- Introduced minimal folder structure to avoid early over-engineering

### gitignore-setup

- Introduced comprehensive `.gitignore` rules to prevent unnecessary files from being tracked
- Ensured sensitive environment files are excluded from version control
- Standardized ignore patterns for consistency across environments

### code-quality-setup

- Introduced ESLint as the primary linting tool for code quality enforcement
- Configured ESLint using modern flat config approach
- Added Prettier to handle consistent code formatting
- Integrated Prettier with ESLint to avoid rule conflicts
- Ensured support for multiple file types (JS, JSON, CSS, Markdown)
- Added `.editorconfig` to standardize editor settings across team
- Added `.env.example` as a safe template for environment variables

### git-hooks-setup

- Introduced Husky to manage Git hooks in the project
- Used lint-staged to run checks only on staged files for better performance
- Configured pre-commit hook to automatically run ESLint and Prettier
- Enforced code quality rules at commit stage
- Reduced risk of inconsistent or broken code entering repository

### html-head-setup

- Established a complete HTML `<head>` structure for SEO and performance
- Added metadata for search engines and social media platforms
- Configured Open Graph and Twitter cards for link previews
- Implemented resource optimization using preconnect
- Integrated fonts and icon libraries for UI consistency
- Standardized head structure for scalability and maintainability

---

### ui-components

- Introduced reusable UI components for shared interface elements
- Separated common buttons, social links, and scroll control into dedicated components
- Kept components simple and markup-focused during the architecture phase
- Deferred advanced styling and behavior refinements to later feature cycles

---

## Observations

- layout separation (`layouts/` vs `components/`) enforces clear architectural boundaries early
- keeping layout components as simple functions avoids unnecessary abstraction
- setup phase is not about UI, but about foundation quality
- early decisions will directly affect scalability
- keeping structure minimal now allows flexible architecture later
- proper `.gitignore` setup is critical for repository hygiene and security
- small configuration decisions can prevent large future issues
- consistent code quality requires both linting and formatting tools
- separating concerns (ESLint vs Prettier) improves maintainability
- early setup of code standards prevents technical debt
- automation of code checks significantly improves consistency
- enforcing rules at commit stage prevents bad code from entering the repository
- combining linting and hooks creates a reliable development workflow
- properly structured HTML head improves SEO, performance, and sharing experience

---

## Key Takeaways

- ESLint + Prettier = code consistency layer
- Husky + lint-staged = quality gate at commit level
- Git workflow + documentation = predictable development flow
- HTML head standardization improves SEO and performance early
- small decisions compound into large architectural impact
- `layouts/` vs `components/` separation = clear structural boundary from the start

---

## Engineering Principle

> "Stability is not built at the end — it is enforced at every commit."
