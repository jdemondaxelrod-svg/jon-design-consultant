import { homeownerFeedback } from "../lib/content";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function WhatHomeownersValue() {
  return (
    <section
      id="homeowner-feedback"
      className="border-t border-border bg-background-alt px-6 pt-10 pb-16 md:px-10 md:pt-12 md:pb-20 lg:px-16"
      aria-labelledby="homeowner-feedback-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>What homeowners value</SectionLabel>
          <h2
            id="homeowner-feedback-heading"
            className="mt-2.5 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.02em] text-foreground"
          >
            Evidence from the field — organized by what matters most.
          </h2>
          <p className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-foreground-muted md:text-[1.05rem]">
            {homeownerFeedback.intro}
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
          {homeownerFeedback.themes.map((theme, themeIndex) => (
            <FadeIn key={theme.title} delay={themeIndex * 60}>
              <article
                className={`flex h-full flex-col border border-border bg-background px-5 py-5 md:px-6 md:py-6 ${
                  themeIndex === homeownerFeedback.themes.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div>
                  <p className="font-sans text-[0.65rem] tracking-[0.18em] text-foreground-subtle uppercase">
                    Theme {themeIndex + 1}
                  </p>
                  <h3 className="mt-1.5 font-serif text-xl leading-snug text-foreground md:text-[1.35rem]">
                    {theme.title}
                  </h3>
                </div>

                <p className="mt-3 max-w-prose font-sans text-sm leading-relaxed text-foreground-muted">
                  {theme.copy}
                </p>

                <ul className="mt-4 grid flex-1 gap-3 md:grid-cols-2 md:gap-x-5 md:gap-y-3">
                  {theme.quotes.map((quote) => (
                    <li key={`${quote.attribution}-${quote.date}`}>
                      <blockquote className="border-l border-border-strong pl-4 md:pl-5">
                        <p className="font-serif text-base leading-[1.45] text-foreground md:text-[1.05rem]">
                          &ldquo;{quote.text}&rdquo;
                        </p>
                        <footer className="mt-2 font-sans text-[0.65rem] tracking-wide text-foreground-subtle uppercase">
                          {quote.attribution} · {quote.date}
                        </footer>
                      </blockquote>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <p className="mt-10 max-w-3xl border-t border-border pt-8 font-serif text-base leading-relaxed text-foreground md:text-lg">
            {homeownerFeedback.takeaway}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
