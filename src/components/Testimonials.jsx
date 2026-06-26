import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section
      id="opinie"
      className="relative border-t border-stone-800 bg-asphalt py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-poster">
            03 / opinie
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-display text-4xl font-semibold text-cream sm:text-5xl"
          >
            Ludzie mówią
            <span className="block italic text-dust">(i mają rację — czasem)</span>
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="mb-5 break-inside-avoid rounded-sm border border-stone-700/60 bg-courtyard/50 p-6"
            >
              <div className="mb-3 flex gap-0.5 text-poster" aria-label="5 gwiazdek">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-display text-lg leading-relaxed text-cream">
                „{item.quote}"
              </p>
              <footer className="mt-4 flex items-center justify-between border-t border-stone-800 pt-4">
                <cite className="font-mono text-xs not-italic text-dust">{item.author}</cite>
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
                  {item.source}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
