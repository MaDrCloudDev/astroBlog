# Minimal Astro Blog Template

A clean, fast blog template built with Astro and Tailwind CSS. Perfect for developers who want to get writing without dealing with unnecessary complexity.

## Quick Start

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see your blog.

## Features

- **Fast & Modern**: Built with Astro for lightning-fast static generation
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Type-Safe Content**: Astro Collections with full TypeScript support
- **SEO Ready**: RSS feed, sitemap, and proper meta tags included
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Zero Bloat**: No unnecessary pages or features - just pure blogging

## Project Structure

```
src/
├── components/     # Reusable UI components
├── content/        # Blog posts and content collections
├── layouts/        # Page layouts
├── pages/          # Routes and API endpoints
└── styles/         # Global styles
```

## Writing Posts

1. Add your markdown files to `src/content/posts/`
2. Include required frontmatter:

```markdown
---
title: "Your Post Title"
pubDate: 2024-01-01
description: "Brief description of your post"
author: "Your Name"
image:
  url: "/your-image.jpg"
  alt: "Image description"
tags: ["tag1", "tag2"]
link: "/posts/your-post-slug"
---

Your content here...
```

## Customization

### Site Configuration

Update `astro.config.mjs` with your domain:

```js
export default defineConfig({
    site: 'https://yourdomain.com',
    // ...
});
```

### Styling

- Global styles: `src/styles/global.css`
- Component styles: Scoped CSS in `.astro` files
- Tailwind classes: Available throughout the project

### Content Schema

Modify `src/content/config.ts` to add new fields or change validation rules.

## Build & Deploy

```bash
pnpm run build
```

Deploy the `dist/` folder to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Why This Template?

Most blog templates try to be everything - portfolio, landing page, and blog combined. This template focuses on one thing: **helping you write and share your thoughts** without getting in the way.

- No about page (use your first post)
- No contact forms (link to your socials)
- No project showcases (that's what GitHub is for)
- Just clean, readable posts with proper tagging and RSS

Start simple. Add complexity only when you need it.

## License

MIT - feel free to use this for your own blog.
