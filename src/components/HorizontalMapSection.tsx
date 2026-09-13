import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
} from "react-simple-maps";
import { mapPins, type MapPin } from "../data/caseStudies";
import { PeekGroup } from "./PeekPortrait";
import { sectionPeeks } from "../data/team";
import TechConstellation from "./TechConstellation";
import EngageFanSection from "./EngageFanSection";

const GEO_URL = "/maps/countries-110m.json";

const MAP_W = 2400;
const MAP_H = 1200;
const MAP_SCALE = MAP_H / Math.PI;

const capabilities = [
  {
    title: "SaaS platforms",
    body: "Multi-tenant products, billing, and ops.",
    badge: "Web",
    accent: "#9BB0E8",
    wash: "rgba(122, 148, 220, 0.34)",
    art: "saas" as const,
    stat: "Full stack",
    statLabel: "admin to ops",
  },
  {
    title: "Mobile apps",
    body: "iOS and Android that ship with the web product.",
    badge: "Native",
    accent: "#7ED4C8",
    wash: "rgba(80, 176, 168, 0.32)",
    art: "mobile" as const,
    stat: "iOS · Android",
    statLabel: "not an afterthought",
  },
  {
    title: "AI in production",
    body: "Voice, documents, and models in real workflows.",
    badge: "AI",
    accent: "#C4A4F5",
    wash: "rgba(156, 118, 214, 0.32)",
    art: "ai" as const,
    stat: "Live",
    statLabel: "not demos",
  },
  {
    title: "Realtime & messaging",
    body: "SMS, chat, and notifications that stay up.",
    badge: "Comms",
    accent: "#6EC8F5",
    wash: "rgba(80, 168, 214, 0.3)",
    art: "realtime" as const,
    stat: "At scale",
    statLabel: "compliance included",
  },
  {
    title: "Payments & media",
    body: "Checkout, subscriptions, and live streaming rails.",
    badge: "GTM",
    accent: "#F5C15D",
    wash: "rgba(214, 164, 64, 0.28)",
    art: "payments" as const,
    stat: "GTM",
    statLabel: "money and media",
  },
  {
    title: "Rescue & rebuild",
    body: "Stuck roadmaps — we embed and pick up the pace.",
    badge: "Rescue",
    accent: "#F5A07A",
    wash: "rgba(214, 118, 80, 0.3)",
    art: "rescue" as const,
    stat: "Embed",
    statLabel: "fragile stacks, we take over",
  },
] as const;

