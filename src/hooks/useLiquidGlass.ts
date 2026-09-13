import { useEffect, useRef, useState, type RefObject } from "react";
import {
  LiquidGlass,
  type GlassConfig,
  type LiquidGlassOptions,
} from "@ybouane/liquidglass";

type GlassTarget = {
  ref: RefObject<HTMLElement | null>;
  config?: Partial<GlassConfig>;
};

export type LiquidGlassInstance = Awaited<ReturnType<typeof LiquidGlass.init>>;

type UseLiquidGlassOptions = {
  defaults?: Partial<GlassConfig>;
  /** Remount/re-init when this changes (e.g. route pathname). */
  revision?: string | number;
  /**
   * Optional delay before init. Default is 0 so the nav glass can
   * appear on the first frames; raise only if a route still captures
   * mid-animation.
   */
  settleMs?: number;
};

/**
 * Mounts @ybouane/liquidglass on a root + direct-child glass elements.
 * Glass nodes must be direct children of `rootRef` (library constraint).
 */
export function useLiquidGlass(
  rootRef: RefObject<HTMLElement | null>,
  targets: GlassTarget[],
  options: UseLiquidGlassOptions = {},
) {
  const { defaults, revision = 0, settleMs = 0 } = options;
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const instanceRef = useRef<LiquidGlassInstance | null>(null);

  useEffect(() => {
    let cancelled = false;
    let instance: LiquidGlassInstance | null = null;
    let settleTimer = 0;

    const start = async () => {
      try {
        // Don't wait on document.fonts.ready — Google Fonts can add a
        // second of delay before the nav glass appears. The library still
        // embeds @font-face during init. Cap any optional settle so the
        // bar isn't empty while webfonts download.
        if (settleMs > 0) {
          await new Promise<void>((resolve) => {
            settleTimer = window.setTimeout(resolve, settleMs);
          });
          if (cancelled) return;
        }

        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
        );
        if (cancelled) return;

        const root = rootRef.current;
        const glassElements = targets
          .map((t) => {
            const el = t.ref.current;
            if (el && t.config) {
              el.dataset.config = JSON.stringify(t.config);
            }
            return el;
          })
          .filter((el): el is HTMLElement => el != null);

        if (!root || glassElements.length === 0) {
          setFailed(true);
          return;
        }

        const initOptions: LiquidGlassOptions = {
          root,
          glassElements,
          defaults,
        };

        instance = await LiquidGlass.init(initOptions);
        if (cancelled) {
          instance.destroy();
          instance = null;
          return;
        }

        // Library sets user-select:none on the whole root; restore it
        // so the rest of the site stays selectable.
        root.style.userSelect = "";
        root.style.removeProperty("-webkit-user-select");

        instanceRef.current = instance;
        setReady(true);
        setFailed(false);
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    void start();

    return () => {
      cancelled = true;
      window.clearTimeout(settleTimer);
      instance?.destroy();
      instance = null;
      instanceRef.current = null;
      setReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revision, settleMs]);

  return { ready, failed, instanceRef };
}
