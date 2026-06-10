import { periods } from "./career";

/** Verbatim resume copy from DeMond Axelrod Resume - Design & Build (5).pdf */

export const resumeHeader = {
  name: "Jon DeMond-Axelrod",
  titleLine:
    "Residential Design Consultant | Remodeling | Consultative Sales",
  location: "Columbus, Ohio",
  phone: "614.404.4662",
  email: "jdemondaxelrod@gmail.com",
} as const;

export const resumeProfile = [
  "Consultative sales professional, business builder, and homeowner services operator with a passion for helping people improve the places they call home.",
  "Owner of The Clintonville Handyman, a homeowner services business focused on repairs, improvements, accessibility, and practical problem solving. Founder of Éliane Design and The Karole Foundation, organizations focused on accessibility, aging-in-place, and helping people remain safe and independent at home.",
  "Combines hands-on construction experience, consultative sales expertise, and a background in product strategy, customer experience, and business development to help homeowners navigate complex decisions and create environments that are functional, beautiful, and built around how people actually live.",
] as const;

export const resumeCoreStrengths = [
  "Vision Development & Decision Support",
  "Residential Systems & Home Improvement",
  "Consultative Sales",
  "Project Scoping & Estimating",
  "Customer Experience",
  "Accessibility & Aging-in-Place",
  "Homeowner Communication",
  "Product Specification & Procurement",
  "Business Development",
  "Consensus Building",
  "Project Management",
  "Cross-Functional Leadership",
] as const;

export type ResumeRole = {
  org: string;
  location: string;
  title: string;
  period: string;
  intro?: string;
  bullets: readonly string[];
};

