"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";

export type SiteVersion = "v1" | "v2";

type NavItem = {
  href: string;
  label: string;
};

const v1NavItems: NavItem[] = [
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

const v2NavItems: NavItem[] = [
  { href: "/v2#why", label: "Why" },
  { href: "/v2#bring", label: "Strengths" },
  { href: "/v2#proof", label: "Proof" },
  { href: "/v2#homeowner-feedback", label: "Homeowners" },
  { href: "/v2#experience", label: "Experience" },
  { href: "/v2#contact", label: "Contact" },
];

type SiteHeaderProps = {
  version?: SiteVersion;
};

export function SiteHeader({ version = "v1" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const homeHref = version === "v2" ? "/v2" : "/";
  const resumeHref = version === "v2" ? "/v2#resume" : siteConfig.resumeHref;
  const navItems = version === "v2" ? v2NavItems : v1NavItems;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link
          href={homeHref}
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

        <div className="flex items-center gap-4">
          <Link
            href={resumeHref}
            className="hidden font-sans text-[0.65rem] tracking-[0.14em] text-foreground-muted uppercase transition-colors hover:text-foreground lg:inline"
          >
            Resume
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-4 bg-current transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-current transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-background px-6 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <p className="font-sans text-[0.65rem] tracking-[0.18em] text-foreground-subtle uppercase">
            Version
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href="/"
                className={`block py-2 font-sans text-sm ${
                  version === "v1"
                    ? "font-medium text-foreground"
                    : "text-foreground-muted"
                }`}
              >
                Narrative Version / V1
              </Link>
            </li>
            <li>
              <Link
                href="/v2"
                className={`block py-2 font-sans text-sm ${
                  version === "v2"
                    ? "font-medium text-foreground"
                    : "text-foreground-muted"
                }`}
              >
                Previous Version / V2
              </Link>
            </li>
          </ul>

          <p className="mt-8 font-sans text-[0.65rem] tracking-[0.18em] text-foreground-subtle uppercase">
            Sections
          </p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 font-sans text-sm text-foreground-muted transition-colors hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={resumeHref}
                className="block py-2 font-sans text-sm text-foreground-muted transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
