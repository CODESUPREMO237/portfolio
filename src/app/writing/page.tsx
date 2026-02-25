import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { ArticleCard } from "@/components/article-card";
import { FlowDiagramCard } from "@/components/flow-diagram-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { articles } from "@/data/writing";

export default function WritingPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500/30">
      <SiteHeader />

      <main className="flex-grow shell py-12 flex flex-col gap-12">
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-700 pointer-events-none" />
          <SectionTitle
            eyebrow="Technical Writing"
            title="Engineering decisions, reliability patterns, and system trade-offs"
            subtitle="Writing is used as an artifact of technical leadership: explicit assumptions, measurable outcomes, and practical guidance."
          />
          </div>
        </ScrollReveal>

        <div className="grid-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <ScrollReveal className="pt-8 border-t border-slate-800/50 flex flex-col gap-8" delayMs={100}>
          <SectionTitle
            eyebrow="Visual Architecture"
            title="System Diagrams"
            subtitle="Direct snapshots of flows discussed in the articles above."
          />
          <div className="grid-3">
            {articles.map((article) => (
              <FlowDiagramCard
                key={`${article.slug}-flow`}
                title={article.title}
                diagramPath={article.diagramPath}
                alt={`${article.title} system flow diagram`}
                caption="Flow snapshot to communicate architecture logic."
              />
            ))}
          </div>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </div>
  );
}
