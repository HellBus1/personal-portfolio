---
name: homepage-design-guideline
description: Layout rules, hero architecture, editorial display typography, and featured section logic for HomePage.
---

# HomePage Design Guidelines

## 1. Section Sequence
1. **OverviewSection (Hero)** — Identity, headline in Instrument Serif, value proposition, metric highlights, action buttons, circular avatar.
2. **ProjectSection** — Top 3 featured projects rendered with shared `ProjectItem`.
3. **ArticleSection** — Top 3 featured articles rendered with shared `ArticleItem`.

## 2. Hero Layout Rules
- **Desktop (lg+)**: 2-column asymmetrical layout. Left column holds the text narrative (left-aligned) and actions; right column holds the circular avatar.
- **Mobile (<lg)**: Vertically stacked and centered for natural thumb flow.
- **Headline**: Must use `font-display` (`Plus Jakarta Sans`) with bold tracking and `text-primary` highlight.

## 3. Metric Highlights
- Present numbers cleanly with icons (`IoCodeSlashOutline`, `IoDocumentTextOutline`, `IoBriefcaseOutline`) inside `.bg-base-200` containers with `border border-base-content/10`.
- Do not add cluttered card bodies; keep it strictly to metric + label.

## 4. CTAs
- **Primary CTA**: "Explore Projects" (`btn-primary-custom` that scrolls to `#projects-section`).
- **Secondary CTA**: "Get in Touch" (`btn-secondary-custom` with email link).
- **Socials**: Inline icons with subtle hover transitions.
