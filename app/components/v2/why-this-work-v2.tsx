import { whyThisWorkV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";
import { SectionLabel } from "../section-label";

export function WhyThisWorkV2() {
  return (
    <section
      id="why-this-work"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="why-this-work-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>{whyThisWorkV2.title}</SectionLabel>
          <h2 id="why-this-work-heading" className="sr-only">
            {whyThisWorkV2.title}
          </h2>
        </FadeIn>

        <div className="mt-10 max-w-3xl space-y-6 md:space-y-8">
          {whyThisWorkV2.paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 60}>
              <p
                className={`font-sans leading-relaxed text-foreground-muted ${
                  index === 0
                    ? "font-serif text-[clamp(1.5rem,3.5vw,2rem)] text-foreground"
                    : "text-base md:text-lg"
                }`}
              >
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
