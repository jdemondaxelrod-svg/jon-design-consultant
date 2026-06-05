import { periods } from "./career";

export const letterMeta = {
  date: "June 5, 2026",
  subject: "Design/Sales Consultant",
} as const;

export const coverLetterParagraphs = [
  `I am writing to express my interest in the Design/Sales Consultant position at Dave Fox Remodeling. When I read your posting, I recognized the work I have been building toward — combining consultative sales, architectural design, and hands-on residential experience to help homeowners navigate upscale remodeling with clarity and confidence. I would welcome the opportunity to work alongside your interior designers and project managers to design, specify, estimate, and build exceptional projects across Central Ohio.`,
  `For the past four years, I have owned and operated The Clintonville Handyman, serving more than 120 homeowners throughout the region. That experience gave me end-to-end accountability in the areas your team values most: qualifying prospects, measuring and photographing existing structures, developing scope and estimates, coordinating vendors and subcontractors, presenting solutions to clients, and staying engaged on job sites throughout the remodeling process. I understand what it means to assess a client's goals and budget — and consistently deliver a solution that meets every objective.`,
  `Before my residential practice, I spent twenty-five years in consultative sales and product leadership at Prentice Hall, Pearson Education, McGraw-Hill, eMusic, Scotts Miracle-Gro, and Soft Surroundings. Those roles developed the professional interpersonal skills your position requires: listening carefully, adapting to a wide range of personalities, presenting design and cost analysis with clarity, and building trust over time.`,
  `I am proficient in SoftPlan architectural software and am prepared for the evening and weekend client meetings this role entails. I would be grateful for the chance to speak with you about how my background can support your team. Thank you for your time and consideration.`,
] as const;

export const resumeSummary =
  "Design and sales professional with 25+ years of consultative sales and product leadership, combined with four years of owner-operated residential remodeling experience serving 120+ Central Ohio homeowners. Proficient in SoftPlan. Skilled in qualifying prospects, documenting existing structures, specifying and estimating upscale remodeling projects, and guiding clients from first conversation through construction.";

export const coreCompetencies = [
  "Qualify prospects on the phone and in-home",
  "Measure and photograph existing structures",
  "Design interior and exterior floor plans and elevations in SoftPlan",
  "Specify and price labor, materials, and project tasks",
  "Obtain subcontractor and vendor quotes",
  "Present design, specifications, and cost analysis to clients",
  "Visit job sites; coordinate with installers and homeowners",
  "Kitchens, baths, room additions, basements, and whole-house remodels",
] as const;

export const currentExperience = [
  {
    org: "The Clintonville Handyman",
    title: "Owner & Residential Remodeling Consultant",
    location: "Columbus, Ohio",
    period: periods.clintonvilleHandyman,
    bullets: [
      "Owner-operated residential remodeling, repair, and accessibility company serving 120+ homeowners across Central Ohio.",
      "Lead consultation, on-site measurement, condition assessment, estimating, specification, procurement, and project coordination.",
      "Scope and deliver repair, remodeling, and accessibility work — carpentry, drywall, painting, doors, trim, fixtures, plumbing, electrical, and home diagnostics.",
      "Full business ownership: scheduling, invoicing, vendor relationships, and homeowner communication from first call through completion.",
    ],
  },
  {
    org: "Éliane Design",
    title: "Founder",
    location: "Columbus, Ohio",
    period: periods.elianeDesign,
    bullets: [
      "Luxury accessibility and aging-in-place brand integrating safety, mobility, and independence into residential environments.",
      "Brand strategy, product catalog, manufacturer outreach, consultation, and specification processes.",
    ],
  },
  {
    org: "The Karole Foundation",
    title: "Founder",
    location: "Columbus, Ohio",
    period: periods.karoleFoundation,
    bullets: [
      "Nonprofit focused on helping people remain safe, comfortable, and independent at home as needs change over time.",
    ],
  },
] as const;

export const priorExperience = [
  {
    org: "Soft Surroundings",
    title: "Director of Product & Digital Experience",
    location: "St. Louis, Missouri",
    period: periods.softSurroundings,
    bullets: [
      "Led product and digital experience strategy for a premium lifestyle brand.",
      "Improved site conversion by 15% and mobile conversion by 24%.",
    ],
  },
  {
    org: "Scotts Miracle-Gro",
    title: "Product Owner, E-Commerce",
    location: "Columbus, Ohio",
    period: periods.scottsProductOwner,
    bullets: [
      "Launched BonniePlants.com and drove 3× growth on Scottsprogram.com.",
      "Owned product specification, vendor coordination, and digital launch strategy.",
    ],
  },
  {
    org: "Scotts Miracle-Gro",
    title: "Digital Marketing Manager",
    location: "Columbus, Ohio",
    period: periods.scottsDigitalMarketing,
    bullets: [
      "Managed $1M Amazon advertising program achieving 5:1 ROAS.",
      "Coordinated vendor quotes, campaign specification, and performance analysis.",
    ],
  },
  {
    org: "eMusic / 7digital",
    title: "Brand Partnerships",
    location: "New York, New York",
    period: periods.emusic,
    bullets: [
      "Developed brand partnerships with Converse, Heineken, American Express, and other national brands.",
      "High-touch client relationships requiring adaptability across diverse stakeholder personalities.",
    ],
  },
  {
    org: "McGraw-Hill",
    title: "Account Manager",
    location: "Columbus, Ohio",
    period: periods.mcgrawHill,
    bullets: [
      "Consultative B2B sales in educational publishing.",
    ],
  },
  {
    org: "Pearson Education",
    title: "Product Manager",
    location: "Columbus, Ohio",
    period: periods.pearsonProduct,
    bullets: [
      "Managed digital learning product requirements, specification, and stakeholder alignment.",
    ],
  },
  {
    org: "Prentice Hall",
    title: "Outside Sales Representative",
    location: "Columbus, Ohio",
    period: periods.prenticeHallOutside,
    bullets: [
      "Territory sales and consultative client development in educational publishing.",
    ],
  },
  {
    org: "Prentice Hall",
    title: "Inside Sales Representative",
    location: "Columbus, Ohio",
    period: periods.prenticeHallInside,
    bullets: [
      "Phone-based prospect qualification and consultative sales.",
    ],
  },
] as const;
