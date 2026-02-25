import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { FlowDiagramCard } from "@/components/flow-diagram-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { designDocs } from "@/data/leadership";

export default function SystemDesignPage() {
  return (
    <main style={{ paddingBottom: "2rem" }}>
      <SiteHeader />
      <section className="shell" style={{ paddingBottom: "1.5rem", display: "grid", gap: "1rem" }}>
        <ScrollReveal>
          <SectionTitle
            eyebrow="System Design Records"
            title="Public design docs for architecture quality and technical leadership"
            subtitle="Decision records communicate reasoning quality, constraints, trade-offs, and risk ownership."
          />
        </ScrollReveal>
        <div className="grid-2">
          {designDocs.map((doc, index) => (
            <ScrollReveal key={doc.slug} delayMs={index * 70}>
              <article className="card" style={{ padding: "1.1rem", display: "grid", gap: "0.75rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.1rem" }}>{doc.title}</h2>
                <p style={{ margin: 0, color: "var(--color-text-soft)", lineHeight: 1.55 }}>{doc.context}</p>
                <FlowDiagramCard
                  title="Decision Flow"
                  diagramPath={doc.diagramPath}
                  alt={`${doc.title} flow diagram`}
                  caption="Sketch showing request path, trust boundaries, and control points."
                />
                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <strong style={{ fontSize: "0.95rem" }}>Key decisions</strong>
                  {doc.decisions.map((item) => (
                    <p key={item} style={{ margin: 0, color: "var(--color-text-soft)", lineHeight: 1.55 }}>
                      {item}
                    </p>
                  ))}
                </div>
                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <strong style={{ fontSize: "0.95rem" }}>Risks and controls</strong>
                  {doc.risks.map((risk) => (
                    <p key={risk} style={{ margin: 0, color: "var(--color-text-soft)", lineHeight: 1.55 }}>
                      {risk}
                    </p>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
