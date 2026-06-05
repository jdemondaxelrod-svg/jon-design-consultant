import { ventures } from "../lib/content";
import { FadeIn } from "./fade-in";

export function Ventures() {
  return (
    <section
      id="ventures"
      className="bg-night px-6 py-24 text-paper md:px-10 md:py-32 lg:px-14"
      aria-labelledby="ventures-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
            Now
          </p>
          <h2
            id="ventures-heading"
            className="mt-4 max-w-xl font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em]"
          >
            Three ventures, one through-line.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone-light">
            Home, design, accessibility, and independence — practical,
            human-centered, and grounded in real residential work.
          </p>
        </FadeIn>

        <ul className="mt-16 space-y-16 md:space-y-20">
          {ventures.map((venture, index) => (
            <FadeIn key={venture.name} delay={index * 100}>
              <li className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-[4rem_1fr_auto] md:gap-12">
                <p className="font-sans text-[0.65rem] tracking-[0.18em] text-clay-soft uppercase">
                  {venture.index}
                </p>
                <div>
                  <h3 className="font-serif text-2xl leading-snug md:text-[1.75rem]">
                    {venture.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-stone-light">
                    {venture.role}
                  </p>
                  <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-stone-light/90">
                    {venture.summary}
                  </p>
                </div>
                <p className="font-sans text-sm whitespace-nowrap text-stone-light md:text-right">
                  {venture.period}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
