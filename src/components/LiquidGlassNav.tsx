import { useEffect, useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fluidlogo.png";
import { BOOKING_URL } from "../data/site";
import type { LiquidGlassInstance } from "../hooks/useLiquidGlass";

/** Frosted glass — the nav chrome (demo frosted panel). */
export const FROSTED_BAR_GLASS = {
  blurAmount: 0.25,
  cornerRadius: 20,
  zRadius: 28,
  refraction: 0.69,
  chromAberration: 0.04,
  edgeHighlight: 0.08,
  fresnel: 1,
  shadowOpacity: 0.28,
  brightness: 0,
  floating: false,
  button: false,
} as const;

/** Regular glass — nav action pills (demo regular + button mode). */
export const REGULAR_BTN_GLASS = {
  blurAmount: 0,
  cornerRadius: 12,
  zRadius: 20,
  refraction: 0.69,
  chromAberration: 0.05,
  edgeHighlight: 0.08,
  fresnel: 1,
  shadowOpacity: 0.25,
  button: true,
  floating: false,
} as const;

type LiquidGlassNavProps = {
  barRef: RefObject<HTMLDivElement | null>;
  workRef: RefObject<HTMLAnchorElement | null>;
  teamRef: RefObject<HTMLAnchorElement | null>;
  bookRef: RefObject<HTMLAnchorElement | null>;
  instanceRef: RefObject<LiquidGlassInstance | null>;
  ready: boolean;
  failed: boolean;
};

const BAR_FALLBACK =
  "border border-white/20 bg-white/[0.12] shadow-lg";
const BTN_FALLBACK =
  "border border-white/20 bg-white/10 shadow-md";

/**
 * Original header layout: wide frosted bar (logo left) + regular-glass
 * action pills on the right. All glass nodes are direct children of the
 * LiquidGlass root (fragment flattens).
 */
export default function LiquidGlassNav({
  barRef,
  workRef,
  teamRef,
  bookRef,
  instanceRef,
  ready,
  failed,
}: LiquidGlassNavProps) {
  const slotWork = useRef<HTMLSpanElement>(null);
  const slotTeam = useRef<HTMLSpanElement>(null);
  const slotBook = useRef<HTMLSpanElement>(null);

  const syncButtons = () => {
    const pairs: [RefObject<HTMLElement | null>, RefObject<HTMLElement | null>][] = [
      [slotWork, workRef],
      [slotTeam, teamRef],
      [slotBook, bookRef],
    ];

    for (const [slot, btn] of pairs) {
      const s = slot.current;
      const b = btn.current;
      if (!s || !b) continue;
      const r = s.getBoundingClientRect();
      b.style.left = `${r.left}px`;
      b.style.top = `${r.top}px`;
      b.style.width = `${r.width}px`;
      b.style.height = `${r.height}px`;
      instanceRef.current?.markChanged(b);
    }

    if (barRef.current) instanceRef.current?.markChanged(barRef.current);
  };

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(syncButtons),
    );
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    const onResize = () => syncButtons();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    if (!ready) return;
    const onScroll = () => {
      // Fixed chrome — still dirty so refraction tracks scrolling content.
      if (barRef.current) instanceRef.current?.markChanged(barRef.current);
      for (const ref of [workRef, teamRef, bookRef]) {
        if (ref.current) instanceRef.current?.markChanged(ref.current);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("liquidglass-scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("liquidglass-scroll", onScroll);
    };
  }, [ready, barRef, workRef, teamRef, bookRef, instanceRef]);

  const btnClass =
    "pointer-events-auto fixed z-[56] flex items-center justify-center rounded-xl text-sm font-medium text-white";

  return (
    <>
      {/* Frosted glass bar — logo + invisible slots that size the real buttons */}
      <div
        ref={barRef}
        className={`fixed top-6 left-1/2 z-50 flex h-16 w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between px-5 sm:px-6 ${
          failed ? BAR_FALLBACK : "bg-transparent"
        }`}
      >
        <Link to="/" className="relative z-[2] flex items-center">
          <img src={logo} alt="Fluid Web" className="h-9 w-auto" />
        </Link>

        <div className="relative z-[2] flex items-center gap-2 sm:gap-3">
          <span
            ref={slotWork}
            className="invisible px-3 py-1.5 text-sm font-medium"
            aria-hidden
          >
            Work
          </span>
          <span
            ref={slotTeam}
            className="invisible hidden px-3 py-1.5 text-sm font-medium md:inline"
            aria-hidden
          >
            Team
          </span>
          <span
            ref={slotBook}
            className="invisible hidden px-3 py-1.5 text-sm font-medium md:inline"
            aria-hidden
          >
            Book a call
          </span>
          {/* Mobile: only Work slot is visible for sizing; Team hidden */}
        </div>
      </div>

      {/* Regular-glass buttons — siblings of the bar (library: no nested glass) */}
      <Link
        ref={workRef}
        to="/work"
        className={`${btnClass} ${failed ? BTN_FALLBACK : "bg-transparent"}`}
        style={{ left: 0, top: 0, width: 0, height: 0 }}
      >
        Work
      </Link>
      <Link
        ref={teamRef}
        to="/team"
        className={`${btnClass} hidden md:flex ${failed ? BTN_FALLBACK : "bg-transparent"}`}
        style={{ left: 0, top: 0, width: 0, height: 0 }}
      >
        Team
      </Link>
      <a
        ref={bookRef}
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className={`${btnClass} hidden md:flex ${failed ? BTN_FALLBACK : "bg-transparent"}`}
        style={{ left: 0, top: 0, width: 0, height: 0 }}
      >
        Book a call
      </a>
    </>
  );
}
