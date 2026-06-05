import { siteConfig } from "../lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-deep px-6 py-8 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-xs text-stone-light">
          © {year} {siteConfig.name}
        </p>
        <p className="font-sans text-xs text-stone-light">
          {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
