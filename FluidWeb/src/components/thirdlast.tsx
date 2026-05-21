import { useState } from "react";

const reviews = [
  { name: "Louise Hamilton", text: "They did amazing work, absolutely it was fun working with them.", rating: 4 },
  { name: "James Carter",    text: "Outstanding team, delivered on time and exceeded expectations.",  rating: 5 },
  { name: "Sofia Reyes",     text: "Super professional and creative. Will definitely work again.",    rating: 4 },
  { name: "Ahmed Khan",      text: "Great communication throughout the whole project. Loved it.",     rating: 5 },
  { name: "Nina Patel",      text: "They turned our rough idea into something truly beautiful.",      rating: 5 },
  { name: "Tom Rivera",      text: "Smooth process from start to finish. Highly recommend them.",     rating: 4 },
];

const logos = ["Webflow", "Coinbase", "GitHub", "HubSpot", "Stripe", "Notion", "Figma", "Linear"];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "text-amber-400 text-3xl" : "text-gray-700 text-3xl"}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ name, text, rating }: { name: string; text: string; rating: number }) {
  return (
    <div className="shrink-0 w-125 rounded-3xl p-10 flex flex-col gap-8 bg-white/5 border border-white/10">
      <p className="text-white text-xl leading-relaxed">{text}</p>
      <div className="flex items-center justify-between">
        <Stars rating={rating} />
        <span className="text-white/50 text-lg italic">{name}</span>
      </div>
    </div>
  );
}

function ReviewsMarquee() {
  const [paused, setPaused] = useState(false);
  const doubled = [...reviews, ...reviews];

  return (
    <div className="w-full overflow-hidden mt-12">
      <div
        className="flex gap-8 w-max py-2 animate-go-right"
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </div>
  );
}

function LogoMarquee() {
  const [paused, setPaused] = useState(false);
  const doubled = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 mt-4">
      <div
        className="flex gap-24 w-max animate-go-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {doubled.map((name, i) => (
          <span key={i} className="text-white/40 text-4xl font-bold whitespace-nowrap hover:text-white/80 transition-colors cursor-default select-none">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function thirdsection() {
  return (
    <>
      <div className="bg-[#010233] md:h-screen">
        <div className="flex flex-col-reverse justify-center min-h-2/5">
          <h1 className="text-center text-6xl mt-40 text-white font-bold">
            Get Your Dream Applications<br />Go Global, Instantly
          </h1>
        </div>
        <div className="min-h-3/5 py-18 px-12 flex flex-col align-middle justify-center items-center
                        md:px-33 md:flex-row">
          <div className="flex flex-col px-8 py-6.5 md:mr-6 rounded backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
            <h1 className="text-white font-semibold text-3xl text-center
                            md:text-left md:text-4xl">
              Ready To Launch? Get in contact with our team & get best advice !
            </h1>
            <span className="rounded-4xl text-center mt-8 flex flex-row w-fit px-3 py-1 text-white font-medium backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
              Book A Consultancy Meeting
            </span>
          </div>
          <div className="flex flex-col mt-10 px-8 py-6.5 rounded backdrop-blur-md bg-white/10 border border-white/20 shadow-lg
                          md:px-8 md:py-6 md:mt-0">
            <h1 className="text-white font-semibold text-center text-2xl
                            md:text-3xl md:text-left">Our Past Projects {">_"}</h1>
            <h1 className="text-white font-semibold text-xl text-center
                            md:text-left">
              See case studies, plans, executions, results and client review
            </h1>
            <span className="rounded-4xl mt-6 flex flex-row w-fit px-3 py-1 text-white font-medium backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
              Case Studies
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-24 items-center bg-[#010233]">
        <h1 className="text-white font-semibold text-center text-5xl md:text-6xl">Client Reviews</h1>
        <ReviewsMarquee />
        <LogoMarquee />
      </div>
    </>
  );
}