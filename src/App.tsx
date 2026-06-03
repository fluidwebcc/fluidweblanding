import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./components/hero";
import Cards from "./components/cards";
import Headings from "./components/headings";
import HorizontalSection from "./components/horizontalsection";
import ThirdLast from "./components/thirdlast";
import Footer from "./components/footer"

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return (
    <div>

      <Hero />
      {/* the floating header is inside hero file */}

      <Cards />

      <Headings />

      <HorizontalSection />

      <ThirdLast />

      <Footer/>

    </div>
  );
}

export default App;