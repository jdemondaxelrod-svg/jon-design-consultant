import { periods } from "./career";

export const proofPoints = [
  { value: "120+", label: "Homeowners served" },
  { value: "Central Ohio", label: "Residential focus" },
  { value: "Since 2022", label: "Owner-operated practice" },
] as const;

export const practiceAreas = [
  {
    title: "Listen before you scope",
    body: "Consultative discovery with homeowners — needs, routines, budget, and what matters most before any work begins.",
  },
  {
    title: "See the whole home",
    body: "Repair, remodeling, and accessibility are never isolated decisions. Comfort, safety, aesthetics, and independence all connect.",
  },
  {
    title: "Carry it through",
    body: "From on-site assessment and estimating to procurement and project coordination — end-to-end accountability, not handoffs.",
  },
] as const;

export const ventures = [
  {
    index: "01",
    name: "The Clintonville Handyman",
    role: "Owner & Residential Remodeling Consultant",
    period: periods.clintonvilleHandyman,
    summary:
      "Residential remodeling, repair, and accessibility services across Central Ohio. 120+ homeowners served — carpentry through fixtures, diagnostics through finished work.",
  },
  {
    index: "02",
    name: "Éliane Design",
    role: "Founder",
    period: periods.elianeDesign,
    summary:
      "Luxury accessibility and aging-in-place brand. Safety, mobility, and independence integrated into beautiful residential environments.",
  },
  {
    index: "03",
    name: "The Karole Foundation",
    role: "Founder",
    period: periods.karoleFoundation,
    summary:
      "Nonprofit focused on helping people remain safe, comfortable, and independent at home as needs change over time.",
  },
] as const;

export const careerPath = [
  {
    period: periods.softSurroundings,
    org: "Soft Surroundings",
    title: "Director of Product & Digital Experience",
    note: "+15% site conversion · +24% mobile conversion",
  },
  {
    period: periods.scottsProductOwner,
    org: "Scotts Miracle-Gro",
    title: "Product Owner, E-Commerce",
    note: "BonniePlants.com launch · 3× Scottsprogram.com growth",
  },
  {
    period: periods.scottsDigitalMarketing,
    org: "Scotts Miracle-Gro",
    title: "Digital Marketing Manager",
    note: "$1M Amazon advertising · 5:1 ROAS",
  },
  {
    period: periods.emusic,
    org: "eMusic / 7digital",
    title: "Brand Partnerships",
    note: "Converse, Heineken, American Express, and more",
  },
  {
    period: periods.mcgrawHill,
    org: "McGraw-Hill",
    title: "Account Manager",
    note: "Educational publishing sales",
  },
  {
    period: periods.pearsonProduct,
    org: "Pearson Education",
    title: "Product Manager",
    note: "Digital learning products",
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
