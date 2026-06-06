"use client";

import { useEffect, useId, useRef } from "react";
import { ClosingNoteContent } from "./resume-closing-note-content";

type ResumeClosingNoteLightboxProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeClosingNoteLightbox({
  open,
  onClose,
}: ResumeClosingNoteLightboxProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[min(85vh,42rem)] w-full max-w-2xl overflow-y-auto border border-border-strong bg-background px-8 py-10 shadow-[0_24px_64px_rgba(42,40,38,0.12)] md:px-10 md:py-12"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 font-sans text-[0.65rem] tracking-[0.14em] text-foreground-subtle uppercase transition-colors hover:text-foreground"
        >
          Close
        </button>

        <ClosingNoteContent titleId={titleId} />
      </div>
    </div>
  );
}
