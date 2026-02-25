import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FlowDiagramCard } from "@/components/flow-diagram-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articles } from "@/data/writing";
import { toReadableDate } from "@/lib/format";
import { getArticleContent } from "@/lib/article-content";

type WritingDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function WritingDetailPage({ params }: WritingDetailProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const articleContent = await getArticleContent(article.contentPath);

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500/30">
      <SiteHeader />

      <main className="flex-grow shell py-8 flex flex-col gap-10">
        <ScrollReveal>
          <nav>
            <Link href="/writing" className="pill hover:bg-slate-800 transition-colors inline-flex group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Technical Writing
            </Link>
          </nav>
        </ScrollReveal>

        <ScrollReveal delayMs={50}>
          <section className="glass-card p-8 md:p-12 flex flex-col gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="flex justify-between items-center text-sm font-medium text-slate-400">
              <time dateTime={article.date} className="flex items-center gap-2 text-indigo-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {toReadableDate(article.date)}
              </time>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 text-balance leading-[1.15]">{article.title}</h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-4xl border-l-2 border-indigo-500/30 pl-4 my-2">{article.summary}</p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 mt-2">
              {article.tags.map((tag) => (
                <span key={tag} className="pill accent text-sm px-4 py-1.5 shadow-sm shadow-indigo-900/10">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          <ScrollReveal delayMs={90}>
            <section className="glass-card p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-slate-800/50 pb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-200">Key Takeaways</h2>
              </div>

              <ul className="flex flex-col gap-5">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-4 items-start text-slate-300">
                    <span className="text-indigo-400 mt-1 flex-shrink-0">{"->"}</span>
                    <span className="leading-relaxed text-lg">{takeaway}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-slate-800/50">
                <div className="prose prose-invert prose-indigo max-w-none prose-p:text-slate-300 prose-headings:text-slate-100 prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-slate-200 prose-code:text-sky-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-li:text-slate-300 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{articleContent}</ReactMarkdown>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal className="sticky top-8" delayMs={120}>
            <aside>
              <FlowDiagramCard
                title="Architecture Flow"
                diagramPath={article.diagramPath}
                alt={`${article.title} visual flow`}
                caption="Sequence diagram for the core reasoning path used in the article."
              />
            </aside>
          </ScrollReveal>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
