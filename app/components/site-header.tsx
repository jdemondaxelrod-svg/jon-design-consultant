import Link from "next/link";
import { siteConfig } from "../lib/site";

const navItems = [
  { href: "/#intro", label: "Intro" },
  { href: "/#why-this-work", label: "Why This Work" },
  { href: "/#bring", label: "Strengths" },
  { href: "/#proof", label: "Proof" },
  { href: "/#homeowner-feedback", label: "Homeowners" },
  { href: "/#principles", label: "Inside Homes" },
  { href: "/#experience", label: "Experience" },
  { href: "/#why-we-should-talk", label: "Why Talk" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[0.65rem] tracking-[0.14em] text-foreground-muted uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.resumeHref}
          className="font-sans text-[0.65rem] tracking-[0.14em] text-foreground-muted uppercase transition-colors hover:text-foreground"
        >
          Resume
        </Link>
      </div>
    </header>
  );
}
