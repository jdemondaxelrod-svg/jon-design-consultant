import { Background } from "./components/background";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Practice } from "./components/practice";
import { ProofBar } from "./components/proof-bar";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Ventures } from "./components/ventures";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProofBar />
        <Practice />
        <Ventures />
        <Background />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
