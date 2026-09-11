import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import Header from "./header";

export default function Hero() {
  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white md:min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#010233]/35" />
      <div className="absolute top-0 left-0 z-50 w-full">
        <Header />
      </div>

      <main className="relative z-10 flex min-h-screen items-center justify-center px-5 text-center">
        <div className="flex max-w-3xl flex-col items-center">
          <p className="text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
            Fluid Web
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.15] md:text-6xl">
            Digital &amp; web{" "}
            <span
              style={{ fontFamily: "'Oooh Baby', cursive" }}
              className="text-5xl md:text-7xl"
            >
              solutions
            </span>
            <br />
            for tech founders
          </h1>
          <p className="mt-5 max-w-lg text-base text-white/70 md:text-lg">
            Product engineering teams that ship SaaS, mobile, and AI platforms —
            from fragile MVP to production scale.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/work"
              className="rounded-2xl bg-[#16194E] px-6 py-3 font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition hover:shadow-[0_0_20px_rgba(120,130,255,0.55)]"
            >
              View case studies
            </Link>
            <a
              href="https://calendar.app.google/q12BZhXT8aWccdjY9"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/15"
            >
              Book a meeting
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
