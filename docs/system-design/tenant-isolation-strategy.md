# Tenant Isolation Strategy

## Problem
Enterprise SaaS tenants needed strict isolation across API, cache, and database paths while preserving operational simplicity.

## Constraints
- Regional compliance boundaries
- Shared infrastructure model
- Auditable authorization path

## Decisions
1. Enforce RBAC at service layer and RLS in PostgreSQL as final policy gate.
2. Use tenant-scoped cache key builders to prevent cross-tenant bleed.
3. Add policy contract tests in CI and alerting for denied-query anomalies.

## Trade-offs
- RLS offers strong isolation but increases policy complexity.
- Shared database lowers operational cost but requires tighter query discipline.

## Outcome
Zero cross-tenant data incidents across the last four release cycles.
