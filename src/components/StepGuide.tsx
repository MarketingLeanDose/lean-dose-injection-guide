import { useRef, useState, type ReactNode } from 'react';
import { siteConfig } from '../config/site';
import { useLang } from '../i18n/LanguageContext';
import { fmt } from '../i18n/types';
import { scrollToId } from '../lib/storage';
import { Callout, Icon, MediaSlot, Pending, SectionHeader } from './ui';
import {
  AdministerArt, ChartArt, CleanSiteArt, HandWashArt, HoldSyringeArt, InsertArt, PinchArt, RemoveArt, SharpsArt, SyringeAnatomyArt, SyringeCheckArt, VialArt,
} from './illustrations/Art';

export function StepGuide() {
  const { t } = useLang();
  const s = t.steps;
  const total = s.items.length;
  const [idx, setIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    setIdx(i);
    requestAnimationFrame(() => {
      const el = panelRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top < 80 || top > window.innerHeight * 0.6) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus({ preventScroll: true });
    });
  };

  return (
    <section id="steps" aria-labelledby="steps-title" className="section bg-gradient-to-b from-white via-teal-50/60 to-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="steps" eyebrow={s.eyebrow} title={s.title} lead={s.intro} />
          <button type="button" className="btn-ghost self-start md:self-auto" onClick={() => setShowAll((v) => !v)} aria-pressed={showAll}>
            <Icon.List />{showAll ? s.showOne : s.showAll}
          </button>
        </div>

        {!showAll && (
          <div className="mt-8">
            {/* Step navigation */}
            <div className="flex items-center justify-between text-sm font-bold text-teal-700">
              <span aria-live="polite">{fmt(s.progress, { n: idx + 1, total })}</span>
              <span>{s.items[idx].short}</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-teal-100" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={idx + 1} aria-label={fmt(s.progress, { n: idx + 1, total })}>
              <div className="h-full rounded-full bg-gradient-to-r from-teal-500 to-accent-500 transition-all duration-500" style={{ width: `${((idx + 1) / total) * 100}%` }} />
            </div>
            <ol className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" aria-label={s.title}>
              {s.items.map((it, i) => {
                const active = i === idx;
                const done = i < idx;
                return (
                  <li key={it.key} className="flex-none">
                    <button type="button" onClick={() => goTo(i)} aria-current={active ? 'step' : undefined}
                      className={`flex min-h-[48px] items-center gap-2 rounded-full px-4 text-sm font-bold transition ${
                        active ? 'bg-teal-800 text-white shadow-lift' : done ? 'bg-teal-100 text-teal-800' : 'bg-white text-teal-800 ring-1 ring-teal-200 hover:bg-teal-50'}`}>
                      <span className={`grid h-7 w-7 place-items-center rounded-full text-xs ${active ? 'bg-white text-teal-900' : done ? 'bg-teal-600 text-white' : 'bg-teal-50'}`}>
                        {done ? <Icon.Check className="h-4 w-4" /> : i + 1}
                      </span>
                      <span className="whitespace-nowrap">{it.short}</span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div ref={panelRef} tabIndex={-1} className="mt-6 scroll-mt-28 outline-none">
              <StepPanel index={idx} />
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button type="button" className="btn-ghost" onClick={() => goTo(idx - 1)} disabled={idx === 0}><Icon.ArrowL />{s.prev}</button>
              {idx < total - 1
                ? <button type="button" className="btn-teal" onClick={() => goTo(idx + 1)}>{s.next}<Icon.Arrow /></button>
                : <button type="button" className="btn-primary" onClick={() => scrollToId('aftercare')}>{s.finish}<Icon.Arrow /></button>}
            </div>
          </div>
        )}

        {showAll && (
          <div className="mt-8 space-y-8">
            {s.items.map((it, i) => <StepPanel key={it.key} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
}

function StepPanel({ index }: { index: number }) {
  const { t } = useLang();
  const s = t.steps;
  const step = s.items[index];

  let art: ReactNode = null;
  let extra: ReactNode = null;
  switch (step.key) {
    case 'wash': art = <HandWashArt className="w-full" />; break;
    case 'confirm': art = <ChartArt className="w-full" weekLabel={t.schedule.weekWord} />; break;
    case 'vial': art = <VialArt className="w-full" stopperLabel={s.syringeLabels.stopper} />; break;
    case 'clean': art = <CleanSiteArt className="w-full" />; break;
    case 'draw':
      extra = (
        <div className="mt-6 space-y-4">
          <figure className="card overflow-hidden p-3">
            <SyringeAnatomyArt className="w-full" labels={s.syringeLabels} title={Object.values(s.syringeLabels).join(', ')} />
            <figcaption className="px-2 pb-1 pt-3 text-sm text-slate-600">{s.syringeNote}</figcaption>
          </figure>
          <Pending pending placeholder={<></>}>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-amber-200">
              <p className="font-bold text-teal-900">{s.drawDetail.title}</p>
              <p className="mt-1 text-slate-600">{s.drawDetail.body}</p>
            </div>
          </Pending>
        </div>
      );
      break;
    case 'site': art = null; extra = <SiteRotation />; break;
    case 'inject': extra = <InjectionCards />; break;
  }

  const wide = step.key === 'site' || step.key === 'inject' || step.key === 'draw';

  return (
    <article aria-labelledby={`step-${step.key}`} className="card overflow-hidden p-6 sm:p-8">
      <div className={wide ? '' : 'grid items-center gap-8 md:grid-cols-[1fr_1.1fr]'}>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-accent-600">{s.stepWord} {index + 1}</p>
          <h3 id={`step-${step.key}`} className="mt-1 text-2xl font-extrabold sm:text-3xl">{step.title}</h3>
          <div className="mt-4 space-y-3 text-lg">
            {step.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {step.callout && <Callout>{step.callout}</Callout>}
        </div>
        {art && <div className="mx-auto w-full max-w-md">{art}</div>}
      </div>
      {extra}
    </article>
  );
}

/* ---------- Step 5: injection site map + rotation ---------- */
function SiteRotation() {
  const { t } = useLang();
  const site = t.steps.site;
  const [active, setActive] = useState(0);
  // Viewer's left = patient's right (front view).
  const spots = [
    { x: 122, y: 168 }, { x: 278, y: 168 }, { x: 134, y: 236 }, { x: 266, y: 236 },
  ];
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <figure className="rounded-3xl bg-teal-50 p-4">
        <svg viewBox="0 0 400 340" className="mx-auto w-full max-w-md" role="img" aria-label={site.diagramAlt}>
          <path d="M92 10 C 78 110, 70 220, 98 330 L 302 330 C 330 220, 322 110, 308 10 Z" fill="#F3D6C2" stroke="#DDAE90" strokeWidth="3" />
          <rect x="96" y="304" width="208" height="26" fill="#B3E4E0" />
          <ellipse cx="130" cy="202" rx="46" ry="74" fill="#47B4AD" fillOpacity="0.32" stroke="#187A74" strokeWidth="2" strokeDasharray="6 5" />
          <ellipse cx="270" cy="202" rx="46" ry="74" fill="#47B4AD" fillOpacity="0.32" stroke="#187A74" strokeWidth="2" strokeDasharray="6 5" />
          <circle cx="200" cy="190" r="46" fill="#F3D6C2" stroke="#F08533" strokeWidth="3" strokeDasharray="7 6" />
          <ellipse cx="200" cy="190" rx="5" ry="8" fill="#C9957A" />
          <text x="130" y="66" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0F3F3E">{site.yourRight}</text>
          <text x="270" y="66" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0F3F3E">{site.yourLeft}</text>
          {spots.map((p, i) => {
            const on = i === active;
            return (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={on ? 17 : 13} fill={on ? '#F08533' : '#FFFFFF'} stroke={on ? '#C45A12' : '#187A74'} strokeWidth="3" />
                <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill={on ? '#FFFFFF' : '#14625E'}>{i + 1}</text>
              </g>
            );
          })}
        </svg>
        <figcaption className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-teal-900">
          <span className="flex items-center gap-2"><span className="h-4 w-6 rounded-full border-2 border-dashed border-teal-600 bg-teal-400/30" />{site.zone}</span>
          <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-dashed border-accent-500" />{site.avoid}</span>
        </figcaption>
      </figure>

      <div>
        <h4 className="text-xl font-extrabold">{site.rotationTitle}</h4>
        <p className="mt-1 text-sm text-slate-500">{site.rotationHint}</p>
        <ul className="mt-4 space-y-2">
          {site.rotation.map((r, i) => (
            <li key={r.week}>
              <button type="button" onClick={() => setActive(i)} aria-pressed={i === active}
                className={`flex min-h-[52px] w-full items-center gap-3 rounded-2xl px-4 text-left transition ${i === active ? 'bg-teal-800 text-white shadow-lift' : 'bg-white ring-1 ring-teal-200 hover:bg-teal-50'}`}>
                <span className={`grid h-8 w-8 flex-none place-items-center rounded-full text-sm font-extrabold ${i === active ? 'bg-accent-500 text-white' : 'bg-teal-50 text-teal-700'}`}>{i + 1}</span>
                <span className="font-bold">{r.week}</span>
                <span className={i === active ? 'text-white/85' : 'text-slate-600'}>— {r.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <Callout tone="teal">{site.rotationNote}</Callout>
      </div>
    </div>
  );
}

/* ---------- Step 7: seven injection cards ---------- */
function InjectionCards() {
  const { t, lang } = useLang();
  const inj = t.inject;
  const artFor = (visual: string): ReactNode => {
    switch (visual) {
      case 'inject-check': return <SyringeCheckArt className="w-full" />;
      case 'inject-hold': return <HoldSyringeArt className="w-full" />;
      case 'inject-pinch': return <PinchArt className="w-full" labels={inj.demo} />;
      case 'inject-insert': return <InsertArt className="w-full" labels={inj.demo} />;
      case 'inject-administer': return <AdministerArt className="w-full" labels={inj.demo} />;
      case 'inject-remove': return <RemoveArt className="w-full" labels={inj.demo} />;
      case 'inject-dispose': return <SharpsArt className="w-full" />;
      default: return undefined; // technique visuals: approved media only
    }
  };

  return (
    <div className="mt-6">
      <ol className="grid gap-5 md:grid-cols-2">
        {inj.cards.map((c) => {
          const link = siteConfig.stepVideoLinks[c.num]?.[lang];
          const body = (
            <div className="flex h-full flex-col">
              <MediaSlot visual={c.visual} art={artFor(c.visual)} alt={c.title} />
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-teal-800 text-sm font-extrabold text-white">{c.num}</span>
                <h4 className="text-xl font-extrabold leading-snug">{c.title}</h4>
              </div>
              <div className="mt-3 space-y-2 text-[17px]">
                {c.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {c.callout && <Callout>{c.callout}</Callout>}
              <div className="mt-auto pt-4">
                {link
                  ? <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-accent-700 hover:underline"><Icon.Play className="h-4 w-4" />{inj.watchStep}</a>
                  : <button type="button" onClick={() => scrollToId('video')} className="inline-flex items-center gap-2 font-bold text-accent-700 hover:underline"><Icon.Play className="h-4 w-4" />{inj.watchStep}</button>}
              </div>
            </div>
          );
          return (
            <li key={c.num} className="rounded-3xl bg-teal-50/60 p-4 ring-1 ring-teal-100 sm:p-5">
              {c.pending ? (
                <Pending pending placeholder={
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-teal-800 text-sm font-extrabold text-white">{c.num}</span>
                      <h4 className="text-xl font-extrabold leading-snug">{c.title}</h4>
                    </div>
                    <p className="mt-3 text-slate-600">{t.review.placeholderBody}</p>
                    <div className="mt-auto pt-4">
                      <button type="button" onClick={() => scrollToId('video')} className="inline-flex items-center gap-2 font-bold text-accent-700 hover:underline"><Icon.Play className="h-4 w-4" />{inj.watchStep}</button>
                    </div>
                  </div>
                }>{body}</Pending>
              ) : body}
            </li>
          );
        })}
      </ol>
      <div className="mt-6 flex gap-3 rounded-3xl bg-teal-900 p-5 text-white sm:p-6">
        <Icon.Heart className="mt-1 h-6 w-6 flex-none text-accent-400" />
        <p className="text-lg font-semibold">{inj.reminder}</p>
      </div>
    </div>
  );
}
