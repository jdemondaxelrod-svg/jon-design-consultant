import { introV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";
import { SectionLabel } from "../section-label";

export function IntroV2() {
  return (
    <section
      id="intro"
      className="border-t border-border bg-background-alt px-6 py-20 md:px-10 md:py-28 lg:px-16"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Intro</SectionLabel>
          <h2
            id="intro-heading"
            className="sr-only"
          >
            Introduction
          </h2>
        </FadeIn>

        <div className="mt-8 max-w-3xl space-y-5 md:space-y-6">
          {introV2.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 50}>
              <p className="font-sans text-base leading-relaxed text-foreground-muted md:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
