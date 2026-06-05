import { siteConfig } from "../lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col justify-end bg-night px-6 pt-32 pb-16 text-paper md:px-10 md:pb-24 lg:px-14 lg:pb-28">
        <p className="mb-6 font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
          Residential design consultant
        </p>
        <h1
          id="hero-heading"
          className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.03em]"
        >
          Jon
          <br />
          DeMond-
          <br />
          Axelrod
        </h1>
        <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-stone-light">
          {siteConfig.location}
        </p>
      </div>

      <div className="flex flex-col justify-end bg-paper px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mb-10 h-px w-16 bg-clay" aria-hidden />
        <p className="max-w-lg font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.35] text-ink">
          I help homeowners make confident decisions about remodeling,
          accessibility, and aging-in-place.
        </p>
        <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-stone">
          Entrepreneur and consultative sales leader with hands-on residential
          experience and a background in product strategy, digital experience,
          and brand partnerships.
        </p>
        <a
          href="#contact"
          className="mt-12 inline-flex w-fit items-center gap-3 font-sans text-[0.7rem] font-medium tracking-[0.14em] text-clay uppercase transition-opacity hover:opacity-70"
        >
          Get in touch
          <span aria-hidden className="text-base">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
