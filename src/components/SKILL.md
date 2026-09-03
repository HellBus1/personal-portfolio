---
name: shared-components-guideline
description: Standards and conventions for reusable UI components (Navbar, Footer, ThemeSwitcher, RootLayout).
---

# Shared Components Guideline

## 1. Component Architecture
Each shared component lives in its own folder under `src/components/ComponentName/` with:
- `ComponentName.tsx`
- Explicit TypeScript interfaces for all props
- Zero hardcoded colors; use Tailwind semantic classes (`bg-base-200`, `text-primary`, `border-base-content/10`)

## 2. Standard CSS Utility Classes
- `.nav-glass`: Glassmorphism header with `backdrop-blur-md`, `bg-base-100/80`, and subtle bottom border.
- `.card-clean`: Standard card surface with responsive borders and subtle hover illumination.
- `.btn-primary-custom`: Primary button with `bg-primary`, `text-primary-content`, subtle shadow.
- `.btn-secondary-custom`: Secondary outlined button with border and clean hover states.
- `.tag-pill`: Interactive rounded pill for technology badges.

## 3. Navbar Rules
- Desktop navigation must display clear text labels with high contrast.
- Keep the branding link clean (`Syubban` + primary dot).
- The theme toggle and mobile menu buttons must include `aria-label` and title attributes for accessibility.

## 4. Footer Rules
- Keep footer single-row on desktop to avoid text bloat.
- Display author identity, direct social links, copyright year, semantic version badge, and a smooth back-to-top button.
