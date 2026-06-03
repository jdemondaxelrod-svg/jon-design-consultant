const types = [
  "Kitchens",
  "Baths",
  "Room additions",
  "Basements",
  "Whole-house remodels",
];

export function ProjectTypes() {
  return (
    <section
      aria-label="Project types"
      className="border-y border-border py-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {types.map((type, index) => (
            <li key={type} className="flex items-center gap-x-6 md:gap-x-10">
              <span className="font-sans text-[0.7rem] tracking-[0.14em] uppercase text-foreground-muted md:text-xs">
                {type}
              </span>
              {index < types.length - 1 && (
                <span
                  className="hidden h-1 w-1 rounded-full bg-border-strong md:inline-block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
