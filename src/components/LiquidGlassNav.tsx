import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fluidlogo.png";
import { BOOKING_URL } from "../data/site";
import type { LiquidGlassInstance } from "../hooks/useLiquidGlass";

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
  "border border-white/20 bg-white/[0.08] shadow-lg";
const BTN_FALLBACK =
  "border border-white/20 bg-white/10 shadow-md";

/**
 * Slim frosted bar — wider horizontally (logo left, actions right).
 * Glass nodes are direct children of the LiquidGlass root (fragment flattens).
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

  useLayoutEffect(() => {
    syncButtons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    const onResize = () => syncButtons();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const btnClass =
    "pointer-events-auto fixed z-[56] flex items-center justify-center rounded-xl text-sm font-medium text-white";

  return (
    <>
      {/* Frosted glass bar — logo left, invisible slots pin buttons to the right */}
      <div
        ref={barRef}
        className={`pointer-events-auto fixed top-6 left-1/2 z-50 flex h-16 w-[min(92vw,44rem)] -translate-x-1/2 items-center justify-between px-5 sm:px-6 ${
          failed || !ready ? BAR_FALLBACK : "bg-transparent"
        }`}
      >
        <Link to="/" className="relative z-[2] flex shrink-0 items-center">
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
        </div>
      </div>

      {/* Regular-glass buttons — siblings of the bar (library: no nested glass) */}
      <Link
        ref={workRef}
        to="/work"
        className={`${btnClass} ${failed || !ready ? BTN_FALLBACK : "bg-transparent"}`}
        style={{ left: 0, top: 0, width: 0, height: 0 }}
      >
        Work
      </Link>
      <Link
        ref={teamRef}
        to="/team"
        className={`${btnClass} hidden md:flex ${failed || !ready ? BTN_FALLBACK : "bg-transparent"}`}
        style={{ left: 0, top: 0, width: 0, height: 0 }}
      >
        Team
      </Link>
      <a
        ref={bookRef}
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className={`${btnClass} hidden md:flex ${failed || !ready ? BTN_FALLBACK : "bg-transparent"}`}
        style={{ left: 0, top: 0, width: 0, height: 0 }}
      >
        Book a call
      </a>
    </>
  );
}
