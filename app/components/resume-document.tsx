import {
  coreCompetencies,
  currentExperience,
  priorExperience,
  resumeSummary,
} from "../lib/content";
import { siteConfig } from "../lib/site";
import { FadeIn } from "./fade-in";

function ExperienceBlock({
  org,
  title,
  location,
  period,
  bullets,
}: {
  org: string;
  title: string;
  location: string;
  period: string;
  bullets: readonly string[];
}) {
  return (
    <article className="py-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-sans text-base font-semibold text-ink">{org}</h3>
          <p className="font-sans text-sm text-stone">
            {title} · {location}
          </p>
        </div>
        <p className="mt-1 font-sans text-sm whitespace-nowrap text-stone-light sm:mt-0">
          {period}
        </p>
      </div>
      <ul className="mt-4 space-y-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 font-sans text-sm leading-relaxed text-stone"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay" aria-hidden />
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ResumeDocument() {
  return (
    <section
      id="resume"
      className="border-t border-paper-deep bg-paper-deep"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 md:px-0 md:py-28">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
            Resume
          </p>
          <h2
            id="resume-heading"
            className="mt-3 font-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight font-medium tracking-[-0.02em] text-ink"
          >
            {siteConfig.name}
          </h2>
          <p className="mt-2 font-sans text-sm text-stone">
            {siteConfig.targetRole} · {siteConfig.location}
          </p>
          <p className="mt-1 font-sans text-sm text-stone">
            {siteConfig.email} · {siteConfig.phoneDisplay}
          </p>
        </FadeIn>

        <FadeIn delay={60}>
          <div className="mt-12 border-t border-paper pt-10">
            <h3 className="font-sans text-[0.65rem] tracking-[0.18em] text-clay uppercase">
              Summary
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-stone">
              {resumeSummary}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-12 border-t border-paper pt-10">
            <h3 className="font-sans text-[0.65rem] tracking-[0.18em] text-clay uppercase">
              Core competencies
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {coreCompetencies.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm leading-relaxed text-stone"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={140}>
          <div className="mt-12 border-t border-paper pt-10">
            <h3 className="font-sans text-[0.65rem] tracking-[0.18em] text-clay uppercase">
              Current experience
            </h3>
            <div className="divide-y divide-paper">
              {currentExperience.map((role) => (
                <ExperienceBlock key={`${role.org}-${role.period}`} {...role} />
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <div className="mt-12 border-t border-paper pt-10">
            <h3 className="font-sans text-[0.65rem] tracking-[0.18em] text-clay uppercase">
              Prior experience
            </h3>
            <div className="divide-y divide-paper">
              {priorExperience.map((role) => (
                <ExperienceBlock key={`${role.org}-${role.period}`} {...role} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
