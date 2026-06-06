import { resumeClosingNote } from "../lib/resume-verbatim";

export function ResumeClosingNote() {
  return (
    <section
      aria-label="Closing note"
      className="hidden print:block print:break-before-page"
    >
      <div className="border-t border-border-strong pt-12">
        <h2 className="font-serif text-2xl font-medium tracking-[-0.02em] text-foreground">
          {resumeClosingNote.title}
        </h2>

        <div className="mt-8 max-w-2xl space-y-4">
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
    </section>
  );
}
