import { Link } from "react-router-dom";
import logo from "../assets/fluidlogo.png";
import { engagements, services } from "../data/practice";
import { BOOKING_URL } from "../data/site";

const linkClass =
  "text-white/72 hover:text-white transition-colors text-xs sm:text-sm";

export default function Footer() {
  return (
    <div className="relative z-40 flex w-full flex-col items-center p-4 sm:p-10">
      <div className="w-[95%] sm:w-[90%] max-w-8xl flex flex-col py-5 px-5 sm:py-7 sm:px-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          <div className="flex w-full flex-col justify-between gap-6 lg:w-[32%]">
            <Link to="/">
              <img src={logo} alt="Fluid Web" className="h-8 sm:h-12 w-auto" />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-white/70 sm:text-sm">
              AI-native product engineering for startups and teams that need to
              move faster.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:w-[68%]">
            <div className="flex flex-col gap-2">
              <h3 className="mb-1 text-[10px] font-bold tracking-[0.16em] text-white uppercase sm:text-xs">
                Services
              </h3>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={linkClass}
                >
                  {service.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="mb-1 text-[10px] font-bold tracking-[0.16em] text-white uppercase sm:text-xs">
                Engage
              </h3>
              {engagements.map((mode) => (
                <Link
                  key={mode.slug}
                  to={`/engage/${mode.slug}`}
                  className={linkClass}
                >
                  {mode.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="mb-1 text-[10px] font-bold tracking-[0.16em] text-white uppercase sm:text-xs">
                Company
              </h3>
              <Link to="/work" className={linkClass}>
                Case Studies
              </Link>
              <Link to="/team" className={linkClass}>
                Engineering Team
              </Link>
              <Link to="/faq" className={linkClass}>
                Founder FAQ
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                Book Technical Review
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-5">
          <h4 className="text-white/60 text-xs sm:text-sm">
            Copyright © 2026 Fluid Web. All Rights Reserved.
          </h4>
        </div>
      </div>
    </div>
  );
}
