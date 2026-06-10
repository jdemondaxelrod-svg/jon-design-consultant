import { hero } from "../lib/content";
import { siteConfig } from "../lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[100svh] flex-col pt-24 pb-8 md:min-h-[90vh] md:justify-end md:pb-28 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-6 md:block md:flex-none md:px-10 lg:px-16">
        <div>
          <h1
            id="hero-heading"
            className="max-w-4xl font-serif text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.1] font-medium tracking-[-0.02em] text-foreground"
          >
            {hero.headline}
          </h1>

          <div
            className="my-10 h-px w-full max-w-xl bg-border-strong md:my-14"
            aria-hidden
          />

          <div className="max-w-3xl space-y-5 md:space-y-6">
            {hero.body.map((paragraph) => (
              <p
                key={paragraph}
                className="font-sans text-base leading-relaxed text-foreground-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-12 md:flex md:flex-wrap">
          <a
            href={siteConfig.resumeAnchor}
            className="inline-flex w-full items-center justify-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground hover:text-foreground"
          >
            Contact Jon
          </a>
        </div>
      </div>
    </section>
  );
}
