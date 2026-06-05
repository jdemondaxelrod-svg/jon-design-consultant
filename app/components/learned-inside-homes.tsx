import { learnedInsideHomes } from "../lib/content";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function LearnedInsideHomes() {
  return (
    <section
      id="principles"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="principles-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>What I&apos;ve learned inside homes</SectionLabel>
          <h2
            id="principles-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            Principles earned in the field.
          </h2>
        </FadeIn>

        <ul className="mt-14 divide-y divide-border border-t border-border">
          {learnedInsideHomes.map((principle, index) => (
            <FadeIn key={principle} delay={index * 50}>
              <li className="py-7 font-serif text-lg leading-snug text-foreground md:py-8 md:text-xl">
                {principle}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
