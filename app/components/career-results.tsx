import { careerHighlights, careerStats } from "../lib/content";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function CareerResults() {
  return (
    <section
      id="career-results"
      className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="career-results-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Career results</SectionLabel>
          <h2
            id="career-results-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            Sales and customer experience — with numbers behind the narrative.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-foreground-muted">
            Before residential work, I spent two decades driving measurable
            outcomes in consultative sales, product strategy, and digital
            experience at national consumer brands.
          </p>
        </FadeIn>

        <ul className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {careerStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 60}>
              <li>
                <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-none font-medium text-foreground">
                  {stat.value}
                </p>
                <p className="mt-3 font-sans text-xs leading-relaxed text-foreground-muted md:text-sm">
                  {stat.label}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>

        <ul className="mt-16 divide-y divide-border border-t border-border">
          {careerHighlights.map((role, index) => (
            <FadeIn key={`${role.org}-${role.period}`} delay={index * 50}>
              <li className="py-8 md:py-10">
                <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
                  <div>
                    <p className="font-sans text-base font-medium text-foreground md:text-lg">
                      {role.org}
                    </p>
                    <p className="mt-1 font-sans text-sm text-foreground-muted">
                      {role.title}
                    </p>
                  </div>
                  <p className="font-sans text-sm whitespace-nowrap text-foreground-subtle">
                    {role.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {role.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-3 font-sans text-sm leading-relaxed text-foreground-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {result}
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
