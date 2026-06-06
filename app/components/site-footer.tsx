import { siteConfig } from "../lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 md:px-10 lg:px-16 print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-xs text-foreground-subtle">
          © {year} {siteConfig.name}
        </p>
        <p className="font-sans text-xs text-foreground-subtle">
          {siteConfig.location} · {siteConfig.targetCompany}
        </p>
      </div>
    </footer>
  );
}
