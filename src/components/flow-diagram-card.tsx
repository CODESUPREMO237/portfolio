import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

type FlowDiagramCardProps = {
  title: string;
  diagramPath: string;
  alt: string;
  caption?: string;
};

export function FlowDiagramCard({ title, diagramPath, alt, caption }: FlowDiagramCardProps) {
  return (
    <ScrollReveal>
      <section className="glass-card p-6 flex flex-col gap-4 group">
        <div className="flex flex-col gap-2.5 items-start border-b border-[#252535] pb-4">
          <span className="pill accent text-xs py-1 shrink-0">Flow Sketch</span>
          <h3 className="text-lg font-semibold text-[#F0EDE8] m-0 group-hover:text-[#44FFD2] transition-colors leading-snug">{title}</h3>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl border border-[#252535] bg-[#111118] group-hover:border-[#DDFF00]/20 transition-colors">
          <Image src={diagramPath} alt={alt} width={1200} height={620} style={{ width: "100%", height: "auto" }} />
        </div>

        {caption && (
          <p className="text-sm text-[#9A9AAA] leading-relaxed m-0 mt-2 border-l-2 border-[#44FFD2]/30 pl-3">
            {caption}
          </p>
        )}
      </section>
    </ScrollReveal>
  );
}
