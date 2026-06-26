import { siteInfo } from '../data/content';

function BowlIllustration() {
  return (
    <svg
      viewBox="0 0 120 100"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="60" cy="78" rx="48" ry="10" fill="#ea580c" opacity="0.15" />
      <path
        d="M18 52 C18 72 38 82 60 82 C82 82 102 72 102 52 L96 48 C96 66 78 74 60 74 C42 74 24 66 24 48 Z"
        fill="#292524"
        stroke="#57534e"
        strokeWidth="1.5"
      />
      <path
        d="M30 48 C30 38 44 28 60 28 C76 28 90 38 90 48"
        stroke="#ea580c"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="48" cy="54" r="5" fill="#65a30d" opacity="0.8" />
      <circle cx="62" cy="50" r="4" fill="#f97316" opacity="0.9" />
      <circle cx="72" cy="56" r="4.5" fill="#be185d" opacity="0.75" />
      <path
        d="M52 22 C54 14 58 8 60 6 C62 8 66 14 68 22"
        stroke="#d6d3d1"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M60 6 C60 2 58 0 56 0"
        stroke="#d6d3d1"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M64 0 C62 0 60 2 60 6"
        stroke="#d6d3d1"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

export default function PosterOfTheDay() {
  const today = new Date();
  const dayStamp = today.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="group relative w-full max-w-md pb-2 pl-1 lg:max-w-lg lg:flex-shrink-0">
      {/* shadow stack — taped poster effect */}
      <div
        className="absolute inset-0 translate-x-2 translate-y-3 rotate-3 rounded-sm bg-stone-900/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -translate-x-1 translate-y-1.5 -rotate-1 rounded-sm bg-poster/10"
        aria-hidden="true"
      />

      <article
        className="poster-card relative rotate-2 overflow-hidden rounded-sm border border-stone-600/80 shadow-2xl shadow-black/60 transition duration-500 hover:rotate-0"
        aria-label="Plakat dnia — Okonomiyaki z boczniakiem"
      >
        {/* background layers */}
        <div className="poster-halftone absolute inset-0" aria-hidden="true" />
        <div className="poster-glow absolute inset-0" aria-hidden="true" />
        <div className="grain absolute inset-0 opacity-40" aria-hidden="true" />

        {/* diagonal accent stripe */}
        <div
          className="absolute -right-8 top-0 h-full w-24 skew-x-[-12deg] bg-poster/10"
          aria-hidden="true"
        />

        <div className="relative flex aspect-[4/5] flex-col">
          {/* header */}
          <header className="flex items-start justify-between gap-3 p-5 pb-0 sm:p-6 sm:pb-0">
            <div>
              <p className="inline-block border border-poster/40 bg-poster/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.35em] text-neon">
                plakat dnia
              </p>
              <p className="mt-3 font-display text-[2.6rem] font-semibold leading-[0.88] text-cream sm:text-5xl">
                Jedzenie.
                <br />
                <span className="text-dust">Piwo.</span>
                <br />
                <span className="text-berry italic">Koncerty.</span>
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="rounded-full border border-moss/40 bg-moss/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-moss">
                otwarte
              </span>
              <time
                dateTime={today.toISOString().split('T')[0]}
                className="font-mono text-[10px] text-stone-500"
              >
                {dayStamp}
              </time>
            </div>
          </header>

          {/* featured dish — fills the empty middle */}
          <div className="relative mx-5 my-5 flex flex-1 flex-col justify-center sm:mx-6">
            <div className="relative overflow-hidden rounded-sm border border-stone-600/60 bg-courtyard/70 p-4 backdrop-blur-sm">
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-poster/20 blur-2xl"
                aria-hidden="true"
              />

              <div className="flex items-center gap-4">
                <div className="h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                  <BowlIllustration />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-poster">
                    dziś polecamy
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-cream sm:text-xl">
                    Okonomiyaki
                    <span className="block text-sm font-normal italic text-dust">
                      z boczniakiem
                    </span>
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-moss/30 bg-moss/10 px-2 py-0.5 font-mono text-[9px] uppercase text-moss">
                      wege
                    </span>
                    <span className="font-mono text-sm font-bold text-neon">40 zł</span>
                  </div>
                </div>
              </div>

              {/* sound-wave decoration */}
              <div
                className="mt-4 flex items-end justify-center gap-1 border-t border-dashed border-stone-700 pt-3"
                aria-hidden="true"
              >
                {[3, 5, 8, 12, 8, 14, 10, 6, 9, 5, 7, 4].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-poster/50"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            {/* quick picks row */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: 'Patathai', emoji: '🍜' },
                { label: 'Kraft IPA', emoji: '🍺' },
                { label: 'Ogródek', emoji: '🌿' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-sm border border-stone-700/50 bg-asphalt/50 px-2 py-2 text-center"
                >
                  <span className="text-sm" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <p className="mt-0.5 font-mono text-[8px] uppercase tracking-wide text-stone-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* footer ticket stub */}
          <footer className="mt-auto border-t border-dashed border-stone-600 bg-asphalt/40 px-5 py-4 sm:px-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-stone-500">
                  znajdź nas
                </p>
                <p className="mt-1 font-mono text-xs leading-relaxed text-cream">
                  {siteInfo.address}
                  <br />
                  <span className="text-dust">{siteInfo.district}</span>
                </p>
              </div>

              {/* barcode decoration */}
              <div className="flex shrink-0 gap-px" aria-hidden="true">
                {[2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2].map((w, i) => (
                  <span
                    key={i}
                    className="bg-stone-500"
                    style={{ width: `${w}px`, height: '28px' }}
                  />
                ))}
              </div>
            </div>

            <p className="mt-3 font-mono text-[8px] uppercase leading-relaxed tracking-[0.15em] text-stone-500">
              dog friendly · wege · ogródek · zamawiasz przy barze
            </p>
          </footer>
        </div>

        {/* tape strips */}
        <div
          className="absolute -left-3 top-8 h-8 w-14 -rotate-45 bg-stone-400/20 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div
          className="absolute -right-3 bottom-16 h-8 w-14 rotate-45 bg-stone-400/20 backdrop-blur-sm"
          aria-hidden="true"
        />
      </article>

      <div
        className="absolute -right-1 top-[34%] z-20 rotate-12 rounded-sm border border-stone-500 bg-stone-800 px-2.5 py-3 font-mono text-[8px] uppercase leading-tight tracking-widest text-dust shadow-md"
        aria-hidden="true"
      >
        ukryte
        <br />
        podwórko
      </div>
    </div>
  );
}
