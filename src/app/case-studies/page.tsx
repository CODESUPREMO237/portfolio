import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { CaseStudyCard } from "@/components/case-study-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-sky-500/30">
      <SiteHeader />

      <main className="flex-grow shell py-12 flex flex-col gap-12">
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors duration-700 pointer-events-none" />
          <SectionTitle
            eyebrow="Architecture Case Studies"
            title="How systems were designed, scaled, secured, and evolved"
            subtitle="These are engineering narratives with explicit constraints, trade-offs, reliability strategies, and measurable outcomes. Built for scale, not just observation."
          />
          </div>
        </ScrollReveal>

        <section className="grid-3">
          {caseStudies.map((item) => (
            <CaseStudyCard key={item.slug} caseStudy={item} />
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
