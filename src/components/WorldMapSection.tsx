import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { mapPins } from "../data/caseStudies";

const GEO_URL = "/maps/countries-110m.json";

export default function WorldMapSection() {
  const [active, setActive] = useState<string | null>(mapPins[0]?.id ?? null);
  const activePin = mapPins.find((p) => p.id === active) ?? mapPins[0];

  return (
    <section id="map" className="bg-[#010233] px-5 py-20 text-white sm:px-10 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070a3a]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(91,141,239,0.25), transparent 70%)",
            }}
          />
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ scale: 165, center: [10, 10] }}
            width={800}
            height={420}
            className="relative z-10 h-auto w-full"
          >
            <Sphere
              id="sphere"
              fill="#010233"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={0.5}
            />
            <Graticule stroke="rgba(255,255,255,0.06)" strokeWidth={0.4} />
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#16194E"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth={0.4}
                    className="outline-none transition-[fill] duration-200 hover:fill-[#1f2466]"
                  />
                ))
              }
            </Geographies>
            {mapPins.map((pin) => {
              const isActive = pin.id === active;
              return (
                <Marker
                  key={pin.id}
                  coordinates={[pin.lng, pin.lat]}
                  onMouseEnter={() => setActive(pin.id)}
                  onClick={() => setActive(pin.id)}
                >
                  <g className="cursor-pointer">
                    <circle
                      r={isActive ? 10 : 7}
                      fill={`${pin.accent}33`}
                      stroke="none"
                    />
                    <circle
                      r={isActive ? 5 : 3.5}
                      fill={pin.accent}
                      stroke="#fff"
                      strokeWidth={1.5}
                    />
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
            Where we ship
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Clients across the globe
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            Illinois, Florida, Australia, Malaysia, Norway, and Rwanda — live
            products, not slide decks.
          </p>

          <ul className="mt-8 space-y-2">
            {mapPins.map((pin) => {
              const isActive = pin.id === active;
              return (
                <li key={pin.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(pin.id)}
                    onFocus={() => setActive(pin.id)}
                    onClick={() => setActive(pin.id)}
                    className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-white/25 bg-white/10"
                        : "border-transparent bg-transparent hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: pin.accent }}
                    />
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {pin.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-white/50">
                        {pin.detail}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {activePin ? (
            <p className="mt-6 text-sm text-white/45">
              Highlighted:{" "}
              <span className="text-white/80">{activePin.label}</span>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
