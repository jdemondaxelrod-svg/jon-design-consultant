import { experienceIntersects } from "../lib/content";
import { FadeIn } from "./fade-in";
export function ExperienceIntersects() {
  return (
    <section
      id="intersections"
      className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="intersections-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2
            id="intersections-heading"
            className="font-sans text-[0.65rem] tracking-[0.2em] text-foreground-subtle uppercase"
          >
            {experienceIntersects.title}
          </h2>
        </FadeIn>

        <ul className="mt-10 divide-y divide-border border-t border-border">
          {experienceIntersects.intersections.map((line, index) => (
            <FadeIn key={line} delay={index * 60}>
              <li className="py-7 font-serif text-lg leading-snug text-foreground md:py-8 md:text-xl">
                {line}
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={280}>
          <div className="mt-14 max-w-3xl space-y-5 border-t border-border pt-14">
            {experienceIntersects.closing.map((line, index) => (
              <p
                key={line}
                className={
                  index === 1 || index === 2
                    ? "font-serif text-xl leading-snug text-foreground md:text-2xl"
                    : "font-sans text-base leading-relaxed text-foreground-muted md:text-lg"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
