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

## Content Strategy
- Homepage positions you as a systems engineer and technical leader.
- Case studies include:
  - Problem and constraints
  - Architecture and trade-offs
  - Reliability and scaling strategy
  - Metrics and outcome
  - Next-iteration improvements
- Writing section demonstrates engineering judgment.
- System design and postmortem sections demonstrate maturity and operational ownership.

## Customization Path
1. Replace sample data in `src/data/*.ts` with your real projects and numbers.
2. Add/replace architecture diagrams under `public/diagrams`.
3. Add real design docs and postmortems under `docs/`.
4. Connect contact/social metadata in header/footer if needed.
