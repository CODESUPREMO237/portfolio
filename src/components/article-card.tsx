import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/portfolio";
import { toReadableDate } from "@/lib/format";
import { ScrollReveal } from "@/components/scroll-reveal";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <ScrollReveal>
      <article className="glass-card p-6 flex flex-col gap-4 group">
        <Image
          src={article.diagramPath}
          alt={`${article.title} flow sketch`}
          width={1200}
          height={620}
          style={{ width: "100%", height: "auto", borderRadius: "0.8rem", border: "1px solid rgba(221,255,0,0.1)" }}
        />

        <div className="flex justify-between items-center text-sm text-[#9A9AAA] font-medium">
          <time dateTime={article.date}>{toReadableDate(article.date)}</time>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readTime}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[#F0EDE8] group-hover:text-[#44FFD2] transition-colors">{article.title}</h3>

        <p className="text-[#9A9AAA] leading-relaxed flex-grow">{article.summary}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {article.tags.map((tag) => (
            <span key={tag} className="pill accent text-xs py-1">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/writing/${article.slug}`}
          className="mt-2 text-sm font-semibold text-[#44FFD2] hover:text-[#DDFF00] inline-flex items-center group-hover:translate-x-1 transition-all"
        >
          Read article <span className="ml-1">{"->"}</span>
        </Link>
      </article>
    </ScrollReveal>
  );
}
