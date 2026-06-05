import { coverLetterParagraphs, letterMeta } from "../lib/content";
import { siteConfig } from "../lib/site";
import { FadeIn } from "./fade-in";

export function CoverLetter() {
  return (
    <article
      id="letter"
      className="mx-auto max-w-3xl px-6 pt-16 pb-20 md:px-0 md:pt-20 md:pb-28"
      aria-labelledby="letter-heading"
    >
      <FadeIn>
        <header className="border-b border-paper-deep pb-10">
          <p className="font-sans text-sm text-stone">{letterMeta.date}</p>

          <div className="mt-10 space-y-1 font-sans text-sm leading-relaxed text-stone">
            <p>{siteConfig.targetContact.name}</p>
            <p>{siteConfig.targetContact.title}</p>
            <p>{siteConfig.targetCompany}</p>
          </div>

          <p className="mt-10 font-sans text-sm text-stone">
            <span className="text-ink">Re:</span> {letterMeta.subject}
          </p>

          <h1
            id="letter-heading"
            className="mt-10 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-medium tracking-[-0.02em] text-ink"
          >
            Dear {siteConfig.targetContact.name.split(" ")[0]},
          </h1>
        </header>
      </FadeIn>

      <div className="mt-10 space-y-6">
        {coverLetterParagraphs.map((paragraph, index) => (
          <FadeIn key={index} delay={index * 60}>
            <p className="font-sans text-[1.05rem] leading-[1.75] text-ink/90">
              {paragraph}
            </p>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={280}>
        <p className="mt-12 font-sans text-[1.05rem] leading-[1.75] text-ink/90">
          Sincerely,
        </p>
        <p className="mt-8 font-serif text-2xl text-ink">
          {siteConfig.name}
        </p>
      </FadeIn>
    </article>
  );
}
