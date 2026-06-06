const productionUrl = "https://www.jondemondaxelrodstudio.com";

export const siteConfig = {
  name: "Jon DeMond-Axelrod",
  title:
    "Jon DeMond-Axelrod — Residential Design Consultant Application",
  description:
    "Residential remodeling consultant and customer experience leader applying to Dave Fox Design Build Remodelers. Consultative sales, field experience, and design thinking in Columbus, Ohio.",
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
  resumePath: "/resume",
  resumeAnchor: "#resume",
  resumeHref: "/#resume",
  resumeFilename: "Jon-DeMond-Axelrod-Resume.pdf",
  targetCompany: "Dave Fox Design Build Remodelers",
  targetRole: "Residential Design Consultant",
} as const;
