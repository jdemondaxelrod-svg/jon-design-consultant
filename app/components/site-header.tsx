const navItems = [
  { href: "#story", label: "Story" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#design-build", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <a
          href="#"
          className="font-serif text-lg tracking-wide text-foreground transition-opacity hover:opacity-70"
        >
          Jon DeMond-Axelrod
        </a>
        <nav
          className="hidden items-center gap-6 lg:flex lg:gap-8"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[0.65rem] tracking-[0.14em] uppercase text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+16144044662"
          className="font-sans text-[0.7rem] tracking-[0.14em] uppercase text-foreground-muted transition-colors hover:text-foreground lg:hidden"
        >
          614-404-4662
        </a>
      </div>
    </header>
  );
}
