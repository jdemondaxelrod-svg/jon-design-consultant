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

function RoleBullets({ bullets }: { bullets: readonly string[] }) {
  if (bullets.length === 0) return null;

  return (
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
  );
}

function ExperienceRole(role: (typeof resumeExperience)[number]) {
  const { org, location, intro } = role;
  const hasPositions = "positions" in role && role.positions;

  return (
    <article className="py-8 first:pt-0">
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-sans text-sm font-semibold tracking-wide text-foreground uppercase">
            {org}
            <span className="hidden font-normal text-foreground-muted sm:inline">
              {" "}
              | {location}
            </span>
          </p>
          {!hasPositions ? (
            <p className="shrink-0 font-sans text-sm text-foreground-subtle">
              {role.period}
            </p>
          ) : null}
        </div>
        <p className="mt-0.5 font-sans text-sm text-foreground-muted sm:hidden">
          {location}
        </p>
      </div>

      {intro ? (
        <p className="mt-4 font-sans text-sm leading-relaxed text-foreground-muted">
          {intro}
        </p>
      ) : null}

      {hasPositions ? (
        <div className="mt-3 space-y-5">
          {role.positions.map((position) => (
            <div key={`${position.title}-${position.period}`}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-sans text-sm text-foreground-muted">
                  {position.title}
                </p>
                <p className="shrink-0 font-sans text-sm text-foreground-subtle">
                  {position.period}
                </p>
              </div>
              <RoleBullets bullets={position.bullets} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="mt-1 font-sans text-sm text-foreground-muted">
            {role.title}
          </p>
          <RoleBullets bullets={role.bullets} />
        </>
      )}
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
      <header
        id="resume-header"
        className="border-b border-border-strong pb-10"
      >
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
            <ExperienceRole
              key={
                "positions" in role && role.positions
                  ? `${role.org}-${role.positions.map((p) => p.period).join("-")}`
                  : `${role.org}-${role.title}-${role.period}`
              }
              {...role}
            />
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
