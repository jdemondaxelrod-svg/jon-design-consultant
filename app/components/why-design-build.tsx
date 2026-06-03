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
          <SectionLabel number="06" title="Why design-build" />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5" delay={80}>
            <h2
              id="design-build-heading"
              className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-foreground"
            >
              One team, from first call to final walkthrough
            </h2>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:pt-1" delay={160}>
            <div className="space-y-6 font-sans text-base leading-[1.75] text-foreground-muted md:text-[1.05rem]">
              <p>
                Upscale remodeling succeeds when design consultants, interior
                designers, and project managers share a single, accurate picture
                of the work. That integration — design, specify, estimate, and
                build — is what design-build does best, and what homeowners
                ultimately feel in the quality of communication and outcomes.
              </p>
              <p>
                Operating The Clintonville Handyman gave me end-to-end
                accountability — consultations, estimates, procurement, project
                management, and on-site problem-solving across 500+ residential
                tasks. That is the same discipline design-build teams need at
                scale: someone who simplifies complexity, communicates honestly,
                and translates goals into buildable scope.
              </p>
              <p>
                I am drawn to established design-build firms where consultative
                sales, specification rigor, and design craft work together — so
                every kitchen, bath, addition, and whole-house program receives
                the standard of care Central Ohio families have come to trust in
                my work.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Designer & PM partnership",
                "Accurate specs & estimates",
                "Homeowner trust through delivery",
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
