"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";
import { ResumeClosingNoteLightbox } from "./resume-closing-note-lightbox";

const primaryButtonClassName =
  "inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted print:hidden";

const secondaryButtonClassName =
  "inline-flex items-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground print:hidden";

export function ResumePrintButton() {
  const [showNote, setShowNote] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const onAfterPrint = () => setShowNote(true);
    window.addEventListener("afterprint", onAfterPrint);
    return () => window.removeEventListener("afterprint", onAfterPrint);
  }, []);

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

  return (
    <>
      <button
        type="button"
        onClick={() => window.print()}
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

      <ResumeClosingNoteLightbox
        open={showNote}
        onClose={() => setShowNote(false)}
      />
    </>
  );
}
