import { ResumeSection } from "./resume-section";
import { ResumeStickyBar } from "./resume-print-button";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { ContactV2 } from "./v2/contact-v2";
import { ExperienceSnapshotV2 } from "./v2/experience-snapshot-v2";
import { HeroV2 } from "./v2/hero-v2";
import { LearnedInsideHomesV2 } from "./v2/learned-inside-homes-v2";
import { ProofFromFieldV2 } from "./v2/proof-from-field-v2";
import { WhatHomeownersValue } from "./what-homeowners-value";
import { WhatIBringV2 } from "./v2/what-i-bring-v2";
import { WhyThisWorkV2 } from "./v2/why-this-work-v2";
import { WhyWeShouldTalkV2 } from "./v2/why-we-should-talk-v2";

export function HomeV2() {
  return (
    <>
      <SiteHeader />
      <main className="w-full max-w-full overflow-x-clip pb-24 lg:pb-0">
        <HeroV2 />
        <WhyThisWorkV2 />
        <WhatIBringV2 />
        <ProofFromFieldV2 />
        <WhatHomeownersValue />
        <LearnedInsideHomesV2 />
        <ExperienceSnapshotV2 />
        <WhyWeShouldTalkV2 />
        <ContactV2 />
        <ResumeSection />
      </main>
      <SiteFooter />
      <ResumeStickyBar />
    </>
  );
}
