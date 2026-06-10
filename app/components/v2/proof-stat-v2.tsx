"use client";

import { useState } from "react";

type ProofStatV2Props = {
  index: number;
  value: string;
  label: string;
  detail: string;
};

export function ProofStatV2({
  index,
  value,
  label,
  detail,
}: ProofStatV2Props) {
  const [expanded, setExpanded] = useState(false);
  const detailId = `proof-v2-detail-${index}`;

  return (
    <li className="group relative">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={detailId}
        onClick={() => setExpanded((open) => !open)}
        className="w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background-alt md:pointer-events-none md:cursor-default"
      >
        <p className="font-serif text-[clamp(2.25rem,4.5vw,3rem)] leading-none font-medium text-foreground transition-colors group-hover:text-accent">
          {value}
        </p>
        <p className="mt-1.5 font-sans text-xs leading-snug text-foreground-muted md:text-sm">
          {label}
        </p>
      </button>

      <div
        id={detailId}
        role="tooltip"
        className={`text-xs leading-relaxed text-foreground-muted md:pointer-events-none md:absolute md:top-full md:left-1/2 md:z-10 md:mt-4 md:w-[14rem] md:-translate-x-1/2 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 ${
          expanded ? "mt-4 block" : "hidden md:block"
        }`}
      >
        <p className="border border-border-strong bg-background px-4 py-3 font-sans shadow-[0_8px_24px_rgba(42,40,38,0.08)]">
          {detail}
        </p>
      </div>
    </li>
  );
}
