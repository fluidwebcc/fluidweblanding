import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { mapPins } from "../data/caseStudies";

const GEO_URL = "/maps/countries-110m.json";

function FullScreenMap() {
  const [active, setActive] = useState<string>(mapPins[0]?.id ?? "illinois");
  const activePin = mapPins.find((p) => p.id === active) ?? mapPins[0];

  return (
    <div className="relative h-screen w-screen shrink-0 bg-[#010233]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-[#010233] via-[#010233]/80 to-transparent px-8 pb-24 pt-10 md:px-16">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Where we ship
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold text-white md:text-5xl">
          Clients across the US, Australia, Malaysia, Norway &amp; Rwanda
        </h2>
      </div>

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 220, center: [8, 12] }}
        width={1200}
        height={700}
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
      >
        <Sphere
          id="sphere"
          fill="#010233"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={0.5}
        />
        <Graticule stroke="rgba(255,255,255,0.05)" strokeWidth={0.35} />
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#16194E"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth={0.45}
                className="outline-none"
              />
            ))
          }
        </Geographies>
        {mapPins.map((pin) => {
          const isActive = pin.id === active;
          return (
            <Marker
              key={pin.id}
              coordinates={[pin.lng, pin.lat]}
              onMouseEnter={() => setActive(pin.id)}
              onClick={() => setActive(pin.id)}
            >
              <g className="cursor-pointer">
                <circle r={isActive ? 14 : 10} fill={`${pin.accent}40`} />
                <circle
                  r={isActive ? 6 : 4.5}
                  fill={pin.accent}
                  stroke="#fff"
                  strokeWidth={1.75}
                />
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#010233] via-[#010233]/90 to-transparent px-6 pb-8 pt-20 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 md:gap-3">
          {mapPins.map((pin) => {
            const isActive = pin.id === active;
            return (
              <button
                key={pin.id}
                type="button"
                onMouseEnter={() => setActive(pin.id)}
                onClick={() => setActive(pin.id)}
                className={`rounded-full border px-3 py-1.5 text-xs transition md:text-sm ${
                  isActive
                    ? "border-white/30 bg-white/15 text-white"
                    : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                <span
                  className="mr-2 inline-block h-2 w-2 rounded-full"
                  style={{ background: pin.accent }}
                />
                {pin.label}
              </button>
            );
          })}
        </div>
        {activePin ? (
          <p className="mx-auto mt-4 max-w-6xl text-sm text-white/55">
            <span className="font-medium text-white/85">{activePin.label}</span>
            {" — "}
            {activePin.detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function HorizontalMapSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const calculateWidth = () => {
    if (!scrollRef.current) return;
    setMaxTranslate(
      Math.max(0, scrollRef.current.scrollWidth - window.innerWidth),
    );
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    const t = window.setTimeout(calculateWidth, 200);
    return () => {
      window.removeEventListener("resize", calculateWidth);
      window.clearTimeout(t);
    };
  }, []);

  const x = useTransform(scrollYProgress, (v) => -v * maxTranslate);

  return (
    <section ref={targetRef} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div ref={scrollRef} style={{ x }} className="flex h-screen">
          <FullScreenMap />

          <div className="relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden bg-[#010233]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.06)_2px,transparent_2px)] bg-size-[400px_736px]" />
            <h2 className="relative z-10 px-6 text-center text-4xl font-bold leading-tight text-white md:text-6xl">
              We change dreams
              <br />
              into reality
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
