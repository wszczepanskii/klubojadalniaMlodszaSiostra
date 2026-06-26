import { siteInfo } from '../data/content';
import PosterOfTheDay from './PosterOfTheDay';

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div
        className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-poster/20 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-20 h-64 w-64 rounded-full bg-moss/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 sm:px-6 lg:flex-row lg:items-end lg:gap-16 lg:pb-28">
        <div className="flex-1 lg:pb-8">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-700 bg-asphalt/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-dust">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-moss" aria-hidden="true" />
            Powiśle · ukryte podwórko
          </p>

          <h1
            id="hero-heading"
            className="font-display text-balance text-5xl font-semibold leading-[0.95] text-cream sm:text-6xl lg:text-7xl"
          >
            Klubojadalnia
            <span className="mt-2 block text-poster italic">Młodsza Siostra</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-dust sm:text-xl">
            {siteInfo.tagline} Ukryta klubojadalnia w sercu Powiśla — comfort food,
            kraftowe piwa, koncerty i ogródek, w którym wszyscy się tolerują.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={siteInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-poster px-8 py-4 font-mono text-sm uppercase tracking-widest text-cream shadow-lg shadow-poster/25 transition hover:bg-neon hover:shadow-poster/40"
            >
              Wpadnij do Siostry
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-stone-600 px-8 py-4 font-mono text-sm uppercase tracking-widest text-dust transition hover:border-poster hover:text-cream"
            >
              Zobacz menu
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-stone-800 pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
                Kuchnia
              </dt>
              <dd className="mt-1 text-sm text-cream">Azja × comfort</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
                Cena
              </dt>
              <dd className="mt-1 text-sm text-cream">{siteInfo.priceRange}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
                Vibe
              </dt>
              <dd className="mt-1 text-sm text-cream">Squat × anarchia × ciepło</dd>
            </div>
          </dl>
        </div>

        <PosterOfTheDay />
      </div>

      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
          scroll
        </span>
        <span className="block h-8 w-px animate-pulse bg-stone-600" />
      </div>
    </section>
  );
}
