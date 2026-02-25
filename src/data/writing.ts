import { Article } from "@/types/portfolio";

export const articles: Article[] = [
  {
    slug: "zero-downtime-migrations",
    title: "Zero-Downtime Database Migrations at Scale",
    summary:
      "A 7-year retrospective on safely migrating schemas across multi-terabyte PostgreSQL clusters without dropping a single write.",
    date: "2026-02-15",
    readTime: "14 min",
    tags: ["Databases", "PostgreSQL", "Site Reliability"],
    takeaways: [
      "Never run DDL inside long-running application transactions.",
      "Use Expand/Contract to decouple schema rollout from app deploy timing.",
      "Use logical replication for production-safe migration canaries.",
      "Unindexed foreign-key operations can become incident-level failures.",
    ],
    diagramPath: "/flows/writing-idempotency.svg",
    contentPath: "content/writing/zero-downtime-migrations.mdx",
  },
  {
    slug: "surviving-distributed-system-outages",
    title: "Anatomy of an Outage: Why Caching Fails Hard",
    summary:
      "Lessons learned from watching thundering herds overload Redis and database tiers, and how bounded recovery patterns prevent collapse.",
    date: "2025-11-22",
    readTime: "11 min",
    tags: ["Distributed Systems", "Post-Mortems", "Redis"],
    takeaways: [
      "Cache stampedes are predictable and should be designed for upfront.",
      "Probabilistic early expiration reduces synchronized cache rebuilds.",
      "Fail-fast timeouts and breaker policies preserve platform stability under stress.",
    ],
    diagramPath: "/flows/writing-eventual-consistency.svg",
    contentPath: "content/writing/surviving-distributed-system-outages.mdx",
  },
  {
    slug: "engineering-leadership-at-7-years",
    title: "Engineering Leadership is Dictating Trade-offs",
    summary:
      "Why senior and principal engineers are measured by risk reduction, decision quality, and business-aligned architecture.",
    date: "2025-09-04",
    readTime: "16 min",
    tags: ["Leadership", "Career", "Architecture"],
    takeaways: [
      "Hard technical decisions are often organization and ownership decisions.",
      "Deleting unnecessary systems can create more leverage than adding features.",
      "Architecture should map directly to cost, reliability, and product outcomes.",
    ],
    diagramPath: "/flows/writing-postgres-scaling.svg",
    contentPath: "content/writing/engineering-leadership-at-7-years.mdx",
  },
];
