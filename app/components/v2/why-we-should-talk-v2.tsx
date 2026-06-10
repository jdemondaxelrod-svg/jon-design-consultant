import { whyWeShouldTalkV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";
import { SectionLabel } from "../section-label";

export function WhyWeShouldTalkV2() {
  return (
    <section
      id="why-we-should-talk"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="why-we-should-talk-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>{whyWeShouldTalkV2.title}</SectionLabel>
          <h2
            id="why-we-should-talk-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            {whyWeShouldTalkV2.lead}
          </h2>
        </FadeIn>

        <div className="mt-8 max-w-3xl space-y-5 md:space-y-6">
          {whyWeShouldTalkV2.paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 50}>
              <p className="font-sans text-base leading-relaxed text-foreground-muted md:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#resume"
              className="inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground hover:text-foreground"
            >
              Contact Jon
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
