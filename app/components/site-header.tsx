import Link from "next/link";
import { siteConfig } from "../lib/site";
import { HeaderDownloadResume } from "./header-download-resume";

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
] as const;

const navLinkClass =
  "shrink-0 whitespace-nowrap font-sans text-[0.65rem] tracking-[0.14em] text-foreground-muted uppercase transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20";

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-5 md:px-10 lg:gap-6 lg:px-16">
        <Link
          href="/"
          className="shrink-0 font-serif text-lg tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] lg:flex xl:gap-6 [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
          <HeaderDownloadResume />
        </nav>

        <Link
          href={siteConfig.resumeHref}
          className={`${navLinkClass} ml-auto shrink-0 lg:hidden`}
        >
          Résumé
        </Link>
      </div>
    </header>
  );
}
