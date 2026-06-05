import { proofPoints } from "../lib/content";

export function ProofBar() {
  return (
    <section
      aria-label="At a glance"
      className="border-y border-paper-deep bg-paper-deep"
    >
      <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-paper md:grid-cols-3 md:divide-x md:divide-y-0">
        {proofPoints.map((point) => (
          <li key={point.label} className="px-6 py-10 md:px-10 lg:px-14">
            <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-ink">
              {point.value}
            </p>
            <p className="mt-3 font-sans text-sm text-stone">{point.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
