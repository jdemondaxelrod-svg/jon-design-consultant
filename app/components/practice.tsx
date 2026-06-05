import { practiceAreas } from "../lib/content";
import { FadeIn } from "./fade-in";

export function Practice() {
  return (
    <section
      id="practice"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
      aria-labelledby="practice-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
            Practice
          </p>
          <h2
            id="practice-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em] text-ink"
          >
            Consultation that respects how people actually live.
          </h2>
        </FadeIn>

        <ol className="mt-16 space-y-0 divide-y divide-paper-deep border-t border-paper-deep">
          {practiceAreas.map((area, index) => (
            <FadeIn key={area.title} delay={index * 80}>
              <li className="grid gap-6 py-12 md:grid-cols-[6rem_1fr] md:gap-12 md:py-16">
                <p className="font-sans text-[0.65rem] tracking-[0.18em] text-clay uppercase">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                    {area.title}
                  </h3>
                  <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-stone">
                    {area.body}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
