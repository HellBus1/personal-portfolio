# SEO & Pre-rendering Architecture Documentation

> **Standard & Main Architectural Guide** for Syubban Fakhriya's Personal Portfolio & Engineering Labs ([mattrmost.com](https://mattrmost.com)).  
> Integrates workflows and standards from repository agents: [`seo-audit`](../.agents/skills/seo-audit/SKILL.md), [`firecrawl-seo-audit`](../.agents/skills/firecrawl-seo-audit/SKILL.md), [`ai-seo`](../.agents/skills/ai-seo/SKILL.md), and [`programmatic-seo`](../.agents/skills/programmatic-seo/SKILL.md).

---

## 1. Overview & Problem Statement

Prior to the v1.4.0 overhaul, `personal-portfolio` was built as a traditional Single Page Application (SPA) using React 18, Vite, and React Router. When search engine crawlers (Googlebot, Bingbot), AI agents (ChatGPT, Claude, Perplexity), or social media scrapers requested a page, the server returned an empty `<div id="root"></div>` and relied 100% on client-side JavaScript execution.

### The Ranking Bottlenecks:
1. **Fatal Hardcoded Canonical Tag**: `index.html` hardcoded `<link rel="canonical" href="https://mattrmost.com/" />`. Because Cloudflare Pages served `index.html` for all routes, Googlebot treated `/projects`, `/about`, `/articles`, and `/projects/ventnote` as duplicate copies of `/`, collapsing rankings and de-indexing deep content.
2. **First-Byte Indexing Latency & Empty HTML**: Crawlers received zero text on the initial HTTP response. While Googlebot can execute JavaScript, it queues rendering in the Web Rendering Service (WRS), causing latency and indexing thin states.
3. **Social Sharing Failure**: WhatsApp, LinkedIn, and Twitter crawlers do not execute JavaScript, resulting in generic preview cards with no project-specific titles, descriptions, or thumbnails.
4. **Sitemap & Slug Discrepancies**: The sitemap advertised dead paths (`/transparency`) and mismatched slugs (`/projects/spring-boot-exploration` vs `springboot-exploration`), causing crawl errors and client redirect bounces.

---

## 2. The Solution: Zero-Dependency Vite SSG Pre-rendering Engine

Rather than migrating to a heavy full-stack framework (like Next.js) that would complicate deployment and increase bundle sizes, `personal-portfolio` implements a **custom, zero-dependency Static Site Generation (SSG) pre-rendering pipeline** utilizing Vite's native SSR mode.

### Architecture Flow

```
1. Client Bundle Build
   vite build ───► Bundles client assets, CSS, and JS chunks into dist/

2. SSR Server Build
   vite build --ssr src/entry-server.tsx --outDir dist-ssr
   ───► Compiles React Router, MDX modules, and pages into dist-ssr/entry-server.js

3. SSG Pre-rendering Pipeline (scripts/prerender.js)
   Node.js ───► Imports dist-ssr/entry-server.js
           ───► Iterates over all 12 routes:
                - /
                - /projects
                - /projects/ventnote (eager MDX narrative)
                - /projects/ventfit
                - /projects/investcount
                - /projects/spring-boot-exploration
                - /projects/react-tailwind-starter
                - /articles
                - /about
                - /ventnote-privacy-policy
                - /ventnote-oauth-privacy-policy
                - /ventfit-privacy-policy
           ───► Renders static HTML with ReactDOMServer.renderToString()
           ───► Injects unique <title>, <meta description>, canonical URL, and OG tags
           ───► Injects route-specific JSON-LD schemas (Person, WebSite, SoftwareApplication, etc.)
           ───► Generates static index.html in dist/${route}/
           ───► Generates canonical public/sitemap.xml and dist/sitemap.xml
           ───► Generates AI-friendly robots.txt (allowing Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot)
           ───► Generates public/_redirects and dist/_redirects (with 301 rules and SPA fallback)
           ───► Cleans up temporary dist-ssr/
```

---

## 3. Key Technical Components

