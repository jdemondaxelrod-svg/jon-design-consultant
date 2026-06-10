import { career, formatPeriod, periods } from "./career";

export const heroV2 = {
  mission: "Helping people build the life they want, one home at a time.",
} as const;

export const introV2 = [
  "I'm Jon DeMond-Axelrod, and I'm currently pursuing Residential Design Consultant and Design-Build Consultant opportunities in Columbus, Ohio.",
  "Over the past several years, I've worked with more than 120 homeowners throughout Central Ohio, helping them improve, maintain, and adapt the places they call home.",
  "That work eventually led me to create The Clintonville Handyman, Éliane Design, and The Karole Foundation—three very different efforts built around a shared interest in homes, accessibility, aging-in-place, and helping people remain safe, independent, and comfortable where they live.",
  "Before entering residential services, I spent twenty-five years helping customers make important decisions in education, publishing, technology, and consumer brands. Today, I bring that same consultative approach to helping homeowners navigate important decisions about their homes.",
] as const;

export const whyThisWorkV2 = {
  title: "Why This Work",
  paragraphs: [
    "For most of my career, the setting changed but the work stayed surprisingly consistent.",
    "I helped professors choose materials for their students. I helped brands connect with customers. I helped digital shoppers find confidence online. And now, through The Clintonville Handyman, I help homeowners make decisions about the places they live.",
    "That shift has changed how I see the work.",
    "A home is not just a project. It is where safety, comfort, independence, family, memory, and identity all come together.",
    "That is why I'm drawn to residential design-build consulting. It brings together the parts of my background that have always mattered most: listening carefully, understanding what people need, helping them see possibilities, and turning those possibilities into practical decisions.",
  ],
} as const;

export const whatIBringV2Lead =
  "Eight strengths that shape how I work with homeowners." as const;

export const whatIBringV2 = [
  {
    title: "Consultative Sales",
    body: "Twenty-five years helping people evaluate options, understand tradeoffs, and make confident decisions.",
  },
  {
    title: "Vision Development & Decision Support",
    body: "Helping homeowners clarify what they want, what is possible, and what path makes the most sense.",
  },
  {
    title: "Homeowner Communication",
    body: "Clear, honest conversation that builds trust before any recommendation is made.",
  },
  {
    title: "Residential Systems & Home Improvement",
    body: "Hands-on understanding of how repairs, improvements, and upgrades connect inside real homes.",
  },
  {
    title: "Accessibility & Aging-in-Place",
    body: "A growing focus on safety, independence, and design that supports how people actually live.",
  },
  {
    title: "Project Scoping & Estimating",
    body: "Practical experience defining scope, sequencing work, and helping homeowners plan with clarity.",
  },
  {
    title: "Customer Experience",
    body: "A background in premium brands and digital experience that taught me how trust is built over time.",
  },
  {
    title: "Consensus Building",
    body: "Helping homeowners, trades, and stakeholders align around decisions that serve the real goal.",
  },
] as const;

export const fieldProofV2 = [
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
      "Homes are systems. Working across many trades and project categories has taught me how the pieces fit together.",
  },
  {
    value: "34",
    label: "Five-Star Reviews",
    detail:
      "34 verified five-star reviews. More importantly, homeowners kept calling back.",
  },
] as const;

export const homeownersTaughtV2 = {
  title: "What Homeowners Have Taught Me",
  headline: "The real problem is rarely the first thing they call about.",
  paragraphs: [
    "Working inside homes has taught me that homeowners rarely start with the full problem.",
    "They may call about a door, a railing, a ceiling, a faucet, or a repair. But underneath the request is usually something larger: comfort, safety, pride, independence, frustration, uncertainty, or the desire to make the home work better for the life happening inside it.",
    "That is where good consultation begins.",
    "It starts by listening carefully enough to understand what the homeowner is really trying to solve.",
  ],
  lessons: [
    "Trust comes before advice.",
    "Clarity matters as much as craftsmanship.",
    "Small decisions often reveal bigger needs.",
    "People want to feel heard before they feel sold.",
    "The best solution is not always the biggest solution.",
  ],
} as const;

export const learnedInsideHomesV2 = {
  title: "What I've Learned Inside Homes",
  headline: "Homes are interconnected systems.",
  paragraphs: [
    "Spending time inside homes has helped me understand how connected every decision can be.",
    "A lighting choice affects how a room feels. A wall may carry electrical, plumbing, HVAC, cost, and sequence implications. Ventilation affects comfort. Humidity affects materials. Accessibility affects dignity, independence, and daily life.",
    "The value is not pretending to be every specialist.",
    "The value is knowing enough to ask better questions, anticipate tradeoffs, and help homeowners understand how design and construction decisions affect one another.",
  ],
  principles: [
    "Homes are interconnected systems.",
    "Comfort, safety, beauty, and cost are rarely separate.",
    "Good planning prevents expensive surprises.",
    "The best consultants help homeowners see both possibility and constraint.",
    "Details matter because people live with them every day.",
  ],
} as const;

export const experienceSnapshotV2 = [
  {
    org: "The Clintonville Handyman",
    title: "Owner",
    period: periods.clintonvilleHandyman,
    mission:
      "Built The Clintonville Handyman from startup through local marketing, customer acquisition, and consultative sales. Built a referral-driven business supported by repeat customers, word-of-mouth recommendations, and 34 five-star reviews as owner of a homeowner services business focused on repairs, improvements, accessibility, and practical problem solving.",
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
      "Developed a design philosophy centered on integrating accessibility, safety, and independence into beautiful residential environments. Researched luxury residential brands, accessibility products, and aging-in-place solutions to better understand how design and function can coexist. Developed consultation and specification frameworks focused on helping homeowners navigate accessibility and aging-in-place decisions.",
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

export const whyWeShouldTalkV2 = {
  title: "Why We Should Talk",
  lead: "I am not a traditional design-build candidate.",
  paragraphs: [
    "My path has moved through consultative sales, publishing, business development, product strategy, ecommerce, homeowner services, accessibility, and hands-on residential problem solving.",
    "But the through-line has been consistent.",
    "I help people understand their options, navigate complexity, and make confident decisions.",
    "For a residential design-build team, I believe that combination matters: someone who can earn homeowner trust, understand how homes work, communicate across disciplines, and keep the customer's real goals at the center of the process.",
  ],
} as const;
