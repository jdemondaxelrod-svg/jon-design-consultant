import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

const capabilities = [
  {
    title: "Qualify & listen",
    body: "Consultative discovery across education, brand partnerships, and homeowner relationships — assessing needs, priorities, constraints, and budget before work begins.",
  },
  {
    title: "Document the existing",
    body: "On-site measurement, diagnostics, condition assessment, and home problem-solving across residential repair, remodeling, accessibility, and improvement work.",
  },
  {
    title: "Plan & solve",
    body: "Residential design consultation and practical construction problem-solving focused on how people actually live, move, age, and use their homes.",
  },
  {
    title: "Specify & estimate",
    body: "Materials specification, labor scoping, procurement, estimate development, and manufacturer/vendor coordination across field work and design practice.",
  },
  {
    title: "Present with clarity",
    body: "Proposals, presentations, and cost conversations built through consultative sales, business development, and in-home homeowner consultation.",
  },
  {
    title: "Manage through delivery",
    body: "Scheduling, project management, trade coordination, and homeowner communication from scope through completion and invoicing.",
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-24 md:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel number="04" title="Capabilities" />
        </FadeIn>

        <FadeIn delay={80}>
          <h2
            id="capabilities-heading"
            className="mb-6 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.2] text-foreground"
          >
            End-to-end support for residential remodeling and consultation
          </h2>
          <p className="mb-16 max-w-2xl font-sans text-base leading-relaxed text-foreground-muted md:mb-20">
            Capabilities proven through owner-operated residential practice —
            from customer consultation and project scoping through specification,
            estimating, procurement, project management, and communication.
          </p>
        </FadeIn>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <FadeIn key={item.title} delay={100 + index * 60}>
              <article className="flex h-full flex-col bg-background p-8 md:p-9">
                <h3 className="font-serif text-lg font-medium leading-snug text-foreground md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-foreground-muted">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
