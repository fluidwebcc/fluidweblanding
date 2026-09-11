import { portfolioProducts } from "../data/products";

export default function LogoMarquee() {
  const doubled = [...portfolioProducts, ...portfolioProducts];

  return (
    <section className="w-full overflow-hidden bg-[#010233] py-10 md:py-14">
      <p className="mb-6 px-5 text-center text-xs font-medium tracking-[0.18em] text-white/35 uppercase sm:px-10">
        Products we&apos;ve built and led
      </p>
      <div className="relative">
        <div className="flex w-max animate-go-left items-center gap-10 md:gap-16">
          {doubled.map((product, i) => (
            <img
              key={`${product.name}-${i}`}
              src={product.logo}
              alt={product.name}
              title={product.name}
              loading="lazy"
              className="h-10 w-auto shrink-0 rounded-lg object-contain opacity-85 transition hover:opacity-100 md:h-14"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#010233] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#010233] to-transparent md:w-32" />
      </div>
    </section>
  );
}
