---
title: "API Design Lessons From Shipping to Production"
description: "What I learned about REST, versioning, and error contracts after maintaining a public API used by thousands of clients."
publishedAt: "2025-01-18"
tags: ["api", "backend", "architecture"]
cover: "https://picsum.photos/seed/api/800/400"
---

## Contracts Are Forever

The moment a client integrates your API, every field becomes load-bearing. Removing a property is a breaking change. Renaming one is worse — silent failures replace loud ones.

## Version At The Edge

I version with URL prefixes (`/v1`, `/v2`) because they're obvious in logs and trivial to route. Header-based versioning is purer but harder to debug at 3am.

## Error Bodies Should Be Boring

A predictable error shape beats a clever one. Mine looks like:

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "retry_after": 30
  }
}
```

Machine-readable `code`, human-readable `message`, action-oriented hints. That's it.

## Pagination Defaults Matter

Default page sizes get hardcoded into client code within hours of launch. Pick yours carefully — you can't change it later without breaking someone.

## Idempotency Keys Save Lives

Any endpoint that mutates state should accept an idempotency key. Networks are unreliable; clients retry. Without keys, retries become duplicates.

The boring decisions compound. The clever ones haunt you.
