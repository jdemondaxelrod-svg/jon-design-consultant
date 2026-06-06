"use client";

import { useEffect, useState } from "react";
import { ResumeClosingNoteLightbox } from "./resume-closing-note-lightbox";

export function ResumePrintButton() {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const onAfterPrint = () => setShowNote(true);
    window.addEventListener("afterprint", onAfterPrint);
    return () => window.removeEventListener("afterprint", onAfterPrint);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted print:hidden"
      >
        Print / Save PDF
      </button>

      <ResumeClosingNoteLightbox
        open={showNote}
        onClose={() => setShowNote(false)}
      />
    </>
  );
}
