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
              At the intersection of home, design, and customer experience
            </h2>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:pt-2" delay={160}>
            <div className="space-y-6 font-sans text-base leading-[1.75] text-foreground-muted md:text-[1.05rem]">
              <p>
                My work sits at the intersection of residential remodeling,
                consultative sales, customer experience strategy, business
                development, product management, and hands-on construction. I
                help homeowners navigate complex decisions and create
                environments that are functional, beautiful, and built around how
                people actually live.
              </p>
              <p>
                I own and operate The Clintonville Handyman, a residential
                remodeling, repair, and accessibility services company serving
                homeowners throughout Central Ohio. Working directly with 120+
                homeowners, I have developed practical expertise in
                homeowner consultation, project scoping, estimating, construction
                problem-solving, accessibility planning, and business operations.
              </p>
              <p>
                I also founded Éliane Design and The Karole Foundation —
                organizations focused on accessibility, aging-in-place, and
                helping people remain safe and independent at home. Together,
                these ventures reflect a design-forward approach to residential
                problem solving: practical, human-centered, and grounded in the
                lived realities of the home.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
