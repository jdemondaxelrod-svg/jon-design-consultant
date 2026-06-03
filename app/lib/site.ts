const productionUrl = "https://www.jondemondaxelrodstudio.com";

export const siteConfig = {
  name: "Jon DeMond-Axelrod",
  title: "Jon DeMond-Axelrod — Design Consultant | Columbus, Ohio",
  description:
    "Residential design-build consultant serving Central Ohio. 120+ homeowners, 500+ projects. Consultative sales, scoping, estimating, accessibility, and upscale remodeling.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "production"
      ? productionUrl
      : "http://localhost:3000"),
  email: "jdemondaxelrod@gmail.com",
  phone: "+16144044662",
  locale: "en_US",
} as const;
