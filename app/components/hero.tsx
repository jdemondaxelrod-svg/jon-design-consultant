import { hero } from "../lib/content";
import { siteConfig } from "../lib/site";

const [heroLead, ...heroSupporting] = hero.body;

const heroApplicationLine = `Application for ${siteConfig.targetRole}, ${siteConfig.targetCompany}`;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center pb-16 pt-32 md:min-h-[90vh] md:justify-end md:pb-28 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div
        className="hero-application-ticker absolute top-20 right-0 left-0 border-b border-border bg-background-alt py-3 md:hidden"
        aria-label={heroApplicationLine}
      >
        <div className="hero-application-ticker-track">
          <span className="shrink-0 px-8 font-sans text-[0.65rem] tracking-[0.14em] text-foreground-subtle uppercase">
            {heroApplicationLine}
          </span>
          <span
            className="hero-application-ticker-duplicate shrink-0 px-8 font-sans text-[0.65rem] tracking-[0.14em] text-foreground-subtle uppercase"
            aria-hidden
          >
            {heroApplicationLine}
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="hero-intro max-w-4xl">
          <p
            id="hero-name"
            className="hero-eyebrow-line font-serif text-[clamp(1.75rem,6vw,2.25rem)] leading-tight font-medium tracking-[-0.02em] text-foreground"
            style={{ animationDelay: "0ms" }}
          >
            {siteConfig.name}
          </p>

          <h1
            id="hero-heading"
            className="hero-eyebrow-line mt-2 max-w-3xl font-serif text-[clamp(1.625rem,5.75vw,4.25rem)] leading-[1.12] font-medium tracking-[-0.02em] text-foreground md:mt-3"
            style={{ animationDelay: "280ms" }}
          >
            {hero.headline}
          </h1>
        </div>

        <p
          className="hero-eyebrow-line mt-6 hidden max-w-3xl font-sans text-sm leading-relaxed text-foreground-subtle md:mt-8 md:block md:text-[0.95rem]"
          style={{ animationDelay: "560ms" }}
        >
          {heroApplicationLine}
        </p>

        <p
          className="hero-eyebrow-line hero-lead mt-6 max-w-3xl font-sans text-base leading-relaxed text-foreground-muted md:mt-8 md:text-lg"
          style={{ animationDelay: "560ms" }}
        >
          {heroLead}
        </p>

        {heroSupporting.length > 0 ? (
          <>
            <div
              className="my-8 h-px w-full max-w-xl bg-border-strong md:my-14"
              aria-hidden
            />

            <div className="max-w-3xl space-y-5 md:space-y-6">
              {heroSupporting.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-sans text-base leading-relaxed text-foreground-muted md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-4 md:mt-12">
          <a
            href={siteConfig.resumeAnchor}
            className="inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground hover:text-foreground"
          >
            Contact Jon
          </a>
        </div>
      </div>
    </section>
  );
}
