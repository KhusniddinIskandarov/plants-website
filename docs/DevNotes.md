# Developer Notes

## Current ideas

- follow documentation-driven workflow
- keep commits and branches small and focused
- build project in incremental, testable steps

---

## Questions

- what will be final architecture structure?
- which deployment platform will be used later?

---

## Decision Notes

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

---

## Observations

- setup phase is not about UI, but about foundation quality
- early decisions will directly affect scalability
- keeping structure minimal now allows flexible architecture later
- proper `.gitignore` setup is critical for repository hygiene and security
- small configuration decisions can prevent large future issues
- consistent code quality requires both linting and formatting tools
- separating concerns (ESLint vs Prettier) improves maintainability
- early setup of code standards prevents technical debt
