import { experienceSnapshotV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";

export function ExperienceLayoutV2() {
  return (
    <ul className="mt-14 space-y-0">
      {experienceSnapshotV2.map((entry, index) => (
        <FadeIn key={`${entry.org}-${entry.period}`} delay={index * 60}>
          <li className="group relative grid gap-4 border-t border-border py-8 md:grid-cols-2 md:gap-10 md:py-10">
            <div className="md:pr-6">
              <p className="font-sans text-[0.65rem] tracking-[0.16em] text-foreground-subtle uppercase">
                {entry.period}
              </p>
              <p className="mt-3 font-sans text-base font-medium text-foreground md:text-lg">
                {entry.org}
              </p>
              <p className="mt-1 font-sans text-sm text-foreground-muted">
                {entry.title}
              </p>
            </div>
            <p className="font-serif text-base leading-relaxed text-foreground md:border-l md:border-border md:pl-10 md:text-[1.05rem]">
              {entry.mission}
            </p>
          </li>
        </FadeIn>
      ))}
    </ul>
  );
}
