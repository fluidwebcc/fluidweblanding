import { useEffect, useRef, type RefObject } from "react";
import type { LiquidGlassInstance } from "../hooks/useLiquidGlass";

/** Regular glass circle — sharp refraction (demo default look). */
export const GLASS_DROP_SIZE = 56;

export const CURSOR_GLASS = {
  blurAmount: 0,
  refraction: 0.69,
  chromAberration: 0.05,
  edgeHighlight: 0.05,
  specular: 0,
  fresnel: 1,
  cornerRadius: GLASS_DROP_SIZE / 2,
  zRadius: Math.round(GLASS_DROP_SIZE * 0.42),
  shadowOpacity: 0.3,
  shadowSpread: 8,
  floating: false,
} as const;

const LERP = 0.28;

type LiquidGlassCursorProps = {
  dropRef: RefObject<HTMLDivElement | null>;
  instanceRef: RefObject<LiquidGlassInstance | null>;
  ready: boolean;
  failed: boolean;
};

/**
 * Hero-only regular-glass circle. Must be a direct child of the LiquidGlass root.
 * Tracks the pointer only while it is over `#liquid-hero`.
 */
export default function LiquidGlassCursor({
  dropRef,
  instanceRef,
  ready,
  failed,
}: LiquidGlassCursorProps) {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    if (!ready) return;
    const onScroll = () => {
      const drop = dropRef.current;
      if (drop && visible.current) instanceRef.current?.markChanged(drop);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("liquidglass-scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("liquidglass-scroll", onScroll);
    };
  }, [ready, dropRef, instanceRef]);

  useEffect(() => {
    const drop = dropRef.current;
    if (!drop || !ready) return;

    let raf = 0;
    let hero = document.getElementById("liquid-hero");

    const hide = () => {
      visible.current = false;
      drop.style.opacity = "0";
    };

    const onMove = (e: PointerEvent) => {
      if (!hero) hero = document.getElementById("liquid-hero");
      if (!hero) {
        hide();
        return;
      }

      const rect = hero.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inside) {
        hide();
        return;
      }

      target.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        current.current = { ...target.current };
        drop.style.opacity = "1";
      }
    };

    const tick = () => {
      if (visible.current) {
        const prevX = current.current.x;
        const prevY = current.current.y;
        current.current.x += (target.current.x - current.current.x) * LERP;
        current.current.y += (target.current.y - current.current.y) * LERP;

        const moved =
          Math.abs(current.current.x - prevX) > 0.05 ||
          Math.abs(current.current.y - prevY) > 0.05;

        if (moved) {
          drop.style.left = `${current.current.x - GLASS_DROP_SIZE / 2}px`;
          drop.style.top = `${current.current.y - GLASS_DROP_SIZE / 2}px`;
          instanceRef.current?.markChanged(drop);
        }
      }
      raf = requestAnimationFrame(tick);
    };

    if (hero) {
      const rect = hero.getBoundingClientRect();
      target.current = {
        x: rect.left + rect.width * 0.55,
        y: rect.top + rect.height * 0.42,
      };
      current.current = { ...target.current };
      drop.style.left = `${current.current.x - GLASS_DROP_SIZE / 2}px`;
      drop.style.top = `${current.current.y - GLASS_DROP_SIZE / 2}px`;
    }
    drop.style.opacity = "0";
    visible.current = false;

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [dropRef, instanceRef, ready]);

  return (
    <div
      ref={dropRef}
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 z-[70] rounded-full transition-opacity duration-300 ${
        failed
          ? "border border-white/25 bg-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{
        width: GLASS_DROP_SIZE,
        height: GLASS_DROP_SIZE,
        opacity: 0,
        willChange: "left, top",
      }}
    />
  );
}
