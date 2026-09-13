import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { companyProof } from "../data/caseStudies";
import { PeekGroup } from "./PeekPortrait";
import { sectionPeeks } from "../data/team";
import { BOOKING_URL } from "../data/site";

const HERO_POSTER = "/videos/hero-waves.webp";
const HERO_VIDEO = "/videos/hero-waves.mp4";

const mediaClass =
  "pointer-events-none absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-[0.32] [filter:brightness(0.72)_contrast(1.1)_saturate(0.5)]";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const enable = () => setLoadVideo(true);
    window.addEventListener("liquidglass-ready", enable);
    const fallback = window.setTimeout(enable, 400);
    return () => {
      window.removeEventListener("liquidglass-ready", enable);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loadVideo) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (motionQuery.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    };

    syncPlayback();
    video.addEventListener("canplay", syncPlayback);
    motionQuery.addEventListener("change", syncPlayback);
    return () => {
      video.removeEventListener("canplay", syncPlayback);
      motionQuery.removeEventListener("change", syncPlayback);
    };
  }, [loadVideo]);

  return (
    <section
      id="liquid-hero"
      className="relative h-svh w-full overflow-hidden text-white md:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#010233]" />
      <img
        src={HERO_POSTER}
        alt=""
        fetchPriority="high"
        className={mediaClass}
        draggable={false}
      />
      {loadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          aria-hidden
          className={mediaClass}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : null}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#010233]/35" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(1,2,51,0.48)_0%,rgba(1,2,51,0.14)_42%,rgba(1,2,51,0.7)_100%)]" />

      <PeekGroup slots={sectionPeeks.hero} id="hero" />

      <motion.div
        className="absolute top-1/2 left-1/2 z-10 w-[min(100%-2.5rem,42rem)] -translate-x-1/2 -translate-y-1/2 px-6 py-8 text-center md:px-10 md:py-10"
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-medium tracking-[0.22em] text-white/60 uppercase">
          Product engineering · startups &amp; stuck teams
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.15] md:text-6xl">
          Fluidweb picks up the{" "}
          <span
            style={{ fontFamily: "'Oooh Baby', cursive" }}
            className="text-5xl md:text-7xl"
          >
            pace
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/75 md:text-lg">
          For startups and teams stuck shipping slow. We embed engineers —
          squads or solo — across {companyProof.continents} continents, and we
          get the product done the modern way.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/work"
            className="rounded-2xl bg-[#16194E]/92 px-6 py-3 font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.35)] transition hover:bg-[#1c2160] hover:shadow-[0_0_20px_rgba(120,130,255,0.45)]"
          >
            View case studies
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-semibold transition hover:bg-white/18"
          >
            Book a meeting
          </a>
        </div>
      </motion.div>
    </section>
  );
}
