# Architecture

Project architecture reference for Plant Website.

---

## Current State — v0.1.0

Foundation phase complete. No UI architecture implemented yet.

Setup baseline includes:

- Vite (build tool)
- TailwindCSS (styling system)
- ESLint + Prettier (code quality)
- Husky + lint-staged (git automation)
- HTML head (SEO + performance)

---

## Planned Architecture

### 1. Folder Structure

Expected structure:

- /src
  - assets/
  - style.css
  - main.js

---

### 2. Component Strategy

Planned approach:

- small, composable components
- layout vs UI component separation
- no over-engineering at early stage

---

### 3. Layout System

- global base layout
- page-specific layouts if needed
- consistent header/footer pattern

---

### 4. Naming Conventions

| Type                | Convention |
| ------------------- | ---------- |
| Variables/Functions | camelCase  |
| Components          | PascalCase |
| Files/Folders       | kebab-case |

---

## Philosophy

> "Build simple first, structure later based on real needs."

- incremental evolution
- feature-driven growth
- simplicity before scalability

---

## Next Phase

`docs/architecture-phase` — architecture definition and implementation.
