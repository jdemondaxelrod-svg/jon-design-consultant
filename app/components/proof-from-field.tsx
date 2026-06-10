import { fieldProof, fieldProofNote } from "../lib/content";
import { periods } from "../lib/career";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function ProofFromField() {
  return (
    <section
      id="proof"
      className="overflow-x-clip border-y border-border bg-background-alt py-20 md:py-24"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel>Proof from the field</SectionLabel>
          <h2
            id="proof-heading"
            className="mt-4 break-words font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            The Clintonville Handyman · Central Ohio ·{" "}
            {periods.clintonvilleHandyman}
          </h2>
          <p className="mt-4 font-sans text-sm text-foreground-muted md:text-base">
            {fieldProofNote}
          </p>
        </FadeIn>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-12">
          {fieldProof.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 60}>
              <li className="group relative">
                <div
                  tabIndex={0}
                  aria-describedby={`proof-detail-${index}`}
                  className="cursor-default outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background-alt"
                >
                  <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-none font-medium text-foreground transition-colors group-hover:text-accent group-focus-within:text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-foreground-muted md:text-sm">
                    {stat.label}
                  </p>
                </div>
                <div
                  id={`proof-detail-${index}`}
                  role="tooltip"
                  className="pointer-events-none absolute top-full left-0 z-10 mt-4 hidden w-full max-w-[calc(100vw-3rem)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 md:left-1/2 md:block md:w-[14rem] md:max-w-none md:-translate-x-1/2"
                >
                  <p className="border border-border-strong bg-background px-4 py-3 font-sans text-xs leading-relaxed text-foreground-muted shadow-[0_8px_24px_rgba(42,40,38,0.08)]">
                    {stat.detail}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
