import { useEffect, useState } from "react";
import Hero from "../components/hero";
import LogoMarquee from "../components/LogoMarquee";
import Cards from "../components/cards";
import HorizontalMapSection from "../components/HorizontalMapSection";
import PaceSection from "../components/PaceSection";
import WorkPreview from "../components/WorkPreview";
import TeamSection from "../components/TeamSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/footer";

/**
 * Mount the map only after LiquidGlass prewarm finishes, then on idle.
 * Capturing this tall SVG section during init hangs the page;
 * keeping it out of the first paint keeps glass startup fast.
 */
function DeferredMap() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    let timeout = 0;
    let fallback = 0;
    let cancelled = false;

    const show = () => {
      if (cancelled) return;
      timeout = window.setTimeout(() => {
        if (!cancelled) setMount(true);
      }, 80);
    };

    window.addEventListener("liquidglass-ready", show);
    fallback = window.setTimeout(show, 2200);
    return () => {
      cancelled = true;
      window.removeEventListener("liquidglass-ready", show);
      window.clearTimeout(fallback);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!mount) {
    return <section className="relative h-[480vh]" aria-hidden />;
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
      <PaceSection />
      <WorkPreview />
      <TeamSection />
      <CtaSection pullUp />
      <Footer />
    </>
  );
}
