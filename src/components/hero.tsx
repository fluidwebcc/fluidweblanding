import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { companyProof } from "../data/caseStudies";
import { PeekGroup } from "./PeekPortrait";
import { sectionPeeks } from "../data/team";
import { BOOKING_URL } from "../data/site";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const HERO_POSTER = "/videos/hero-waves.webp";
const HERO_VIDEO = "/videos/hero-waves.mp4";

const mediaClass =
  "pointer-events-none absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-[0.32] [filter:brightness(0.72)_contrast(1.1)_saturate(0.5)]";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

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
        setVideoPlaying(false);
      } else {
        void video.play().catch(() => {});
      }
    };

    const handlePlaying = () => setVideoPlaying(true);

    syncPlayback();
    video.addEventListener("canplay", syncPlayback);
    video.addEventListener("playing", handlePlaying);
    motionQuery.addEventListener("change", syncPlayback);
    return () => {
      video.removeEventListener("canplay", syncPlayback);
      video.removeEventListener("playing", handlePlaying);
      motionQuery.removeEventListener("change", syncPlayback);
    };
  }, [loadVideo]);

  return (
    <section
      id="liquid-hero"
      className="relative h-svh w-full overflow-hidden text-white md:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#010233]" />
      {!videoPlaying ? (
        <img
          src={HERO_POSTER}
          alt=""
          fetchPriority="high"
          className={mediaClass}
          draggable={false}
        />
      ) : null}
      {loadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className={mediaClass}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : null}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#010233]/35" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(1,2,51,0.48)_0%,rgba(1,2,51,0.14)_42%,rgba(1,2,51,0.7)_100%)]" />

      <PeekGroup slots={sectionPeeks.hero} id="hero" all />

      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center px-20 py-16 text-center sm:px-28 sm:py-20 md:px-32 md:py-24 lg:px-48"
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full max-w-3xl">
          <p className="text-xs font-medium tracking-[0.22em] text-white/60 uppercase">
            Product engineering · startups &amp; stuck teams
          </p>
          <h1 className="mt-4 text-4xl leading-[1.15] font-bold md:text-5xl lg:text-6xl">
            Fluidweb picks up
            <br />
            <span className="whitespace-nowrap">
              the{" "}
              <span
                style={{ fontFamily: "'Oooh Baby', cursive" }}
                className="text-[1.22em] leading-none"
              >
                pace
              </span>
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/75 md:text-lg">
            For startups and teams stuck shipping slow. We embed engineers —
            squads or solo — across {companyProof.continents} continents, and we
            get the product done the modern way.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="glow-card flex w-full max-w-[20.5rem] flex-col rounded-[1.75rem] border border-white/25 bg-white/[0.08] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:w-auto sm:max-w-none sm:inline-flex sm:flex-row sm:items-center sm:rounded-full">
              <Link
                to="/work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#010233] shadow-[0_8px_24px_rgba(255,255,255,0.14)] transition hover:bg-white/90 sm:py-2.5 md:px-6 md:py-3 md:text-base"
              >
                View case studies
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 sm:py-2.5 md:px-6 md:py-3 md:text-base"
              >
                Book a meeting
                <ArrowIcon className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
