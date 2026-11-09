import { siteConfig } from '../config/site';
import { dosingClinical, monthOf, protocols, type DosePlan, type DoseRow, type Medication } from '../content/dosing';
import { useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { fmt } from '../i18n/types';
import { Callout, Icon, PendingBadge } from './ui';

const MEDS: Medication[] = ['semaglutide', 'tirzepatide'];

export const showDosingTools = !dosingClinical.pending || siteConfig.showPendingClinical;

export function visiblePlans(med: Medication): DosePlan[] {
  return protocols[med].filter((p) => !p.wip || siteConfig.showPendingClinical);
}

const range = (r: DoseRow) => (r.weeks[0] === r.weeks[1] ? `${r.weeks[0]}` : `${r.weeks[0]}–${r.weeks[1]}`);

function MedToggle({ med, onChange, label }: { med: Medication; onChange: (m: Medication) => void; label: string }) {
  const { t } = useLang();
  return (
    <div role="group" aria-label={label} className="inline-flex w-full rounded-full bg-teal-50 p-1 ring-1 ring-teal-200 sm:w-auto">
      {MEDS.map((m) => (
        <button key={m} type="button" aria-pressed={med === m} onClick={() => onChange(m)}
          className={`min-h-[48px] flex-1 rounded-full px-5 font-bold transition sm:flex-none ${med === m ? 'bg-teal-800 text-white shadow' : 'text-teal-800 hover:bg-white'}`}>
          {t.finder.meds[m]}
        </button>
      ))}
    </div>
  );
}

export function DoseFinder({ med, setMed, start, setStart }: {
  med: Medication; setMed: (m: Medication) => void; start: string | null; setStart: (s: string | null) => void;
}) {
  const { t } = useLang();
  const f = t.finder;
  const plans = visiblePlans(med);
  const plan = plans.find((p) => p.startMg === start) ?? null;

  return (
    <div id="my-schedule" className="card scroll-mt-28 overflow-hidden">
      <div className="bg-gradient-to-br from-teal-800 to-teal-950 p-6 text-white sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">{f.eyebrow}</span>
          {dosingClinical.pending && siteConfig.showPendingClinical && <PendingBadge />}
        </div>
        <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">{f.title}</h3>
        <p className="mt-2 max-w-2xl text-white/85">{f.intro}</p>
      </div>

      <div className="space-y-6 p-6 sm:p-8">
        <div>
          <p className="mb-2 font-bold text-teal-900"><span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-accent-600 text-sm text-white">1</span>{f.medLabel}</p>
          <MedToggle med={med} label={f.medLabel} onChange={(m) => { setMed(m); setStart(null); }} />
        </div>

        <div>
          <p className="font-bold text-teal-900"><span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-accent-600 text-sm text-white">2</span>{f.doseLabel}</p>
          <p className="mb-3 mt-1 text-sm text-slate-500">{f.doseHint}</p>
          <div role="group" aria-label={f.doseLabel} className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {plans.map((p) => {
              const on = p.startMg === start;
              return (
                <button key={p.startMg} type="button" aria-pressed={on} onClick={() => setStart(p.startMg)}
                  className={`relative min-h-[56px] rounded-2xl px-2 text-lg font-extrabold transition ${on ? 'bg-accent-600 text-white shadow-lift' : 'bg-white text-teal-900 ring-1 ring-teal-200 hover:bg-teal-50'}`}>
                  {p.startMg} <span className="text-sm font-bold">mg</span>
                  {p.wip && <span className="absolute -right-1 -top-2 rounded-full bg-amber-300 px-1.5 text-[10px] font-bold text-amber-900">WIP</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div aria-live="polite">
          {plan ? <PlanResult med={med} plan={plan} /> : (
            <div className="rounded-2xl border-2 border-dashed border-teal-200 bg-teal-50/60 p-6 text-center font-semibold text-teal-700">{f.empty}</div>
          )}
        </div>

        <p className="text-sm text-slate-500">{f.syringeNote} {f.privacy}</p>
      </div>
    </div>
  );
}

function PlanResult({ med, plan }: { med: Medication; plan: DosePlan }) {
  const { t } = useLang();
  const f = t.finder;
  const twoVials = !!plan.vials[2];

  const notes: string[] = [];
  plan.rows.forEach((r, i) => {
    const prev = plan.rows[i - 1];
    if (prev && prev.vial !== r.vial) {
      const label = plan.vials[r.vial] ?? '';
      notes.push(label === plan.vials[prev.vial]
        ? fmt(f.sameVialNote, { week: r.weeks[0], n: r.vial })
        : fmt(f.switchNote, { week: r.weeks[0], n: r.vial, label, dose: r.doseMg }));
    }
    if (r.split) notes.push(fmt(f.splitNote, { week: range(r), total: r.units, count: r.split.count, each: r.split.each }));
  });

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="text-xl font-extrabold">{fmt(f.resultTitle, { med: f.meds[med], dose: plan.startMg })}</h4>
        {plan.wip && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 ring-1 ring-amber-300">{f.wip}</span>}
      </div>

      <ol className="mt-4 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((m) => {
          const rows = plan.rows.filter((r) => monthOf(r.weeks[0]) === m);
          return (
            <li key={m} className="rounded-3xl bg-teal-50/80 p-5 ring-1 ring-teal-100">
              <p className="text-sm font-extrabold uppercase tracking-wider text-teal-600">{f.monthWord} {m}</p>
              <div className="mt-2 divide-y divide-teal-200/70">
                {rows.map((r) => (
                  <div key={r.weeks[0]} className="py-3 first:pt-1 last:pb-0">
                    <div className="flex items-center justify-between gap-2 text-sm font-semibold text-slate-500">
                      <span>{r.weeks[0] === r.weeks[1] ? fmt(f.week, { n: r.weeks[0] }) : fmt(f.weeks, { range: range(r) })}</span>
                      {twoVials && <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${r.vial === 2 ? 'bg-accent-100 text-accent-700' : 'bg-white text-teal-700'}`}>{fmt(f.vialTag, { n: r.vial })}</span>}
                    </div>
                    <p className="mt-1 flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-teal-900">{r.units}</span>
                      <span className="font-bold text-teal-800">{f.unitsWord}</span>
                    </p>
                    <p className="text-[15px] text-slate-600">{r.split ? `${r.split.count} × ${r.split.each} ${f.unitsWord}` : f.perWeek} · <strong className="text-teal-900">{r.doseMg} mg</strong></p>
                  </div>
                ))}
              </div>
            </li>
          );
        })}
      </ol>

      <DoseVideo med={med} plan={plan} />

      {twoVials && (
        <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-teal-100">
          <p className="font-bold text-teal-900">{f.vialsTitle}</p>
          <ul className="mt-1 text-[15px] text-slate-600">
            {[1, 2].map((n) => <li key={n}>{fmt(f.vialLine, { n, label: plan.vials[n as 1 | 2] ?? '' })}</li>)}
          </ul>
        </div>
      )}
      {notes.map((n, i) => <Callout key={i}>{n}</Callout>)}

      <div className="mt-4 flex gap-3 rounded-2xl border border-teal-200 bg-white p-4">
        <Icon.Shield className="mt-0.5 h-6 w-6 flex-none text-teal-600" />
        <div><p className="font-bold text-teal-900">{f.verifyTitle}</p><p className="text-[15px] text-slate-600">{t.finder.verify}</p></div>
      </div>
    </div>
  );
}

/** Personalized video for the selected medication + starting dose (placeholder until a URL is set). */
function DoseVideo({ med, plan }: { med: Medication; plan: DosePlan }) {
  const { t, lang } = useLang();
  const f = t.finder;
  const key = `${med}-${plan.startMg}`;
  const source = siteConfig.doseVideos[key]?.[lang];
  const title = fmt(f.videoTitle, { med: f.meds[med], dose: plan.startMg });
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="mx-auto mt-6 max-w-3xl">
      <p className="mb-3 flex items-center gap-2 text-lg font-extrabold text-teal-900"><Icon.Play className="h-5 w-5 text-accent-600" />{title}</p>
      <div className="relative overflow-hidden rounded-3xl bg-teal-900 shadow-soft">
        <div className="aspect-video w-full">
          {source?.src && source.type === 'embed' && (
            <iframe key={key + lang} src={source.src} title={title} className="h-full w-full" loading="lazy" allow="encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
          )}
          {source?.src && source.type === 'mp4' && (
            <>
              <video key={key + lang} ref={ref} className="h-full w-full bg-black" controls={started} preload="metadata" playsInline
                poster={source.poster || undefined} aria-label={title} onPlay={() => setStarted(true)}>
                <source src={source.src} type="video/mp4" />
                {source.captionsSrc && <track kind="captions" src={source.captionsSrc} srcLang={lang} label={t.video.captions} default />}
              </video>
              {!started && (
                <button type="button" onClick={() => { setStarted(true); ref.current?.play().catch(() => {}); }}
                  className="absolute inset-0 grid place-items-center bg-teal-950/30 hover:bg-teal-950/40">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-600 text-white shadow-lift ring-8 ring-white/25"><Icon.Play className="ml-1 h-8 w-8" /></span>
                  <span className="sr-only">{f.videoPlay}</span>
                </button>
              )}
            </>
          )}
          {!source?.src && (
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-950 p-5 text-center text-white">
              <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">{f.meds[med]} · {plan.startMg} mg</span>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 ring-8 ring-white/10" aria-hidden="true"><Icon.Play className="ml-1 h-7 w-7 text-white/90" /></span>
              <p className="text-base font-extrabold sm:text-xl">{f.videoSoon}</p>
              <p className="hidden max-w-md text-sm text-white/80 sm:block">{f.videoSoonBody}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
