import { experienceSnapshot } from "../lib/content";
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
          <SectionLabel>Experience snapshot</SectionLabel>
          <h2
            id="experience-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            A career built on helping people decide.
          </h2>
        </FadeIn>

        <ul className="mt-14 divide-y divide-border border-t border-border">
          {experienceSnapshot.map((entry, index) => (
            <FadeIn key={entry.org} delay={index * 60}>
              <li className="grid gap-2 py-8 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8 md:py-10">
                <div>
                  <p className="font-sans text-base font-medium text-foreground md:text-lg">
                    {entry.org}
                  </p>
                  <p className="mt-1 font-sans text-sm text-foreground-muted">
                    {entry.title}
                  </p>
                </div>
                <p className="font-sans text-sm whitespace-nowrap text-foreground-subtle">
                  {entry.period}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
