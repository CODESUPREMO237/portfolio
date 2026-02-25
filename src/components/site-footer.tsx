export function SiteFooter() {
  return (
    <footer className="shell py-8 mt-12">
      <div className="glass-card px-8 py-6 flex justify-between items-center gap-6 flex-wrap text-[#9A9AAA] text-sm border-t border-[#DDFF00]/10">
        <span className="font-medium tracking-wide">
          Senior Software Engineer <span className="text-[#252535] mx-2">|</span> 7 years <span className="text-[#252535] mx-2">|</span> Systems, Reliability, Architecture
        </span>
        <span className="font-mono text-xs bg-[#111118] px-3 py-1.5 rounded-md border border-[#252535] text-[#44FFD2]">
          Next.js 16 <span className="text-[#252535] mx-1">/</span> App Router
        </span>
      </div>
    </footer>
  );
}
