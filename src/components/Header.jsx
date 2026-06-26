import { useState, useEffect } from 'react';
import { navLinks, siteInfo } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-stone-800/80 bg-courtyard/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="group flex flex-col leading-none"
          aria-label={`${siteInfo.name} — strona główna`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-poster transition-colors group-hover:text-neon">
            klubojadalnia
          </span>
          <span className="font-display text-lg font-semibold text-cream sm:text-xl">
            Młodsza Siostra
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-dust transition-colors hover:text-neon"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-poster/60 bg-poster/10 px-5 py-2 font-mono text-xs uppercase tracking-widest text-neon transition hover:bg-poster hover:text-cream"
          >
            Znajdź nas
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-courtyard/98 backdrop-blur-lg transition-opacity md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl text-cream transition hover:text-neon"
          >
            {link.label}
          </a>
        ))}
        <a
          href={siteInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full border border-poster bg-poster px-8 py-3 font-mono text-sm uppercase tracking-widest text-cream"
        >
          Znajdź nas
        </a>
      </div>
    </header>
  );
}
