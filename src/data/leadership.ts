import { DesignDoc, Postmortem } from "@/types/portfolio";

export const designDocs: DesignDoc[] = [
  {
    slug: "tenant-isolation-strategy",
    title: "Public System Design: Tenant Isolation Strategy",
    context:
      "Define a scalable, auditable data isolation model for enterprise SaaS with regional compliance boundaries.",
    decisions: [
      "Use PostgreSQL row-level security with tenant-scoped JWT claims in session context.",
      "Enforce service-level access policy first, then database-level policy as final gate.",
      "Adopt tenant-aware partitioning and encrypted backup lanes per region.",
    ],
    risks: [
      "Policy complexity can drift without automated policy tests in CI.",
      "Cross-tenant analytics needs strict anonymization and explicit allow-lists.",
    ],
    diagramPath: "/flows/design-tenant-isolation.svg",
  },
  {
    slug: "edge-vs-container-runtime",
    title: "Decision Record: Edge Functions vs Container Runtime",
    context:
      "Evaluate runtime models for mixed-latency workloads involving auth, personalization, and heavy compute.",
    decisions: [
      "Keep auth/session checks near edge for latency-sensitive routes.",
      "Run compute-heavy workflows in containers for predictable memory and cost envelopes.",
      "Use shared telemetry contracts across both runtimes for unified observability.",
    ],
    risks: [
      "Operational complexity increases with dual runtime models.",
      "Inconsistent limits across providers can introduce hidden regressions.",
    ],
    diagramPath: "/flows/design-edge-vs-container.svg",
  },
];

export const postmortems: Postmortem[] = [
  {
    slug: "payment-retry-storm",
    title: "Simulated Incident: Payment Retry Storm",
    incidentDate: "2025-09-22",
    impact:
      "Duplicate renewal attempts caused elevated gateway rejects and temporary checkout degradation.",
    rootCause:
      "Retry logic lacked jitter and upper-bound coordination across worker pools, creating synchronized bursts.",
    actions: [
      "Implemented exponential backoff with jitter and capped attempt windows.",
      "Added circuit breaker trip metrics and queue lag alerts.",
      "Enforced idempotency key reuse validation across retries.",
    ],
    diagramPath: "/flows/postmortem-payment-retry.svg",
  },
  {
    slug: "cache-key-collision-incident",
    title: "Simulated Incident: Cache Key Collision",
    incidentDate: "2025-12-07",
    impact:
      "Cross-tenant read bleed appeared on dashboard summaries for 0.7% of requests during peak traffic.",
    rootCause:
      "Cache namespace omitted tenant ID in one aggregation endpoint after a refactor.",
    actions: [
      "Refactored cache key builders into typed shared utility with required tenant field.",
      "Introduced contract tests validating tenant isolation across cache and DB layers.",
      "Added static analysis rule for unsafe cache key construction patterns.",
    ],
    diagramPath: "/flows/postmortem-cache-key.svg",
  },
];
