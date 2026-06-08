import { Fragment } from "react";
import { hero } from "../lib/content";
import { siteConfig } from "../lib/site";

const heroEyebrowItems = [
  "Application",
  siteConfig.targetRole,
  siteConfig.targetCompany,
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[90vh] flex-col justify-end pb-20 pt-32 md:pb-28 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <div
          className="mb-8 flex max-w-full flex-col gap-1.5 font-sans text-[0.7rem] leading-snug tracking-[0.14em] break-words text-foreground-subtle uppercase md:flex-row md:flex-wrap md:items-center md:gap-0 md:tracking-[0.22em]"
          aria-label={`Application for ${siteConfig.targetRole} at ${siteConfig.targetCompany}`}
        >
          {heroEyebrowItems.map((item, index) => (
            <Fragment key={item}>
              {index > 0 ? (
                <span className="mx-2 hidden md:inline" aria-hidden>
                  ·
                </span>
              ) : null}
              <span
                className="hero-eyebrow-line"
                style={{ animationDelay: `${200 + index * 280}ms` }}
              >
                {item}
              </span>
            </Fragment>
          ))}
        </div>

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

        <div className="mt-12 flex flex-wrap gap-4">
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
