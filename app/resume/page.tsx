import { ResumePageContent } from "../components/resume-page-content";
import { ResumeStickyBar } from "../components/resume-print-button";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { siteConfig } from "../lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume · ${siteConfig.name}`,
  description: `Resume of ${siteConfig.name} — ${resumeHeaderDescription()}`,
};

function resumeHeaderDescription() {
  return "Residential Design Consultant, Remodeling, Consultative Sales, Columbus, Ohio";
}

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background pt-24 pb-24 print:bg-white print:pt-0 lg:pb-0">
        <ResumePageContent />
      </main>
      <SiteFooter />
      <ResumeStickyBar />
    </>
  );
}
