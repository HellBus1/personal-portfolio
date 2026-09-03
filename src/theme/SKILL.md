---
name: portfolio-theme-system
description: Single source of truth for portfolio tokens, color palette, typography hierarchy, spacing scale, and DaisyUI theme synchronization.
---

# Design Tokens & Theme Guideline

## 1. Single Source of Truth
All style decisions originate from [`src/theme/tokens.ts`](./tokens.ts). Never define hardcoded arbitrary hex codes, random paddings, or one-off transition curves in components.

```typescript
import { tokens, getStackIcon } from '@/theme'
```

## 2. Color Palette & Hierarchy

| Role | Dark Theme (`myDark`) | Light Theme (`myLight`) | Purpose |
|------|------------------------|--------------------------|---------|
| **Background** (`base-100`) | `#0a0d14` (Deep obsidian) | `#fafaf9` (Warm stone) | Canvas backdrop |
| **Card Surface** (`base-200`) | `#101522` (Slate navy) | `#ffffff` (Pure white) | Card & panel containers |
| **Elevated** (`base-300`) | `#161d2e` (Elevated slate) | `#f4f4f5` (Muted nested) | Badges, inputs, nested blocks |
| **Primary Accent** (`primary`) | `#2dd4bf` (Vibrant teal) | `#0d9488` (Rich teal) | Brand accent, active states, key CTAs |
| **Secondary Accent** (`secondary`) | `#38bdf8` (Sky cyan) | `#0284c7` (Deep sky) | Secondary highlights |
| **High-Contrast Text** (`neutral-content`) | `#f1f5f9` (Crisp white) | `#0f172a` (Deep slate) | Headings & high-emphasis titles |
| **Body Text** (`base-content`) | `#94a3b8` (Slate text) | `#475569` (Charcoal text) | Readable paragraph copy |
| **Hairline Border** | `rgba(255, 255, 255, 0.08)` | `rgba(0, 0, 0, 0.08)` | Subtle card borders & dividers |

## 3. Typography Rules
- **Display Font**: `"Plus Jakarta Sans", "Inter", sans-serif` — applied via `.font-display` class for modern, bold headlines and section titles.
- **Body Font**: `"Inter", system-ui, sans-serif` — default for all paragraphs, metadata, buttons, and navigation.
- **Tracking**: Headings use `tracking-tight` (-0.025em) to feel sleek, architectural, and intentional.

## 4. Anti-Slop Golden Rules
- ❌ **DON'T** use `hover:scale-105` or aggressive bouncing transforms on cards or buttons.
- ✅ **DO** use subtle border illumination (`border-primary/40`), gentle background shifts, or smooth micro-glows (`shadow-lg shadow-primary/5`).
- ❌ **DON'T** center everything symmetrically on desktop.
- ✅ **DO** use deliberate left-aligned editorial layouts on desktop, responsive centering on mobile.
- ❌ **DON'T** bloat sections with generic marketing filler words. Keep descriptions punchy, specific, and grounded in real engineering facts.

## 5. How to Add a New Theme or Color
1. Update `tokens.colors.dark` or `tokens.colors.light` in [`src/theme/tokens.ts`](./tokens.ts).
2. Update [`tailwind.config.js`](../../tailwind.config.js) DaisyUI theme section.
3. Verify contrast with both dark and light modes.
