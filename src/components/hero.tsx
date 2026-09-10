import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import Header from "./header";

export default function Hero() {
  return (
    <section
      className="relative h-svh w-full bg-cover bg-center bg-no-repeat text-white md:min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-0 left-0 z-50 w-full">
        <Header />
      </div>

      <main className="flex min-h-screen items-center justify-center px-4 text-center">
        <div className="flex max-w-3xl flex-col items-center">
          <h1 className="text-3xl font-bold leading-[1.2] md:text-6xl">
            Fluid Web
            <br />
            Digital &amp; web{" "}
            <span
              style={{ fontFamily: "'Oooh Baby', cursive" }}
              className="text-4xl text-white md:text-6xl"
            >
              solutions
            </span>{" "}
            for
            <br />
            tech founders
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/work"
              className="rounded-2xl bg-[#16194E] px-6 py-2.5 font-semibold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(120,130,255,0.6)]"
            >
              View case studies
            </Link>
            <a
              href="mailto:hello@fluidweb.cc"
              className="rounded-2xl bg-[#16194E] px-6 py-2.5 font-semibold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(120,130,255,0.6)]"
            >
              Book a meeting
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}