import { projectTypes } from "../lib/content";

export function ProjectScope() {
  return (
    <section
      aria-label="Project types"
      className="border-y border-paper-deep bg-paper"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-14">
        <p className="mb-6 font-sans text-[0.65rem] tracking-[0.2em] text-stone-light uppercase">
          Project scope
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {projectTypes.map((type) => (
            <li
              key={type}
              className="font-serif text-lg text-ink md:text-xl"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
