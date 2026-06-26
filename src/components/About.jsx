import { vibes } from '../data/content';

export default function About() {
  return (
    <section
      id="o-nas"
      className="relative border-t border-stone-800 bg-asphalt py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-poster">
              01 / o nas
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-display text-balance text-4xl font-semibold text-cream sm:text-5xl"
            >
              Nie restauracja.
              <span className="block italic text-dust">Doświadczenie w podwórku.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-dust">
              <p>
                Młodsza Siostra to klubojadalnia wklejona w strukturę parkingu przy ulicy
                Dobrej — schowana, niespodziewana, niemożliwa do podrobienia. Stare garaże,
                chybocące stoliki, barwna cerata i architektura, która pamięta PRL.
              </p>
              <p>
                To miejsce na szybki obiad, wieczór przy kraftowym piwie albo koncert
                niezależnej sceny. Obsługa mówi do Ciebie „Ty", muzyka gra głośno (ale pasuje),
                a w ogródku siedzą ludzie, psy i studenci ASP.
              </p>
              <p className="border-l-2 border-poster pl-4 font-display text-lg italic text-cream">
                „Jakbyś był owinięty ciepłym kocem — krzesła, muzyka, ludzie, podwórko i
                jedzenie po prostu do siebie pasują."
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {vibes.map((item, i) => (
              <article
                key={item.title}
                className={`group rounded-sm border border-stone-700/80 bg-courtyard/60 p-6 transition hover:border-poster/40 hover:bg-courtyard ${
                  i === 0 ? 'sm:col-span-2 sm:max-w-md' : ''
                }`}
              >
                <span className="font-mono text-[10px] text-stone-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-cream group-hover:text-neon">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dust">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
