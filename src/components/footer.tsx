import { Link } from "react-router-dom";
import logo from "../assets/fluidlogo.png";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#010233] p-4 sm:p-10 items-center w-full">
      <div className="w-[95%] sm:w-[90%] max-w-8xl flex flex-col py-5 px-5 sm:py-7 sm:px-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
          <div className="flex flex-col justify-between w-full sm:w-[50%] items-start gap-4 sm:gap-0">
            <Link to="/">
              <img src={logo} alt="Fluid Web" className="h-8 sm:h-12 w-auto" />
            </Link>
            <h4 className="text-white text-xs sm:text-sm">
              Copyright © 2026 Fluid Web. All Rights Reserved.
            </h4>
          </div>

          <div className="flex flex-row w-full sm:w-[50%] sm:flex-row-reverse gap-10 sm:gap-20">
            <div className="flex flex-col gap-1.5 sm:gap-2 sm:mr-5">
              <h3 className="text-white font-bold text-sm sm:text-xl mb-0.5 sm:mb-1">
                Contact
              </h3>
              <a
                href="mailto:hello@fluidweb.cc"
                className="text-white/60 hover:text-white transition-colors text-xs sm:text-base"
              >
                Email
              </a>
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h3 className="text-white font-bold text-sm sm:text-xl mb-0.5 sm:mb-1">
                Navigation
              </h3>
              <Link
                to="/"
                className="text-white/60 hover:text-white transition-colors text-xs sm:text-base"
              >
                Home
              </Link>
              <Link
                to="/work"
                className="text-white/60 hover:text-white transition-colors text-xs sm:text-base"
              >
                Case Studies
              </Link>
              <a
                href="/#work"
                className="text-white/60 hover:text-white transition-colors text-xs sm:text-base"
              >
                Selected work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
