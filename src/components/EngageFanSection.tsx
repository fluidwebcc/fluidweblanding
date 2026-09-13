import { useEffect, useLayoutEffect, useRef, useState, type Ref } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { PeekGroup } from "./PeekPortrait";
import { sectionPeeks } from "../data/team";

const modes = [
  {
    label: "Dedicated squads",
    body: "12+ engineers on a product when you need horsepower.",
    stat: "12+",
    statLabel: "engineers on a product",
    accent: "#9BB0E8",
    wash: "rgba(122, 148, 220, 0.34)",
    art: "squads" as const,
  },
  {
    label: "Solo embeds",
    body: "One senior owns the build end to end — fast and accountable.",
    stat: "1",
    statLabel: "senior, end to end",
    accent: "#7ED4C8",
    wash: "rgba(80, 176, 168, 0.32)",
    art: "solo" as const,
  },
  {
    label: "Greenfield",
    body: "0 → live without discovery theater or agency drag.",
    stat: "0 → live",
    statLabel: "no discovery theater",
    accent: "#F5C15D",
    wash: "rgba(214, 164, 64, 0.28)",
    art: "greenfield" as const,
  },
  {
    label: "Ongoing ownership",
    body: "We stay embedded and keep the release train moving.",
    stat: "Stay",
    statLabel: "the release train keeps moving",
    accent: "#C4A4F5",
    wash: "rgba(156, 118, 214, 0.32)",
    art: "stay" as const,
  },
] as const;

const COUNT = modes.length;

