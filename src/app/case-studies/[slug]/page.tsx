import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { caseStudies } from "@/data/case-studies";

type CaseStudyDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-sky-500/30">
      <SiteHeader />

      <main className="flex-grow shell py-8 flex flex-col gap-10">

        {/* Navigation */}
        <ScrollReveal>
          <nav>
          <Link href="/case-studies" className="pill hover:bg-slate-800 transition-colors inline-flex group">
            <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Case Studies
          </Link>
          </nav>
        </ScrollReveal>

        {/* Header Section */}
        <ScrollReveal delayMs={60}>
          <section className="glass-card p-8 md:p-12 flex flex-col gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-sky-900/10 via-transparent to-transparent pointer-events-none" />

          <div className="flex">
            <span className="pill primary">{caseStudy.domain}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 text-balance leading-[1.15]">
            {caseStudy.title}
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-4xl">
            {caseStudy.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 mt-2">
            {caseStudy.stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-md bg-slate-800/40 text-slate-300 font-mono text-xs border border-slate-700/50">
                {tech}
              </span>
            ))}
          </div>
          </section>
        </ScrollReveal>

        {/* Hero Image / Diagram */}
        <ScrollReveal delayMs={100}>
          <section className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl relative group">
          <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
          <Image src={caseStudy.diagramPath} alt={`${caseStudy.title} architecture diagram`} width={1200} height={620} style={{ width: "100%", height: "auto" }} />
          </section>
        </ScrollReveal>

        {/* Metrics Bar */}
        <section className="grid md:grid-cols-3 gap-6">
          {caseStudy.metrics.map((metric) => (
            <ScrollReveal key={metric.label} delayMs={120}>
              <article className="glass-card p-6 flex flex-col justify-center items-center text-center gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 to-transparent pointer-events-none" />
                <span className="text-sm font-medium text-slate-400 tracking-wide uppercase">{metric.label}</span>
                <strong className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-300">
                  {metric.value}
                </strong>
              </article>
            </ScrollReveal>
          ))}
        </section>

        {/* Content Sections */}
        <section className="grid lg:grid-cols-2 gap-8">
          {caseStudy.sections.map((section, index) => (
            <ScrollReveal key={section.title} delayMs={140 + index * 40}>
              <article className="glass-card p-8 flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-slate-800/50 pb-4">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm font-bold border border-slate-700/50">
                    0{index + 1}
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-200">{section.title}</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-4 items-start text-slate-300">
                      <span className="text-sky-500 mt-1 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
