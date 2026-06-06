import { ClosingNoteContent } from "./resume-closing-note-content";

export function ResumeClosingNote() {
  return (
    <section
      aria-label="Closing note"
      className="hidden print:block print:break-before-page"
    >
      <ClosingNoteContent showTopBorder />
    </section>
  );
}
