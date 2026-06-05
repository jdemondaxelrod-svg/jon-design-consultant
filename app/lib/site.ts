const productionUrl = "https://www.jondemondaxelrodstudio.com";

export const siteConfig = {
  name: "Jon DeMond-Axelrod",
  title: "Jon DeMond-Axelrod — Residential Design Consultant | Columbus, Ohio",
  description:
    "Residential remodeling consultant serving Central Ohio. 120+ homeowners, 500+ tasks delivered. Consultative sales, project scoping, estimating, accessibility, aging-in-place, and customer experience.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "production"
      ? productionUrl
      : "http://localhost:3000"),
  email: "jdemondaxelrod@gmail.com",
  phone: "+16144044662",
  locale: "en_US",
} as const;
