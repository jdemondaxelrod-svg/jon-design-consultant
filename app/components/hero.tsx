export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-end pb-20 pt-32 md:pb-28 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <p className="opacity-0-initial animate-fade-in animation-delay-100 mb-8 font-sans text-[0.7rem] tracking-[0.22em] uppercase text-foreground-subtle">
          Design consultant · Residential remodeling · Consultative sales
        </p>

        <h1
          id="hero-heading"
          className="opacity-0-initial animate-fade-up animation-delay-200 max-w-4xl font-serif text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.08] tracking-[-0.02em] text-foreground"
        >
          Jon DeMond-Axelrod
        </h1>

        <p className="opacity-0-initial animate-fade-in animation-delay-300 mt-6 font-sans text-sm text-foreground-subtle">
          Columbus, Ohio
        </p>

        <div
          className="opacity-0-initial animate-line-grow animation-delay-400 my-10 h-px w-full max-w-xl bg-border-strong md:my-14"
          aria-hidden
        />

        <p className="opacity-0-initial animate-fade-up animation-delay-500 max-w-2xl font-serif text-[clamp(1.35rem,2.8vw,2rem)] font-normal leading-[1.45] text-foreground-muted">
          Design, construction, and customer experience — brought together
          through real residential work.
        </p>

        <p className="opacity-0-initial animate-fade-up animation-delay-600 mt-10 max-w-2xl font-sans text-base leading-relaxed text-foreground-subtle md:mt-12">
          Design-minded consultant, entrepreneur, and residential problem
          solver. I own and operate The Clintonville Handyman — and help
          homeowners transform goals, ideas, and challenges into practical,
          buildable solutions.
        </p>
      </div>
    </section>
  );
}
