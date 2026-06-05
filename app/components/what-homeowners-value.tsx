import { homeownerFeedback } from "../lib/content";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function WhatHomeownersValue() {
  return (
    <section
      id="homeowner-feedback"
      className="border-t border-border bg-background-alt px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="homeowner-feedback-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>What homeowners value</SectionLabel>
          <h2
            id="homeowner-feedback-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            Evidence from the field — organized by what matters most.
          </h2>
          <p className="mt-8 max-w-3xl font-sans text-base leading-relaxed text-foreground-muted md:text-lg">
            {homeownerFeedback.intro}
          </p>
        </FadeIn>

        <div className="mt-20 space-y-0">
          {homeownerFeedback.themes.map((theme, themeIndex) => (
            <FadeIn key={theme.title} delay={themeIndex * 80}>
              <article
                className={`grid gap-10 border-t border-border py-16 md:grid-cols-[11rem_1fr] md:gap-16 md:py-20 ${
                  themeIndex === homeownerFeedback.themes.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <div>
                  <p className="font-sans text-[0.65rem] tracking-[0.18em] text-foreground-subtle uppercase">
                    Theme {themeIndex + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground md:text-[1.75rem]">
                    {theme.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-2xl font-sans text-sm leading-relaxed text-foreground-muted md:text-base">
                    {theme.copy}
                  </p>

                  <ul className="mt-10 space-y-10">
                    {theme.quotes.map((quote) => (
                      <li key={`${quote.attribution}-${quote.date}`}>
                        <blockquote className="border-l border-border-strong pl-6 md:pl-8">
                          <p className="font-serif text-lg leading-[1.55] text-foreground md:text-xl">
                            &ldquo;{quote.text}&rdquo;
                          </p>
                          <footer className="mt-4 font-sans text-xs tracking-wide text-foreground-subtle uppercase">
                            {quote.attribution} · {quote.date}
                          </footer>
                        </blockquote>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <p className="mt-16 max-w-3xl border-t border-border pt-12 font-serif text-lg leading-relaxed text-foreground md:text-xl">
            {homeownerFeedback.takeaway}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
