import { periods } from "../lib/career";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

const ventures = [
  {
    category: "Columbus, Ohio",
    title: "The Clintonville Handyman",
    subtitle: "Owner & Residential Design-Build Consultant",
    description:
      "Owner & residential design-build consultant. 120+ homeowners served, nearly 200 documented opportunities, and 500+ repair, remodeling, and accessibility tasks — carpentry, drywall, painting, plumbing, electrical, siding, fixtures, and home diagnostics. Referral-driven, five-star reputation.",
    period: periods.clintonvilleHandyman,
  },
  {
    category: "Design practice",
    title: "Éliane Design",
    subtitle: "Founder & Principal Design Consultant",
    description:
      "Luxury accessibility and aging-in-place design. Consultation framework, architectural product curation, specification, procurement coordination, installation planning, and brand experience.",
    period: periods.elianeDesign,
  },
  {
    category: "Nonprofit",
    title: "The Karole Foundation",
    subtitle: "Founder & Executive Director",
    description:
      "Donor experience, fundraising, and programs connecting support to measurable home safety outcomes — with a design-forward approach emphasizing dignity, beauty, and independence.",
    period: periods.karoleFoundation,
  },
];

const projectFocus = [
  {
    category: "Remodeling",
    title: "Kitchen, bath & whole-home programs",
    description:
      "Scoping, estimating, and consultation aligned with upscale kitchen, bath, addition, basement, and whole-house remodeling workflows.",
  },
  {
    category: "Accessibility",
    title: "Aging-in-place & universal design",
    description:
      "Specialized planning through Clintonville Handyman field work and Éliane Design — safety, mobility, and independence without sacrificing aesthetics.",
  },
  {
    category: "Operations",
    title: "End-to-end project ownership",
    description:
      "Consultations, scheduling, procurement, project management, invoicing, and vendor coordination — full accountability from first call through completion.",
  },
];

export function SelectedWork() {
  return (
    <section
      id="work"
      className="border-t border-border bg-background-alt py-24 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel number="03" title="Selected work" />
        </FadeIn>

        <FadeIn delay={80}>
          <h2
            id="work-heading"
            className="mb-6 max-w-xl font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.2] text-foreground"
          >
            Current practice & project focus
          </h2>
          <p className="mb-14 max-w-2xl font-sans text-sm leading-relaxed text-foreground-subtle md:mb-20 md:text-base">
            Owner-operated residential design-build consulting across Central
            Ohio, with parallel leadership in accessibility design and community
            impact.
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7" delay={100}>
            <article className="group flex h-full flex-col border border-border bg-background p-8 md:p-10">
              <div className="mb-8 aspect-[16/9] bg-accent-soft transition-colors duration-500 group-hover:bg-border" />
              <div className="flex items-start justify-between gap-4">
                <span className="font-sans text-[0.65rem] tracking-[0.16em] uppercase text-foreground-subtle">
                  {ventures[0].category}
                </span>
                <span className="shrink-0 font-sans text-[0.65rem] tracking-[0.12em] uppercase text-foreground-muted">
                  {ventures[0].period}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-medium text-foreground md:text-3xl">
                {ventures[0].title}
              </h3>
              <p className="mt-2 font-sans text-xs tracking-[0.12em] uppercase text-foreground-subtle">
                {ventures[0].subtitle}
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-foreground-muted md:text-base">
                {ventures[0].description}
              </p>
            </article>
          </FadeIn>

          <div className="grid gap-6 lg:col-span-5">
            {ventures.slice(1).map((item, index) => (
              <FadeIn key={item.title} delay={160 + index * 60}>
                <article className="flex h-full flex-col border border-border bg-background p-8 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-sans text-[0.65rem] tracking-[0.16em] uppercase text-foreground-subtle">
                      {item.category}
                    </span>
                    <span className="shrink-0 font-sans text-[0.65rem] tracking-[0.12em] uppercase text-foreground-muted">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs tracking-[0.1em] uppercase text-foreground-subtle">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:mt-20">
          {projectFocus.map((item, index) => (
            <FadeIn key={item.title} delay={280 + index * 60}>
              <article className="flex h-full flex-col border-t border-border-strong pt-8">
                <span className="font-sans text-[0.65rem] tracking-[0.16em] uppercase text-foreground-subtle">
                  {item.category}
                </span>
                <h3 className="mt-3 font-serif text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
