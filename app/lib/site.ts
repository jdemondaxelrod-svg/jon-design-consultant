const productionUrl = "https://www.jondemondaxelrodstudio.com";

export const siteConfig = {
  name: "Jon DeMond-Axelrod",
  title: "Application — Design/Sales Consultant · Dave Fox Remodeling",
  description:
    "Cover letter and resume from Jon DeMond-Axelrod for the Design/Sales Consultant position at Dave Fox Remodeling. Prepared for Stephen Dempsey and team.",
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
