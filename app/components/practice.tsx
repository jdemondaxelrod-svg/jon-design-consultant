import { responsibilities } from "../lib/content";
import { FadeIn } from "./fade-in";

export function Practice() {
  return (
    <section
      id="responsibilities"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
      aria-labelledby="responsibilities-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
            Key responsibilities
          </p>
          <h2
            id="responsibilities-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em] text-ink"
          >
            Built for the full design-to-build consultant workflow.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone">
            From the first phone call through final walkthrough — qualifying,
            documenting, designing in SoftPlan, specifying, presenting, and
            staying engaged on site.
          </p>
        </FadeIn>

        <ol className="mt-16 space-y-0 divide-y divide-paper-deep border-t border-paper-deep">
          {responsibilities.map((item, index) => (
            <FadeIn key={item.title} delay={index * 60}>
              <li className="grid gap-6 py-12 md:grid-cols-[6rem_1fr] md:gap-12 md:py-14">
                <p className="font-sans text-[0.65rem] tracking-[0.18em] text-clay uppercase">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="font-serif text-2xl leading-snug text-ink md:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-stone">
                    {item.body}
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
