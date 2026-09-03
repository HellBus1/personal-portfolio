---
name: about-page-guideline
description: Section hierarchy, timeline data model, skills categories, and contact channel standards for AboutPage.
---

# AboutPage Design Guidelines

## 1. Section Sequence & Max Width
The About page uses a focused max container width (`max-w-4xl`) with `space-y-16 md:space-y-20`:
1. **OverviewSection** — Bio, core engineering focus, resume download, avatar.
2. **SkillsSection** — Categorized tech stacks (Backend, Frontend, Mobile, DevOps).
3. **DrivesMeSection** — 3 Engineering principles in a 3-column card layout.
4. **TimelineSection** — Career milestones with vertical timeline line and glowing node.
5. **ContactSection** — Direct contact email form + fast social channels (LinkedIn, Instagram).

## 2. Text Conciseness Rules
- Keep copy free of generic filler phrases ("passionate developer eager to learn").
- State concrete technologies, real company context (PT. SMBC Indonesia), and measurable impact.
- Avoid duplicate paragraphs or artificial spacing tags (`<br />`).

## 3. Contact Form & Action
- Form triggers user's default email client via formatted `mailto:` with prefilled subject and message body.
- Always include direct links to LinkedIn and Instagram with clear response time expectations (e.g. "within 24 hours").
