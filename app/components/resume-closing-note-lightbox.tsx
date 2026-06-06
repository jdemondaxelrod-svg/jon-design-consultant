"use client";

import { useEffect, useId, useRef } from "react";
import { OneFinalThoughtExperience } from "./one-final-thought-experience";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background print:hidden">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex h-full w-full max-w-none items-center justify-center"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 z-10 font-sans text-[0.65rem] tracking-[0.14em] text-foreground-subtle uppercase transition-colors hover:text-foreground md:top-8 md:right-8"
        >
          Close
        </button>

        <OneFinalThoughtExperience titleId={titleId} active={open} />
      </div>
    </div>
  );
}
