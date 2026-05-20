# Architecture

Project architecture reference for Plants Website.

---

## Current State — v1.0.0

Production phase complete.

The project is fully built and optimized. Deployment configurations are in place for Vercel, Netlify, and GitHub Pages. Live deployment pending production release.

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
- Interactive behavior modules
- Image optimization pipeline
- Multi-platform deployment configuration

---

## Folder Structure

Current structure:

```text
/scripts
  optimize-images.js
.github/
  /workflows
    deploy.yml
vercel.json
netlify.toml
/src
  /assets
    /images
      cart-1.webp
      cart-2.webp
      cart-3.webp
      cart-4.webp
      floral-1.png
      home.webp
      leaf-1.webp
      leaf-2.webp
      leaf-3.webp
      leaf-4.webp
      plant-1.webp
      plant-2.webp
      review-1.webp
      review-2.webp
      review-3.webp
      review-4.webp
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
  /modules
    navbarController.js
    scrollActiveLink.js
    scrollHeader.js
    scrollReveal.js
    scrollUp.js
    swiper.module.js
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
- initializing all interactive modules after layout render

Current modules initialized in `main.js`:

- `initNavbarController` — hamburger menu and nav link behavior
- `initScrollHeader` — scroll-based header border effect
- `initActiveLink` — scroll-based active navigation link tracking
- `initScrollUp` — scroll-up button visibility
- `initScrollReveal` — scroll reveal animations
- `initSwiperModule` — review section swiper carousel

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

## Module Strategy

Interactive behavior modules are stored in `src/modules/`.

Each module is responsible for one behavior:

- `navbarController.js` — hamburger toggle and nav link click handlers
- `scrollHeader.js` — scroll-based header border effect
- `scrollActiveLink.js` — scroll-based active navigation link tracking
- `scrollUp.js` — scroll-up button show/hide based on scroll position
- `scrollReveal.js` — scroll reveal animations using ScrollReveal library
- `swiper.module.js` — review section swiper carousel using Swiper library

All modules follow the same pattern:

- exported as named `init*` functions
- initialized in `main.js` after `app.innerHTML = MainLayout()`
- include null guards to prevent DOM errors

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
- `hotfix/navbar-styles` — show-menu class and nav-menu scrollbar hiding

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

### Production Phase — v1.0.0

Responsible for:

- Vercel, Netlify, GitHub Pages deployment configuration
- SEO meta tags finalization
- OG tags and preview image optimization
- Lighthouse 95+ performance achievement
- WebP image format conversion
- Accessibility improvements
- README and documentation finalization

### UX Phase — v0.4.0

Responsible for:

- interactive behavior modules
- scroll-based header effect
- active navigation link tracking
- scroll-up button visibility
- scroll reveal animations
- swiper carousel integration
- navbar mobile menu behavior

Not responsible for:

- production deployment
- SEO optimization
- performance audit
- image format optimization

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

### Foundation Phase — v0.1.0

Responsible for:

- Vite build tool setup
- TailwindCSS integration
- ESLint + Prettier configuration
- Husky + lint-staged automation
- HTML head SEO setup
- Documentation foundation

### Initial Setup — v0.0.0

Responsible for:

- repository initialization
- README and LICENSE setup
- documentation skeleton

---

## Architecture History

### v1.0.0 — Production Phase

Production phase finalized deployment, optimization, and documentation.

Production baseline included:

- Vercel, Netlify and GitHub Pages deployment configuration
- WebP image optimization — all PNG/JPG assets converted
- Lighthouse Performance 97, Accessibility 90, Best Practices 100, SEO 92
- SEO meta tags finalized — og:locale, og:site_name, apple-touch-icon added
- Accessibility improvements — aria-label added to icon-only links and buttons
- README and documentation finalized

### v0.4.0 — UX Phase

UX phase established interactive behavior before production work started.

UX baseline included:

- Interactive behavior modules — navbarController, scrollHeader, scrollActiveLink, scrollUp, scrollReveal, swiper
- Navbar mobile menu behavior
- Scroll-based header border effect
- Active navigation link tracking
- Scroll-up button visibility
- Scroll reveal animations
- Swiper carousel integration

### v0.3.0 — UI Phase

UI phase established all visual sections before interactive behavior work started.

UI baseline included:

- All page sections — hero, services, about, popular, review
- Footer sub-components
- Page entry point with Index.js
- Section-specific styles and animations
- All section image assets

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

## Project Status

`v1.0.0` — Production ready.

The project is fully built and optimized. Deployment configurations are in place for Vercel, Netlify, and GitHub Pages.
