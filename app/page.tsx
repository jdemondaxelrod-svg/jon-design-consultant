import { Capabilities } from "./components/capabilities";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { ImpactMetrics } from "./components/impact-metrics";
import { Philosophy } from "./components/philosophy";
import { ProjectTypes } from "./components/project-types";
import { SelectedWork } from "./components/selected-work";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Story } from "./components/story";
import { WhyDesignBuild } from "./components/why-design-build";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ImpactMetrics />
        <ProjectTypes />
        <Story />
        <Philosophy />
        <SelectedWork />
        <Capabilities />
        <Experience />
        <WhyDesignBuild />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
