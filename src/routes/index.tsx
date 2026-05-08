import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen&Co — Media & PR Agency that Moves the World" },
      {
        name: "description",
        content:
          "Boutique global media & PR studio crafting cinematic campaigns, viral launches, and category-defining brands.",
      },
      { property: "og:title", content: "Lumen&Co — Media & PR Agency" },
      { property: "og:description", content: "Cinematic campaigns. Earned media. Cultural moments." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Results />
        <Testimonials />
        <Team />
        <Press />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
