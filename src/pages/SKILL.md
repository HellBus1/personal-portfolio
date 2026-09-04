---
name: pages-layout-guideline
description: Page architecture, layout containers, rhythm spacing, and breadcrumb patterns across all routes.
---

# Page-Level Layout Guidelines

## 1. Container & Page Shell
All routed pages must wrap their content inside `<RootLayout>`:
```tsx
import RootLayout from '@/components/RootLayout/RootLayout'

const MyPage = () => {
  return (
    <RootLayout>
      <div className='w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 min-h-[75vh]'>
        {/* Page Content */}
      </div>
    </RootLayout>
  )
}
```

## 2. Spacing Rhythm Scale
- **Top Padding**: `pt-28 md:pt-36` on pages with fixed navbar.
- **Bottom Padding**: `pb-16 md:pb-24` before reaching footer.
- **Section Dividers**: `border-t border-base-content/10 py-16 md:py-24` between major sections.
- **Gap between elements**: Use `gap-4` to `gap-6` for grids and `space-y-3.5` for form controls.

## 3. Breadcrumb Pattern
Pages other than `/` must display a clean, muted breadcrumb navigation below the top padding:
```tsx
<nav className='flex items-center gap-2 text-xs text-base-content/60 mb-8'>
  <Link to='/' className='hover:text-primary transition-colors'>Home</Link>
  <span>/</span>
  <span className='text-neutral-content font-semibold'>Current Page</span>
</nav>
```

## 4. Typography Hierarchy
- Page Titles: `text-3xl sm:text-4xl md:text-5xl font-bold font-display text-neutral-content tracking-tight`
- Eyebrow category: `text-xs font-semibold tracking-wider text-primary uppercase mb-2 block`
- Intro paragraph: `text-sm sm:text-base text-base-content/80 max-w-2xl leading-relaxed`
