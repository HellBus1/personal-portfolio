# Syubban Fakhriya — Personal Portfolio & Engineering Labs

A modern, high-performance personal portfolio and engineering showcase built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Designed with an intentional, non-templated aesthetic featuring a centralized design token system, cohesive dark/light palettes, and folder-level design documentation (`SKILL.md`).

---

## ✨ Features

- **Intentional Design System**: Single source of truth for colors, typography, spacing, and elevations in `src/theme/tokens.ts`.
- **Characterful Typography**: Geometric modern headings powered by **Plus Jakarta Sans**, paired with **Inter** for readable body and documentation copy.
- **Dynamic Dark & Light Modes**: Deep obsidian navy (`#0a0d14`) dark theme with vivid teal (`#2dd4bf`) accents, alongside a warm paper light theme.
- **Projects & Case Studies**: Interactive project showcase with multi-faceted filtering (tech stack, platform, year) and full MDX case studies.
- **Technical Articles Hub**: Filterable articles directory with reading time estimations and category tags.
- **Responsive & Accessible**: Mobile-first glassmorphism navigation, accessible contrast ratios, and keyboard focus states.

---

## 🎨 Design System & Theme Guidelines

All visual styling is governed by the centralized design tokens in [`src/theme/tokens.ts`](./src/theme/tokens.ts) and synchronized with `tailwind.config.js` and `src/index.css`.

### 1. Color Palette

| Role | Dark Theme (`myDark`) | Light Theme (`myLight`) | Description |
|---|---|---|---|
| **Background** (`base-100`) | `#0a0d14` | `#fafaf9` | Canvas backdrop |
| **Card Surface** (`base-200`) | `#101522` | `#ffffff` | Primary card and panel surface |
| **Elevated Surface** (`base-300`) | `#161d2e` | `#f4f4f5` | Nested badges, input containers |
| **Primary Accent** (`primary`) | `#2dd4bf` | `#0d9488` | High-contrast brand teal accent |
| **Secondary Accent** (`secondary`) | `#38bdf8` | `#0284c7` | Sky cyan secondary highlight |
| **High-Contrast Text** | `#f1f5f9` | `#0f172a` | Titles and headings |
| **Body Text** | `#94a3b8` | `#475569` | High-legibility paragraph text |

### 2. Micro-Interaction Standard
- **No mechanical scale transforms**: Cards and interactive elements avoid bouncy `hover:scale-105` transforms in favor of subtle border illumination (`.card-clean` using `border-primary/40` and soft ambient glow).

---

## 📚 Folder-Level Guidelines (`SKILL.md`)

Every major section of the codebase contains a dedicated `SKILL.md` file documenting rules, token usage, and layout conventions for human contributors and AI coding assistants:

| Guideline File | Scope & Purpose |
|---|---|
| [`src/theme/SKILL.md`](./src/theme/SKILL.md) | Single source of truth usage, color modifications, and typography tokens. |
| [`src/components/SKILL.md`](./src/components/SKILL.md) | Shared component standards (`Navbar`, `Footer`, `ThemeSwitcher`) and utility classes. |
| [`src/pages/SKILL.md`](./src/pages/SKILL.md) | Root layout wrapping, spacing rhythm scale, and breadcrumb patterns. |
| [`src/pages/HomePage/SKILL.md`](./src/pages/HomePage/SKILL.md) | Hero section sequence, asymmetrical 2-column layout, and featured previews. |
| [`src/pages/AboutPage/SKILL.md`](./src/pages/AboutPage/SKILL.md) | Section ordering, timeline schema, skills categories, and contact channels. |
| [`src/pages/ProjectsPage/SKILL.md`](./src/pages/ProjectsPage/SKILL.md) | Project card standards, filter bar logic, and data schemas. |
| [`src/pages/ArticlesPage/SKILL.md`](./src/pages/ArticlesPage/SKILL.md) | Article metadata, tag formatting, and layout standards. |

---

## 📁 Static Assets & Data Architecture

To maintain a clean separation of concerns, static media assets are separated from application source code:

```
personal-portfolio/
├── public/
│   └── data/
│       └── assets/
│           ├── projects/     # Static banner images for projects
│           └── articles/     # Static thumbnail images for articles
├── src/
│   ├── data/
│   │   ├── projects.json     # Project data schema & banner paths
│   │   └── articles.json     # Article data schema & banner paths
│   ├── theme/
│   │   ├── tokens.ts         # Centralized design tokens
│   │   ├── iconMapper.tsx    # Shared tech stack icons
│   │   └── index.ts          # Central export
│   └── components/           # Reusable UI components
```

### Adding a New Project
1. Place the banner image in `public/data/assets/projects/your_project_banner.jpg`.
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
     "year": "2025",
     "featured": true,
     "platform": "web"
   }
   ```
3. (Optional) Create an MDX case study in `src/content/projects/your-project-id.mdx`.

### Adding a New Article
1. Place the thumbnail image in `public/data/assets/articles/your_article_thumb.jpg`.
2. Add an entry to `src/data/articles.json`:
   ```json
   {
     "id": "5",
     "title": "Article Title",
     "shortDescription": "Concise overview of key takeaways.",
     "banner": "/data/assets/articles/your_article_thumb.jpg",
     "path": "https://fakrii.medium.com/your-article-link",
     "tags": ["spring boot", "java", "architecture"],
     "category": "Software Engineering",
     "readTime": "8 min read",
     "year": "2025",
     "featured": true,
     "author": "Syubban Fakhriya"
   }
   ```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm / yarn / pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:HellBus1/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Lint and format checks**:
   ```bash
   npm run lint
   npm run format
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Syubban Fakhriya**  
- Website: [mattrmost.com](https://mattrmost.com)
- GitHub: [@HellBus1](https://github.com/HellBus1)
- LinkedIn: [in/syubban](https://linkedin.com/in/syubban)
- Medium: [@fakrii](https://medium.com/@fakrii)
