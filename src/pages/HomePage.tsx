import Hero from "../components/hero";
import Cards from "../components/cards";
import HorizontalMapSection from "../components/HorizontalMapSection";
import WorkPreview from "../components/WorkPreview";
import TeamSection from "../components/TeamSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Cards />
      <HorizontalMapSection />
      <WorkPreview />
      <TeamSection />
      <CtaSection pullUp />
      <Footer />
    </>
  );
}
