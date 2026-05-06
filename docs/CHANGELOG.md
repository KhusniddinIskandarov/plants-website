# Changelog

All notable changes in this project will be documented in this file.

---

## 0.1.0 - 2026-05-06

### Added

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

### Changed

- improved development workflow structure
- standardized code quality rules across project
- enforced formatting and linting before commits

### Security

- ensured `.env` files are excluded from version control
- improved repository safety via gitignore rules

---

## Notes

This is a foundation release.
No UI or feature logic implemented yet — only architecture, tooling, and setup.
