---
title: "5 TypeScript Patterns I Use Every Day"
description: "Practical TypeScript patterns that have saved me hours of debugging and made my codebases more maintainable."
publishedAt: "2024-08-10"
tags: ["typescript", "patterns", "web-dev"]
cover: "https://picsum.photos/seed/ts/800/400"
---

## Why Patterns Matter

TypeScript's type system is powerful, but raw power doesn't help unless you reach for the right shape at the right moment. Over the years a handful of patterns have become muscle memory.

## 1. Discriminated Unions

Tagged unions turn runtime branching into a compile-time guarantee. The compiler narrows for you when you check the tag.

```ts
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
```

## 2. `as const` for Literal Inference

Lock literal types without verbose annotations. Great for action constants and route maps.

## 3. Branded Types

Prevent mixing up `UserId` and `OrderId` even though both are strings underneath. A simple intersection with a phantom brand does the job.

## 4. `satisfies` Over Type Assertion

`satisfies` checks the shape without widening — you keep the inferred literal types while still getting type safety.

## 5. Utility Type Composition

`Pick`, `Omit`, `Partial`, and `ReturnType` compose like LEGO. Most "complex" types are just three utility types in a trench coat.

These five patterns cover 80% of the type gymnastics I do day to day.
