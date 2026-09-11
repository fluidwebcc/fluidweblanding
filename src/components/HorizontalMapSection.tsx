import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
} from "react-simple-maps";
import { mapPins } from "../data/caseStudies";

const GEO_URL = "/maps/countries-110m.json";

function FullScreenMap() {
  const [active, setActive] = useState<string | null>(null);
  const leaveTimer = useRef<number | null>(null);
  const activePin = mapPins.find((p) => p.id === active) ?? null;

  const openPin = (id: string) => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    setActive(id);
  };

  const scheduleClose = () => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setActive(null), 180);
  };

  return (
    <div className="relative h-screen w-[170vw] shrink-0 overflow-hidden bg-[#010233]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-[#010233] via-[#010233]/75 to-transparent px-10 pb-20 pt-10 md:px-16">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Where we ship
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold text-white md:text-5xl">
          Clients across the US, Australia, Malaysia, Norway &amp; Rwanda
        </h2>
        <p className="mt-3 text-sm text-white/45 md:text-base">
          Scroll sideways — hover a pin to see what we built there.
        </p>
      </div>

      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={{
          scale: 195,
          center: [10, 12],
        }}
        width={1600}
        height={720}
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="none"
      >
        <rect x={0} y={0} width={1600} height={720} fill="#010233" />
        <Graticule stroke="rgba(255,255,255,0.06)" strokeWidth={0.4} />
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#16194E"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth={0.5}
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
              onMouseEnter={() => openPin(pin.id)}
              onMouseLeave={scheduleClose}
              onClick={() => openPin(pin.id)}
            >
              <g className="cursor-pointer" style={{ pointerEvents: "all" }}>
                <circle r={isActive ? 18 : 12} fill={`${pin.accent}35`} />
                <circle
                  r={isActive ? 7 : 5}
                  fill={pin.accent}
                  stroke="#fff"
                  strokeWidth={2}
                />
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      {activePin ? (
        <div
          className="pointer-events-auto absolute bottom-10 left-10 z-30 w-[min(22rem,calc(100%-5rem))] rounded-2xl border border-white/20 bg-[#0a0d3a]/95 p-5 shadow-2xl backdrop-blur-md md:left-16"
          onMouseEnter={() => openPin(activePin.id)}
          onMouseLeave={scheduleClose}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: activePin.accent }}
            />
            <p className="text-xs font-medium tracking-[0.15em] text-white/45 uppercase">
              {activePin.label}
            </p>
          </div>
          <p className="mt-2 text-sm text-white/55">{activePin.detail}</p>
          <p className="mt-4 text-xs font-semibold tracking-wide text-white/40 uppercase">
            What we worked on
          </p>
          <ul className="mt-2 space-y-2">
            {activePin.projects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/work/${project.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  <span>{project.name}</span>
                  <span className="text-white/40 transition group-hover:text-white">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="pointer-events-none absolute bottom-10 left-10 z-20 md:left-16">
          <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/45 backdrop-blur-md">
            Hover a pin to see projects
          </p>
        </div>
      )}
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
    <section ref={targetRef} className="relative h-[320vh]">
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
