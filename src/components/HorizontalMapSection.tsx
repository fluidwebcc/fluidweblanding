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

function PinCard({
  pin,
  onClose,
}: {
  pin: (typeof mapPins)[number];
  onClose: () => void;
}) {
  return (
    <div className="w-[15.5rem] rounded-2xl border border-white/20 bg-[#0a0d3a]/95 p-4 text-left shadow-2xl backdrop-blur-md">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: pin.accent }}
            />
            <p className="text-[10px] font-medium tracking-[0.14em] text-white/45 uppercase">
              {pin.label}
            </p>
          </div>
          <p className="mt-1 text-xs text-white/55">{pin.detail}</p>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="rounded-md px-1.5 text-sm text-white/40 hover:text-white"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <p className="mt-3 text-[10px] font-semibold tracking-wide text-white/40 uppercase">
        What we worked on
      </p>
      <ul className="mt-1.5 space-y-1.5">
        {pin.projects.map((project) => (
          <li key={project.slug}>
            <Link
              to={`/work/${project.slug}`}
              className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-medium text-white transition hover:border-white/25 hover:bg-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{project.name}</span>
              <span className="text-white/40 group-hover:text-white">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FullScreenMap() {
  const [active, setActive] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);
  const leaveTimer = useRef<number | null>(null);

  const clearLeave = () => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
  };

  const showPin = (id: string) => {
    clearLeave();
    setActive(id);
  };

  const pinPin = (id: string) => {
    clearLeave();
    setActive(id);
    setPinned(true);
  };

  const closeCard = () => {
    clearLeave();
    setPinned(false);
    setActive(null);
  };

  const onMarkerLeave = () => {
    if (pinned) return;
    clearLeave();
    leaveTimer.current = window.setTimeout(() => setActive(null), 120);
  };

  return (
    <div
      className="relative h-screen w-screen shrink-0 overflow-hidden bg-[#010233]"
      onClick={() => {
        if (pinned) closeCard();
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-[#010233] via-[#010233]/80 to-transparent px-8 pb-20 pt-10 md:px-16">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Where we ship
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold text-white md:text-5xl">
          Clients across the US, Australia, Malaysia, Norway &amp; Rwanda
        </h2>
        <p className="mt-3 text-sm text-white/45 md:text-base">
          Hover or click a pin to see what we built there.
        </p>
      </div>

      {/*
        Flat equirectangular, meet (no distort), slight SE bias so Australia
        stays on-screen. Center [28, -5] pulls Oceania into frame.
      */}
      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={{
          scale: 152,
          center: [28, -5],
        }}
        width={1200}
        height={620}
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <rect x={0} y={0} width={1200} height={620} fill="#010233" />
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
          // Flip card to the left for far-east pins so it stays on screen
          const cardOnLeft = pin.lng > 80;
          const cardX = cardOnLeft ? -268 : 16;
          return (
            <Marker key={pin.id} coordinates={[pin.lng, pin.lat]}>
              <g
                className="cursor-pointer"
                style={{ pointerEvents: "all" }}
                onMouseEnter={() => showPin(pin.id)}
                onMouseLeave={onMarkerLeave}
                onClick={(e) => {
                  e.stopPropagation();
                  if (pinned && active === pin.id) closeCard();
                  else pinPin(pin.id);
                }}
              >
                <circle r={isActive ? 14 : 10} fill={`${pin.accent}35`} />
                <circle
                  r={isActive ? 6 : 4.5}
                  fill={pin.accent}
                  stroke="#fff"
                  strokeWidth={1.75}
                />
              </g>

              {isActive ? (
                <foreignObject
                  x={cardX}
                  y={-24}
                  width={260}
                  height={220}
                  style={{ overflow: "visible", pointerEvents: "auto" }}
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    onMouseEnter={() => showPin(pin.id)}
                    onMouseLeave={onMarkerLeave}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <PinCard pin={pin} onClose={closeCard} />
                  </div>
                </foreignObject>
              ) : null}
            </Marker>
          );
        })}
      </ComposableMap>
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
    <section ref={targetRef} className="relative h-[260vh]">
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
