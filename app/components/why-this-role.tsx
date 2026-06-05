import { whyThisRole } from "../lib/content";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function WhyThisRole() {
  return (
    <section
      id="why"
      className="border-t border-border bg-background-alt px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>{whyThisRole.title}</SectionLabel>
          <h2
            id="why-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            {whyThisRole.intro}
          </h2>
        </FadeIn>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          {whyThisRole.points.map((point, index) => (
            <FadeIn key={point} delay={index * 60}>
              <li className="border border-border bg-background px-6 py-5 font-sans text-sm leading-relaxed text-foreground-muted md:text-base">
                {point}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
