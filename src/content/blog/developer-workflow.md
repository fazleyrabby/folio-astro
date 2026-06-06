---
title: "My Developer Workflow in 2024"
description: "The tools, habits, and rituals that help me stay productive and ship good software consistently."
publishedAt: "2024-07-10"
tags: ["productivity", "tools", "workflow"]
cover: "https://picsum.photos/seed/workflow/800/400"
---

## Morning Routine

I don't touch code before coffee. That's a hill I'll die on.

After coffee, I spend 15 minutes reviewing what I was working on yesterday. Git log, open PRs, any failing CI checks. Get context before writing a single line.

## Editor Setup

**VS Code** with a minimal config. I've tried Neovim, I respect Neovim, but I keep coming back.

Key extensions:
- **GitLens** — blame, history, and diff views inline
- **Error Lens** — inline error highlighting
- **Prettier** — format on save, no debates
- **GitHub Copilot** — for boilerplate and tests

## Terminal

**iTerm2** with **zsh** and **Oh My Zsh**. My most-used aliases:

```bash
alias gs="git status"
alias gl="git log --oneline -10"
alias dev="npm run dev"
alias build="npm run build && npm run preview"
```

## Project Structure

I follow a feature-based folder structure rather than type-based:

```
src/
  features/
    auth/
      components/
      hooks/
      api/
    dashboard/
      ...
```

This keeps related code together instead of scattering it across `components/`, `hooks/`, `utils/`.

## The Most Important Habit

**Commit small, commit often.** A commit should be one logical change. This makes reviews easier, reverts painless, and git history actually readable.

If your commit message starts with "WIP" or "fix stuff", you're doing it wrong.
