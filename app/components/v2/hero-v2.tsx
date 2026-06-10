import { heroV2 } from "../../lib/content-v2";
import { siteConfig } from "../../lib/site";

export function HeroV2() {
  return (
    <section
      id="hero"
      className="flex min-h-[70svh] flex-col justify-end pb-16 pt-28 md:min-h-[75vh] md:pb-24 md:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="hero-intro max-w-4xl">
          <p className="font-serif text-[clamp(1.75rem,6vw,2.5rem)] leading-tight font-medium tracking-[-0.02em] text-foreground">
            {siteConfig.name}
          </p>
          <h1
            id="hero-heading"
            className="mt-2 max-w-4xl font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] font-medium tracking-[-0.02em] text-foreground md:mt-3"
          >
            {siteConfig.targetRole}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-[clamp(1.125rem,3.25vw,1.375rem)] leading-relaxed text-foreground-muted md:mt-5">
            {heroV2.mission}
          </p>
        </div>
      </div>
    </section>
  );
}
