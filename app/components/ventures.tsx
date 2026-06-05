import { fieldExperience } from "../lib/content";
import { FadeIn } from "./fade-in";

export function Ventures() {
  return (
    <section
      id="experience"
      className="bg-night px-6 py-24 text-paper md:px-10 md:py-32 lg:px-14"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
            Field experience
          </p>
          <h2
            id="experience-heading"
            className="mt-4 max-w-xl font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em]"
          >
            Hands-on residential work in Central Ohio.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone-light">
            Owner-operated remodeling practice with direct homeowner
            relationships — the foundation for upscale design and sales
            consultation.
          </p>
        </FadeIn>

        <ul className="mt-16 space-y-16 md:space-y-20">
          {fieldExperience.map((item, index) => (
            <FadeIn key={item.name} delay={index * 100}>
              <li className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-[4rem_1fr_auto] md:gap-12">
                <p className="font-sans text-[0.65rem] tracking-[0.18em] text-clay-soft uppercase">
                  {item.index}
                </p>
                <div>
                  <h3 className="font-serif text-2xl leading-snug md:text-[1.75rem]">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-stone-light">
                    {item.role}
                  </p>
                  <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-stone-light/90">
                    {item.summary}
                  </p>
                </div>
                <p className="font-sans text-sm whitespace-nowrap text-stone-light md:text-right">
                  {item.period}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
