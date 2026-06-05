import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function WhyDesignBuild() {
  return (
    <section
      id="design-build"
      className="py-24 md:py-32"
      aria-labelledby="design-build-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel number="06" title="Approach" />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5" delay={80}>
            <h2
              id="design-build-heading"
              className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-foreground"
            >
              Practical residential work, guided by customer experience
            </h2>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:pt-1" delay={160}>
            <div className="space-y-6 font-sans text-base leading-[1.75] text-foreground-muted md:text-[1.05rem]">
              <p>
                Residential work is personal. Homeowners are making decisions
                about money, comfort, safety, aesthetics, family routines, and
                future independence — often all at once. Good consultation gives
                those decisions structure without losing sight of the person
                living through them.
              </p>
              <p>
                Operating The Clintonville Handyman gave me end-to-end
                accountability — consultations, estimates, procurement, project
                management, invoicing, and on-site problem-solving across 500+
                residential tasks. That discipline is directly transferable to
                design and remodeling teams: clarify the goal, understand the
                constraints, communicate honestly, and translate ideas into
                buildable scope.
              </p>
              <p>
                My background in product strategy and business development adds
                another layer: customer journeys, stakeholder management,
                specification, prioritization, and presentation. Paired with
                hands-on remodeling and accessibility expertise, it creates a
                balanced approach to helping people make confident decisions
                about their homes.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Clear goals & priorities",
                "Accurate scope & estimates",
                "Human-centered delivery",
              ].map((item) => (
                <li
                  key={item}
                  className="border-t border-border-strong pt-4 font-sans text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
