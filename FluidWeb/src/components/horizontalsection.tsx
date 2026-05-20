import globe from "../assets/globe.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function HorizontalSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [maxTranslate, setMaxTranslate] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const calculateWidth = () => {
      if (!scrollRef.current) return;

      const totalWidth = scrollRef.current.scrollWidth;
      const screenWidth = window.innerWidth;

      setMaxTranslate(totalWidth - screenWidth);
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

const x = useTransform(
  scrollYProgress,
  (value) => -value * maxTranslate
);
  return (
    <section
      ref={targetRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        <motion.div
          ref={scrollRef}
          style={{ x }}
          className="flex h-screen"
        >

          {/* MAP */}
          <img
            src={globe}
            alt="Map"
            className="h-screen max-w-none shrink-0"
          />

          {/* BLUE SECTION */}
          <div
            className="
              relative
              w-screen
              h-screen
              shrink-0
              flex
              items-center
              justify-center
              bg-[#010233]
              overflow-hidden
            "
          >

            {/* GRID */}
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(rgba(255,255,255,0.06)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.06)_2px,transparent_2px)]
                bg-size-[400px_736px]
                pointer-events-none
              "
            />

            {/* TEXT */}
            <h1 className="relative z-10 text-7xl text-white font-bold text-center leading-tight">
              We Change Dreams
              <br />
              Into Reality
            </h1>

          </div>

        </motion.div>

      </div>
    </section>
  );
}