### 3.1 Server-Side Entry (`src/entry-server.tsx`)
Provides server-side rendering using `createMemoryRouter` from `react-router-dom`:
```tsx
import ReactDOMServer from 'react-dom/server'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

export function render(url: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
    initialIndex: 0
  })

  const html = ReactDOMServer.renderToString(<RouterProvider router={router} />)
  return { html }
}
```

### 3.2 Progressive Client Hydration (`src/main.tsx`)
When a visitor opens any page, the browser receives full static HTML immediately. React detects existing DOM nodes and performs progressive hydration instead of destroying and re-rendering:
```tsx
const rootElement = document.getElementById('root')!

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>)
} else {
  ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>)
}
```

### 3.3 Synchronous MDX Module Loading (`src/pages/ProjectDetailPage/ProjectDetailPage.tsx`)
Case studies and project narratives are imported synchronously via Vite's `import.meta.glob`:
```tsx
const projectModules = import.meta.glob<{ default: React.ComponentType }>(
  '../../content/projects/*.mdx',
  { eager: true }
)
```
This ensures the full article body (tables, headings, quotes) is synchronously available during `renderToString()` without asynchronous delays or empty loading states.

### 3.4 Dynamic Runtime Head Management (`src/hooks/useSEO.ts`)
Manages `<title>`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph, Twitter tags, and dynamic JSON-LD injection on client-side route transitions. Automatically invoked across all views via `RootLayout`.

### 3.5 Centralized SEO & Structured Data Registry (`src/data/seoData.ts`)
Houses the metadata definitions and JSON-LD schema objects for every route in the application, including:
- `Person` & `WebSite` schemas (authoritative personal branding)
- `SoftwareApplication` / `WebApplication` schemas (app store ratings, pricing, download URLs)
- `SoftwareSourceCode` schemas (GitHub repository references)
- `CollectionPage` & `ProfilePage` schemas
- `BreadcrumbList` schemas (navigational breadcrumbs for SERP display)

---

## 4. AI Search & Modern Discovery (GEO / AEO)

To ensure visibility in modern AI engines (Google AI Overviews, Perplexity, ChatGPT, Claude), the repository implements:

1. **`llms.txt`**: Standardized concise plain-text file at the domain root ([`public/llms.txt`](../public/llms.txt)) detailing author bio, core skills, project index, and external resources.
2. **`llms-full.txt`**: Complete markdown knowledge bundle ([`public/llms-full.txt`](../public/llms-full.txt)) containing comprehensive project narratives, architecture overviews, and article summaries.
3. **AI Crawler Permissions in `robots.txt`**: Explicitly permits `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `Applebot-Extended`.

---

## 5. Standard Operating Procedures (SOP)

### Adding a New Project:
1. Place project banner in `public/data/assets/projects/<project_id>_banner.jpg`.
2. Add project metadata to `src/data/projects.json` using kebab-case `id` (e.g. `my-awesome-tool`).
3. (Optional) Create the case study narrative in `src/content/projects/<project_id>.mdx`.
4. Add the route SEO configuration to `src/data/seoData.ts` and `routes` array in `scripts/prerender.js`.
5. Run `npm run build`. The project will automatically be pre-rendered to `dist/projects/<project_id>/index.html` with full metadata and inclusion in `sitemap.xml`.

### Adding a New Article:
1. Place thumbnail in `public/data/assets/articles/<article_thumb>.jpg`.
2. Add the publication metadata to `src/data/articles.json`.
3. If publishing on-site, add route configuration to `seoData.ts` and `scripts/prerender.js`.
4. Run `npm run build`.

---

## 6. Cloudflare Pages Deployment & Verification

### Build Configuration:
- **Build Command**: `npm run build`  
  *(Chains `build:client` $\to$ `build:ssr` $\to$ `build:prerender`)*
- **Output Directory**: `dist`
- **Redirects**: Handled via `dist/_redirects` (auto-generated by pre-render script).

### Verification Commands:
```bash
# 1. Typecheck and build full static bundle
npm run build

# 2. Run linter
npm run lint

# 3. Test local production server
npm run preview
```
