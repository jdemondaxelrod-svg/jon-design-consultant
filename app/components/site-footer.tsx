export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 font-sans text-xs tracking-wide text-foreground-subtle md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Jon DeMond-Axelrod · Columbus, Ohio</p>
        <p className="max-w-md leading-relaxed">
          Design consultant · Residential remodeling · Consultative sales
        </p>
      </div>
    </footer>
  );
}
