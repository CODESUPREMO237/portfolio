# Simulated Incident Postmortem: Payment Retry Storm

## Date
2025-09-22

## Impact
During a gateway latency spike, retries synchronized across worker pools. Duplicate attempts increased gateway rejects and caused temporary checkout degradation.

## Root Cause
Retry logic used fixed intervals without jitter, and circuit breaker thresholds were too permissive.

## Corrective Actions
1. Switched to exponential backoff with jitter and bounded retry windows.
2. Added queue-lag and breaker-state alerts tied to burn-rate paging.
3. Enforced idempotency key reuse validation for retried jobs.

## Follow-up Validation
k6 load simulations confirmed stable retry distribution and no duplicate transaction writes.
