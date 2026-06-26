import { menuHighlights, siteInfo } from '../data/content';

const tagColors = {
  wege: 'border-moss/40 text-moss bg-moss/10',
  wegańskie: 'border-moss/40 text-moss bg-moss/10',
  klasyk: 'border-poster/40 text-neon bg-poster/10',
  azja: 'border-berry/40 text-berry bg-berry/10',
  ostre: 'border-red-500/40 text-red-400 bg-red-500/10',
  nowość: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
  comfort: 'border-dust/40 text-dust bg-stone-700/30',
  eksperyment: 'border-purple-400/40 text-purple-300 bg-purple-400/10',
  popularne: 'border-poster/40 text-neon bg-poster/10',
};

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-20 sm:py-28"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-poster">
              02 / menu
            </p>
            <h2
              id="menu-heading"
              className="mt-4 font-display text-4xl font-semibold text-cream sm:text-5xl"
            >
              Comfort food
              <span className="block text-poster italic">bez solniczki</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-xs leading-relaxed text-stone-500">
            {siteInfo.orderNote}
            <br />
            🌿 wege · 🌿🌿 wegańskie w karcie
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuHighlights.map((dish, i) => (
            <article
              key={dish.name}
              className={`group relative flex flex-col rounded-sm border border-stone-800 bg-asphalt/50 p-6 transition hover:border-stone-600 hover:bg-asphalt ${
                i === 0 ? 'lg:row-span-1' : ''
              }`}
            >
              {dish.badge && (
                <span className="absolute -right-2 -top-2 rotate-3 rounded-sm bg-poster px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cream">
                  {dish.badge}
                </span>
              )}

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold leading-snug text-cream group-hover:text-neon">
                  {dish.name}
                </h3>
                <span className="shrink-0 font-mono text-sm text-poster">{dish.price}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {dish.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      tagColors[tag] || 'border-stone-600 text-stone-400'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-dust">
                {dish.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-sm border border-dashed border-stone-700 bg-courtyard/40 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl text-cream">Piwo, wino & kawa</p>
            <p className="mt-2 max-w-md text-sm text-dust">
              Kraftowe piwa butelkowe, whisky sour, mrożona kawa na owsianym i
              bezpłatna woda przy barze — rzeczy, które nie zdarzają się często.
            </p>
          </div>
          <a
            href={siteInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-stone-600 px-6 py-3 font-mono text-xs uppercase tracking-widest text-dust transition hover:border-poster hover:text-neon"
          >
            Pełna karta na miejscu
          </a>
        </div>
      </div>
    </section>
  );
}
