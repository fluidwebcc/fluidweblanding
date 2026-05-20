import bg from "../assets/bg.png";
import Header from "./header";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      {/* Floating Header, its code is in header component file */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Content */}
      <main className="flex min-h-screen items-center justify-center text-center px-4">
        
        <div className="flex flex-col items-center max-w-3xl">
          
          <h1 className="text-3xl md:text-6xl font-bold leading-[1.2]">
            Digital & Web <br />
            Development{" "}
            
            <span
              style={{ fontFamily: "'Oooh Baby', cursive" }}
              className="text-white text-6xl md:text-6xl"
            >
              solutions
            </span>{" "}
            
            for <br /> tech founders
          </h1>

          <div className="flex gap-4 mt-8">
            
            <button className="px-6 py-2.5 rounded-2xl font-semibold text-white 
              bg-[#16194E] 
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_20px_rgba(120,130,255,0.6)]
              transition-all duration-300">
              Get A Quote
            </button>

            <button className="px-6 py-2.5 rounded-2xl font-semibold text-white 
              bg-[#16194E] 
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_20px_rgba(120,130,255,0.6)]
              transition-all duration-300">
              Book A Meeting
            </button>

          </div>

        </div>

      </main>
    </section>
  );
}