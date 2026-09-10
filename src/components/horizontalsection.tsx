import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { mapPins } from "../data/caseStudies";
import "leaflet/dist/leaflet.css";

function pinIcon(accent: string) {
  return L.divIcon({
    className: "fw-map-pin",
    html: `<span style="
      display:block;
      width:18px;height:18px;
      border-radius:9999px;
      background:${accent};
      border:2px solid #fff;
      box-shadow:0 0 0 4px ${accent}55, 0 8px 20px rgba(0,0,0,.45);
    "></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -12],
  });
}

function WorldMap() {
  const icons = useMemo(
    () => Object.fromEntries(mapPins.map((p) => [p.id, pinIcon(p.accent)])),
    [],
  );

  return (
    <div className="relative h-screen w-screen shrink-0 bg-[#010233]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[500] bg-gradient-to-b from-[#010233] via-[#010233]/70 to-transparent px-8 pb-16 pt-10 md:px-16">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Where we ship
        </p>
        <h2 className="mt-2 max-w-xl text-3xl font-bold text-white md:text-5xl">
          Clients across the US, Australia, Malaysia, Norway &amp; Rwanda
        </h2>
      </div>

      <MapContainer
        center={[20, 10]}
        zoom={2}
        minZoom={2}
        maxZoom={8}
        scrollWheelZoom={false}
        className="h-full w-full [&_.leaflet-tile-pane]:brightness-[0.85] [&_.leaflet-tile-pane]:saturate-[0.7] [&_.leaflet-control-attribution]:bg-[#010233]/80 [&_.leaflet-control-attribution]:text-white/40"
        style={{ background: "#010233" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {mapPins.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.lat, pin.lng]}
            icon={icons[pin.id]}
          >
            <Popup>
              <div className="min-w-[10rem]">
                <div className="font-semibold text-[#010233]">{pin.label}</div>
                <div className="mt-1 text-sm text-black/70">{pin.detail}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default function HorizontalSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const calculateWidth = () => {
    if (!scrollRef.current) return;
    const totalWidth = scrollRef.current.scrollWidth;
    const screenWidth = window.innerWidth;
    setMaxTranslate(Math.max(0, totalWidth - screenWidth));
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    const t = window.setTimeout(calculateWidth, 300);
    return () => {
      window.removeEventListener("resize", calculateWidth);
      window.clearTimeout(t);
    };
  }, []);

  const x = useTransform(scrollYProgress, (value) => -value * maxTranslate);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div ref={scrollRef} style={{ x }} className="flex h-screen">
          <WorldMap />

          <div className="relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden bg-[#010233]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.06)_2px,transparent_2px)] bg-size-[400px_736px]" />
            <h1 className="relative z-10 text-center text-5xl font-bold leading-tight text-white md:text-7xl">
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
