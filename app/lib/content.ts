import { periods } from "./career";

export const hero = {
  headline:
    "Design, construction, and customer experience — brought together through real residential work.",
  subtext:
    "I'm Jon DeMond-Axelrod, a residential remodeling consultant, business owner, and customer experience leader in Columbus, Ohio. I built The Clintonville Handyman, founded Éliane Design and The Karole Foundation, and am interested in bringing that unusual mix of sales, design, product thinking, and hands-on residential experience to Dave Fox.",
} as const;

export const whyThisRole = {
  title: "Why this role",
  intro:
    "The Residential Design Consultant role at Dave Fox sits at the intersection of everything I've been building toward — not as separate skills, but as one practice.",
  points: [
    "Consultative sales and homeowner communication",
    "Remodeling and repair experience in real homes",
    "Estimating, scoping, and practical project planning",
    "Customer experience strategy from premium consumer brands",
    "Design thinking and accessibility / aging-in-place interest",
  ],
} as const;

export const whatIBring = [
  {
    title: "Homeowner Trust",
    body: "120+ Central Ohio homeowners served through a referral-driven, five-star practice. I know how to earn confidence before a project is sold.",
  },
  {
    title: "Consultative Sales",
    body: "Twenty-five years qualifying needs, listening carefully, and helping people make complex decisions — from publishing and consumer brands to residential work.",
  },
  {
    title: "Residential Field Experience",
    body: "Owner-operated remodeling practice with hands-on accountability: consultation, measurement, scoping, estimating, procurement, and on-site problem-solving.",
  },
  {
    title: "Customer Experience & Product Thinking",
    body: "Product and digital experience leadership at Soft Surroundings and Scotts — specification, prioritization, presentation, and conversion at scale.",
  },
] as const;

export const fieldProof = [
  { value: "120+", label: "Homeowners served" },
  { value: "~200", label: "Documented customer opportunities" },
  { value: "500+", label: "Residential repair, remodeling & accessibility tasks" },
  { value: "5★", label: "Customer reputation" },
] as const;

export const fieldProofNote =
  "Repeat and referral-driven business across Central Ohio.";

export const learnedInsideHomes = [
  "Homeowners need guidance, not just options.",
  "Trust is built before a project is sold.",
  "Good design reduces anxiety.",
  "Accessibility should feel beautiful, not clinical.",
  "Communication is part of the craft.",
] as const;

export const experienceSnapshot = [
  {
    org: "The Clintonville Handyman",
    title: "Owner & Residential Remodeling Consultant",
    period: periods.clintonvilleHandyman,
  },
  {
    org: "Éliane Design",
    title: "Founder",
    period: periods.elianeDesign,
  },
  {
    org: "The Karole Foundation",
    title: "Founder",
    period: periods.karoleFoundation,
  },
  {
    org: "Soft Surroundings / Scotts Miracle-Gro",
    title: "Product & Customer Experience Leadership",
    period: `${periods.softSurroundings} · ${periods.scottsProductOwner}`,
  },
  {
    org: "eMusic / 7digital / Prentice Hall / McGraw-Hill",
    title: "Consultative Sales & Business Development",
    period: `${periods.prenticeHallInside} – ${periods.emusic}`,
  },
] as const;

export const whyDaveFox = {
  lead: "I am not a traditional candidate. That is the point.",
  body: "I bring the ability to sit with homeowners, understand what they really want, translate goals into practical solutions, communicate tradeoffs clearly, and stay grounded in the realities of construction. Dave Fox is where that combination belongs.",
} as const;
