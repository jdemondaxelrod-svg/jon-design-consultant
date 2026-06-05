import { careerPath, roleFit } from "../lib/content";
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
            Sales, specification, and client presentation at scale.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone">
            Twenty-five years across consultative sales, product strategy, and
            digital experience — skills that translate directly to qualifying
            prospects, presenting cost analysis, and adapting to every client
            personality.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-14 rounded-sm border border-paper-deep bg-paper-deep p-8 md:p-10">
            <p className="font-sans text-[0.65rem] tracking-[0.18em] text-clay uppercase">
              Requirements alignment
            </p>
            <ul className="mt-6 space-y-3">
              {roleFit.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-sans text-sm leading-relaxed text-stone md:text-base"
                >
                  <span className="text-clay" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <ul className="mt-16 divide-y divide-paper-deep border-t border-paper-deep">
          {careerPath.map((role, index) => (
            <FadeIn key={`${role.org}-${role.period}`} delay={index * 50}>
              <li className="grid gap-3 py-8 md:grid-cols-[10rem_1fr] md:items-baseline md:gap-8 md:py-10">
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
