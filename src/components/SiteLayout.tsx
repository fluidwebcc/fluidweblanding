import { useEffect, useMemo, useRef, type RefObject } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import type { GlassConfig } from "@ybouane/liquidglass";
import Footer from "./footer";
import LiquidGlassCursor, { CURSOR_GLASS } from "./LiquidGlassCursor";
import LiquidGlassNav, {
  FROSTED_BAR_GLASS,
  REGULAR_BTN_GLASS,
} from "./LiquidGlassNav";
import { useLiquidGlass } from "../hooks/useLiquidGlass";

let lenisInstance: Lenis | null = null;

function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return false;

  if (lenisInstance) {
    lenisInstance.scrollTo(target as HTMLElement, { offset: -96 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
  return true;
}

export default function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const liquidRootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLAnchorElement>(null);
  const teamRef = useRef<HTMLAnchorElement>(null);
  const bookRef = useRef<HTMLAnchorElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  const glassTargets = useMemo(() => {
    const targets: {
      ref: RefObject<HTMLElement | null>;
      config: Partial<GlassConfig>;
    }[] = [
      { ref: barRef, config: { ...FROSTED_BAR_GLASS } },
      { ref: workRef, config: { ...REGULAR_BTN_GLASS } },
      { ref: teamRef, config: { ...REGULAR_BTN_GLASS } },
      { ref: bookRef, config: { ...REGULAR_BTN_GLASS } },
    ];
    if (isHome) {
      targets.push({ ref: dropRef, config: { ...CURSOR_GLASS } });
    }
    return targets;
  }, [isHome]);

  const { ready, failed, instanceRef } = useLiquidGlass(
    liquidRootRef,
    glassTargets,
    {
      revision: `${location.pathname}:${isHome ? "home" : "page"}`,
      settleMs: 200,
    },
  );

  // Heavy sections (map) wait for this before mounting so prewarm stays fast.
  useEffect(() => {
    if (!ready) return;
    window.dispatchEvent(new Event("liquidglass-ready"));
  }, [ready]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    lenisInstance = lenis;
    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("liquidglass-scroll"));
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  useEffect(() => {
    if (!location.hash) {
      lenisInstance?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      return;
    }

    let frames = 0;
    let rafId = 0;
    const attempt = () => {
      if (scrollToHash(location.hash) || frames > 40) return;
      frames += 1;
      rafId = requestAnimationFrame(attempt);
    };
    rafId = requestAnimationFrame(attempt);

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash, location.key]);

  return (
    <div ref={liquidRootRef} className="relative min-h-svh text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[#010233]"
      />

      <LiquidGlassNav
        barRef={barRef}
        workRef={workRef}
        teamRef={teamRef}
        bookRef={bookRef}
        instanceRef={instanceRef}
        ready={ready}
        failed={failed}
      />

      {isHome && (
        <LiquidGlassCursor
          dropRef={dropRef}
          instanceRef={instanceRef}
          ready={ready}
          failed={failed}
        />
      )}

      {isHome ? (
        <Outlet />
      ) : (
        <>
          <main className="relative z-0 flex-1 pt-28 md:pt-32">
            <Outlet />
          </main>
          <div className="relative z-10 mt-auto">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export function BackToWork() {
  return (
    <Link
      to="/work"
      className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
    >
      ← All case studies
    </Link>
  );
}
