# astroBlog

A dark-first Astro blog with markdown content, generated tag pages, RSS, sitemap support, and a minimal UI built with Tailwind CSS utilities.

## Requirements

- Node.js 20 LTS or newer
- pnpm 10

If you use Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Quick start

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:4321`.

## Scripts

```bash
pnpm dev          # start local dev server
pnpm astro check  # Astro + TypeScript diagnostics
pnpm build        # production build to dist/
pnpm preview      # preview the production build
```

## Project layout

```text
src/
  components/         UI components (cards, nav, footer, theme toggle)
  content/
    config.ts         Content collection schema
    posts/            Markdown posts
  layouts/            Base and post layouts
  lib/
    content.ts        Post/tag query helpers
    date.ts           Shared date formatting
    site.ts           Site metadata and nav/social config
    tagBadgeStyles.ts Neon border palette for tag badges
  pages/              Routes: home, posts, tags, rss.xml
  styles/global.css   Tailwind imports + base theme defaults
```

## Writing posts

Add a markdown file under `src/content/posts/`:

```md
---
title: "My Post"
pubDate: 2026-03-09
description: "Short summary used in cards and metadata"
author: "Your Name"
image:
  url: "https://example.com/cover.webp"
  alt: "Cover image description"
tags: ["astro", "typescript"]
---

Post content...
```

Notes:

- Post URLs come from the file slug, so you do not need a manual `link` field.
- Tags are normalized to lowercase for tag pages and badge rendering.

## Styling and UI conventions

- Component/page styling is intentionally utility-first in `.astro` files.
- `src/styles/global.css` is kept small and focused on base-level behavior.
- Tag badges on cards and the tags index use the shared neon border map in `src/lib/tagBadgeStyles.ts`.

## Configuration

Update `src/lib/site.ts` to change:

- site title and description
- canonical site URL
- navigation links
- social links

If your public domain changes, also update `astro.config.mjs`.

## Updating dependencies

```bash
pnpm outdated
pnpm up --latest
pnpm astro check
pnpm build
```

At the time of the latest refresh, `pnpm up --latest` reports this repository is already up to date.

## Build output

`pnpm build` generates a static site in `dist/`, including:

- `/posts/<slug>/`
- `/tags/<tag>/`
- `/rss.xml`
- sitemap files from `@astrojs/sitemap`

## License

MIT.
