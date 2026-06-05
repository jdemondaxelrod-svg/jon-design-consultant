import { periods } from "./career";

export const proofPoints = [
  { value: "120+", label: "Homeowners served" },
  { value: "25+ yrs", label: "Consultative sales & design" },
  { value: "Columbus", label: "Central Ohio · On-site ready" },
] as const;

export const projectTypes = [
  "Kitchens",
  "Baths",
  "Room additions",
  "Basements",
  "Whole-house remodels",
] as const;

export const responsibilities = [
  {
    title: "Qualify prospects on the phone",
    body: "Consultative discovery — assess goals, scope, timeline, and budget before the first site visit. Twenty-five years of sales training across publishing, consumer brands, and residential work.",
  },
  {
    title: "Measure and photograph the existing structure",
    body: "On-site documentation of existing conditions — measurements, diagnostics, and photographic records that inform accurate design and estimating.",
  },
  {
    title: "Design floor plans and elevations in SoftPlan",
    body: "Interior and exterior floor plans and elevations using SoftPlan architectural software, with a sound understanding of architectural and structural relationships.",
  },
  {
    title: "Specify and price labor and materials",
    body: "Detailed task and material specifications, estimate development, and vendor/subcontractor quote coordination — translating design into buildable, priced scope.",
  },
  {
    title: "Present design, specifications, and cost analysis",
    body: "Clear client presentations that connect design intent, specifications, and investment — helping homeowners make confident decisions aligned with their objectives.",
  },
  {
    title: "Stay engaged through construction",
    body: "Job site visits and ongoing communication with installers and homeowners throughout the remodeling process — accountable from first call to finished work.",
  },
] as const;

export const fieldExperience = [
  {
    index: "01",
    name: "The Clintonville Handyman",
    role: "Owner & Residential Remodeling Consultant",
    period: periods.clintonvilleHandyman,
    summary:
      "Owner-operated residential remodeling practice serving 120+ Central Ohio homeowners. Consultation, on-site assessment, estimating, specification, procurement, and project coordination across repair, remodeling, and accessibility work.",
  },
  {
    index: "02",
    name: "Éliane Design",
    role: "Founder",
    period: periods.elianeDesign,
    summary:
      "Luxury accessibility and aging-in-place design practice — specification, product curation, and residential environments where safety and aesthetics work together.",
  },
  {
    index: "03",
    name: "The Karole Foundation",
    role: "Founder",
    period: periods.karoleFoundation,
    summary:
      "Nonprofit focused on helping people remain safe, comfortable, and independent at home — deep familiarity with how residential needs evolve over time.",
  },
] as const;

export const careerPath = [
  {
    period: periods.softSurroundings,
    org: "Soft Surroundings",
    title: "Director of Product & Digital Experience",
    note: "Customer experience leadership · +15% site · +24% mobile conversion",
  },
  {
    period: periods.scottsProductOwner,
    org: "Scotts Miracle-Gro",
    title: "Product Owner, E-Commerce",
    note: "Specification & launch · BonniePlants.com · 3× Scottsprogram.com growth",
  },
  {
    period: periods.scottsDigitalMarketing,
    org: "Scotts Miracle-Gro",
    title: "Digital Marketing Manager",
    note: "Vendor coordination · $1M Amazon advertising · 5:1 ROAS",
  },
  {
    period: periods.emusic,
    org: "eMusic / 7digital",
    title: "Brand Partnerships",
    note: "High-touch client relationships · Converse, Heineken, American Express",
  },
  {
    period: periods.mcgrawHill,
    org: "McGraw-Hill",
    title: "Account Manager",
    note: "Consultative B2B sales",
  },
  {
    period: periods.pearsonProduct,
    org: "Pearson Education",
    title: "Product Manager",
    note: "Requirements, specification, stakeholder management",
  },
  {
    period: periods.prenticeHallOutside,
    org: "Prentice Hall",
    title: "Outside Sales Representative",
    note: null,
  },
  {
    period: periods.prenticeHallInside,
    org: "Prentice Hall",
    title: "Inside Sales Representative",
    note: null,
  },
] as const;

export const roleFit = [
  "Five+ years of design and sales experience across residential and consumer categories",
  "Strong interpersonal skills — adaptive communication across a wide range of personalities",
  "Proficient in SoftPlan architectural software",
  "Comfortable with evening and weekend client meetings",
] as const;
