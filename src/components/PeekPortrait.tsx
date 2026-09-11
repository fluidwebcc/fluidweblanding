import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PeekSlot } from "../data/team";
import { randomPeekSaying } from "../data/peekSayings";

const sizeClass = {
  sm: "h-12 w-12 md:h-14 md:w-14",
  md: "h-14 w-14 md:h-16 md:w-16",
  lg: "h-16 w-16 md:h-20 md:w-20",
} as const;

export default function PeekPortrait({
  person,
  className = "",
  size = "md",
  rotate = 0,
  delay = 0,
}: PeekSlot) {
  const [line, setLine] = useState<string | null>(null);

  return (
    <motion.div
      className={`absolute z-30 ${className}`}
      style={{ rotate }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setLine((prev) => randomPeekSaying(prev ?? undefined))}
      onMouseLeave={() => setLine(null)}
      onFocus={() => setLine((prev) => randomPeekSaying(prev ?? undefined))}
      onBlur={() => setLine(null)}
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
        <span className="block h-full w-full overflow-hidden rounded-2xl">
          <img
            src={person.image}
            alt=""
            className="h-full w-full object-cover object-top"
            loading="lazy"
            draggable={false}
          />
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
              style={{ rotate: -rotate }}
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

export function PeekGroup({
  slots,
  id,
}: {
  slots: readonly PeekSlot[];
  id: string;
}) {
  return (
    <>
      {slots.map((slot, i) => (
        <PeekPortrait key={`${id}-${slot.person.name}-${i}`} {...slot} />
      ))}
    </>
  );
}
