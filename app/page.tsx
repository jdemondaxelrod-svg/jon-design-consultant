import { CareerResults } from "./components/career-results";
import { Contact } from "./components/contact";
import { ExperienceSnapshot } from "./components/experience-snapshot";
import { Hero } from "./components/hero";
import { LearnedInsideHomes } from "./components/learned-inside-homes";
import { ProofFromField } from "./components/proof-from-field";
import { WhatHomeownersValue } from "./components/what-homeowners-value";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { WhatIBring } from "./components/what-i-bring";
import { WhyDaveFox } from "./components/why-dave-fox";
import { WhyThisRole } from "./components/why-this-role";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhyThisRole />
        <WhatIBring />
        <ProofFromField />
        <WhatHomeownersValue />
        <CareerResults />
        <LearnedInsideHomes />
        <ExperienceSnapshot />
        <WhyDaveFox />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
