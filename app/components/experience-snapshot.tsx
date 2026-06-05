import { resumeExperience } from "../lib/resume-verbatim";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function ExperienceSnapshot() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-background-alt px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
          <h2
            id="experience-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            A career built on helping people decide.
          </h2>
        </FadeIn>

        <ul className="mt-14 divide-y divide-border border-t border-border">
          {resumeExperience.map((role, index) => (
            <FadeIn
              key={`${role.org}-${role.title}-${role.period}`}
              delay={index * 40}
            >
              <li className="py-8 md:py-10">
                <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
                  <div>
                    <p className="font-sans text-base font-medium text-foreground md:text-lg">
                      {role.org}
                    </p>
                    <p className="mt-1 font-sans text-sm text-foreground-muted">
                      {role.title} · {role.location}
                    </p>
                  </div>
                  <p className="font-sans text-sm whitespace-nowrap text-foreground-subtle">
                    {role.period}
                  </p>
                </div>
                {role.intro ? (
                  <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-foreground-muted">
                    {role.intro}
                  </p>
                ) : null}
                {role.bullets.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 font-sans text-sm leading-relaxed text-foreground-muted"
                      >
                        <span className="text-accent" aria-hidden>
                          –
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
