import { Link } from "react-router-dom";
import logo from "../assets/fluidlogo.png";

export default function Header() {
  return (
    <div className="w-full flex justify-center pt-6">
      <div className="w-[90%] max-w-8xl h-18 flex items-center justify-between px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        <Link to="/" className="flex items-center text-white text-3xl font-semibold">
          <img src={logo} alt="Fluid Web" className="h-10 w-auto mr-4" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
          <Link to="/work" className="transition hover:text-white">
            Work
          </Link>
          <a href="/#work" className="transition hover:text-white">
            Selected
          </a>
          <a
            href="mailto:hello@fluidweb.cc"
            className="rounded-xl bg-white/10 px-3 py-1.5 transition hover:bg-white/20 hover:text-white"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/work"
            className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white"
          >
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}
