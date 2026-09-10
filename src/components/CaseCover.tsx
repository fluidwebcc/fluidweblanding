/** Accent mesh cover — visual anchor until real product screenshots exist. */
export default function CaseCover({
  accent,
  name,
  className = "",
}: {
  accent: string;
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#0a0d3a] ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 15% 20%, ${accent}55 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 85% 75%, ${accent}33 0%, transparent 50%),
            linear-gradient(145deg, #16194E 0%, #010233 55%, #010233 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#010233] to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8">
        <div
          className="text-[11px] font-semibold tracking-[0.25em] uppercase"
          style={{ color: accent }}
        >
          Fluid Web
        </div>
        <div className="mt-2 truncate text-lg font-bold text-white/90 md:text-2xl">
          {name}
        </div>
      </div>
    </div>
  );
}
