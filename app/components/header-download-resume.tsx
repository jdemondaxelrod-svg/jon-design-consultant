"use client";

import { useState } from "react";
import { downloadResumePdf } from "../lib/download-resume";
import { siteConfig } from "../lib/site";

export function HeaderDownloadResume() {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {
    setIsDownloading(true);

    try {
      await downloadResumePdf();
    } catch {
      window.location.assign(siteConfig.resumePdfHref);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isDownloading}
      aria-busy={isDownloading}
      className="inline-flex shrink-0 items-center border border-foreground/20 bg-foreground px-4 py-2 font-sans text-[0.65rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 disabled:opacity-60"
    >
      {isDownloading ? "Preparing…" : "Download Resume"}
    </button>
  );
}
