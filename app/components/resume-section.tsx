import { ResumePageContent } from "./resume-page-content";

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="scroll-mt-24 border-t border-border bg-background px-6 md:px-10 lg:px-16"
      aria-label="Resume"
    >
      <ResumePageContent embedded />
    </section>
  );
}