function PinCard({
  pin,
  onClose,
}: {
  pin: MapPin;
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
      <ul className="mt-1.5 max-h-48 space-y-1.5 overflow-y-auto">
        {pin.projects.map((project) => (
          <li key={project.name}>
            {project.slug ? (
              <Link
                to={`/work/${project.slug}`}
                className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-medium text-white transition hover:border-white/25 hover:bg-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <span>{project.name}</span>
                <span className="text-white/40 group-hover:text-white">→</span>
              </Link>
            ) : (
              <div className="rounded-lg border border-white/10 bg-white/3 px-2.5 py-2 text-xs font-medium text-white/80">
                {project.name}
              </div>
            )}
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

  const activePin = mapPins.find((p) => p.id === active);

  return (
    <div
      className="relative h-full w-[220vh] shrink-0 overflow-hidden"
      onClick={() => {
        if (pinned) closeCard();
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-[#010233] via-[#010233]/70 to-transparent px-8 pb-28 pt-10 md:px-16">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Where we ship
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold text-white md:text-5xl">
          Clients across 6 continents — teams &amp; solo
        </h2>
        <p className="mt-3 text-sm text-white/45 md:text-base">
          Keep scrolling — the map pans with you. Hover a pin for what we shipped.
        </p>
      </div>

      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={{
          scale: MAP_SCALE,
          center: [0, 12],
        }}
        width={MAP_W}
        height={MAP_H}
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x={0} y={0} width={MAP_W} height={MAP_H} fill="#010233" />
        <Graticule stroke="rgba(255,255,255,0.055)" strokeWidth={0.45} />
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
                <circle r={isActive ? 18 : 13} fill={`${pin.accent}40`} />
                <circle
                  r={isActive ? 8 : 6}
                  fill={pin.accent}
                  stroke="#fff"
                  strokeWidth={2}
                />
              </g>
            </Marker>
          );
        })}

        {activePin ? (
          <Marker
            key={`${activePin.id}-card`}
            coordinates={[activePin.lng, activePin.lat]}
          >
            <foreignObject
              x={activePin.lng > 40 ? -268 : 18}
              y={-28}
              width={260}
              height={280}
              style={{ overflow: "visible", pointerEvents: "auto" }}
            >
              <div
                onMouseEnter={() => showPin(activePin.id)}
                onMouseLeave={onMarkerLeave}
                onClick={(e) => e.stopPropagation()}
              >
                <PinCard pin={activePin} onClose={closeCard} />
              </div>
            </foreignObject>
          </Marker>
        ) : null}
      </ComposableMap>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent to-[#071038]" />
    </div>
  );
}

function PanelShell({
  children,
  className = "",
  fadeFrom,
  fadeTo,
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  fadeFrom?: string;
  fadeTo?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full shrink-0 flex-col justify-center overflow-hidden ${
        padded ? "px-10 md:px-16 lg:px-24" : ""
      } ${className}`}
    >
      {fadeFrom ? (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-24 md:w-36"
          style={{
            background: `linear-gradient(to right, ${fadeFrom}, transparent)`,
          }}
        />
      ) : null}
      {fadeTo ? (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-24 md:w-36"
          style={{
            background: `linear-gradient(to left, ${fadeTo}, transparent)`,
          }}
        />
      ) : null}
      {children}
    </div>
  );
}

function SaasArt() {
  return (
    <svg viewBox="0 0 56 52" className="h-12 w-[4.6rem]" aria-hidden>
      <rect x="6" y="10" width="32" height="24" rx="5" fill="currentColor" opacity="0.14" />
      <rect x="6" y="10" width="32" height="24" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <rect x="18" y="20" width="32" height="24" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 28h16M24 33h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function MobileArt() {
  return (
    <svg viewBox="0 0 40 52" className="h-12 w-10" aria-hidden>
      <rect x="8" y="4" width="24" height="44" rx="6" fill="currentColor" opacity="0.14" />
      <rect x="8" y="4" width="24" height="44" rx="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="41" r="1.6" fill="currentColor" />
      <path d="M16 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AiArt() {
  return (
    <svg viewBox="0 0 56 52" className="h-12 w-12" aria-hidden>
      <circle cx="28" cy="26" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <circle cx="28" cy="26" r="11" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <circle cx="28" cy="26" r="4" fill="currentColor" opacity="0.9" />
      <path
        d="M28 6v6M28 40v6M8 26h6M42 26h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function RealtimeArt() {
  return (
    <svg viewBox="0 0 56 52" className="h-12 w-12" aria-hidden>
      <circle cx="14" cy="26" r="4" fill="currentColor" />
      <path
        d="M22 16c8 4 8 16 0 20M30 11c12 6 12 24 0 30M38 7c16 8 16 32 0 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaymentsArt() {
  return (
    <svg viewBox="0 0 56 52" className="h-12 w-12" aria-hidden>
      <rect x="6" y="14" width="44" height="28" rx="6" fill="currentColor" opacity="0.14" />
      <rect x="6" y="14" width="44" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 24h44" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="30" width="12" height="4" rx="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function RescueArt() {
  return (
    <svg viewBox="0 0 56 52" className="h-12 w-12" aria-hidden>
      <path
        d="M12 28a16 16 0 0 1 26-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M34 10l5 8-9 1" fill="currentColor" />
      <path
        d="M44 24a16 16 0 0 1-26 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M22 42l-5-8 9-1" fill="currentColor" />
    </svg>
  );
}

const surfaceArt = {
  saas: SaasArt,
  mobile: MobileArt,
  ai: AiArt,
  realtime: RealtimeArt,
  payments: PaymentsArt,
  rescue: RescueArt,
} as const;

function SurfaceCard({ item }: { item: (typeof capabilities)[number] }) {
  const Art = surfaceArt[item.art];
  return (
    <article
      className="glow-card relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/14 px-4 py-4 text-left sm:rounded-[1.75rem] sm:px-6 sm:py-6"
      style={{
        background: `linear-gradient(165deg, ${item.wash} 0%, rgba(8, 12, 48, 0.92) 52%, rgba(4, 8, 36, 0.96) 100%)`,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 18px 40px rgba(0,0,0,0.28)",
        color: item.accent,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-14 -right-8 h-36 w-36 rounded-full blur-3xl"
        style={{ background: item.wash }}
      />
      <div className="relative z-[2] flex items-center justify-between">
        <Art />
        <span
          className="rounded-full border px-2 py-0.5 text-[9px] font-semibold tracking-[0.16em] uppercase sm:px-2.5 sm:py-1 sm:text-[10px]"
          style={{ borderColor: `${item.accent}55`, color: item.accent }}
        >
          {item.badge}
        </span>
      </div>
      <h3 className="relative z-[2] mt-3 text-base font-bold text-white sm:mt-4 sm:text-[1.35rem]">
        {item.title}
      </h3>
      <p className="relative z-[2] mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-white/75 sm:mt-2 sm:text-sm">
        {item.body}
      </p>
      <div className="relative z-[2] mt-auto border-t border-white/12 pt-3">
        <div className="text-sm font-bold tracking-tight sm:text-base" style={{ color: item.accent }}>
          {item.stat}
        </div>
        <div className="text-[10px] text-white/45 sm:text-[11px]">{item.statLabel}</div>
      </div>
    </article>
  );
}

function BuildPanel() {
  return (
    <PanelShell
      className="w-[100vw] bg-[#071038] md:w-[105vw]"
      fadeFrom="#071038"
      fadeTo="#0c1454"
    >
      <PeekGroup slots={sectionPeeks.build} id="build" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b9ad4]/20 blur-[110px]"
      />
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-white/45 uppercase">
          What we build
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl md:text-5xl">
          Product surfaces that ship
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-white/55 sm:mt-4 md:text-base">
          The kinds of development we do every week — end to end, not slideware.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {capabilities.map((item) => (
            <SurfaceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </PanelShell>
  );
}

function TechPanel() {
  return (
    <PanelShell
      className="w-[100vw] bg-[#0c1454] md:w-[110vw]"
      fadeFrom="#0c1454"
      fadeTo="#010233"
      padded={false}
    >
      <PeekGroup slots={sectionPeeks.tech} id="tech" />
      <TechConstellation />
    </PanelShell>
  );
}

function HowWeEmbedPanel({ trackX }: { trackX: MotionValue<number> }) {
  return <EngageFanSection trackX={trackX} />;
}

export default function HorizontalMapSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 34,
    mass: 0.28,
    restDelta: 0.0005,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -travel]);

  const washColor = useTransform(
    smoothProgress,
    [0, 0.28, 0.52, 0.78, 1],
    ["#010233", "#071038", "#0c1454", "#010233", "#010233"],
  );

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const next = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      setTravel(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 600);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <section
      ref={targetRef}
      className="relative"
      style={{
        height: travel > 0 ? `calc(100vh + ${travel}px)` : "480vh",
      }}
    >
      <div className="sticky top-0 h-svh overflow-hidden md:h-screen">
        <motion.div className="absolute inset-0" style={{ backgroundColor: washColor }} />
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative flex h-full will-change-transform"
        >
          <FullScreenMap />
          <BuildPanel />
          <TechPanel />
          <HowWeEmbedPanel trackX={x} />
        </motion.div>
      </div>
    </section>
  );
}
