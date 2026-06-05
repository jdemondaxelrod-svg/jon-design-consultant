import { siteConfig } from "../lib/site";

const navItems = [
  { href: "#letter", label: "Cover letter" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper-deep bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 md:px-0">
        <a
          href="#"
          className="font-serif text-base tracking-tight text-ink"
        >
          {siteConfig.name}
        </a>
        <nav className="flex items-center gap-5" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[0.65rem] tracking-[0.12em] text-stone uppercase transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
