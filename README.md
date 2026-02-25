# Engineering Leadership Portfolio (Next.js)

Principal-level portfolio template for a 7-year senior engineer.  
Focus is architecture quality, production reliability, security posture, and measurable business impact.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind v4 base + custom design tokens
- Static typed content model for case studies/writing/design records

## Run
```bash
npm install
npm run dev
```

Build checks:
```bash
npm run lint
npm run build
```

## Production-Ready Structure
```text
src/
  app/
    case-studies/
      [slug]/page.tsx
      page.tsx
    writing/
      [slug]/page.tsx
      page.tsx
    system-design/page.tsx
    postmortems/page.tsx
    layout.tsx
    page.tsx
    globals.css
  components/
    article-card.tsx
    case-study-card.tsx
    section-title.tsx
    site-footer.tsx
    site-header.tsx
  data/
    case-studies.ts
    leadership.ts
    writing.ts
  lib/
    format.ts
  types/
    portfolio.ts
public/
  diagrams/
docs/
  system-design/
  postmortems/
```


