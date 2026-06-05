const productionUrl = "https://www.jondemondaxelrodstudio.com";

export const siteConfig = {
  name: "Jon DeMond-Axelrod",
  title: "Jon DeMond-Axelrod — Residential Design Consultant",
  description:
    "Residential design consultant in Columbus, Ohio. Consultative remodeling, accessibility, aging-in-place, and homeowner experience.",
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
} as const;
