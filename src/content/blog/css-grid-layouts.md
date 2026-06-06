---
title: "CSS Grid: The Layout Tool I Wish I'd Learned Sooner"
description: "How CSS Grid replaced three different layout hacks in my workflow — and the mental model that finally made it click."
publishedAt: "2024-10-03"
tags: ["css", "layout", "frontend"]
cover: "https://picsum.photos/seed/grid/800/400"
---

## The Pre-Grid Era

For years I built layouts with floats, then flexbox, then a strange chimera of both. Every "responsive" page came with a sidecar of media queries and apologies.

## The Mental Shift

The unlock was thinking in *tracks* instead of *containers*. You define rows and columns once at the parent, then place children by line numbers or named areas.

```css
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
}
```

## Auto-Fit and Auto-Fill

The pair that killed media queries for me. A responsive card grid in one line:

```css
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
```

No breakpoints. No JavaScript. The browser does the math.

## When Flexbox Still Wins

Grid is two-dimensional; flexbox is one-dimensional. For toolbars, nav rows, and chip clusters — flexbox is still the right tool.

Use the right hammer for the right nail. Both belong in the box.
