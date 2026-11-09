import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/site';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/types';
import { scrollToId } from '../lib/storage';
import { Icon } from './ui';

/** Hero: headline, then the nurse-led tutorial front and center, then the next actions. */
export function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const v = t.video;
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-64 h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />
      <div className="container-x relative pb-16 pt-8 text-center sm:pt-14 lg:pb-24">
        <span className="eyebrow">{h.eyebrow}</span>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">{h.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-teal-700 sm:text-2xl">{h.subtitle}</p>

        <div id="video" className="mx-auto mt-8 max-w-4xl scroll-mt-28 sm:mt-10">
          <h2 id="video-title" className="sr-only">{v.title}</h2>
          <HeroPlayer />
          <p className="mx-auto mt-4 flex max-w-2xl items-start justify-center gap-2 text-left font-semibold text-accent-700 sm:items-center sm:text-center">
            <Icon.Alert className="mt-0.5 h-5 w-5 flex-none sm:mt-0" />{v.note}
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">{h.intro}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" className="btn-primary" onClick={() => scrollToId('steps')}><Icon.List />{h.ctaSteps}</button>
          <button type="button" className="btn-ghost" onClick={() => scrollToId('schedule')}><Icon.Arrow />{h.ctaSchedule}</button>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] font-semibold text-teal-800">
          {h.highlights.map((x) => (
            <li key={x} className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-teal-100 text-teal-700"><Icon.Check className="h-4 w-4" /></span>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HeroPlayer() {
  const { t, lang } = useLang();
  const v = t.video;
  // Spanish viewers can choose the English video until the Spanish one is added.
  const [override, setOverride] = useState<Lang | null>(null);
  useEffect(() => setOverride(null), [lang]);
  const playLang: Lang = override ?? lang;
  const source = siteConfig.videos[playLang];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => setStarted(false), [playLang]);
  const hasVideo = !!source.src;
  const autoStart = override !== null;

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-teal-900 shadow-lift ring-1 ring-teal-900/10">
      <div className="aspect-video w-full">
        {hasVideo && source.type === 'embed' && (
          <iframe key={playLang} src={source.src} title={v.playerTitle} className="h-full w-full" loading="lazy"
            allow="encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
        )}
        {hasVideo && source.type === 'mp4' && (
          <>
            <video key={playLang} ref={videoRef} className="h-full w-full bg-black object-cover" controls={started || autoStart} preload="metadata" playsInline
              poster={source.poster || undefined} aria-label={v.playerTitle} onPlay={() => setStarted(true)} autoPlay={autoStart}>
              <source src={source.src} type="video/mp4" />
              {source.captionsSrc && <track kind="captions" src={source.captionsSrc} srcLang={playLang} label={v.captions} default />}
            </video>
            {!started && !autoStart && (
              <button type="button" onClick={() => { setStarted(true); videoRef.current?.play().catch(() => {}); }}
                className="group absolute inset-0 grid place-items-center bg-teal-950/20 transition hover:bg-teal-950/30">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-accent-600 text-white shadow-lift ring-8 ring-white/30 transition group-hover:scale-105 sm:h-24 sm:w-24">
                  <Icon.Play className="ml-1 h-9 w-9 sm:h-11 sm:w-11" />
                </span>
                <span className="sr-only">{v.play}</span>
              </button>
            )}
          </>
        )}
        {!hasVideo && (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-teal-700 via-teal-800 to-teal-950 p-6 text-center text-white">
            <div aria-hidden="true" className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-teal-400/25 blur-2xl" />
            <div aria-hidden="true" className="absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-accent-500/25 blur-2xl" />
            <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">{v.versionLabel}</span>
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-8 ring-white/10" aria-hidden="true">
              <Icon.Play className="ml-1 h-8 w-8 text-white/90" />
            </span>
            <div className="relative max-w-md">
              <p className="text-lg font-extrabold sm:text-2xl">{v.placeholderTitle}</p>
              <p className="mt-2 hidden text-white/80 sm:block">{v.placeholderBody}</p>
            </div>
            {playLang !== 'en' && siteConfig.videos.en.src && (
              <button type="button" onClick={() => setOverride('en')} lang="es"
                className="relative rounded-full bg-white px-5 py-2.5 text-sm font-bold text-teal-900 hover:bg-teal-50">{v.showEnglish}</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
