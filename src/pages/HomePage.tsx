import { useEffect, useState } from "react";
import Hero from "../components/hero";
import LogoMarquee from "../components/LogoMarquee";
import Cards from "../components/cards";
import HorizontalMapSection from "../components/HorizontalMapSection";
import WorkPreview from "../components/WorkPreview";
import TeamSection from "../components/TeamSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/footer";

/**
 * Mount the map only after LiquidGlass prewarm finishes.
 * Capturing this ~280vh SVG section during init hangs the page;
 * keeping it out of the first paint keeps glass startup fast without
 * needing data-dynamic (which made the map scroll path unusably laggy).
 */
function DeferredMap() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const show = () => setMount(true);
    window.addEventListener("liquidglass-ready", show);
    const fallback = window.setTimeout(show, 4000);
    return () => {
      window.removeEventListener("liquidglass-ready", show);
      window.clearTimeout(fallback);
    };
  }, []);

  if (!mount) {
    return (
      <section
        className="relative h-[280vh] bg-[#010233]"
        aria-hidden
      />
    );
  }

  return <HorizontalMapSection />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Cards />
      <DeferredMap />
      <WorkPreview />
      <TeamSection />
      <CtaSection pullUp />
      <Footer />
    </>
  );
}
