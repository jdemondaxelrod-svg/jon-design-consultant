type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-sans text-[0.65rem] tracking-[0.2em] text-foreground-subtle uppercase">
      {children}
    </p>
  );
}
