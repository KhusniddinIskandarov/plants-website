# Architecture

Project architecture reference for Plants Website.

---

## Current State — v0.3.0

UI phase complete.

The project now has a fully rendered single-page layout with all visual sections, footer sub-components, a page entry point, and section-specific styles. All sections are rendered through the main layout into the HTML mount point.

Architecture baseline includes:

- Vite application entry
- TailwindCSS styling foundation
- Main layout structure
- Header and footer layout wrappers
- Navigation component structure
- Reusable UI component layer
- Page entry point with all sections
- Footer sub-component layer
- Section-specific styles and animations
- Dedicated styles directory

---

## Folder Structure

Current structure:

```text
/src
  /assets
    /images
      cart-1.png
      cart-2.png
      cart-3.png
      cart-4.png
      floral-1.png
      home.png
      leaf-1.png
      leaf-2.png
      leaf-3.png
      leaf-4.png
      plant-1.png
      plant-2.png
      review-1.png
      review-2.png
      review-3.png
      review-4.png
  /components
    /footer
      ContactInfo.js
      Copyright.js
      FloralDecoration.js
      FooterLinks.js
      FooterLogo.js
      SocialIcons.js
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
  /pages
    /main
      /components
        DecorativeIcons.js
        NewsletterForm.js
      /sections
        AboutSection.js
        HeroSection.js
        PopularSection.js
        ReviewSection.js
        ServicesSection.js
      Index.js
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
- `Footer.js` — footer wrapper with all sub-components

The layout system keeps page structure separate from reusable UI components.

---

## Page Structure

Page-level content is stored in `src/pages/`.

Current page entry point:

- `src/pages/main/Index.js` — renders all main sections in order

Current sections:

- `HeroSection.js` — hero section with decorative icons
- `ServicesSection.js` — services section with service cards
- `AboutSection.js` — about section with about items
- `PopularSection.js` — popular plants section with plant cards
- `ReviewSection.js` — customer review section with swiper structure

Page-specific components:

- `DecorativeIcons.js` — animated decorative icons for hero section
- `NewsletterForm.js` — newsletter subscription form for footer

---

## Component Strategy

Components are grouped by responsibility:

- `src/components/footer/` — footer-specific sub-components
- `src/components/navigation/` — navigation-specific components
- `src/components/ui/` — shared reusable UI components

Current footer sub-components:

- `FooterLogo.js`
- `FooterLinks.js`
- `ContactInfo.js`
- `Copyright.js`
- `FloralDecoration.js`
- `SocialIcons.js`

Current reusable UI components:

- `Button.js`
- `SocialNetworks.js`
- `ScrollUp.js`

The architecture favors small markup-focused components with clear separation by responsibility.

---

## Styling Strategy

Styles are stored in `src/styles/`.

Current style files:

- `main.css` — Tailwind entry point and style imports
- `custom.css` — base styles, component styles, and section-specific styles

Each feature branch adds its styles under a clearly marked comment block in `custom.css` for traceability.

Current style sections in `custom.css`:

- `feature/style-foundation` — base HTML, body, section, heading styles
- `feature/hero-section` — hero animation styles
- `feature/about-section` — shared title style
- `feature/popular-section` — popular card hover style
- `feature/review-section` — swiper pagination styles

---

## Naming Conventions

| Type                | Convention |
| ------------------- | ---------- |
| Variables/Functions | camelCase  |
| Components          | PascalCase |
| Files/Folders       | kebab-case |

---

## Export Conventions

| Type              | Export style              |
| ----------------- | ------------------------- |
| Page sections     | `export default function` |
| Layout components | `export function`         |
| UI components     | `export function`         |
| Footer components | `export function`         |
| Page entry point  | `export function`         |

---

## Phase Boundaries

### UI Phase — v0.3.0

Responsible for:

- all page sections
- page entry point
- footer sub-components
- section-specific styles and animations
- page-specific components

Not responsible for:

- scroll-based UX behavior
- active navigation links
- scroll reveal animations
- swiper library integration
- production deployment

### Architecture Phase — v0.2.0

Responsible for:

- project skeleton
- layout structure
- navigation structure
- reusable UI component structure
- stylesheet structure
- application entry point

---

## Architecture History

### v0.2.0 — Architecture Phase

Architecture phase established the project skeleton before UI section work started.

Architecture baseline included:

- Main layout structure with Header and Footer wrappers
- Navigation component structure with Navbar and LeafDecoration
- Reusable UI components — Button, SocialNetworks, ScrollUp
- Dedicated styles directory with main.css and custom.css
- Application entry point rendering MainLayout into #app

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

`v0.4.0 — UX Phase`

Next focus:

- scroll-based header behavior
- active navigation link tracking
- scroll-up button visibility
- scroll reveal animations
- swiper library integration