export const resumeExperience: readonly ResumeRole[] = [
  {
    org: "The Clintonville Handyman",
    location: "Columbus, Ohio",
    title: "Owner & Residential Remodeling Consultant",
    period: periods.clintonvilleHandyman,
    intro:
      "Operate a residential remodeling, repair, and accessibility services company serving homeowners throughout Central Ohio.",
    bullets: [
      "Built The Clintonville Handyman from startup through local marketing, customer acquisition, and consultative sales",
      "Built a referral-driven business supported by repeat customers, word-of-mouth recommendations, and a verified five-star average",
      "Scoped, estimated, and delivered more than 500 residential repair, remodeling, accessibility, and home-improvement tasks",
      "Managed projects spanning carpentry, drywall, painting, doors, trim, accessibility modifications, siding, fixtures, plumbing, electrical work, and home diagnostics",
      "Conduct all customer consultations, estimating, scheduling, procurement, project management, invoicing, and business operations",
    ],
  },
  {
    org: "The Karole Foundation",
    location: "Columbus, Ohio",
    title: "Founder",
    period: periods.karoleFoundation,
    intro:
      "Nonprofit initiative focused on accessibility, aging-in-place, and home safety.",
    bullets: [
      "Developed mission, strategic vision, website, and organizational framework",
      "Developed concepts and initiatives focused on helping individuals remain safe and independent at home",
    ],
  },
  {
    org: "Éliane Design",
    location: "Columbus, Ohio",
    title: "Founder",
    period: periods.elianeDesign,
    intro:
      "Luxury accessibility and aging-in-place brand focused on integrating safety, mobility, and independence into beautiful residential environments.",
    bullets: [
      "Developed a design philosophy centered on integrating accessibility, safety, and independence into beautiful residential environments",
      "Researched luxury residential brands, accessibility products, and aging-in-place solutions to better understand how design and function can coexist",
      "Developed consultation and specification frameworks focused on helping homeowners navigate accessibility and aging-in-place decisions",
    ],
  },
  {
    org: "Soft Surroundings",
    location: "St. Louis, MO (Remote)",
    title: "Director of Product & Digital Experience",
    period: periods.softSurroundings,
    intro:
      "Led customer experience and ecommerce initiatives for a national retail brand.",
    bullets: [
      "Directed product strategy and digital experience for a national ecommerce retailer",
      "Improved site conversion by 15% and mobile conversion by 24% through customer-focused optimization initiatives",
      "Led customer experience improvements spanning mobile UX, search, merchandising, checkout, accessibility, and analytics",
      "Introduced Agile and Scrum practices that improved collaboration and execution",
    ],
  },
  {
    org: "The Scotts Miracle-Gro Company",
    location: "Marysville, OH",
    title: "Product Owner / Digital Experience Manager",
    period: periods.scottsProductOwner,
    bullets: [
      "Led product strategy and customer experience initiatives across multiple national consumer brands",
      "Launched BonniePlants.com, the company's most successful first-year ecommerce launch",
      "Directed website redesigns, customer journey development, information architecture, and agency partnerships",
      "Led initiatives contributing to 3X sales growth for Scottsprogram.com",
    ],
  },
  {
    org: "The Scotts Miracle-Gro Company",
    location: "Marysville, OH",
    title: "Digital Marketing Manager",
    period: periods.scottsDigitalMarketing,
    bullets: [
      "Led website strategy, CRM, ecommerce, search, localization, and digital marketing initiatives",
      "Developed the company's first Amazon advertising strategy, generating $1M in first-year sales with a 5:1 return on ad spend",
      "Built and managed a 1,000+ member customer research and feedback community",
    ],
  },
  {
    org: "eMusic / 7digital",
    location: "New York, NY / Remote",
    title: "Director, Business Development & Brand Partnerships",
    period: periods.emusic,
    bullets: [
      "Generated new business through consultative selling, needs analysis, proposal development, and strategic account management.",
      "Consulted with brands and agencies to develop custom marketing and promotional programs",
      "Led business development, proposal development, presentations, contract negotiations, and client relationships",
      "Developed strategic partnerships with brands including Converse, Heineken, DKNY, Foot Locker, NPR, Pizza Hut, Calvin Klein, and Frito-Lay",
      "Managed cross-functional teams spanning creative, legal, editorial, technology, and marketing functions",
    ],
  },
  {
    org: "Pearson Education",
    location: "Upper Saddle River, NJ",
    title: "Acquisitions Editor / Product Manager",
    period: periods.pearsonProduct,
    bullets: [
      "Published 14 educational products and recruited authors for new product initiatives",
      "Conducted market research, competitive analysis, and customer research",
      "Led cross-functional teams to develop educational software and textbook products",
      "Contributed to early digital learning platforms including MyEconLab",
    ],
  },
  {
    org: "McGraw-Hill Higher Education",
    location: "New York, NY",
    title: "Senior Sales Executive",
    period: periods.mcgrawHill,
    bullets: [
      "Managed a $3.38M sales territory serving colleges and universities",
      "Delivered 17.7% sales growth and earned Sales Goal Club recognition",
      "Consulted with faculty and institutions to identify educational and technology solutions",
    ],
  },
  {
    org: "Prentice Hall",
    location: "Columbus, OH / Austin, TX",
    title: "Senior Sales Executive",
    period: periods.prenticeHallOutside,
    bullets: [],
  },
  {
    org: "Prentice Hall",
    location: "Columbus, OH / Austin, TX",
    title: "Inside Sales Executive",
    period: periods.prenticeHallInside,
    bullets: [
      "Managed approximately 100 institutional accounts and 10,000 customer contacts",
      "Consistently exceeded sales goals and earned Top Performer recognition",
      "Qualified for Sales Goal Club in 2000, 2001, 2002, and 2003",
      "Generated $11.6M in cumulative sales while averaging 16.9% annual growth",
    ],
  },
] as const;

export const resumeEducation = {
  school: "Fisher College of Business | The Ohio State University",
  degree: "Bachelors of Business Administration, Major in Marketing",
} as const;

/** Shown only in print/PDF, after the resume body. */
export const resumeClosingNote = {
  title: "One Final Thought",
  body: [
    "For twenty-five years, I've helped people make decisions.",
    "The setting changed.",
    "The work never really did.",
    "Listening carefully.",
    "Understanding what matters.",
    "Helping people imagine what could be.",
    "And helping make it real.",
    "Because in the end, it isn't really about construction.",
    "It's about possibility.",
  ],
  signature: "— Jon DeMond-Axelrod",
} as const;
