import { useEffect } from "react";

function eventElement(node: EventTarget | null) {
  if (node instanceof Element) return node;
  if (node instanceof Node) return node.parentElement;
  return null;
}

/**
 * Tracks the pointer over `.glow-card` elements and writes CSS vars so
 * the corner/edge specular can follow the cursor.
 */
export function useCardGlow() {
  useEffect(() => {
    let frame = 0;
    let nextX = 0;
    let nextY = 0;
    let card: HTMLElement | null = null;

    const flush = () => {
      frame = 0;
      if (!card) return;
      card.style.setProperty("--glow-x", `${nextX}px`);
      card.style.setProperty("--glow-y", `${nextY}px`);
    };

    const activate = (next: HTMLElement, x: number, y: number) => {
      if (card && card !== next) card.classList.remove("is-glowing");
      next.classList.add("is-glowing");
      card = next;
      nextX = x;
      nextY = y;
      if (!frame) frame = window.requestAnimationFrame(flush);
    };

    const clear = () => {
      if (!card) return;
      card.classList.remove("is-glowing");
      card = null;
    };

    const onMove = (event: PointerEvent) => {
      const el = eventElement(event.target);
      const next = el?.closest(".glow-card");
      if (!(next instanceof HTMLElement)) {
        clear();
        return;
      }

      const rect = next.getBoundingClientRect();
      activate(next, event.clientX - rect.left, event.clientY - rect.top);
    };

    document.addEventListener("pointermove", onMove, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener("pointermove", onMove, { capture: true });
      if (frame) window.cancelAnimationFrame(frame);
      clear();
    };
  }, []);
}
