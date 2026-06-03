import logo from "../assets/fluidlogo.png";

export default function Header() {
  return (
    <div className="w-full flex justify-center pt-6">
      <div className="w-[90%] max-w-8xl h-18 flex items-center justify-between px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        
        {/* Left - Logo */}
        <div className="flex items-center text-white text-3xl font-semibold">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          
          {/* Profile */}
          <div className="w-9 h-9 rounded-full border border-white bg-white/20 flex items-center justify-center">
            <button></button>
          </div>

          {/* Menu */}
          <div className="flex flex-col justify-center gap-1 cursor-pointer">
            <span className="block w-6 h-0.5 bg-white rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
          </div>

        </div>
      </div>
    </div>
  );
}