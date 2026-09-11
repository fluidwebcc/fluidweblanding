import { Link } from "react-router-dom";
import logo from "../assets/fluidlogo.png";

export default function Header() {
  return (
    <div className="flex w-full justify-center pt-6">
      <div className="flex h-16 w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-md sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Fluid Web" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
          <a href="/#work" className="transition hover:text-white">
            Work
          </a>
          <a href="/#team" className="transition hover:text-white">
            Team
          </a>
          <a
            href="mailto:hello@fluidweb.cc"
            className="rounded-xl bg-white/10 px-3 py-1.5 transition hover:bg-white/20 hover:text-white"
          >
            Contact
          </a>
        </nav>

        <Link
          to="/work"
          className="rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white md:hidden"
        >
          Work
        </Link>
      </div>
    </div>
  );
}
