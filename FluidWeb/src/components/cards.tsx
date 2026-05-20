import type { Key } from "react";
import logo from "../assets/fav.png";

export default function cards() {

    const cards=[
        "We build fast, scalable digital products tailored to your business goals",
        "From SaaS platforms to websites, we create solutions built to perform",
        "Strategy, design, and development combined into one seamless experience",
        "Flexible, reliable, and ready to build whatever your business needs"
    ];



  return (
    <div className="w-full h-screen bg-[#010233] px-35 py-30">
      <div className="h-full flex-col">
        <div className="flex justify-center">
          <h1 className="text-6xl text-white font-bold">
            Why Fluid<span className="font-semibold">Web?</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 mt-16 gap-8 max-w-5xl mx-auto">
          {cards.map((desc: any, index: Key | null | undefined) => (
            <div
              key={index}
              className="flex flex-col  justify-between px-6 py-3 pb-5 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
              >
            <div className="flex-row  rounded px-2 py-1.5 mb-1">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
            </div>
            <p className="relative z-10 text-2xl font-medium text-white/90 leading-relaxed">
              {desc}
            </p>

            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}
