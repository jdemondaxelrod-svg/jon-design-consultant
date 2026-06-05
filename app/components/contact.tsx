import Link from "next/link";
import { siteConfig } from "../lib/site";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background-alt px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Resume & contact</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em] text-foreground"
          >
            Let&apos;s continue the conversation.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-foreground-muted">
            View my resume or reach out directly. I&apos;d welcome the
            opportunity to speak with Stephen Dempsey and the Dave Fox team.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={siteConfig.resumePath}
              className="inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted"
            >
              View Resume
            </Link>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:gap-12">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-serif text-xl text-foreground transition-colors hover:text-accent md:text-2xl"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-serif text-xl text-foreground transition-colors hover:text-accent md:text-2xl"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <p className="mt-8 font-sans text-sm text-foreground-subtle">
            {siteConfig.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
