import { career, formatPeriod, periods } from "./career";

export const heroV2 = {
  mission: "Helping people build the life they want, one home at a time.",
} as const;

export const introV2 = [
  "I'm Jon DeMond-Axelrod, and I'm currently pursuing Residential Design Consultant and Design-Build Consultant opportunities in Columbus, Ohio.",
  "Over the past several years, I've worked with more than 120 homeowners throughout Central Ohio, helping them improve, maintain, and adapt the places they call home.",
  "Through The Clintonville Handyman, Éliane Design, and The Karole Foundation, I've developed a growing interest in design, accessibility, aging-in-place, and helping people create homes that better support the lives they want to live.",
  "For more than 25 years, I've helped customers make important decisions across education, publishing, technology, consumer brands, and residential services. Whether helping homeowners, professors, shoppers, or business partners, I've always been drawn to understanding needs, exploring possibilities, building trust, and helping people make confident decisions.",
] as const;

export const whyThisWorkV2 = {
  title: "Why This Work",
  paragraphs: [
    "Working with homeowners has been a particularly rich and rewarding chapter of my career. Every home, every family, and every project presents a different set of goals, constraints, priorities, and possibilities.",
    "Today, through The Clintonville Handyman, I help homeowners make decisions about improving, maintaining, and adapting their homes.",
    "I've worked with first-time homeowners, empty nesters, retirees, growing families, landlords, adult children helping aging parents, and people trying to decide whether to repair, renovate, stay, or move.",
    "What I've come to appreciate is that a home is never just a project.",
    "A home is where safety, comfort, independence, family, memory, and identity all come together. The decisions homeowners make are rarely just about a room, a fixture, or a repair. They are about how people want to live, both today and in the years ahead.",
    "Over time, I realized that what I enjoy most is not necessarily performing the work itself. It is earning trust, helping people clarify what they want, explore possibilities, navigate tradeoffs, and make confident decisions.",
    "That is what draws me to residential design-build consulting. It combines design, customer relationships, communication, planning, and problem solving in a way that feels like a natural extension of the work I've done throughout my career.",
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
      "Helping homeowners make informed decisions about repairs, improvements, accessibility, maintenance, and long-term investments in their homes.",
  },
  {
    org: "The Karole Foundation",
    title: "Founder",
    period: periods.karoleFoundation,
    mission:
      "Helping individuals and families navigate decisions related to accessibility, safety, aging-in-place, and independence at home.",
  },
  {
    org: "Éliane Design",
    title: "Founder",
    period: periods.elianeDesign,
    mission:
      "Helping homeowners explore how accessibility, safety, and independence can be integrated into beautiful residential environments.",
  },
  {
    org: "Soft Surroundings",
    title: "Director of Product & Digital Experience",
    period: periods.softSurroundings,
    mission:
      "Helping customers find products that reflected their individuality and personal style by creating digital experiences that made shopping feel effortless, inspiring, and confidence-building.",
  },
  {
    org: "Scotts Miracle-Gro",
    title: "Product & Digital Experience Leadership",
    period: formatPeriod(
      career.scottsDigitalMarketing.start,
      career.scottsProductOwner.end,
    ),
    mission:
      "Helping homeowners make informed decisions about lawn and garden care through education, inspiration, digital tools, and customer-focused experiences designed to turn uncertainty into confidence.",
  },
  {
    org: "eMusic / 7digital",
    title: "Director, Business Development & Brand Partnerships",
    period: periods.emusic,
    mission:
      "Helping brands connect with customers through music, digital experiences, and strategic partnerships. Guided clients through complex marketing decisions while balancing business objectives, customer needs, and creative possibilities.",
  },
  {
    org: "Pearson Education / McGraw-Hill / Prentice Hall",
    title: "Consultative Sales & Product Leadership",
    period: formatPeriod(
      career.prenticeHallInside.start,
      career.mcgrawHill.end,
    ),
    mission:
      "Helping professors, departments, and institutions make informed decisions about educational content, technology, and learning resources.",
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
