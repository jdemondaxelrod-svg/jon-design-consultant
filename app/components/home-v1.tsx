import { Contact } from "./contact";
import { ExperienceSnapshot } from "./experience-snapshot";
import { Hero } from "./hero";
import { LearnedInsideHomes } from "./learned-inside-homes";
import { ProofFromField } from "./proof-from-field";
import { ResumeSection } from "./resume-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { WhatHomeownersValue } from "./what-homeowners-value";
import { WhatIBring } from "./what-i-bring";
import { WhyDaveFox } from "./why-dave-fox";
import { WhyThisRole } from "./why-this-role";

export function HomeV1() {
  return (
    <>
      <SiteHeader />
      <main className="w-full max-w-full overflow-x-clip">
        <Hero />
        <WhyThisRole />
        <WhatIBring />
        <ProofFromField />
        <WhatHomeownersValue />
        <LearnedInsideHomes />
        <ExperienceSnapshot />
        <WhyDaveFox />
        <Contact />
        <ResumeSection />
      </main>
      <SiteFooter />
    </>
  );
}
