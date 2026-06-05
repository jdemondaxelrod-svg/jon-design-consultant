const productionUrl = "https://www.jondemondaxelrodstudio.com";

export const siteConfig = {
  name: "Jon DeMond-Axelrod",
  title: "Jon DeMond-Axelrod — Design/Sales Consultant",
  description:
    "Design and sales consultant for upscale residential remodeling in Columbus, Ohio. Consultative sales, SoftPlan, scoping, estimating, and homeowner experience across kitchens, baths, additions, and whole-house remodels.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "production"
      ? productionUrl
      : "http://localhost:3000"),
  email: "jdemondaxelrod@gmail.com",
  phone: "+16144044662",
  phoneDisplay: "614-404-4662",
  location: "Columbus, Ohio",
  locale: "en_US",
  targetRole: "Design/Sales Consultant",
  targetCompany: "Dave Fox Remodeling",
  targetContact: {
    name: "Stephen Dempsey",
    title: "Sales Director",
    email: "sdempsey@davefox.com",
  },
} as const;
