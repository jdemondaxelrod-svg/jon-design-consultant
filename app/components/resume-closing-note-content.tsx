import { resumeClosingNote } from "../lib/resume-verbatim";

type ClosingNoteContentProps = {
  showTopBorder?: boolean;
  titleId?: string;
};

export function ClosingNoteContent({
  showTopBorder = false,
  titleId,
}: ClosingNoteContentProps) {
  return (
    <div className={showTopBorder ? "border-t border-border-strong pt-12" : undefined}>
      <h2
        id={titleId}
        className="font-serif text-2xl font-medium tracking-[-0.02em] text-foreground"
      >
        {resumeClosingNote.title}
      </h2>

      <div className="mt-8 space-y-4">
        {resumeClosingNote.body.map((line) => (
          <p
            key={line}
            className="font-sans text-sm leading-relaxed text-foreground-muted"
          >
            {line}
          </p>
        ))}
      </div>

      <p className="mt-10 font-sans text-sm text-foreground-subtle">
        {resumeClosingNote.signature}
      </p>
    </div>
  );
}
