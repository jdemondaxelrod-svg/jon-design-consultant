import { whatIBring } from "../lib/content";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function WhatIBring() {
  return (
    <section
      id="bring"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="bring-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>What I bring</SectionLabel>
          <h2
            id="bring-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            An unusual combination — by design.
          </h2>
        </FadeIn>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {whatIBring.map((card, index) => (
            <FadeIn key={card.title} delay={index * 80}>
              <li className="flex h-full flex-col border border-border bg-background p-8 transition-colors hover:border-border-strong">
                <h3 className="font-serif text-xl text-foreground md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-foreground-muted md:text-base">
                  {card.body}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
