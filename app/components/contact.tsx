import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background-alt py-24 md:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel number="07" title="Contact" />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7" delay={80}>
            <h2
              id="contact-heading"
              className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.02em] text-foreground"
            >
              Let&apos;s connect
            </h2>
            <p className="mt-8 max-w-lg font-sans text-base leading-relaxed text-foreground-muted">
              I am interested in residential design consultant and remodeling
              opportunities where consultative sales, homeowner communication,
              accessibility, and practical construction problem-solving matter.
              I would welcome a conversation about how my background can support
              your clients, teams, and projects.
            </p>
          </FadeIn>

          <FadeIn
            className="lg:col-span-5 lg:flex lg:flex-col lg:justify-end"
            delay={160}
          >
            <div className="space-y-8 border-t border-border-strong pt-8 lg:border-t-0 lg:pt-0">
              <div>
                <span className="block font-sans text-[0.65rem] tracking-[0.16em] uppercase text-foreground-subtle">
                  Email
                </span>
                <a
                  href="mailto:jdemondaxelrod@gmail.com"
                  className="mt-2 inline-block font-serif text-xl text-foreground transition-opacity hover:opacity-70 md:text-2xl"
                >
                  jdemondaxelrod@gmail.com
                </a>
              </div>
              <div>
                <span className="block font-sans text-[0.65rem] tracking-[0.16em] uppercase text-foreground-subtle">
                  Phone
                </span>
                <a
                  href="tel:+16144044662"
                  className="mt-2 inline-block font-serif text-xl text-foreground transition-opacity hover:opacity-70 md:text-2xl"
                >
                  614-404-4662
                </a>
              </div>
              <div>
                <span className="block font-sans text-[0.65rem] tracking-[0.16em] uppercase text-foreground-subtle">
                  Location
                </span>
                <p className="mt-2 font-sans text-base text-foreground-muted">
                  Columbus, Ohio · Central Ohio residential focus
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
