---
name: articles-page-guideline
description: Standards for article showcase, tags, category filtering, reading metadata, and ArticleItem cards.
---

# ArticlesPage Design Guidelines

## 1. Article Cards (`ArticleItem`)
- Card structure: Horizontal on desktop/tablet, stacked on small screens.
- Thumbnail: Fixed aspect ratio (`w-full sm:w-44 h-36 sm:h-32`), rounded corners with subtle border.
- Category Badge: Highlighted with `bg-primary/10 text-primary border border-primary/20`.
- Tags: Secondary subtle tags with `#` prefix.
- Metadata: Author name, estimated read time with `IoTimeOutline` icon.

## 2. Filters
- 3 inputs: Full-text Search, Category Dropdown, Tag Dropdown.
- Fast, synchronous memoized filtering.

## 3. Data Schema
All articles are in `src/data/articles.json` following `Article` interface in `src/model/article.ts`:
- `id`: string
- `title`: string
- `shortDescription`: concise summary
- `banner`: URL string
- `path`: Medium/external canonical URL
- `category`: string (e.g. "Software Engineering")
- `tags`: string[]
- `readTime`: e.g. "10 min read"
- `year`: string
- `featured`: boolean
