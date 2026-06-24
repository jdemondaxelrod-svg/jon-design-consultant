import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

const principles = [
  {
    title: "Goals and challenges, understood first",
    body: "Strong outcomes start with honest discovery — understanding what homeowners value, what the home allows, and what investment makes sense before momentum builds.",
  },
  {
    title: "Trust is built in conversation",
    body: "From educational sales to national ecommerce to in-home consultations, adaptive communication turns complexity into confidence at every decision point.",
  },
  {
    title: "Design with dignity",
    body: "Through Éliane Design and accessibility work, I advocate for solutions that are beautiful, functional, and respectful — especially for aging-in-place and mobility needs.",
  },
  {
    title: "Practical, buildable solutions",
    body: "I help customers transform goals, ideas, and challenges into specifications and estimates teams can execute — not just concepts that look good on paper.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 md:py-32"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel number="02" title="Philosophy" />
        </FadeIn>

        <FadeIn delay={80}>
          <h2
            id="philosophy-heading"
            className="mb-16 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.2] text-foreground md:mb-20"
          >
            Known for building trust and simplifying complexity
          </h2>
        </FadeIn>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {principles.map((item, index) => (
            <FadeIn key={item.title} delay={120 + index * 80}>
              <article className="flex h-full flex-col bg-background p-8 md:p-10 lg:p-12">
                <span className="mb-6 font-serif text-3xl font-light text-foreground-subtle/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 font-serif text-xl font-medium leading-snug text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-foreground-muted md:text-base">
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
