"use client";

import { useState } from "react";
import { FadeIn } from "../fade-in";
import { SectionLabel } from "../section-label";
import { ExperienceLayoutV1 } from "./experience-layout-v1";
import { ExperienceLayoutV2 } from "./experience-layout-v2";

type ExperienceVariant = "v1" | "v2";

const variants: { id: ExperienceVariant; label: string; description: string }[] =
  [
    { id: "v1", label: "V1", description: "Stacked list" },
    { id: "v2", label: "V2", description: "Split columns" },
  ];

export function ExperienceSection() {
  const [variant, setVariant] = useState<ExperienceVariant>("v1");

  return (
    <section
      id="experience"
      className="border-t border-border bg-background-alt px-6 py-24 md:px-10 md:py-32 lg:px-16"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
          <h2
            id="experience-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            A career built on helping people decide.
          </h2>

          <div
            className="mt-8 flex flex-wrap items-center gap-3"
            role="tablist"
            aria-label="Experience layout preview"
          >
            <span className="font-sans text-[0.6rem] tracking-[0.14em] text-foreground-subtle uppercase">
              Layout
            </span>
            {variants.map((option) => {
              const isActive = variant === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="experience-layout-panel"
                  onClick={() => setVariant(option.id)}
                  className={`inline-flex items-center gap-2 border px-3 py-1.5 font-sans text-[0.6rem] tracking-[0.12em] uppercase transition-colors ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border-strong text-foreground-muted hover:border-foreground hover:text-foreground"
                  }`}
                >
                  <span>{option.label}</span>
                  <span
                    className={
                      isActive
                        ? "text-background/70"
                        : "text-foreground-subtle normal-case tracking-normal"
                    }
                  >
                    {option.description}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div id="experience-layout-panel" role="tabpanel">
          {variant === "v1" ? <ExperienceLayoutV1 /> : <ExperienceLayoutV2 />}
        </div>
      </div>
    </section>
  );
}
