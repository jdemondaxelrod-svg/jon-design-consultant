"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";
import {
  notifyResumePrintRequested,
  useResumeClosingNote,
} from "./resume-closing-note-provider";

type ResumeActionButtonsProps = {
  variant: "inline" | "sticky";
};

function ResumeActionButtons({ variant }: ResumeActionButtonsProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownloadResume() {
    setIsDownloading(true);

    try {
      const response = await fetch("/api/resume/pdf");

      if (!response.ok) {
        throw new Error("Failed to generate resume PDF");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = siteConfig.resumeFilename;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.location.assign("/api/resume/pdf");
    } finally {
      setIsDownloading(false);
    }
  }

  const primaryButtonClassName =
    variant === "sticky"
      ? "inline-flex flex-1 items-center justify-center border border-foreground/20 bg-foreground px-4 py-3 font-sans text-[0.65rem] tracking-[0.1em] text-background uppercase transition-colors hover:bg-foreground-muted"
      : "inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted print:hidden";

  const secondaryButtonClassName =
    variant === "sticky"
      ? "inline-flex flex-1 items-center justify-center border border-border-strong px-4 py-3 font-sans text-[0.65rem] tracking-[0.1em] text-foreground uppercase transition-colors hover:border-foreground"
      : "inline-flex items-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground print:hidden";

  const buttons = (
    <>
      <button
        type="button"
        onClick={() => {
          notifyResumePrintRequested();
          window.print();
        }}
        className={primaryButtonClassName}
      >
        Print Resume
      </button>

      <button
        type="button"
        onClick={handleDownloadResume}
        disabled={isDownloading}
        className={secondaryButtonClassName}
        aria-busy={isDownloading}
      >
        {isDownloading ? "Preparing…" : "Download Resume"}
      </button>
    </>
  );

  if (variant === "sticky") {
    return <div className="flex gap-3">{buttons}</div>;
  }

  return buttons;
}

export function ResumePrintButton() {
  return (
    <div className="hidden gap-4 lg:flex">
      <ResumeActionButtons variant="inline" />
    </div>
  );
}

export function ResumeStickyBar() {
  const { isOpen: isClosingNoteOpen } = useResumeClosingNote();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const header = document.getElementById("resume-header");
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPastHeader =
          !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setIsVisible(scrolledPastHeader);
      },
      { threshold: 0 },
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const showBar = isVisible && !isClosingNoteOpen;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-sm pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 lg:hidden print:hidden ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
      aria-label="Resume actions"
      aria-hidden={!showBar}
    >
      <div className="mx-auto max-w-6xl">
        <ResumeActionButtons variant="sticky" />
      </div>
    </div>
  );
}
