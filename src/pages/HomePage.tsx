import Hero from "../components/hero";
import Cards from "../components/cards";
import WorkPreview from "../components/WorkPreview";
import WorldMapSection from "../components/WorldMapSection";
import TeamSection from "../components/TeamSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Cards />
      <WorkPreview />
      <WorldMapSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </>
  );
}
