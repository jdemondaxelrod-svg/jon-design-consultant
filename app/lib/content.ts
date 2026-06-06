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
    body: "Twenty-five years qualifying needs, listening carefully, and closing complex decisions — from educational publishing and national brand partnerships to residential remodeling consultation.",
  },
  {
    title: "Residential Field Experience",
    body: "Owner-operated remodeling practice with hands-on accountability: consultation, measurement, scoping, estimating, procurement, and on-site problem-solving.",
  },
  {
    title: "Customer Experience & Product Thinking",
    body: "Measurable results at Soft Surroundings (+15% site conversion, +24% mobile) and Scotts Miracle-Gro (BonniePlants.com launch, 3× Scottsprogram.com growth, $1M Amazon program at 5:1 ROAS).",
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

export const homeownerFeedback = {
  intro:
    "Over the last several years, I have worked with more than 120 homeowners across Central Ohio. While the projects vary, the feedback is remarkably consistent. Homeowners repeatedly highlight trust, communication, problem solving, collaboration, and craftsmanship.",
  takeaway:
    "These are the same qualities homeowners value in me — and the same qualities that would make me successful as a Design Consultant at Dave Fox.",
  themes: [
    {
      title: "Trust",
      copy: "Successful residential projects begin with trust. Homeowners consistently describe Jon as transparent, dependable, and someone they feel comfortable inviting into their homes.",
      quotes: [
        {
          text: "I trust him with all of my projects. Highly recommend.",
          attribution: "Erin L.",
          date: "June 17, 2024",
        },
        {
          text: "Very trustworthy.",
          attribution: "Jennifer G.",
          date: "January 6, 2026",
        },
        {
          text: "He was very upfront with pricing and conscientious about his billing.",
          attribution: "Kevin S.",
          date: "June 20, 2024",
        },
      ],
    },
    {
      title: "Communication",
      copy: "Customers frequently mention responsiveness, expectation-setting, and the ability to explain options and tradeoffs clearly.",
      quotes: [
        {
          text: "He kept me updated throughout the whole process.",
          attribution: "DJ H.",
          date: "April 17, 2024",
        },
        {
          text: "Jon did a great job communicating with us throughout the project.",
          attribution: "Beth B.",
          date: "January 25, 2026",
        },
        {
          text: "He walked me through what he would be doing so there would be no surprises.",
          attribution: "Betsy V.",
          date: "April 11, 2024",
        },
      ],
    },
    {
      title: "Problem Solving",
      copy: "Many projects involve diagnosing underlying issues, evaluating alternatives, and helping homeowners make informed decisions.",
      quotes: [
        {
          text: "He saved me money by coming up with a different way to finish the job.",
          attribution: "Callie B.",
          date: "May 9, 2024",
        },
        {
          text: "No stone or option left unturned.",
          attribution: "Pedro A.",
          date: "October 9, 2024",
        },
        {
          text: "He addressed other issues that were not completed properly by the previous contractor.",
          attribution: "Beth B.",
          date: "January 25, 2026",
        },
      ],
    },
    {
      title: "Collaboration",
      copy: "Jon approaches projects as a collaborative process, helping homeowners navigate decisions while respecting their goals and preferences.",
      quotes: [
        {
          text: "He considered our opinion and feedback while providing suggestions on how to move forward.",
          attribution: "Pedro A.",
          date: "October 9, 2024",
        },
        {
          text: "He also provided great consultation on other projects I intend on completing myself.",
          attribution: "Jeyshan P.",
          date: "June 6, 2024",
        },
        {
          text: "Easy and pleasant to work with.",
          attribution: "Rowan P.",
          date: "January 2, 2026",
        },
      ],
    },
    {
      title: "Craftsmanship & Quality",
      copy: "Homeowners consistently describe attention to detail, quality workmanship, and pride in execution.",
      quotes: [
        {
          text: "Careful, calculated and meticulous.",
          attribution: "Pedro A.",
          date: "October 9, 2024",
        },
        {
          text: "Outstanding work. Thorough, detailed, and considerate.",
          attribution: "Chiquita M.",
          date: "January 14, 2026",
        },
        {
          text: "The quality of his work is outstanding.",
          attribution: "Bhavik P.",
          date: "October 2, 2024",
        },
      ],
    },
  ],
} as const;

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

export const oneFinalThought = {
  title: "One Final Thought",
  frames: [
    "For twenty-five years,",
    "I've helped people make decisions.",
    "The setting changed.",
    "The work never really did.",
    "Listening carefully.",
    "Understanding what matters.",
    "Helping people imagine",
    "what could be.",
    "And helping make it real.",
    "Because in the end,",
    "it isn't really about construction.",
    "It's about possibility.",
    "— Jon DeMond-Axelrod",
  ],
  endLines: [
    "Because in the end,",
    "it isn't really about construction.",
    "It's about possibility.",
    "— Jon DeMond-Axelrod",
  ],
} as const;
