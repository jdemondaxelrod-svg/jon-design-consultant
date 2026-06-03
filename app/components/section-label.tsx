type SectionLabelProps = {
  number: string;
  title: string;
};

export function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="flex items-baseline gap-4 mb-10 md:mb-14">
      <span className="font-sans text-xs tracking-[0.2em] uppercase text-foreground-subtle">
        {number}
      </span>
      <span
        className="h-px flex-1 max-w-16 bg-border-strong animate-line-grow opacity-0-initial"
        aria-hidden
      />
      <span className="font-sans text-xs tracking-[0.18em] uppercase text-foreground-muted">
        {title}
      </span>
    </div>
  );
}
