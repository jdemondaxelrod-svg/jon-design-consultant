import { learnedInsideHomesV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";
import { SectionLabel } from "../section-label";

export function LearnedInsideHomesV2() {
  return (
    <section
      id="principles"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="principles-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>{learnedInsideHomesV2.title}</SectionLabel>
          <h2
            id="principles-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            {learnedInsideHomesV2.headline}
          </h2>
        </FadeIn>

        <div className="mt-8 max-w-3xl space-y-5 md:space-y-6">
          {learnedInsideHomesV2.paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 50}>
              <p className="font-sans text-base leading-relaxed text-foreground-muted md:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

        <ul className="mt-14 divide-y divide-border border-t border-border">
          {learnedInsideHomesV2.principles.map((principle, index) => (
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
