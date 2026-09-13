import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type PeekLayout, type PeekSlot } from "../data/team";
import { randomPeekSaying } from "../data/peekSayings";
import { useCyclingPeekPeople } from "../hooks/useCyclingPeekPeople";

const sizeClass = {
  sm: "h-12 w-12 md:h-14 md:w-14",
  md: "h-14 w-14 md:h-16 md:w-16",
  lg: "h-16 w-16 md:h-20 md:w-20",
  xl: "h-[4.25rem] w-[4.25rem] md:h-24 md:w-24 lg:h-28 lg:w-28",
} as const;

function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = next[i];
    const b = next[j];
    if (a === undefined || b === undefined) continue;
    next[i] = b;
    next[j] = a;
  }
  return next;
}

export default function PeekPortrait({
  person,
  className = "",
  size = "md",
  rotate = 0,
  delay = 0,
  eager = false,
}: PeekSlot & { eager?: boolean }) {
  const [speech, setSpeech] = useState<{ name: string; line: string } | null>(
    null,
  );
  const [tilt] = useState(() => rotate + (Math.random() * 10 - 5));
  const line = speech?.name === person.name ? speech.line : null;

  const showSaying = () =>
    setSpeech((prev) => ({
      name: person.name,
      line: randomPeekSaying(prev?.name === person.name ? prev.line : undefined),
    }));

  return (
    <motion.div
      className={`absolute z-30 ${className}`}
      style={{ rotate: tilt }}
      initial={{ opacity: 0, y: 10 }}
      {...(eager
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-40px" },
          })}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={showSaying}
      onMouseLeave={() => setSpeech(null)}
      onFocus={showSaying}
      onBlur={() => setSpeech(null)}
    >
      <motion.button
        type="button"
        aria-label={person.name}
        className={`${sizeClass[size]} relative cursor-default overflow-visible rounded-2xl border border-white/30 bg-[#0a0d3a] shadow-[0_12px_40px_rgba(0,0,0,0.5)] outline-none ring-white/30 focus-visible:ring-2`}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 5.5 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="relative block h-full w-full overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={person.image}
              src={person.image}
              alt=""
              className="h-full w-full object-cover object-top"
              draggable={false}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28 }}
            />
          </AnimatePresence>
        </span>

        <AnimatePresence>
          {line ? (
            <motion.span
              key={line}
              role="status"
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-40 w-max max-w-[11rem] -translate-x-1/2 rounded-xl border border-white/20 bg-[#0a0d3a] px-3 py-2 text-left text-[11px] leading-snug font-medium text-white shadow-xl"
              style={{ rotate: -tilt }}
            >
              {line}
              <span className="absolute top-full left-1/2 -mt-px -translate-x-1/2 border-4 border-transparent border-t-[#0a0d3a]" />
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

function pickLayoutSubset(
  slots: readonly PeekLayout[],
  count?: number,
): PeekLayout[] {
  if (slots.length <= 2) return [...slots];
  if (count !== undefined) {
    return shuffle(slots).slice(0, Math.min(count, slots.length));
  }
  const min = 2;
  const n = min + Math.floor(Math.random() * (slots.length - min + 1));
  return shuffle(slots).slice(0, n);
}

export function PeekGroup({
  slots,
  id,
  all = false,
  count,
}: {
  slots: readonly PeekLayout[];
  id: string;
  /** Use every slot (hero corners). Other sections still pick a random subset. */
  all?: boolean;
  /** Pick exactly this many slots (shuffled) instead of a random 2–N. */
  count?: number;
}) {
  const [layouts] = useState(() =>
    all ? [...slots] : pickLayoutSubset(slots, count),
  );
  const people = useCyclingPeekPeople(layouts.length);

  return (
    <>
      {layouts.map((layout, i) => {
        const person = people[i];
        if (!person) return null;
        return (
          <PeekPortrait
            key={`${id}-${i}`}
            person={person}
            eager={all}
            {...layout}
          />
        );
      })}
    </>
  );
}
