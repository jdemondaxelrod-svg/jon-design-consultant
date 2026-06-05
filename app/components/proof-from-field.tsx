import { fieldProof, fieldProofNote } from "../lib/content";
import { periods } from "../lib/career";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function ProofFromField() {
  return (
    <section
      id="proof"
      className="border-y border-border bg-background-alt py-20 md:py-24"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel>Proof from the field</SectionLabel>
          <h2
            id="proof-heading"
            className="mt-4 font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            The Clintonville Handyman · Central Ohio ·{" "}
            {periods.clintonvilleHandyman}
          </h2>
          <p className="mt-4 font-sans text-sm text-foreground-muted md:text-base">
            {fieldProofNote}
          </p>
        </FadeIn>

        <ul className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {fieldProof.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 60}>
              <li>
                <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-none font-medium text-foreground">
                  {stat.value}
                </p>
                <p className="mt-3 font-sans text-xs leading-relaxed text-foreground-muted md:text-sm">
                  {stat.label}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
