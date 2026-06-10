import { fieldProofV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";
import { SectionLabel } from "../section-label";
import { ProofStatV2 } from "./proof-stat-v2";

export function ProofFromFieldV2() {
  return (
    <section
      id="proof"
      className="overflow-x-clip border-y border-border py-12 pb-10 md:py-14 md:pb-12"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel>Proof from the field</SectionLabel>
          <h2
            id="proof-heading"
            className="mt-2.5 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.12] font-medium tracking-[-0.02em] text-foreground"
          >
            Evidence earned through real residential work.
          </h2>
        </FadeIn>

        <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4 md:gap-x-6 md:gap-y-5">
          {fieldProofV2.map((stat, index) => (
            <ProofStatV2
              key={stat.label}
              index={index}
              value={stat.value}
              label={stat.label}
              detail={stat.detail}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
