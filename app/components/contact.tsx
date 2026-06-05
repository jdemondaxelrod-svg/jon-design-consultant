import { siteConfig } from "../lib/site";
import { FadeIn } from "./fade-in";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-paper-deep bg-paper-deep px-6 py-24 md:px-10 md:py-32 lg:px-14"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-medium tracking-[-0.02em] text-ink"
          >
            Let&apos;s talk about your home.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-stone">
            Open to residential design consultation, remodeling sales, and
            opportunities where homeowner communication and project scoping
            matter.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:gap-16">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group font-serif text-2xl text-ink transition-colors hover:text-clay md:text-3xl"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-serif text-2xl text-ink transition-colors hover:text-clay md:text-3xl"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <p className="mt-10 font-sans text-sm text-stone">
            {siteConfig.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
