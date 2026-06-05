import { careerPath } from "../lib/content";
import { FadeIn } from "./fade-in";

export function Background() {
  return (
    <section
      id="background"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
      aria-labelledby="background-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
            Background
          </p>
          <h2
            id="background-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em] text-ink"
          >
            Product, partnerships, and conversion — before the jobsite.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone">
            Two decades of consultative sales, product strategy, and digital
            experience across publishing, consumer brands, and e-commerce — now
            applied to residential consultation and homeowner relationships.
          </p>
        </FadeIn>

        <ul className="mt-16 divide-y divide-paper-deep border-t border-paper-deep">
          {careerPath.map((role, index) => (
            <FadeIn key={`${role.org}-${role.period}`} delay={index * 50}>
              <li className="grid gap-3 py-8 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8 md:py-10">
                <p className="font-sans text-sm text-stone-light">
                  {role.period}
                </p>
                <div>
                  <p className="font-sans text-base font-medium text-ink">
                    {role.org}
                  </p>
                  <p className="mt-1 font-sans text-sm text-stone">
                    {role.title}
                  </p>
                  {role.note ? (
                    <p className="mt-2 font-sans text-sm text-clay">
                      {role.note}
                    </p>
                  ) : null}
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
