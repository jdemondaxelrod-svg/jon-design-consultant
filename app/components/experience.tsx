import { FadeIn } from "./fade-in";
import { periods } from "../lib/career";
import { SectionLabel } from "./section-label";

const currentRoles = [
  {
    period: periods.clintonvilleHandyman,
    location: "Columbus, Ohio",
    role: "The Clintonville Handyman",
    title: "Owner & Residential Remodeling Consultant",
    detail:
      "Operate a residential remodeling, repair, and accessibility services company serving Central Ohio. 120+ homeowners served, nearly 200 documented opportunities, and 500+ repair, remodeling, accessibility, and home-improvement tasks delivered. Full ownership of consultation, estimating, scheduling, procurement, project management, invoicing, and business operations.",
  },
  {
    period: periods.elianeDesign,
    location: "Columbus, Ohio",
    role: "Éliane Design",
    title: "Founder",
    detail:
      "Luxury accessibility and aging-in-place brand focused on safety, mobility, and independence in beautiful residential environments. Developed brand strategy, website, product catalog, content, customer experience framework, product sourcing, consultation, and specification processes.",
  },
  {
    period: periods.karoleFoundation,
    location: "Columbus, Ohio",
    role: "The Karole Foundation",
    title: "Founder",
    detail:
      "Nonprofit initiative focused on accessibility, aging-in-place, and home safety. Developed mission, strategic vision, website, organizational framework, community outreach, and accessibility awareness initiatives.",
  },
];

const previousRoles = [
  {
    period: periods.softSurroundings,
    location: "St. Louis, MO / Remote",
    role: "Soft Surroundings",
    title: "Director of Product & Digital Experience",
    detail:
      "Led customer experience and ecommerce initiatives for a national retail brand. Directed digital experience strategy, improved site conversion by 15% and mobile conversion by 24%, and introduced Agile and Scrum practices to improve collaboration and execution.",
  },
  {
    period: periods.scottsProductOwner,
    location: "Marysville, Ohio",
    role: "Scotts Miracle-Gro",
    title: "Product Owner / Digital Experience Manager",
    detail:
      "Led product strategy and customer experience initiatives across national consumer brands. Launched BonniePlants.com, directed redesigns and customer journey work, and led initiatives contributing to 3X sales growth for Scottsprogram.com.",
  },
  {
    period: periods.scottsDigitalMarketing,
    location: "Marysville, Ohio",
    role: "Scotts Miracle-Gro",
    title: "Digital Marketing Manager",
    detail:
      "Led website strategy, CRM, ecommerce, search, localization, and digital marketing. Developed the company's first Amazon advertising strategy, generating $1M in first-year sales with a 5:1 return on ad spend, and built a 1,000+ member customer research community.",
  },
  {
    period: periods.emusic,
    location: "New York, NY / Remote",
    role: "eMusic / 7digital",
    title: "Director, Business Development & Brand Partnerships",
    detail:
      "Generated new business through consultative selling, needs analysis, proposal development, and strategic account management. Developed partnerships with brands including Converse, Heineken, DKNY, Foot Locker, NPR, Pizza Hut, Calvin Klein, and Frito-Lay.",
  },
  {
    period: periods.mcgrawHill,
    location: "New York, NY",
    role: "McGraw-Hill Higher Education",
    title: "Senior Sales Executive",
    detail:
      "Managed a $3.38M higher education sales territory, delivered 17.7% sales growth, earned Sales Goal Club recognition, and consulted with faculty and institutions on educational and technology solutions.",
  },
  {
    period: periods.pearsonProduct,
    location: "Upper Saddle River, NJ",
    role: "Pearson Education",
    title: "Acquisitions Editor / Product Manager",
    detail:
      "Published 14 educational products, recruited authors, conducted market and customer research, and led cross-functional teams developing educational software and textbook products including early digital learning platforms.",
  },
  {
    period: `${periods.prenticeHallInside} / ${periods.prenticeHallOutside}`,
    location: "",
    role: "Prentice Hall",
    title: "Inside Sales Executive / Senior Sales Executive",
    detail:
      "Managed approximately 100 institutional accounts and 10,000 customer contacts. Consistently exceeded goals, earned Top Performer recognition, qualified for Sales Goal Club, and generated $11.6M in cumulative sales.",
  },
];

const strengths = [
  "Residential remodeling & design consultation",
  "Remodeling & home improvement",
  "Consultative sales",
  "Project scoping & estimating",
  "Customer experience strategy",
  "Accessibility & aging-in-place",
  "Homeowner communication",
  "Product specification & procurement",
  "Business development",
  "Vendor & stakeholder management",
  "Project management",
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
                Remodeling, customer experience, and consultative sales
              </h2>
              <p className="mb-16 max-w-xl font-sans text-base leading-relaxed text-foreground-muted md:mb-20">
                From owner-operated residential practice in Central Ohio to
                national consumer brands and higher education sales — a career
                built around trust, clarity, and practical execution.
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
