import { siteConfig } from "../lib/site";
import { FadeIn } from "./fade-in";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-paper-deep px-6 py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl md:px-0">
        <FadeIn>
          <h2
            id="contact-heading"
            className="font-sans text-[0.65rem] tracking-[0.18em] text-stone-light uppercase"
          >
            Contact
          </h2>
          <p className="mt-4 font-serif text-xl text-ink md:text-2xl">
            I look forward to hearing from you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-10">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-sans text-sm text-ink transition-colors hover:text-clay"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-sans text-sm text-ink transition-colors hover:text-clay"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 font-sans text-sm text-stone">
            {siteConfig.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
