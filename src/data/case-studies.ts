import { CaseStudy } from "@/types/portfolio";

export const caseStudies: CaseStudy[] = [
  {
    slug: "global-payment-orchestration",
    title: "Global Payment Orchestration Engine",
    summary:
      "Led the ground-up rewrite of a legacy monolith into a resilient, event-driven payment gateway handling $4B+ in annual transaction volume across 45 countries.",
    domain: "FinTech / Distributed Systems",
    stack: [
      "Next.js (Internal Dashboards)",
      "Golang Core",
      "PostgreSQL (Partitioned)",
      "Kafka",
      "Redis",
      "Kubernetes",
      "Terraform",
    ],
    metrics: [
      { label: "P99 API Latency", value: "320ms -> 85ms" },
      { label: "Uptime SLA", value: "99.999%" },
      { label: "Infra Cost Savings", value: "$1.2M/yr" },
    ],
    diagramPath: "/diagrams/multi-tenant-billing.svg",
    sections: [
      {
        title: "The 15-Year Context",
        points: [
          "Drawing on a decade of scaling monolithic databases, I recognized the existing Magento-based architecture was buckling under holiday traffic.",
          "We were dropping 2% of international transactions due to synchronous timeouts with downstream Payment Service Providers (PSPs).",
        ],
      },
      {
        title: "Architectural Shift",
        points: [
          "Transitioned to an asynchronous, choreography-based saga pattern using Kafka to decouple order ingestion from payment capturing.",
          "Enforced strict idempotency contracts across all 15 microservices to guarantee zero double-charges during network partitions.",
          "Implemented intelligent routing: dynamically shifting traffic between Stripe, Adyen, and PayPal based on real-time authorization success rates.",
        ],
      },
      {
        title: "Reliability Engineering",
        points: [
          "Introduced adaptive circuit breakers to isolate failing PSPs before they caused thundering herds.",
          "Built a 'shadow mode' deployment pipeline where live traffic was captured and asynchronously replayed against new gateway versions to prove correctness before switchover.",
        ],
      },
      {
        title: "Leadership & Impact",
        points: [
          "Mentored a cross-functional team of 14 engineers through the Go migration.",
          "The system survived a 7x traffic spike during Black Friday without page-outs, securing $150M in revenue that would have previously timed out.",
        ],
      },
    ],
  },
  {
    slug: "real-time-logistics-control-tower",
    title: "Real-Time Logistics Control Tower",
    summary:
      "Architected a deterministic, high-throughput IoT ingestion platform orchestrating 100,000+ commercial fleet vehicles globally.",
    domain: "Logistics / IoT",
    stack: [
      "Node.js / Rust",
      "TimescaleDB",
      "Redis Streams",
      "Apache Flink",
      "gRPC",
      "OpenTelemetry",
    ],
    metrics: [
      { label: "Event Throughput", value: "2M events/min" },
      { label: "Dispatch SLA Misses", value: "-85%" },
      { label: "Data Freshness", value: "< 500ms" },
    ],
    diagramPath: "/diagrams/logistics-control-tower.svg",
    sections: [
      {
        title: "The Problem Space",
        points: [
          "Dispatchers were relying on telemetry data that was up to 15 minutes stale due to massive write amplification in the legacy document database.",
          "The company was losing multi-million dollar contracts due to blown delivery SLAs for temperature-controlled freight.",
        ],
      },
      {
        title: "Systems Design",
        points: [
          "Replaced the ingest layer with a Rust-based MQTT gateway routing directly to Kafka, stripping out unnecessary JSON parsing overhead.",
          "Moved time-series data to TimescaleDB (PostgreSQL), utilizing native data retention policies (hypertables) to automatically drop chunks older than 90 days.",
          "Used Apache Flink to run continuous windowed queries over the event stream, instantly detecting route anomalies and geo-fence breaches.",
        ],
      },
      {
        title: "Cost & Scale Optimization",
        points: [
          "Implemented a tiered storage model. Hot telemetry lived in memory/NVMe for 24 hours, warm data in standard EBS for 30 days, and cold data shifted to S3 via Parquet.",
          "This architecture cut AWS RDS costs by 45% while handling 3x the write velocity.",
        ],
      },
      {
        title: "Business Outcome",
        points: [
          "Enabled the launch of a premium 'Guarantee-Time' logistics product that drove $40m in net-new ARR.",
          "Reduced Mean Time To Resolve (MTTR) for missing trucks from 4 hours to 11 minutes.",
        ],
      },
    ],
  },
  {
    slug: "ai-support-ops-platform",
    title: "AI-Augmented Support Operations Platform",
    summary:
      "Spearheaded the integration of a massive-scale LLM Retrieval-Augmented Generation (RAG) system, deflecting 40% of L1 support tickets.",
    domain: "AI Engineering / Enterprise Support",
    stack: [
      "Python FastAPI",
      "LangChain",
      "pgvector",
      "Redis",
      "OpenAI GPT-4",
      "React",
    ],
    metrics: [
      { label: "L1 Deflection Rate", value: "42%" },
      { label: "Escalation Accuracy", value: "+34%" },
      { label: "Compute Efficiency", value: "-60% Tokens" },
    ],
    diagramPath: "/diagrams/ai-support-platform.svg",
    sections: [
      {
        title: "The Challenge",
        points: [
          "A rapidly growing Enterprise SaaS customer base resulted in support queues taking 4+ days to process.",
          "Human engineers spent 60% of their time searching across Jira, Confluence, and internal wikis for known workarounds.",
        ],
      },
      {
        title: "The AI Architecture",
        points: [
          "Did not just wrap an OpenAI API. Designed an asynchronous pipeline that chunks, embeds, and indexes 5 million internal documents nightly using `pgvector`.",
          "Built a deterministic semantic router that intercepts user queries, classifies intent, and decides whether to query the LLM or immediately fail-over to a human based on confidence scores.",
        ],
      },
      {
        title: "Performance & Safety",
        points: [
          "Implemented semantic caching with Redis: if a query's embedding had a high cosine similarity to a recently answered query, the cached response was returned, saving massive LLM token costs.",
          "Strict PII scrubbing middleware sanitized all payloads before they reached external OpenAI servers.",
        ],
      },
      {
        title: "The Reality of Production AI",
        points: [
          "The hardest part wasn't the LLM, it was the data pipelines. I wrote the data ingestion framework that kept the vector database synchronized with the source of truth, handling deletions and permission changes securely.",
          "The system securely resolved 15,000 tickets a month automatically, effectively adding the capacity of 50 full-time engineers without raising headcount.",
        ],
      },
    ],
  },
];
