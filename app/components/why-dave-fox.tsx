import { whyDaveFox } from "../lib/content";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function WhyDaveFox() {
  return (
    <section
      id="why-dave-fox"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="why-dave-fox-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Why Dave Fox should talk to me</SectionLabel>
          <h2
            id="why-dave-fox-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            {whyDaveFox.lead}
          </h2>
          <p className="mt-8 max-w-3xl font-sans text-base leading-relaxed text-foreground-muted md:text-lg">
            {whyDaveFox.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
