import Hero from "../components/hero";
import Cards from "../components/cards";
import Headings from "../components/headings";
import HorizontalSection from "../components/horizontalsection";
import WorkPreview from "../components/WorkPreview";
import ThirdLast from "../components/thirdlast";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Cards />
      <Headings />
      <WorkPreview />
      <HorizontalSection />
      <ThirdLast />
      <Footer />
    </>
  );
}
