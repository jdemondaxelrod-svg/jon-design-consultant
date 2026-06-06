import {
  resumeCoreStrengths,
  resumeEducation,
  resumeExperience,
  resumeHeader,
  resumeProfile,
} from "../lib/resume-verbatim";
import { siteConfig } from "../lib/site";
import { ResumeClosingNote } from "./resume-closing-note";
import { ResumePrintButton } from "./resume-print-button";
import { ResumeSectionLabel } from "./resume-section-label";

function ExperienceRole({
  org,
  location,
  title,
  period,
  intro,
  bullets,
}: (typeof resumeExperience)[number]) {
  return (
    <article className="py-8 first:pt-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-sans text-sm font-semibold tracking-wide text-foreground uppercase">
          {org}
          <span className="font-normal text-foreground-muted">
            {" "}
            | {location}
          </span>
        </p>
        <p className="font-sans text-sm text-foreground-subtle">{period}</p>
      </div>
      <p className="mt-1 font-sans text-sm text-foreground-muted">{title}</p>
      {intro ? (
        <p className="mt-4 font-sans text-sm leading-relaxed text-foreground-muted">
          {intro}
        </p>
      ) : null}
      {bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 font-sans text-sm leading-relaxed text-foreground-muted"
            >
              <span className="text-accent" aria-hidden>
                ●
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

type ResumePageContentProps = {
  embedded?: boolean;
};

export function ResumePageContent({ embedded = false }: ResumePageContentProps) {
  const NameTag = embedded ? "h2" : "h1";

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:px-0 md:py-24 print:max-w-none print:py-0">
      <header className="border-b border-border-strong pb-10">
        <NameTag className="font-serif text-[clamp(2rem,5vw,2.5rem)] leading-tight font-medium tracking-[-0.02em] text-foreground">
          {resumeHeader.name}
        </NameTag>
        <p className="mt-3 font-sans text-[0.7rem] tracking-[0.18em] text-foreground-muted uppercase">
          {resumeHeader.titleLine}
        </p>
        <p className="mt-4 font-sans text-sm text-foreground-subtle">
          {resumeHeader.location} | {resumeHeader.phone} |{" "}
          <a
            href={`mailto:${resumeHeader.email}`}
            className="text-foreground-muted transition-colors hover:text-foreground print:no-underline"
          >
            {resumeHeader.email}
          </a>
        </p>
      </header>

      <section className="mt-12" aria-labelledby="resume-profile">
        <ResumeSectionLabel id="resume-profile">Profile</ResumeSectionLabel>
        <div className="mt-5 space-y-4">
          {resumeProfile.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-sm leading-relaxed text-foreground-muted md:text-[0.95rem]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="resume-strengths">
        <ResumeSectionLabel id="resume-strengths">
          Core Strengths
        </ResumeSectionLabel>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {resumeCoreStrengths.map((strength) => (
            <li
              key={strength}
              className="font-sans text-sm leading-relaxed text-foreground-muted"
            >
              {strength}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="resume-experience">
        <ResumeSectionLabel id="resume-experience">Experience</ResumeSectionLabel>
        <div className="mt-5 divide-y divide-border">
          {resumeExperience.map((role) => (
            <ExperienceRole key={`${role.org}-${role.title}-${role.period}`} {...role} />
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border-strong pt-12" aria-labelledby="resume-education">
        <ResumeSectionLabel id="resume-education">Education</ResumeSectionLabel>
        <p className="mt-5 font-sans text-sm font-semibold text-foreground">
          {resumeEducation.school}
        </p>
        <p className="mt-1 font-sans text-sm text-foreground-muted">
          {resumeEducation.degree}
        </p>
      </section>

      <ResumeClosingNote />

      <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-10 print:hidden">
        <ResumePrintButton />
        {embedded ? null : (
          <a
            href="/"
            className="inline-flex items-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground"
          >
            Back to application
          </a>
        )}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-sans text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          {siteConfig.email}
        </a>
      </div>
    </article>
  );
}
