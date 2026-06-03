import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function Story() {
  return (
    <section
      id="story"
      className="border-t border-border bg-background-alt py-24 md:py-32"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel number="01" title="Story" />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5" delay={80}>
            <h2
              id="story-heading"
              className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-foreground"
            >
              From consultative sales to hands-on design-build practice
            </h2>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:pt-2" delay={160}>
            <div className="space-y-6 font-sans text-base leading-[1.75] text-foreground-muted md:text-[1.05rem]">
              <p>
                My career spans consultative sales, customer experience strategy,
                business development, product management, and hands-on
                residential remodeling. I have helped customers navigate complex
                decisions across education, consumer brands, digital products, and
                the home itself.
              </p>
              <p>
                Today I own and operate The Clintonville Handyman — a residential
                remodeling, repair, and accessibility company serving homeowners
                throughout Central Ohio. Through hundreds of customer
                interactions, I have developed deep expertise in homeowner
                consultation, project scoping, estimating, construction
                problem-solving, accessibility planning, and end-to-end customer
                experience. I conduct every consultation, estimate, procurement
                decision, and project management function personally.
              </p>
              <p>
                I also lead Éliane Design, a luxury accessibility and
                aging-in-place practice, and The Karole Foundation, advancing
                design-forward home safety through community partnerships. I am
                pursuing design / sales consultant roles with established
                design-build teams — bringing field-tested scoping discipline,
                specification experience, and the consultative communication
                homeowners and project managers rely on.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
