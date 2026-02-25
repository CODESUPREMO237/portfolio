import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { FlowDiagramCard } from "@/components/flow-diagram-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { postmortems } from "@/data/leadership";
import { toReadableDate } from "@/lib/format";

export default function PostmortemsPage() {
  return (
    <main style={{ paddingBottom: "2rem" }}>
      <SiteHeader />
      <section className="shell" style={{ paddingBottom: "1.5rem", display: "grid", gap: "1rem" }}>
        <ScrollReveal>
          <SectionTitle
            eyebrow="Postmortems"
            title="Failure analysis and corrective actions"
            subtitle="Simulated incidents demonstrate production ownership, operational rigor, and reliability-first leadership."
          />
        </ScrollReveal>
        <div className="grid-2">
          {postmortems.map((incident, index) => (
            <ScrollReveal key={incident.slug} delayMs={index * 70}>
              <article className="card" style={{ padding: "1.1rem", display: "grid", gap: "0.7rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.8rem", color: "var(--color-text-soft)" }}>
                  <span>{toReadableDate(incident.incidentDate)}</span>
                  <span className="pill">Postmortem</span>
                </div>
                <h2 style={{ margin: 0, fontSize: "1.1rem" }}>{incident.title}</h2>
                <p style={{ margin: 0, color: "var(--color-text-soft)", lineHeight: 1.55 }}>
                  <strong style={{ color: "var(--color-text)" }}>Impact:</strong> {incident.impact}
                </p>
                <p style={{ margin: 0, color: "var(--color-text-soft)", lineHeight: 1.55 }}>
                  <strong style={{ color: "var(--color-text)" }}>Root Cause:</strong> {incident.rootCause}
                </p>
                <FlowDiagramCard
                  title="Incident Flow"
                  diagramPath={incident.diagramPath}
                  alt={`${incident.title} incident timeline flow`}
                  caption="Visual timeline of trigger, blast radius, detection, and remediation."
                />
                <div style={{ display: "grid", gap: "0.4rem" }}>
                  <strong style={{ fontSize: "0.95rem" }}>Corrective actions</strong>
                  {incident.actions.map((action) => (
                    <p key={action} style={{ margin: 0, color: "var(--color-text-soft)", lineHeight: 1.55 }}>
                      {action}
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
