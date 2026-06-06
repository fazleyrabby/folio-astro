# Folio — Minimalist Astro Portfolio Theme

A content-first portfolio & blog theme built with **Astro 5** and **Tailwind CSS**. Editorial typography, four built-in themes, and a single config file. Designed for developers, designers, and writers who want a premium aesthetic without the bloat.

[**Live Demo**](https://folio.fazleyrabbi.xyz) · [**Report Issue**](https://github.com/fazleyrabby/folio-astro/issues)

![Folio Theme Preview](./.github/assets/preview.jpg)

## Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Content Collections](#content-collections)
- [Themes](#themes)
- [Deployment](#deployment)
- [License](#license)

## Features

- **Astro 5** — zero JS by default, content collections, type-safe frontmatter.
- **Tailwind CSS 3** — utility-first styling, easy to override.
- **Four themes** — Light, Classic Dark, Brutal, Mono. Switchable at runtime.
- **Content collections** — Blog, Projects, and Work Experience as markdown.
- **Single-file config** — name, bio, socials, nav, metrics all live in `src/config.ts`.
- **Pre-styled prose** — `@tailwindcss/typography` + Shiki syntax highlighting (`github-light` / `nord`).
- **Smooth animations** — GSAP + Lenis (opt-out by removing imports).
- **SEO ready** — sitemap, canonical URLs, OpenGraph fields in `<Head>`.
- **One-click GitHub Pages deploy** — Actions workflow included.
- **Responsive & accessible** — mobile menu, keyboard nav, semantic HTML.

## Quick Start

Requires Node 18.17+ and pnpm (or npm/yarn).

```bash
git clone https://github.com/fazleyrabby/folio-astro.git my-portfolio
cd my-portfolio
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

### Scripts

| Command | Action |
|---------|--------|
| `pnpm dev` | Start dev server with hot reload |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the build locally |

## Project Structure

```
src/
├── components/      # Hero, Projects, Experience, LatestPosts, ContactCTA…
├── content/         # Markdown content
│   ├── blog/        # Blog posts
│   ├── projects/    # Project case studies
│   ├── experiences/ # Work experience entries
│   ├── about.md     # About page body
│   └── uses.md      # Uses page body
├── layouts/         # MainLayout, Head, Nav, Footer
├── lib/             # url() helper for base-path-safe links
├── pages/           # Routes
├── scripts/         # animations.js (GSAP/Lenis)
├── styles/          # global.css (theme tokens + utilities)
├── config.ts        # ← all personal data lives here
└── content.config.ts# Collection schemas
```

## Customization

Open `src/config.ts` and replace placeholder data:

```ts
export const CONFIG = {
  name: "Your Name",
  title: "Full-Stack Developer",
  tagline: "I build delightful, fast, and accessible web experiences.",
  bio: "Short bio shown in the hero section.",
  email: "you@example.com",
  available: true,

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: null,
    codepen: null,
    youtube: null,
  },

  nav: [
    { label: "Work", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Posts", href: "/blog/" },
    { label: "About", href: "/about/" },
    { label: "Uses", href: "/uses/" },
  ],

  hero: {
    greeting: "Hi, I'm",
    avatar: "/avatar.png",   // drop image in public/
    resumeLabel: "Resume",
    viewProjectsLabel: "View Projects",
  },

  metrics: [
    { value: "5+", label: "Years" },
    { value: "30+", label: "Projects" },
  ],

  site: {
    url: "https://your-domain.com",
    description: "Portfolio of <Your Name>",
  },
};
```

Also update `astro.config.mjs` → `site` to match your domain (for sitemap/canonical URLs).

### Replace the avatar

Drop your image at `public/avatar.png` (or update `CONFIG.hero.avatar`).

### Delete demo content

Before launching, remove the example markdown files in `src/content/blog/`, `src/content/projects/`, and `src/content/experiences/`. Replace with your own.

## Content Collections

Each collection has a strict schema defined in `src/content.config.ts`.

### Blog (`src/content/blog/*.md`)

```yaml
---
title: "Post title"
description: "Short summary used in lists and meta tags"
publishedAt: "2026-01-15"     # ISO date
tags: ["astro", "web-dev"]    # optional
cover: "/covers/post.jpg"      # optional
---

Markdown body…
```

### Projects (`src/content/projects/*.md`)

```yaml
---
title: "Project name"
description: "One-line summary"
type: "Web App"               # optional
thumbnail: "/projects/img.jpg" # optional
live: "https://demo.example.com"
github: "https://github.com/..."
tech: ["Astro", "Tailwind"]
status: "Live"                 # optional
position: 1                    # optional ordering
period: "2025"
role: "Designer & Developer"
highlights: ["Bullet 1", "Bullet 2"]
problem: "What problem did this solve?"
solution: "How did you solve it?"
scope: ["UX", "Frontend", "Backend"]
---
```

If `problem` or `highlights` is set, the project gets a detail page at `/projects/<slug>`.

### Experiences (`src/content/experiences/*.md`)

```yaml
---
title: "Company Name"
role: "Senior Engineer"
from: "Jan 2023"
to: "Present"
skills: "TypeScript, React, PostgreSQL"
link: "https://company.com"   # optional
timeline: "2023-01-01"         # sort key (newest first)
---

- Contribution one
- Contribution two
```

## Themes

Four built-in themes, switched via the `ThemeIcon` component (top-right):

| Theme | `data-theme` | Vibe |
|-------|--------------|------|
| Light | *(default)* | Warm minimalist |
| Dark | `dark` (class) | Editorial dark |
| Brutal | `brutal` | Neo-brutalist (yellow accent, hard shadows) |
| Mono | `mono` | Black & white, terminal-inspired |

To set a default theme, edit the init script in `src/layouts/MainLayout.astro`.

## Deployment

The site is static (`output: "static"`) — deploy anywhere.

```bash
pnpm build   # outputs to ./dist/
```

### GitHub Pages

This repo ships with `.github/workflows/deploy.yml`.

1. In your repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Push to `main`. The workflow builds and publishes.
3. (Optional) Custom domain: edit `public/CNAME` and update `astro.config.mjs` `site`. For project-page hosting (no custom domain), add `base: "/<repo-name>"` to `astro.config.mjs`.

### Vercel / Netlify / Cloudflare Pages

Build command: `pnpm build` · Output dir: `dist`. No further config needed.

## Author

Built by **[Md. Fazley Rabbi](https://github.com/fazleyrabby)** — [folio.fazleyrabbi.xyz](https://folio.fazleyrabbi.xyz)

If you use this theme, a link back is appreciated but not required.

## License

[MIT](./LICENSE) — free for personal and commercial use.
