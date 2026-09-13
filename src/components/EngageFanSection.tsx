import { useEffect, useLayoutEffect, useRef, useState, type Ref } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const modes = [
  {
    label: "Dedicated squads",
    body: "12+ engineers on a product when you need horsepower.",
  },
  {
    label: "Solo embeds",
    body: "One senior owns the build end to end — fast and accountable.",
  },
  {
    label: "Greenfield",
    body: "0 → live without discovery theater or agency drag.",
  },
  {
    label: "Ongoing ownership",
    body: "We stay embedded and keep the release train moving.",
  },
] as const;

const COUNT = modes.length;

const CARD_SURFACE =
  "overflow-hidden border border-white/15 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]";

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
      className={`glow-card relative flex h-[16.5rem] w-[19.5rem] shrink-0 flex-col justify-center rounded-[1.75rem] px-7 py-8 sm:h-[18rem] sm:w-[22rem] sm:px-8 md:h-[19rem] md:w-[24rem] ${CARD_SURFACE}`}
      style={{ x, scale, opacity, y, rotate, zIndex }}
    >
      <h3 className="relative z-[2] text-3xl font-bold text-balance text-white sm:text-4xl">
        {item.label}
      </h3>
      <p className="relative z-[2] mt-3 text-base leading-relaxed text-white/80 sm:text-lg">
        {item.body}
      </p>
    </motion.article>
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
            <div
              key={item.label}
              className={`glow-card rounded-[1.75rem] px-7 py-8 ${CARD_SURFACE}`}
            >
              <h3 className="text-2xl font-bold">{item.label}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">{item.body}</p>
            </div>
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[#010233]" />
          <div className="absolute top-[58%] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b9ad4]/25 blur-[110px]" />
        </div>

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
