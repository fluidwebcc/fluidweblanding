import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
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
import { BOOKING_URL } from "../data/site";

const GEO_URL = "/maps/countries-110m.json";

const MAP_W = 2400;
const MAP_H = 1200;
const MAP_SCALE = MAP_H / Math.PI;

const capabilities = [
  {
    title: "SaaS platforms",
    body: "Multi-tenant products, admin consoles, billing, and the ops tooling founders actually need.",
  },
  {
    title: "Mobile apps",
    body: "iOS and Android that ship with the web product — not a six-month afterthought.",
  },
  {
    title: "AI in production",
    body: "Voice agents, document intake, multi-model workspaces — wired to real workflows, not demos.",
  },
  {
    title: "Realtime & messaging",
    body: "SMS/MMS at scale, chat, notifications, and the compliance paths that keep them live.",
  },
  {
    title: "Payments & media",
    body: "Checkout, subscriptions, live streaming, and the money/media rails your GTM depends on.",
  },
  {
    title: "Rescue & rebuild",
    body: "Stuck roadmaps, fragile stacks, revolving freelancers — we embed and pick up the pace.",
  },
] as const;

const techGroups = [
  {
    label: "Product",
    items: ["React", "Next.js", "TypeScript", "Node", "tRPC", "React Native"],
  },
  {
    label: "Data & cloud",
    items: ["PostgreSQL", "Supabase", "AWS", "Vercel", "Python"],
  },
  {
    label: "Money & media",
    items: ["Stripe", "Twilio", "Mux", "Live streaming"],
  },
  {
    label: "AI layer",
    items: ["LLMs", "Vapi", "Voice agents", "Document AI", "Multi-model"],
  },
] as const;

const engagementModes = [
  {
    label: "Dedicated squads",
    note: "12+ engineers on a product when you need horsepower.",
  },
  {
    label: "Solo embeds",
    note: "One senior owns the build end to end — fast and accountable.",
  },
  {
    label: "Greenfield",
    note: "0 → live without discovery theater or agency drag.",
  },
  {
    label: "Ongoing ownership",
    note: "We stay embedded and keep the release train moving.",
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
}: {
  children: ReactNode;
  className?: string;
  fadeFrom?: string;
  fadeTo?: string;
}) {
  return (
    <div
      className={`relative flex h-full shrink-0 flex-col justify-center overflow-hidden px-10 md:px-16 lg:px-24 ${className}`}
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

function BuildPanel() {
  return (
    <PanelShell
      className="w-[100vw] bg-[#071038] md:w-[105vw]"
      fadeFrom="#071038"
      fadeTo="#0c1454"
    >
      <PeekGroup slots={sectionPeeks.build} id="build" />
      <div className="relative z-30">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          What we build
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-5xl">
          Product surfaces that ship
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/55 md:text-lg">
          The kinds of development we do every week — end to end, not slideware.
        </p>
        <div className="mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/12 bg-white/5 px-5 py-5"
            >
              <h3 className="text-base font-semibold text-white md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.body}
              </p>
            </div>
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
      fadeTo="#121a5c"
    >
      <PeekGroup slots={sectionPeeks.tech} id="tech" />
      <div className="relative z-30">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Stack
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-5xl">
          Technologies we work with
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/55 md:text-lg">
          Modern tooling with AI in the loop — old waterfall stacks don&apos;t scale
          here.
        </p>
        <div className="mt-10 grid max-w-5xl gap-8 sm:grid-cols-2">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/15 bg-white/7 px-3.5 py-2 text-sm font-medium text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelShell>
  );
}

function EngagePanel() {
  return (
    <PanelShell
      className="w-[100vw] bg-[#121a5c] md:w-[100vw]"
      fadeFrom="#121a5c"
      fadeTo="#16194E"
    >
      <PeekGroup slots={sectionPeeks.engage} id="engage" />
      <div className="relative z-30">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          How we embed
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-5xl">
          Squads, solo, or stay
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/55 md:text-lg">
          Pick the shape that matches the bottleneck — we pick up the pace either
          way.
        </p>
        <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {engagementModes.map((mode) => (
            <div
              key={mode.label}
              className="rounded-2xl border border-white/12 bg-white/5 px-6 py-6"
            >
              <h3 className="text-xl font-semibold text-white">{mode.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{mode.note}</p>
            </div>
          ))}
        </div>
      </div>
    </PanelShell>
  );
}

function PacePanel() {
  return (
    <PanelShell className="w-[100vw] bg-[#16194E] md:w-[95vw]" fadeFrom="#16194E">
      <PeekGroup slots={sectionPeeks.pace} id="pace" />
      <div className="relative z-30">
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          The mission
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-6xl">
          Ship faster. Build better.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-xl">
          AI-native engineering for startups and teams that are stuck. Old
          waterfall habits don&apos;t scale — we embed, accelerate, and get the
          product into market.
        </p>
        <div className="mt-10 flex flex-wrap gap-8 text-white">
          <div>
            <div className="text-3xl font-bold md:text-4xl">15+</div>
            <div className="mt-1 text-sm text-white/45">Products shipped</div>
          </div>
          <div>
            <div className="text-3xl font-bold md:text-4xl">6</div>
            <div className="mt-1 text-sm text-white/45">Continents</div>
          </div>
          <div>
            <div className="text-3xl font-bold md:text-4xl">30+</div>
            <div className="mt-1 text-sm text-white/45">Team strong</div>
          </div>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex w-fit rounded-2xl bg-white px-6 py-3 font-semibold text-[#010233] transition hover:bg-white/90"
        >
          Book a meeting
        </a>
      </div>
    </PanelShell>
  );
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
    [0, 0.22, 0.45, 0.68, 1],
    ["#010233", "#071038", "#0c1454", "#121a5c", "#16194E"],
  );

  useEffect(() => {
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
        height: travel > 0 ? `calc(100vh + ${travel * 0.72}px)` : "280vh",
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
          <EngagePanel />
          <PacePanel />
        </motion.div>
      </div>
    </section>
  );
}
