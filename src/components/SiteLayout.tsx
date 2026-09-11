import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./header";
import Footer from "./footer";

export default function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
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
    };
  }, []);

  return (
    <div className="min-h-svh bg-[#010233] text-white">
      {isHome ? (
        <Outlet />
      ) : (
        <>
          <div className="absolute top-0 left-0 z-50 w-full">
            <Header />
          </div>
          <div className="pt-24 md:pt-32">
            <Outlet />
          </div>
          <Footer />
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
