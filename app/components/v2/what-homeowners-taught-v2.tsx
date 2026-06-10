import { homeownersTaughtV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";
import { SectionLabel } from "../section-label";

export function WhatHomeownersTaughtV2() {
  return (
    <section
      id="homeowners-taught"
      className="border-t border-border bg-background-alt px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="homeowners-taught-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>{homeownersTaughtV2.title}</SectionLabel>
          <h2
            id="homeowners-taught-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            {homeownersTaughtV2.headline}
          </h2>
        </FadeIn>

        <div className="mt-8 max-w-3xl space-y-5 md:space-y-6">
          {homeownersTaughtV2.paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 50}>
              <p className="font-sans text-base leading-relaxed text-foreground-muted md:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {homeownersTaughtV2.lessons.map((lesson, index) => (
            <FadeIn key={lesson} delay={index * 50}>
              <li className="border border-border bg-background px-6 py-5 font-sans text-sm leading-relaxed text-foreground-muted md:text-base">
                {lesson}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
