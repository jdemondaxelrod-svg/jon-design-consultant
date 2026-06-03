import { FadeIn } from "./fade-in";
import { periods } from "../lib/career";
import { SectionLabel } from "./section-label";

const currentRoles = [
  {
    period: periods.clintonvilleHandyman,
    location: "Columbus, Ohio",
    role: "The Clintonville Handyman",
    title: "Owner & Residential Design-Build Consultant",
    detail:
      "Built and operate a referral-driven remodeling, repair, and accessibility company. 120+ homeowners served, ~200 documented opportunities, 500+ tasks delivered. Full ownership of consultation, estimating, procurement, project management, and operations. Specialized in aging-in-place and accessibility planning.",
  },
  {
    period: periods.elianeDesign,
    location: "Columbus, Ohio",
    role: "Éliane Design",
    title: "Founder & Principal Design Consultant",
    detail:
      "Luxury accessibility and aging-in-place design. Service standards, architectural product curation, manufacturer partnerships, specification, procurement, and installation planning.",
  },
  {
    period: periods.karoleFoundation,
    location: "Columbus, Ohio",
    role: "The Karole Foundation",
    title: "Founder & Executive Director",
    detail:
      "Fundraising, donor experience, community outreach, and programs connecting support to measurable home safety outcomes.",
  },
];

const previousRoles = [
  {
    period: periods.softSurroundings,
    location: "Remote",
    role: "Soft Surroundings",
    title: "Senior Product Manager",
    detail:
      "Ecommerce product strategy, conversion optimization, usability, and cross-functional customer experience leadership.",
  },
  {
    period: periods.scottsProductOwner,
    location: "Marysville, Ohio",
    role: "Scotts Miracle-Gro",
    title: "Product Owner / Digital Experience Manager",
    detail:
      "Customer experience roadmaps, website launches, redesigns, and cross-functional coordination across national consumer brands.",
  },
  {
    period: periods.scottsDigitalMarketing,
    location: "Marysville, Ohio",
    role: "Scotts Miracle-Gro",
    title: "Digital Marketing Manager",
    detail:
      "Digital marketing, website strategy, ecommerce, CRM, and customer engagement across multiple consumer brands.",
  },
  {
    period: periods.emusic,
    location: "New York, NY / Remote",
    role: "eMusic / 7digital",
    title: "Director, Business Development & Brand Partnerships",
    detail:
      "Complex sales cycles, proposals, presentations, pricing strategy, and partnership agreements with major consumer brands.",
  },
  {
    period: periods.pearson,
    location: "",
    role: "Pearson / Prentice Hall / McGraw-Hill",
    title: "Educational Sales & Account Management",
    detail:
      "Consultative presentations, product demonstrations, and long-term account development with faculty and institutions.",
  },
];

const strengths = [
  "Residential remodeling & design consultation",
  "Consultative sales",
  "Project scoping & estimating",
  "Homeowner communication",
  "Customer experience strategy",
  "Design thinking",
  "Accessibility & aging-in-place",
  "Product specification & procurement",
  "Business development",
  "Vendor & stakeholder coordination",
  "Entrepreneurial leadership",
  "Cross-functional leadership",
];

function TimelineItem({
  item,
  index,
  baseDelay,
}: {
  item: (typeof currentRoles)[number];
  index: number;
  baseDelay: number;
}) {
  return (
    <FadeIn key={`${item.role}-${item.period}`} delay={baseDelay + index * 50}>
      <li className="relative pb-12 last:pb-0 md:pb-14">
        <span
          className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-border-strong bg-background md:-left-12"
          aria-hidden
        />
        <time className="font-sans text-[0.7rem] tracking-[0.16em] uppercase text-foreground-subtle">
          {item.period}
          {item.location ? ` · ${item.location}` : ""}
        </time>
        <h3 className="mt-2 font-serif text-lg font-medium leading-snug text-foreground md:text-xl">
          {item.role}
        </h3>
        <p className="mt-1 font-sans text-xs tracking-[0.1em] uppercase text-foreground-muted">
          {item.title}
        </p>
        <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-foreground-muted">
          {item.detail}
        </p>
      </li>
    </FadeIn>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-background-alt py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <SectionLabel number="05" title="Experience" />
        </FadeIn>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <FadeIn delay={80}>
              <h2
                id="experience-heading"
                className="mb-6 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.2] text-foreground"
              >
                Sales, strategy, and residential design-build
              </h2>
              <p className="mb-16 max-w-xl font-sans text-base leading-relaxed text-foreground-muted md:mb-20">
                From national consumer brands to owner-operated residential
                practice in Central Ohio — building trust, simplifying
                complexity, and delivering buildable solutions.
              </p>
            </FadeIn>

            <div className="relative border-l border-border-strong pl-8 md:pl-12">
              <FadeIn delay={100}>
                <p className="mb-8 -ml-8 font-sans text-[0.65rem] tracking-[0.18em] uppercase text-foreground-subtle md:-ml-12">
                  Current
                </p>
              </FadeIn>
              <ol>
                {currentRoles.map((item, index) => (
                  <TimelineItem
                    key={item.role}
                    item={item}
                    index={index}
                    baseDelay={120}
                  />
                ))}
              </ol>

              <FadeIn delay={280}>
                <p className="mb-8 mt-4 -ml-8 font-sans text-[0.65rem] tracking-[0.18em] uppercase text-foreground-subtle md:-ml-12">
                  Previous
                </p>
              </FadeIn>
              <ol>
                {previousRoles.map((item, index) => (
                  <TimelineItem
                    key={`${item.role}-${item.period}`}
                    item={item}
                    index={index}
                    baseDelay={320}
                  />
                ))}
              </ol>
            </div>
          </div>

          <FadeIn className="lg:col-span-5" delay={200}>
            <aside className="border border-border bg-background p-8 md:p-10 lg:sticky lg:top-28">
              <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
                Core strengths
              </h3>
              <ul className="mt-8 space-y-3">
                {strengths.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-sm leading-relaxed text-foreground-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-border pt-8">
                <span className="block font-sans text-[0.65rem] tracking-[0.16em] uppercase text-foreground-subtle">
                  Education
                </span>
                <p className="mt-2 font-serif text-lg text-foreground">
                  The Ohio State University
                </p>
                <p className="mt-1 font-sans text-sm text-foreground-muted">
                  Bachelor of Business Administration, Marketing
                </p>
              </div>

              <p className="mt-8 font-sans text-xs leading-relaxed text-foreground-subtle">
                Available for occasional evening and weekend client or site
                needs as projects require.
              </p>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
