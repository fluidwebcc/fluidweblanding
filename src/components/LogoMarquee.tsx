import { portfolioProducts } from "../data/products";

export default function LogoMarquee() {
  const doubled = [...portfolioProducts, ...portfolioProducts];

  return (
    <section className="w-full overflow-hidden py-10 md:py-14">
      <p className="mb-6 px-5 text-center text-xs font-medium tracking-[0.18em] text-white/35 uppercase sm:px-10">
        Products we&apos;ve built and led
      </p>
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
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
      </div>
    </section>
  );
}
