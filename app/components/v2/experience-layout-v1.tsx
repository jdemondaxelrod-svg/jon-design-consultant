import { experienceSnapshotV2 } from "../../lib/content-v2";
import { FadeIn } from "../fade-in";

export function ExperienceLayoutV1() {
  return (
    <ul className="mt-14 divide-y divide-border border-t border-border">
      {experienceSnapshotV2.map((entry, index) => (
        <FadeIn key={`${entry.org}-${entry.period}`} delay={index * 60}>
          <li className="py-8 md:py-10">
            <div>
              <p className="font-sans text-base font-medium text-foreground md:text-lg">
                {entry.org}
              </p>
              <p className="mt-1 font-sans text-sm text-foreground-muted">
                {entry.title} · {entry.period}
              </p>
            </div>
            <p className="mt-5 max-w-3xl font-serif text-base leading-relaxed text-foreground md:text-[1.05rem]">
              {entry.mission}
            </p>
          </li>
        </FadeIn>
      ))}
    </ul>
  );
}
