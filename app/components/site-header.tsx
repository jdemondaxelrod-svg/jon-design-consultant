import { siteConfig } from "../lib/site";

const navItems = [
  { href: "#responsibilities", label: "Responsibilities" },
  { href: "#experience", label: "Experience" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-14">
        <a
          href="#"
          className="font-sans text-[0.7rem] font-medium tracking-[0.12em] text-white uppercase"
        >
          JDA
        </a>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[0.65rem] tracking-[0.14em] text-white/80 uppercase transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${siteConfig.phone}`}
          className="font-sans text-[0.65rem] tracking-[0.12em] text-white/80 uppercase transition-colors hover:text-white md:hidden"
        >
          Call
        </a>
      </div>
    </header>
  );
}
