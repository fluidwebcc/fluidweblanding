import logo from "../assets/fluidlogo.png";

export default function footer(){

return(
    <div className="flex flex-col bg-[#010233] p-10 items-center content-center w-full">
        <div className="w-[90%] max-w-8xl flex flex-col py-7 px-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        <div className="flex flex-row">
            <div className="flex flex-col content-between w-[50%] items-start">
            <div className="h-[50%]">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>
            <div className="h-[50%] flex flex-col-reverse">            
                <h4 className="text-white text-md">Copyright © 2026. All Rights Reserved.</h4>
            </div>
            </div>

            <div className="flex flex-row-reverse w-[50%] gap-20">
  
  <div className="flex flex-col mr-5 gap-2">
    <h3 className="text-white font-bold text-xl mb-1">Socials</h3>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">Instagram</a>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">Linkedin</a>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">Twitter</a>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">Facebook</a>
  </div>

  <div className="flex flex-col gap-2">
    <h3 className="text-white font-bold text-xl mb-1">Navigation</h3>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">Home</a>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">Case Studies</a>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">Contact</a>
    <a href="#" className="text-white/60 hover:text-white transition-colors text-l">FAQs</a>
  </div>

</div>
        </div>
        </div>
    </div>
);
}