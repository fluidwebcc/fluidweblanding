import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./header";
import Footer from "./footer";

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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    lenisInstance = lenis;

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

    // The target section may not be mounted on the first frame after a route
    // change, so retry briefly before giving up.
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
    <div className="relative flex min-h-svh flex-col bg-[#010233] text-white">
      {isHome ? (
        <Outlet />
      ) : (
        <>
          <div className="absolute top-0 left-0 z-50 w-full">
            <Header />
          </div>
          <main className="relative z-0 flex-1 pt-24 md:pt-32">
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
