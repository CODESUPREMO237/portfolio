import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types/portfolio";
import { ScrollReveal } from "@/components/scroll-reveal";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <ScrollReveal>
      <article className="glass-card p-6 flex flex-col gap-4 group">
        <Image
          src={caseStudy.diagramPath}
          alt={`${caseStudy.title} architecture preview`}
          width={1200}
          height={620}
          style={{ width: "100%", height: "auto", borderRadius: "0.8rem", border: "1px solid rgba(221,255,0,0.1)" }}
        />
        <div className="flex flex-col gap-2.5 items-start">
          <span className="pill primary text-xs shrink-0">{caseStudy.domain}</span>
          <h3 className="text-xl font-semibold text-[#F0EDE8] group-hover:text-[#DDFF00] transition-colors leading-snug">{caseStudy.title}</h3>
        </div>

        <p className="text-[#9A9AAA] leading-relaxed flex-grow">{caseStudy.summary}</p>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#252535]">
          {caseStudy.metrics.map((metric) => (
            <span key={metric.label} className="text-xs px-2.5 py-1 rounded-md bg-[#111118] text-[#F0EDE8] border border-[#252535]">
              <span className="text-[#9A9AAA] mr-1">{metric.label}:</span>
              <span className="font-medium text-[#DDFF00]">{metric.value}</span>
            </span>
          ))}
        </div>

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="mt-2 inline-flex items-center text-sm font-semibold text-[#44FFD2] hover:text-[#DDFF00] group-hover:translate-x-1 transition-all"
        >
          View architecture case study <span className="ml-1">{"->"}</span>
        </Link>
      </article>
    </ScrollReveal>
  );
}
