type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <span className="pill primary">{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F0EDE8] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#9A9AAA] max-w-3xl leading-relaxed text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
