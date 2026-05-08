# Architecture

Project architecture reference for Plant Website.

---

## Current State — v0.2.0

Architecture phase complete.

The project now has a working application skeleton with layout components, navigation components, reusable UI components, a dedicated styling layer, and a JavaScript entry point that renders the main layout into the HTML mount point.

Architecture baseline includes:

- Vite application entry
- TailwindCSS styling foundation
- Main layout structure
- Header and footer layout wrappers
- Navigation component structure
- Reusable UI component layer
- Dedicated styles directory
- Single HTML mount point

---

## Folder Structure

Current structure:

```text
/src
  /assets
    /images
      leaf-1.png
      leaf-2.png
  /components
    /navigation
      LeafDecoration.js
      Navbar.js
    /ui
      Button.js
      ScrollUp.js
      SocialNetworks.js
  /layouts
    Footer.js
    Header.js
    MainLayout.js
  /styles
    custom.css
    main.css
  main.js
```

---

## Application Entry

`index.html` provides a single mount point:

```html
<div id="app"></div>
```

`src/main.js` is responsible for:

- importing the main stylesheet
- waiting for `DOMContentLoaded`
- selecting the `#app` mount point
- rendering `MainLayout` into the page

Interactive modules are intentionally deferred to the UX phase.

---

## Layout System

The layout layer is stored in `src/layouts/`.

Current layout components:

- `MainLayout.js` — main application wrapper
- `Header.js` — header wrapper
- `Footer.js` — footer wrapper

The layout system keeps page structure separate from reusable UI components.

---

## Component Strategy

Components are grouped by responsibility:

- `src/components/navigation/` — navigation-specific components
- `src/components/ui/` — shared reusable UI components

Current reusable UI components:

- `Button.js`
- `SocialNetworks.js`
- `ScrollUp.js`

The architecture favors small markup-focused components during the early phases.

---

## Styling Strategy

Styles are stored in `src/styles/`.

Current style files:

- `main.css` — Tailwind entry point and style imports
- `custom.css` — base styles and shared component classes

The old root-level `src/style.css` file was removed to keep styling organized under a dedicated styles directory.

Current styling scope is limited to foundation styles only. Section-specific styles, animation styles, and UX behavior styles are deferred to later phases.

---

## Naming Conventions

| Type                | Convention |
| ------------------- | ---------- |
| Variables/Functions | camelCase  |
| Components          | PascalCase |
| Files/Folders       | kebab-case |

---

## Phase Boundaries

### Architecture Phase — v0.2.0

Responsible for:

- project skeleton
- layout structure
- navigation structure
- reusable UI component structure
- stylesheet structure
- application entry point

Not responsible for:

- full page sections
- advanced animations
- scroll-based UX behavior
- swiper integration
- production deployment

---

## Architecture History

### v0.1.0 — Foundation Phase

Foundation phase established the technical baseline before UI architecture work started.

Setup baseline included:

- Vite build tool
- TailwindCSS styling system
- ESLint + Prettier code quality setup
- Husky + lint-staged git automation
- HTML head setup for SEO and performance
- Documentation workflow baseline

---

## Philosophy

> "Build simple first, structure later based on real needs."

- incremental evolution
- feature-driven growth
- simplicity before scalability
- structure should support the next phase without overbuilding it

---

## Next Phase

`v0.3.0 — UI Phase`

Next focus:

- hero section
- services section
- about section
- popular plants section
- review section
- footer section