function SquadArt() {
  const faces = [
    { x: 18, y: 22, r: 14 },
    { x: 38, y: 16, r: 13 },
    { x: 56, y: 22, r: 14 },
    { x: 28, y: 36, r: 12 },
    { x: 48, y: 36, r: 12 },
  ];
  return (
    <svg viewBox="0 0 76 52" className="h-12 w-[4.6rem]" aria-hidden>
      {faces.map((f, i) => (
        <g key={i}>
          <circle cx={f.x} cy={f.y} r={f.r} fill="currentColor" opacity={0.18 + i * 0.07} />
          <circle cx={f.x} cy={f.y} r={f.r} fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
          <circle cx={f.x - 4} cy={f.y - 2} r="1.3" fill="currentColor" />
          <circle cx={f.x + 4} cy={f.y - 2} r="1.3" fill="currentColor" />
          <path
            d={`M${f.x - 4} ${f.y + 5}c2 2.4 6 2.4 8 0`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}

function SoloArt() {
  return (
    <svg viewBox="0 0 52 52" className="h-12 w-12" aria-hidden>
      <circle cx="26" cy="26" r="22" fill="currentColor" opacity="0.14" />
      <circle cx="26" cy="26" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="26" cy="21" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 42c3.5-9 10-13 14-13s10.5 4 14 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GreenfieldArt() {
  return (
    <svg viewBox="0 0 56 52" className="h-12 w-12" aria-hidden>
      <circle cx="28" cy="28" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <circle cx="28" cy="28" r="13" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <circle cx="28" cy="28" r="5" fill="currentColor" opacity="0.9" />
      <path
        d="M28 8v6M28 38v6M8 28h6M42 28h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function StayArt() {
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

const artMap = {
  squads: SquadArt,
  solo: SoloArt,
  greenfield: GreenfieldArt,
  stay: StayArt,
} as const;

function FanCard({
  item,
  index,
  progress,
  x,
  cardRef,
}: {
  item: (typeof modes)[number];
  index: number;
  progress: MotionValue<number>;
  x: MotionValue<number>;
  cardRef?: Ref<HTMLElement>;
}) {
  const Art = artMap[item.art];
  const scale = useTransform(progress, (p) => {
    const d = Math.abs(index - p * (COUNT - 1));
    return 1.06 - Math.min(d, 1.8) * 0.08;
  });
  const opacity = useTransform(progress, (p) => {
    const d = Math.abs(index - p * (COUNT - 1));
    return 1 - Math.min(d, 2) * 0.18;
  });
  const y = useTransform(progress, (p) => {
    const d = Math.abs(index - p * (COUNT - 1));
    return d * d * 8;
  });
  const rotate = useTransform(progress, (p) => {
    const signed = index - p * (COUNT - 1);
    return signed * -4;
  });
  const zIndex = useTransform(progress, (p) => {
    const d = Math.abs(index - p * (COUNT - 1));
    return Math.round(20 - d * 5);
  });

  return (
    <motion.article
      ref={cardRef}
      className="glow-card relative flex h-[18rem] w-[20rem] shrink-0 flex-col overflow-hidden rounded-[1.75rem] border border-white/14 px-7 py-7 sm:h-[19.5rem] sm:w-[22.5rem] sm:px-8 md:h-[21rem] md:w-[24.5rem]"
      style={{
        x,
        scale,
        opacity,
        y,
        rotate,
        zIndex,
        background: `linear-gradient(165deg, ${item.wash} 0%, rgba(8, 12, 48, 0.92) 48%, rgba(4, 8, 36, 0.96) 100%)`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.22), 0 18px 40px rgba(0,0,0,0.28)`,
        color: item.accent,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full blur-3xl"
        style={{ background: item.wash }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 bottom-8 select-none text-[5.5rem] leading-none font-bold text-white/[0.06] sm:text-[6.5rem]"
      >
        {item.stat}
      </div>

      <div className="relative z-[2] flex items-center justify-between">
        <Art />
        <span
          className="rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase"
          style={{ borderColor: `${item.accent}55`, color: item.accent }}
        >
          {item.art === "squads"
            ? "Team"
            : item.art === "solo"
              ? "Embed"
              : item.art === "greenfield"
                ? "Build"
                : "Retain"}
        </span>
      </div>

      <h3 className="relative z-[2] mt-5 text-3xl font-bold text-balance text-white sm:text-[2.05rem]">
        {item.label}
      </h3>
      <p className="relative z-[2] mt-2 text-base leading-relaxed text-white/75 sm:text-[1.05rem]">
        {item.body}
      </p>

      <div className="relative z-[2] mt-auto border-t border-white/12 pt-4">
        <div className="text-xl font-bold tracking-tight" style={{ color: item.accent }}>
          {item.stat}
        </div>
        <div className="text-xs text-white/45">{item.statLabel}</div>
      </div>
    </motion.article>
  );
}

function StaticCard({ item }: { item: (typeof modes)[number] }) {
  const Art = artMap[item.art];
  return (
    <div
      className="glow-card relative overflow-hidden rounded-[1.75rem] border border-white/14 px-7 py-8"
      style={{
        background: `linear-gradient(165deg, ${item.wash} 0%, rgba(8, 12, 48, 0.92) 55%)`,
        color: item.accent,
      }}
    >
      <Art />
      <h3 className="mt-4 text-2xl font-bold text-white">{item.label}</h3>
      <p className="mt-2 text-base leading-relaxed text-white/80">{item.body}</p>
      <div className="mt-5 border-t border-white/12 pt-4">
        <div className="text-lg font-bold" style={{ color: item.accent }}>
          {item.stat}
        </div>
        <div className="text-xs text-white/45">{item.statLabel}</div>
      </div>
    </div>
  );
}

export default function EngageFanSection() {
  const targetRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLElement>(null);

  const [span, setSpan] = useState({ from: 0, to: 0 });
  const [reduce, setReduce] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    mass: 0.32,
    restDelta: 0.0005,
  });

  const x = useTransform(smooth, (p) => span.from + (span.to - span.from) * p);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const card = firstCardRef.current;
      if (!card) return;
      const cardW = card.offsetWidth;
      const styles = rootRef.current ? getComputedStyle(rootRef.current) : null;
      const gap = styles ? Number.parseFloat(styles.columnGap || styles.gap || "24") : 24;
      const trackW = COUNT * cardW + (COUNT - 1) * gap;
      const vw = window.innerWidth;
      setSpan({
        from: vw / 2 - cardW / 2,
        to: vw / 2 - (trackW - cardW / 2),
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (rootRef.current) ro.observe(rootRef.current);
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 80);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
    };
  }, [reduce]);

  const heading = (
    <div className="mx-auto max-w-3xl px-5 text-center">
      <p className="text-xs font-medium tracking-[0.22em] text-white/45 uppercase">
        How we embed
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
        Squads, solo, or stay
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 md:text-base">
        Pick the shape that matches the bottleneck — we pick up the pace either
        way.
      </p>
    </div>
  );

  if (reduce) {
    return (
      <section className="relative overflow-hidden px-5 py-20 text-white sm:px-10 md:px-16 md:py-28">
        {heading}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {modes.map((item) => (
            <StaticCard key={item.label} item={item} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[200vh] md:h-[220vh]">
      <div
        ref={rootRef}
        className="sticky top-0 flex h-svh items-end gap-6 overflow-hidden pb-16 pt-44 sm:gap-7 md:h-screen md:items-center md:gap-8 md:pt-52 md:pb-10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#010233]" />
          <div className="absolute top-[58%] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b9ad4]/25 blur-[110px]" />
        </div>

        <PeekGroup slots={sectionPeeks.engage} id="engage" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 pt-32 md:pt-36">
          {heading}
        </div>

        {modes.map((item, i) => (
          <FanCard
            key={item.label}
            item={item}
            index={i}
            progress={smooth}
            x={x}
            cardRef={i === 0 ? firstCardRef : undefined}
          />
        ))}
      </div>
    </section>
  );
}
