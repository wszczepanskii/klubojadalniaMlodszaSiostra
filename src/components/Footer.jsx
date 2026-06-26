import { hours, siteInfo } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontakt" className="border-t border-stone-800 bg-courtyard">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-poster">
              klubojadalnia
            </p>
            <p className="font-display text-3xl font-semibold text-cream">
              Młodsza Siostra
            </p>
            <p className="mt-4 text-sm leading-relaxed text-dust">
              Schowana klubojadalnia na Powiślu. Wpadnij na jedzenie, zostaw na
              koncert. Zamawiasz przy barze — i to jest w porządku.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Lokalizacja
            </h3>
            <address className="mt-4 space-y-1 not-italic">
              <p className="text-cream">{siteInfo.address}</p>
              <p className="text-dust">
                {siteInfo.postal} {siteInfo.district}
              </p>
              <a
                href={siteInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-mono text-sm text-poster transition hover:text-neon"
              >
                Otwórz w mapach →
              </a>
            </address>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-stone-500">
              Kontakt
            </h3>
            <p className="mt-4">
              <a
                href={siteInfo.phoneHref}
                className="font-mono text-cream transition hover:text-neon"
              >
                {siteInfo.phone}
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Godziny otwarcia
            </h3>
            <dl className="mt-4 space-y-2">
              {hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4 text-sm">
                  <dt className="text-dust">{row.days}</dt>
                  <dd className="font-mono text-cream">{row.time}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex gap-4">
              <a
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-700 px-4 py-2 font-mono text-xs uppercase tracking-widest text-dust transition hover:border-poster hover:text-neon"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={siteInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-700 px-4 py-2 font-mono text-xs uppercase tracking-widest text-dust transition hover:border-poster hover:text-neon"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
            © {year} {siteInfo.name}
          </p>
          <p className="font-mono text-[10px] text-stone-600">
            Powiśle · Warszawa · dog friendly 🐾
          </p>
        </div>
      </div>
    </footer>
  );
}
