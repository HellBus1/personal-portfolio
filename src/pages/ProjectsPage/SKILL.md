---
name: projects-page-guideline
description: Standards for project listings, search/filtering state, tech stack badges, and ProjectItem cards.
---

# ProjectsPage Design Guidelines

## 1. Project Cards (`ProjectItem`)
- Every project card uses `.card-clean` (no `hover:scale-105`).
- Click target: Entire card is clickable to open `/projects/:id`.
- Tech Stack Icons: Render using `getStackIcon(stackName, size)` from `@/theme`.
- External Live link: Has `onClick={(e) => e.stopPropagation()}` to prevent triggering the details navigation.

## 2. Filter Bar System
- Grid of 4 responsive inputs: Text Search, Tech Stack Dropdown, Platform Dropdown, Year Dropdown.
- Below inputs: Display exact count of matching projects and a "Reset filters" button when active filters exist.
- Empty State: When 0 matches exist, show a centered search icon, clear explanation, and a "Clear filters" button.

## 3. Data Schema
All projects are stored in `src/data/projects.json` adhering to `Project` interface in `src/model/project.ts`:
- `id`: unique kebab-case slug
- `name`: string
- `shortDescription`: 1-2 punchy sentences
- `banner`: URL string
- `stacks`: array of normalized lowercase stack keys
- `featured`: boolean
- `year`: string (e.g. "2024")
- `platform`: "web" | "android" | "ios"
