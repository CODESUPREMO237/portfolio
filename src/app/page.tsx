import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { CaseStudyCard } from "@/components/case-study-card";
import { ArticleCard } from "@/components/article-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { caseStudies } from "@/data/case-studies";
import { articles } from "@/data/writing";

const leadershipSignals = [
  "Designs systems, not isolated features",
  "Owns reliability and production incident response",
  "Evaluates architectural trade-offs with business context",
  "Optimizes long-term maintainability and team velocity",
  "Leads cross-functional technical decisions",
];

const focusAreas = [
  "System architecture depth (C4, scaling, partitioning, CI/CD)",
  "Production engineering mindset (idempotency, retries, SLOs)",
  "Performance engineering (latency, query planning, load testing)",
  "Security posture (OWASP, RBAC/RLS, secrets, rate limits)",
  "AI integration with observability and cost control",
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.link/44yg4d" },
  { label: "LinkedIn", href: "https://bit.ly/47Cwmua" },
  { label: "X", href: "https://bit.ly/4pbhGIK" },
  { label: "GitHub", href: "https://bit.ly/4rL6xPN" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#DDFF00]/30">
      <SiteHeader />

      <main className="flex-grow flex flex-col gap-24 py-12">
        {/* Hero Section */}
        <ScrollReveal className="shell">
          <section className="glass-card p-8 md:p-12 lg:p-16 flex flex-col gap-8 relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#DDFF00]/5 rounded-full blur-3xl group-hover:bg-[#DDFF00]/10 transition-colors duration-700 pointer-events-none" />

            <div className="flex">
              <span className="pill accent tracking-wide uppercase text-xs">Principal-Level Positioning</span>
            </div>

            <p className="text-sm md:text-base uppercase tracking-[0.22em] text-[#9A9AAA] font-medium">
              CODE SUPREMO
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0EDE8] leading-[1.1] max-w-4xl text-balance">
              Senior Software Engineer
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#DDFF00] via-[#44FFD2] to-[#DDFF00] animate-pulse-slow">
                Distributed Systems & Scalable Architecture
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#9A9AAA] max-w-2xl leading-relaxed">
              7 years building and evolving production systems. Focused on architecture quality,
              reliability ownership, and engineering decisions that measurably improve business outcomes.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/case-studies"
                className="px-6 py-3 rounded-full bg-[#DDFF00]/10 text-[#DDFF00] font-medium border border-[#DDFF00]/20 hover:bg-[#DDFF00]/20 hover:border-[#DDFF00]/40 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Explore architecture case studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              <Link
                href="/system-design"
                className="px-6 py-3 rounded-full bg-[#111118] text-[#9A9AAA] font-medium border border-[#252535] hover:bg-[#16161F] hover:text-[#F0EDE8] transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Review public design docs
              </Link>
              <a
                href="/cv/tchabeu_stephane.pdf"
                download
                className="px-6 py-3 rounded-full bg-[#44FFD2]/10 text-[#44FFD2] font-medium border border-[#44FFD2]/20 hover:bg-[#44FFD2]/20 hover:border-[#44FFD2]/40 transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill hover:bg-[#111118]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Signals matrix */}
        <ScrollReveal className="shell" delayMs={80}>
          <section>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="glass-card p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#44FFD2]/10 flex items-center justify-center border border-[#44FFD2]/20">
                  <svg className="w-5 h-5 text-[#44FFD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h2 className="text-xl font-bold text-[#F0EDE8]">Leadership Signals</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {leadershipSignals.map((item) => (
                  <li key={item} className="flex gap-3 text-[#9A9AAA] items-start">
                    <span className="text-[#44FFD2] mt-1">{">"}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-card p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#DDFF00]/10 flex items-center justify-center border border-[#DDFF00]/20">
                  <svg className="w-5 h-5 text-[#DDFF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h2 className="text-xl font-bold text-[#F0EDE8]">2026 Engineering Focus</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {focusAreas.map((item) => (
                  <li key={item} className="flex gap-3 text-[#9A9AAA] items-start">
                    <span className="text-[#DDFF00] mt-1">{">"}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          </section>
        </ScrollReveal>

        {/* Case Studies */}
        <ScrollReveal className="shell" delayMs={120}>
          <section className="flex flex-col gap-10">
          <SectionTitle
            eyebrow="Architecture Case Studies"
            title="System-level outcomes, not feature demos"
            subtitle="Each case study includes problem statement, constraints, architecture decisions, trade-offs, metrics, scaling strategy, and failure mitigation."
          />
          <div className="grid-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
          </section>
        </ScrollReveal>

        {/* Technical Writing */}
        <ScrollReveal className="shell" delayMs={160}>
          <section className="flex flex-col gap-10">
          <SectionTitle
            eyebrow="Technical Writing"
            title="Depth communicated through principled writing"
            subtitle="Articles are focused on reliability, consistency, scaling, and practical trade-offs in production engineering."
          />
          <div className="grid-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          </section>
        </ScrollReveal>

        {/* Operational Maturity Footnote */}
        <ScrollReveal className="shell" delayMs={200}>
          <section className="glass-card p-10 flex flex-col items-center text-center gap-8 relative overflow-hidden bg-gradient-to-b from-transparent to-[#DDFF00]/5">
            <SectionTitle
              eyebrow="Operational Maturity"
              title="Reproducible engineering standards"
              subtitle="This portfolio includes simulated incident postmortems, architecture decisions, and repository standards that mirror production teams."
            />
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/postmortems" className="pill hover:bg-[#111118]">
                <svg className="w-4 h-4 mr-1 text-[#FF7A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Incident postmortems
              </Link>
              <Link href="/system-design" className="pill hover:bg-[#111118]">
                <svg className="w-4 h-4 mr-1 text-[#44FFD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Public design documents
              </Link>
              <Link href="/writing" className="pill hover:bg-[#111118]">
                <svg className="w-4 h-4 mr-1 text-[#DDFF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                Technical articles
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </div>
  );
}
