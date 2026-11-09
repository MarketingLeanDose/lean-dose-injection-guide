import { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/types';
import { scrollToId } from '../lib/storage';
import { Icon } from './ui';

export function Logo({ onDark = false }: { onDark?: boolean }) {
  const src = onDark ? siteConfig.logoSrcOnDark ?? siteConfig.logoSrc : siteConfig.logoSrc;
  if (src) return <img src={src} alt="Lean Dose" className="h-9 w-auto" />;
  // Text stand-in until the official logo file is added (siteConfig.logoSrc). Not a logo recreation.
  return <span className={`text-xl font-extrabold tracking-tight ${onDark ? 'text-white' : 'text-teal-900'}`}>Lean Dose</span>;
}

export function LangToggle({ compact = false, onDark = false }: { compact?: boolean; onDark?: boolean }) {
  const { lang, setLang, t } = useLang();
  const opts: { v: Lang; label: string; full: string }[] = [
    { v: 'en', label: 'EN', full: t.ui.english },
    { v: 'es', label: 'ES', full: t.ui.spanish },
  ];
  return (
    <div role="group" aria-label={t.ui.language}
      className={`inline-flex rounded-full p-1 ${onDark ? 'bg-white/10 ring-1 ring-white/20' : 'bg-teal-50 ring-1 ring-teal-200'}`}>
      {opts.map((o) => {
        const active = lang === o.v;
        return (
          <button key={o.v} type="button" onClick={() => setLang(o.v)} aria-pressed={active} lang={o.v}
            className={`min-h-[40px] min-w-[48px] rounded-full px-3 text-sm font-bold transition ${
              active ? (onDark ? 'bg-white text-teal-900' : 'bg-teal-800 text-white shadow') : (onDark ? 'text-white/80 hover:text-white' : 'text-teal-800 hover:bg-white')}`}>
            <span aria-hidden="true">{o.label}</span>
            <span className="sr-only">{o.full}</span>
            {!compact && <span className="ml-1 hidden font-semibold sm:inline" aria-hidden="true">· {o.full}</span>}
          </button>
        );
      })}
    </div>
  );
}

export function ReviewBanner() {
  const { t } = useLang();
  if (!siteConfig.showPendingClinical) return null;
  return (
    <div className="bg-amber-100 px-4 py-2 text-center text-sm font-semibold text-amber-900">{t.review.banner}</div>
  );
}

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => { setOpen(false); scrollToId(id); };

  return (
    <header className={`sticky top-0 z-40 border-b transition ${scrolled ? 'border-teal-100 bg-white/90 shadow-sm backdrop-blur' : 'border-transparent bg-white/70 backdrop-blur'}`}>
      <div className="container-x flex h-[72px] items-center justify-between gap-3">
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {t.nav.map((n) => (
              <li key={n.id}>
                <button type="button" onClick={() => go(n.id)} className="rounded-full px-3 py-2 text-[15px] font-semibold text-teal-800 hover:bg-teal-50">{n.label}</button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle compact />
          <button type="button" onClick={() => go('support')} className="btn-primary hidden !min-h-[44px] !px-5 !py-2 text-sm md:inline-flex">{t.ui.contact}</button>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-teal-900 ring-1 ring-teal-200 hover:bg-teal-50 xl:hidden">
            {open ? <Icon.X /> : <Icon.Menu />}
            <span className="sr-only">{open ? t.ui.closeMenu : t.ui.menu}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-teal-100 bg-white xl:hidden">
          <ul className="container-x grid grid-cols-2 gap-2 py-4">
            {t.nav.map((n) => (
              <li key={n.id}>
                <button type="button" onClick={() => go(n.id)} className="w-full rounded-2xl bg-teal-50 px-4 py-3 text-left font-semibold text-teal-900 hover:bg-teal-100">{n.label}</button>
              </li>
            ))}
            <li className="col-span-2">
              <button type="button" onClick={() => go('support')} className="btn-primary w-full">{t.ui.contact}</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
