type ResumeSectionLabelProps = {
  id?: string;
  children: React.ReactNode;
};

export function ResumeSectionLabel({ id, children }: ResumeSectionLabelProps) {
  return (
    <h2
      id={id}
      className="font-sans text-[0.65rem] tracking-[0.2em] text-foreground-subtle uppercase"
    >
      {children}
    </h2>
  );
}
