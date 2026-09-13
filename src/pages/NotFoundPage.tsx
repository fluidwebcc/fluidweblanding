import { Link, useLocation } from "react-router-dom";
import { BOOKING_URL } from "../data/site";

const destinations = [
  {
    to: "/",
    label: "Home",
    detail: "What we do and how we work",
  },
  {
    to: "/work",
    label: "Case studies",
    detail: "Products we shipped, and what moved",
  },
  {
    to: "/team",
    label: "Team",
    detail: "The people who embed with you",
  },
  {
    to: "/faq",
    label: "Founder FAQ",
    detail: "Straight answers before you bring us in",
  },
] as const;

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <div className="text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-xs font-medium tracking-[0.18em] text-white/60 uppercase">
            404
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            This page isn&apos;t here
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/72 md:text-lg">
            Nothing lives at{" "}
            <span className="break-all font-medium text-white">{pathname}</span>.
            It may have moved, or the link might be off.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
        <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
          Go somewhere useful
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {destinations.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="glow-card rounded-2xl border border-white/12 bg-white/5 px-5 py-5 transition hover:border-white/25 hover:bg-white/8"
            >
              <div className="text-lg font-semibold">{item.label}</div>
              <p className="mt-1 text-sm text-white/55">{item.detail}</p>
            </Link>
          ))}
        </div>

        <div className="glow-card mt-10 rounded-2xl border border-white/12 bg-white/5 px-6 py-7">
          <h2 className="text-xl font-semibold">Looking for us instead?</h2>
          <p className="mt-2 max-w-xl text-sm text-white/72 md:text-base">
            If a page moved, we can still help with the product problem behind
            the link.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#010233] transition hover:bg-white/85"
            >
              Back home
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/9"
            >
              Book a technical review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
