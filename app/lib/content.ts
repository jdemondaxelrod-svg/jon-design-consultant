import { career, formatPeriod, periods } from "./career";

export const hero = {
  headline:
    "Helping people imagine better homes, navigate tradeoffs, and bring great ideas to life.",
  body: [
    "I'm Jon DeMond-Axelrod, and I'm currently pursuing Residential Design Consultant and Design-Build Consultant opportunities in Columbus, Ohio.",
    "Over the past several years, I've worked with more than 120 homeowners throughout Central Ohio, helping them improve, maintain, and adapt the places they call home.",
    "Through The Clintonville Handyman, Éliane Design, and The Karole Foundation, I've pursued a common mission: helping people improve, adapt, and reimagine their homes—and helping them navigate the decisions that bring those ideas to life.",
    "For more than 25 years, I've helped customers make important decisions across education, publishing, technology, consumer brands, and residential services. Whether helping homeowners, professors, shoppers, or business partners, I've always been drawn to understanding needs, exploring possibilities, building trust, and helping people make confident decisions.",
  ],
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

export const whatIBringLead =
  "Four perspectives that shape how I work with homeowners." as const;

export const whatIBring = [
  {
    title: "Homeowner Perspective",
    body: "More than 120 homeowners have trusted me with repairs, improvements, accessibility projects, and decisions about their homes.",
  },
  {
    title: "Consultative Perspective",
    body: "Twenty-five years helping customers evaluate options, navigate complexity, and make important decisions.",
  },
  {
    title: "Field Perspective",
    body: "Hands-on experience with consultation, measurement, estimating, procurement, project coordination, and on-site problem solving.",
  },
  {
    title: "Systems Perspective",
    body: "A background in customer experience and product strategy that taught me to understand how decisions, details, and outcomes connect.",
  },
] as const;

export const fieldProof = [
  {
    value: "120+",
    label: "Homeowners Served",
    detail:
      "Personally guided more than 120 homeowners from first conversation to final walkthrough.",
  },
  {
    value: "500+",
    label: "Projects & Tasks",
    detail:
      "Big projects. Small projects. And everything in between. More than 500 opportunities to learn how homes — and homeowners — work.",
  },
  {
    value: "25+",
    label: "Trades & Systems",
    detail:
      "Homes are systems. Working across more than 25 trades and project categories has taught me how the pieces fit together.",
  },
  {
    value: "5★",
    label: "Customer Reputation",
    detail:
      "A verified five-star average. More importantly, homeowners keep calling back.",
  },
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
    title: "Owner",
    period: periods.clintonvilleHandyman,
    mission:
      "Helping homeowners understand what's possible, choose a practical path forward, and improve the places they call home.",
  },
  {
    org: "The Karole Foundation",
    title: "Founder",
    period: periods.karoleFoundation,
    mission:
      "Helping people and families make informed decisions about accessibility, safety, and independence at home—regardless of income.",
  },
  {
    org: "Éliane Design",
    title: "Founder",
    period: periods.elianeDesign,
    mission:
      "Helping discerning homeowners balance beauty, functionality, and long-term livability.",
  },
  {
    org: "Soft Surroundings",
    title: "Director of Product & Digital Experience",
    period: periods.softSurroundings,
    mission:
      "Helping customers find clothing that reflected their individuality and personal style by designing online experiences that made shopping feel effortless, inspiring, and confidence-building.",
  },
  {
    org: "Scotts Miracle-Gro",
    title: "Product & Digital Experience Leadership",
    period: formatPeriod(
      career.scottsDigitalMarketing.start,
      career.scottsProductOwner.end,
    ),
    mission:
      "Helping homeowners turn uncertainty into confidence through education, inspiration, and practical lawn and garden advice.",
  },
  {
    org: "eMusic / 7digital",
    title: "Director, Business Development & Brand Partnerships",
    period: periods.emusic,
    mission: "Helping brands connect with customers through the power of music.",
  },
  {
    org: "Pearson Education / McGraw-Hill / Prentice Hall",
    title: "Consultative Sales & Product Leadership",
    period: formatPeriod(
      career.prenticeHallInside.start,
      career.mcgrawHill.end,
    ),
    mission:
      "Helping professors make confident decisions about the content, technology, and resources they used to support student success.",
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
