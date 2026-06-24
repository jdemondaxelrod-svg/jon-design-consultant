import { periods } from "../lib/career";
import { FadeIn } from "./fade-in";

const metrics = [
  { value: "120+", label: "Homeowners served" },
  { value: "~200", label: "Customer opportunities" },
  { value: "500+", label: "Residential tasks delivered" },
  { value: "5★", label: "Customer reputation" },
];

export function ImpactMetrics() {
  return (
    <section
      aria-label="Impact metrics"
      className="border-y border-border bg-background-alt py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <p className="mb-10 font-sans text-[0.65rem] tracking-[0.18em] uppercase text-foreground-subtle">
            The Clintonville Handyman · Central Ohio · {periods.clintonvilleHandyman}
          </p>
        </FadeIn>
        <ul className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={80 + index * 60}>
              <li>
                <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-medium leading-none text-foreground">
                  {metric.value}
                </p>
                <p className="mt-3 font-sans text-xs leading-relaxed text-foreground-muted md:text-sm">
                  {metric.label}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
