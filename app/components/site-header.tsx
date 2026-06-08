"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";

const navItems = [
  { href: "/#why", label: "Why" },
  { href: "/#bring", label: "Strengths" },
  { href: "/#proof", label: "Proof" },
  { href: "/#homeowner-feedback", label: "Homeowners" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

const mobileQuery = "(max-width: 767px)";

export function SiteHeader() {
  const [showMobileHeaderName, setShowMobileHeaderName] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const heroName = document.getElementById("hero-name");

    const syncHeaderName = (heroNameVisible: boolean) => {
      const mobile = window.matchMedia(mobileQuery).matches;
      setIsMobile(mobile);

      if (!mobile) {
        setShowMobileHeaderName(true);
        return;
      }

      if (!heroName) {
        setShowMobileHeaderName(true);
        return;
      }

      setShowMobileHeaderName(!heroNameVisible);
    };

    if (!heroName) {
      setShowMobileHeaderName(true);
      return;
    }

    const mediaQuery = window.matchMedia(mobileQuery);
    const onBreakpointChange = () => {
      const rect = heroName.getBoundingClientRect();
      const heroNameVisible =
        rect.bottom > 88 && rect.top < window.innerHeight;
      syncHeaderName(heroNameVisible);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        syncHeaderName(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-88px 0px 0px 0px" },
    );

    observer.observe(heroName);
    onBreakpointChange();
    mediaQuery.addEventListener("change", onBreakpointChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", onBreakpointChange);
    };
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm print:hidden">
      <div
        className={`relative mx-auto flex max-w-6xl items-center px-6 py-5 md:justify-between md:px-10 lg:px-16 ${
          showMobileHeaderName ? "justify-between" : "justify-end md:justify-between"
        }`}
      >
        <Link
          href="/"
          aria-hidden={isMobile && !showMobileHeaderName}
          tabIndex={isMobile && !showMobileHeaderName ? -1 : undefined}
          className={`max-w-[calc(100%-5rem)] font-serif text-xl leading-tight font-medium tracking-tight text-foreground transition-all duration-300 hover:opacity-70 md:max-w-none md:text-lg md:font-normal ${
            showMobileHeaderName
              ? "max-md:relative max-md:translate-y-0 max-md:opacity-100"
              : "max-md:pointer-events-none max-md:absolute max-md:translate-y-1 max-md:opacity-0"
          }`}
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
