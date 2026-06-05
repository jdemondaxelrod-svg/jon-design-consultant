import { Contact } from "./components/contact";
import { CoverLetter } from "./components/cover-letter";
import { ResumeDocument } from "./components/resume-document";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <CoverLetter />
        <ResumeDocument />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
