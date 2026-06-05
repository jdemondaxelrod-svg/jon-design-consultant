import { siteConfig } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-paper-deep px-6 py-6">
      <div className="mx-auto max-w-3xl md:px-0">
        <p className="font-sans text-xs text-stone-light">
          Prepared for {siteConfig.targetContact.name},{" "}
          {siteConfig.targetCompany} · {siteConfig.targetRole}
        </p>
      </div>
    </footer>
  );
}
