# Syubban Fakhriya — Personal Portfolio & Engineering Labs

[![Production Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/HellBus1/personal-portfolio)
[![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.18.3-CA4245.svg?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4.12.10-5B45FF.svg?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![ESLint](https://img.shields.io/badge/ESLint-10.10.0-4B32C3.svg?logo=eslint&logoColor=white)](https://eslint.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22%20(LTS)-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020.svg?logo=cloudflare-pages&logoColor=white)](https://pages.cloudflare.com/)
[![Vulnerabilities](https://img.shields.io/badge/vulnerabilities-0-brightgreen.svg)](https://github.com/HellBus1/personal-portfolio)

A modern, high-performance personal portfolio, engineering showcase, and technical publication hub for **Syubban Fakhriya** ([mattrmost.com](https://mattrmost.com)).

Built with **React 18**, **TypeScript 5.7**, **Tailwind CSS**, and **Vite 8**, featuring a **zero-dependency Static Site Generation (SSG) pre-rendering engine**, a centralized design token system, cohesive obsidian/paper palettes, comprehensive SEO & AI-discovery optimization (`llms.txt`), and folder-level design documentation (`SKILL.md`).

---

## 📑 Table of Contents

- [Features](#-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Zero-Dependency SSG Pre-rendering Engine](#-zero-dependency-ssg-pre-rendering-engine)
- [SEO & AI Search Discoverability (GEO / LLMO)](#-seo--ai-search-discoverability-geo--llmo)
- [Design System & Theme Guidelines](#-design-system--theme-guidelines)
- [Folder-Level Guidelines (`SKILL.md`)](#-folder-level-guidelines-skillmd)
- [Static Assets & Data Architecture](#-static-assets--data-architecture)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment (Cloudflare Pages)](#-deployment-cloudflare-pages)
- [Documentation Index](#-documentation-index)
- [Author](#-author)

---

## ✨ Features

- **Zero-Dependency SSG Pre-rendering**: Builds pure static HTML for all client routes at compile time with zero full-stack framework lock-in.
- **First-Byte Indexing & SEO**: Crawlers and social bots receive fully-rendered semantic HTML, dynamic canonical URLs, and structured JSON-LD data on initial HTTP response.
- **AI-Ready Open Knowledge**: Native support for LLM search engines (ChatGPT, Claude, Perplexity) via `/llms.txt` and `/llms-full.txt`.
- **Intentional Design System**: Single source of truth for colors, typography, spacing, and elevations in `src/theme/tokens.ts`.
- **Characterful Typography**: Geometric modern headings powered by **Plus Jakarta Sans**, paired with **Inter** for legible body copy.
- **Obsidian Dark & Paper Light Palettes**: Deep obsidian navy (`#0a0d14`) canvas with vibrant teal (`#2dd4bf`) accents, accompanied by a clean paper light theme.
- **Projects & Interactive Case Studies**: Filterable project gallery (by stack, platform, year) with in-depth MDX project case studies.
- **Technical Articles Hub**: Curated software engineering articles with reading time estimations, categories, and direct links.
- **Mobile-First & Accessible**: Fluid glassmorphism navigation, WCAG-compliant contrast ratios, and keyboard focus states.

---

## 🏗️ Architecture & Tech Stack

| Component | Technology | Version | Purpose |
|---|---|---|---|
| **Runtime** | Node.js | `>=20.19.0` (LTS 22) | Execution runtime (enforced via `.nvmrc` and `.node-version`) |
| **Framework** | React | `18.3.1` | Component model & declarative UI |
| **Routing** | React Router | `7.18.3` | Client-side routing & SSR static routing |
| **Language** | TypeScript | `5.7.3` | Static type safety & arbitrary module namespace export support |
| **Bundler** | Vite | `8.2.2` | Ultra-fast client compilation and SSR bundle generation |
| **Compiler** | `@vitejs/plugin-react-swc` | `4.3.3` | High-speed Rust-based SWC compilation |
| **Pre-rendering** | Node.js + `ReactDOMServer` | Custom SSG | Zero-dependency static HTML generation (`scripts/prerender.js`) |
| **Styling** | Tailwind CSS + DaisyUI | `3.4.17` / `4.12.10` | Utility-first CSS & component library |
| **Linter** | ESLint (Flat Config) | `10.10.0` | Code quality enforcement via `eslint.config.js` |
| **Hosting** | Cloudflare Pages | Edge Global CDN | Global static asset and pre-rendered HTML distribution |

---

## ⚡ Zero-Dependency SSG Pre-rendering Engine

Rather than relying on heavy meta-frameworks like Next.js, `personal-portfolio` uses a **zero-dependency Static Site Generation (SSG)** engine powered by Vite's native SSR mode.

### How the Pipeline Works (`npm run build`)

```
1. Client Compilation
   tsc -b && vite build
   └── Outputs SPA assets, hashed JavaScript chunks, and CSS into dist/

2. SSR Server Compilation
   vite build --ssr src/entry-server.tsx --outDir dist-ssr
   └── Compiles React tree, React Router StaticHandler, and MDX modules into dist-ssr/entry-server.js

3. SSG Pre-rendering Execution (scripts/prerender.js)
   Node.js imports dist-ssr/entry-server.js and iterates over all static routes:
   - /
   - /projects
   - /projects/ventnote (MDX case study)
   - /projects/ventfit
   - /projects/investcount
   - /projects/spring-boot-exploration
   - /projects/react-tailwind-starter
   - /articles
   - /about
   - /ventnote-privacy-policy
   - /ventnote-oauth-privacy-policy
   - /ventfit-privacy-policy

   └── Renders static HTML via ReactDOMServer.renderToString()
   └── Injects route-specific <title>, <meta description>, and canonical <link>
   └── Injects Open Graph (OG) and Twitter Card tags
   └── Injects tailored JSON-LD schemas (Person, WebSite, SoftwareApplication, CollectionPage)
   └── Saves static HTML files into dist/${route}/index.html
   └── Auto-generates canonical public/sitemap.xml and dist/sitemap.xml
   └── Auto-generates AI-friendly robots.txt
   └── Generates Cloudflare Pages _redirects with 301 normalization rules
   └── Cleans up temporary dist-ssr/ build directory
```

For complete technical documentation, see [`docs/SEO_AND_PRERENDERING_ARCHITECTURE.md`](./docs/SEO_AND_PRERENDERING_ARCHITECTURE.md).

---

## 🔍 SEO & AI Search Discoverability (GEO / LLMO)

This project is optimized for both traditional search engines (Google, Bing) and Generative Engine Optimization (GEO / LLMO):

1. **Per-Route Dynamic Canonicalization**: No more collapsed homepage canonicals. Each route generates its exact canonical URL.
2. **Rich Structured Data (JSON-LD)**:
   - **Homepage**: `Person` (knowledge graph entity with social links & skills) and `WebSite` schema with `SearchAction`.
   - **Project Showcase**: `CollectionPage` schema with itemList elements.
   - **Case Studies / App Pages**: `SoftwareApplication` schema with platform, operating system, and feature ratings.
   - **Articles Directory**: `CollectionPage` and `BlogPosting` schemas.
3. **AI Search Readiness (`llms.txt`)**:
   - [`/llms.txt`](./public/llms.txt): Concise markdown summary for LLM context windows (Perplexity, ChatGPT, Claude).
   - [`/llms-full.txt`](./public/llms-full.txt): Complete structured knowledge base of engineering background, projects, stacks, and articles.
4. **AI-Friendly `robots.txt`**: Explicitly permits search crawlers (`Googlebot`, `Bingbot`) and AI agents (`GPTBot`, `ClaudeBot`, `PerplexityBot`).
5. **URL Normalization**: 301 redirects configured in `public/_redirects` enforce non-trailing slashes and normalize historical path changes.

---

## 🎨 Design System & Theme Guidelines

Visual styling is governed by centralized tokens in [`src/theme/tokens.ts`](./src/theme/tokens.ts) synchronized with `tailwind.config.js` and `src/index.css`.

### 1. Color Palette

| Token / Role | Dark Theme (`myDark`) | Light Theme (`myLight`) | Purpose |
|---|---|---|---|
| **Canvas Background** (`base-100`) | `#0a0d14` | `#fafaf9` | Viewport backdrop |
| **Card Surface** (`base-200`) | `#101522` | `#ffffff` | Primary card panels & modals |
| **Nested Surface** (`base-300`) | `#161d2e` | `#f4f4f5` | Badges, inputs, elevated tiles |
| **Primary Accent** (`primary`) | `#2dd4bf` | `#0d9488` | High-contrast brand teal |
| **Secondary Accent** (`secondary`) | `#38bdf8` | `#0284c7` | Sky cyan secondary highlight |
| **Heading Text** | `#f1f5f9` | `#0f172a` | High-emphasis titles & headers |
| **Body Text** | `#94a3b8` | `#475569` | High-legibility paragraph copy |

### 2. Micro-Interaction Standard

- **No mechanical scale transforms**: Avoid bouncy `hover:scale-105` animations.
- **Ambient borders & glow**: Use `.card-clean` styling with subtle `border-primary/40` illumination and smooth opacity transitions.

---

## 📚 Folder-Level Guidelines (`SKILL.md`)

Every major module contains a dedicated `SKILL.md` file documenting architecture, token usage, and layout conventions:

| Guideline | Scope & Path | Key Topics |
|---|---|---|
| **Design Tokens** | [`src/theme/SKILL.md`](./src/theme/SKILL.md) | Central token dictionary, typography scales, color changes. |
| **Components** | [`src/components/SKILL.md`](./src/components/SKILL.md) | Shared UI standards (`Navbar`, `Footer`, `ThemeSwitcher`). |
| **Pages Overview** | [`src/pages/SKILL.md`](./src/pages/SKILL.md) | Root layout wrapping, spacing rhythm, breadcrumbs. |
| **Home Page** | [`src/pages/HomePage/SKILL.md`](./src/pages/HomePage/SKILL.md) | Hero section layout, preview sections, call-to-actions. |
| **About Page** | [`src/pages/AboutPage/SKILL.md`](./src/pages/AboutPage/SKILL.md) | Career timeline, skill categorization, contact channels. |
| **Projects Page** | [`src/pages/ProjectsPage/SKILL.md`](./src/pages/ProjectsPage/SKILL.md) | Multi-facet filtering, card standards, project schemas. |
| **Articles Page** | [`src/pages/ArticlesPage/SKILL.md`](./src/pages/ArticlesPage/SKILL.md) | Article metadata, tag formatting, reading time badge. |

---

## 📁 Static Assets & Data Architecture

```
personal-portfolio/
├── .node-version             # Node.js 22 LTS specification
├── .nvmrc                    # nvm version specification
├── eslint.config.js          # ESLint 10 flat configuration
├── public/
│   ├── _redirects            # Cloudflare Pages 301 & SPA rewrite rules
│   ├── llms.txt              # AI summary context
│   ├── llms-full.txt         # Complete AI knowledge base
│   ├── robots.txt            # Crawler and AI agent permissions
│   ├── sitemap.xml           # Canonical XML sitemap
│   └── data/
│       └── assets/
│           ├── projects/     # Project banners & screenshots
│           └── articles/     # Article cover thumbnails
├── scripts/
│   └── prerender.js          # Zero-dependency SSG pre-rendering pipeline
├── src/
│   ├── entry-server.tsx      # SSR entrypoint for pre-rendering
│   ├── main.tsx              # Client hydration & render entrypoint
│   ├── content/
│   │   └── projects/         # MDX case studies (e.g. ventnote.mdx)
│   ├── data/
│   │   ├── projects.json     # Project data records
│   │   ├── articles.json     # Article data records
│   │   └── seoData.ts        # Centralized SEO metadata per route
│   ├── theme/
│   │   ├── tokens.ts         # Centralized design tokens
│   │   └── iconMapper.tsx    # Tech stack icon mapper
│   └── pages/                # Route page components
└── docs/                     # Comprehensive architectural documentation
```

### Adding a Project

1. Add your banner image to `public/data/assets/projects/your_project_banner.jpg`.
2. Add an entry to `src/data/projects.json`:
   ```json
   {
     "id": "your-project-id",
     "name": "Project Name",
     "shortDescription": "Concise 1-2 sentence description.",
     "banner": "/data/assets/projects/your_project_banner.jpg",
     "project_link": "https://github.com/...",
     "path": "https://your-live-demo.com",
     "stacks": ["react", "typescript", "tailwindcss"],
     "year": "2026",
     "featured": true,
     "platform": "web"
   }
   ```
3. (Optional) Create an MDX deep-dive in `src/content/projects/your-project-id.mdx`.
4. Add route metadata in `src/data/seoData.ts` and add the route path in `scripts/prerender.js`.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>= 20.19.0` (Recommended: **Node 22 LTS**)
- **npm**: `>= 9`

Activate the specified Node.js version using `nvm`:

```bash
nvm use
```

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:HellBus1/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

---

## 🛠️ Available Scripts

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `vite` | Starts local dev server with Hot Module Replacement (HMR). |
| `npm run build` | `npm run build:client && npm run build:ssr && npm run build:prerender` | Full production build: compiles client, compiles SSR bundle, and pre-renders static HTML. |
| `npm run build:client` | `tsc -b && vite build` | Type-checks code with `tsc -b` and builds client bundle into `dist/`. |
| `npm run build:ssr` | `vite build --ssr src/entry-server.tsx --outDir dist-ssr` | Compiles SSR entrypoint into `dist-ssr/`. |
| `npm run build:prerender`| `node scripts/prerender.js` | Executes SSG pre-rendering, generates static pages, sitemaps, robots.txt, and redirects. |
| `npm run preview` | `vite preview` | Serves the generated `dist/` directory locally. |
| `npm run lint` | `eslint . --report-unused-disable-directives --max-warnings 0` | Runs ESLint 10 flat config analysis across all TypeScript files. |
| `npm run lint:fix` | `eslint --fix 'src/**/*.{ts,tsx}'` | Automatically fixes autofixable ESLint errors. |
| `npm run format` | `prettier --write 'src/**/*.{ts,tsx,css}'` | Formats source files according to `.prettierrc.json`. |

---

## ☁️ Deployment (Cloudflare Pages)

The project is configured for deployment on **Cloudflare Pages**:

- **Framework Preset**: None / Vite
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node.js Version**: Automatically detected as **Node 22** via `.nvmrc` and `.node-version`

Static routing, pre-rendered HTML fallbacks, and 301 redirect rules are handled by `public/_redirects` (and automatically emitted into `dist/_redirects`).

---

## 📖 Documentation Index

For deep-dive architectural references and playbook guides, consult:

- 📄 [`docs/SEO_AND_PRERENDERING_ARCHITECTURE.md`](./docs/SEO_AND_PRERENDERING_ARCHITECTURE.md) — Comprehensive design document of the zero-dependency SSG pre-rendering pipeline, canonicalization strategy, and JSON-LD schema design.
- 📄 [`docs/SEO_FIXING_PROMPT_PLAYBOOK.md`](./docs/SEO_FIXING_PROMPT_PLAYBOOK.md) — Universal framework and prompt playbook for AI-assisted SEO audits and automated repair workflows.
- 📄 [`linkedin-posts/how-to-reduce-frontend-ai-slop.md`](./linkedin-posts/how-to-reduce-frontend-ai-slop.md) — Architectural essay on reducing generic frontend AI patterns with intentional design systems.

---

## 👨‍💻 Author

**Syubban Fakhriya**  
- **Website**: [mattrmost.com](https://mattrmost.com)  
- **GitHub**: [@HellBus1](https://github.com/HellBus1)  
- **LinkedIn**: [in/syubban](https://linkedin.com/in/syubban)  
- **Medium**: [@fakrii](https://medium.com/@fakrii)  

---

*Licensed under the MIT License.*
