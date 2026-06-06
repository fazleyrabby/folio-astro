---
title: "Why I Rebuilt My Portfolio with Astro"
description: "After trying Next.js, Gatsby, and plain HTML — here's why Astro finally won me over for my personal site."
publishedAt: "2024-05-22"
tags: ["astro", "web-dev", "performance"]
cover: "https://picsum.photos/seed/astro/800/400"
---

## The Portfolio Problem

A developer's portfolio is a paradox. It should showcase your best work, yet many devs (myself included) let it rot while chasing deadlines on client projects.

I've rebuilt mine three times. Each time I thought "this one's the final version." Each time I was wrong.

## What I've Tried

**Next.js** — Powerful, but overkill for a static site. SSR for a portfolio? I don't need it.

**Gatsby** — Once the darling of static sites. The plugin ecosystem was impressive but the build times were not.

**Plain HTML** — Genuinely great until you need components and want to reuse a nav across 10 pages.

## Enter Astro

Astro's pitch is simple: ship zero JavaScript by default. Add interactivity only where you need it. For a content-heavy portfolio, this is exactly right.

```bash
npm create astro@latest my-portfolio
```

What I love most:
- **Content Collections** for type-safe Markdown
- **Component Islands** for opt-in interactivity
- **View Transitions** for smooth page changes
- **Zero config** image optimization

## The Result

My Lighthouse scores went from mid-70s to consistent **98–100** across the board. Pages load in milliseconds. And the dev experience? Actually enjoyable.

If you're building a portfolio, blog, or documentation site — give Astro a serious look. It respects your users' bandwidth and your own time.
