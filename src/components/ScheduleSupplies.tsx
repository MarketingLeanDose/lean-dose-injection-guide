import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import type { Medication } from '../content/dosing';
import { DoseFinder, showDosingTools } from './DosingFinder';
import { Icon, SectionHeader } from './ui';
import { SupplyIcon } from './illustrations/Art';

export function DosingSchedule() {
  const { t } = useLang();
  const s = t.schedule;
  const monthTones = ['from-teal-50 to-white', 'from-teal-100/70 to-white', 'from-teal-200/60 to-white'];
  const [med, setMed] = useState<Medication>('semaglutide');
  const [start, setStart] = useState<string | null>(null);

  return (
    <section id="schedule" aria-labelledby="schedule-title" className="section bg-gradient-to-b from-teal-50/70 to-white">
      <div className="container-x">
        <SectionHeader id="schedule" eyebrow={s.eyebrow} title={s.title} lead={s.intro} />

        {/* Three-month overview */}
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {s.months.map((m, i) => (
            <li key={m.label} className={`card relative overflow-hidden bg-gradient-to-br p-6 ${monthTones[i]}`}>
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-extrabold uppercase tracking-wider text-teal-600">{m.label}</p>
                <p className="text-sm font-semibold text-slate-500">{m.weeks}</p>
              </div>
              <p className="mt-3 text-xl font-extrabold text-teal-900">{m.dose}</p>
              <p className="mt-1 text-slate-600">{m.injections}</p>
              <div className="mt-5 flex gap-2" aria-hidden="true">
                {[0, 1, 2, 3].map((w) => (
                  <span key={w} className="grid h-10 flex-1 place-items-center rounded-xl bg-white text-sm font-bold text-teal-700 ring-1 ring-teal-200">{i * 4 + w + 1}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center font-semibold text-teal-800">{s.monthsNote}</p>

        <div className="mt-10">
          {showDosingTools
            ? <DoseFinder med={med} setMed={setMed} start={start} setStart={setStart} />
            : <SampleChart />}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
          {/* How to read */}
          <div className="card p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold">{s.howTitle}</h3>
            <ol className="mt-5 space-y-3">
              {s.how.map((x, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-teal-800 text-sm font-extrabold text-white">{i + 1}</span>
                  <span className="pt-1">{x}</span>
                </li>
              ))}
            </ol>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-accent-500 bg-accent-50/60 p-4 font-semibold text-teal-900">{s.quote}</blockquote>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card flex gap-4 p-6 sm:p-8">
              <span className="grid h-12 w-14 flex-none place-items-center rounded-2xl bg-teal-100 text-sm font-extrabold text-teal-800" aria-hidden="true">mg≠u</span>
              <div>
                <h3 className="text-xl font-extrabold">{s.unitsTitle}</h3>
                <p className="mt-2 text-slate-600">{s.unitsBody}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-accent-200 bg-accent-50 p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-extrabold"><Icon.Shield className="h-6 w-6 text-accent-600" />{s.safetyTitle}</h3>
              <ul className="mt-3 space-y-2">
                {s.safety.map((x, i) => (
                  <li key={i} className="flex gap-2"><Icon.Check className="mt-1 h-5 w-5 flex-none text-accent-600" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/** Shown to patients while the dosing tools await clinical approval. */
function SampleChart() {
  const { t } = useLang();
  const s = t.schedule;
  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-2xl font-extrabold">{s.sampleTitle}</h3>
      <p className="mt-2 text-sm text-slate-500">{s.sampleNote}</p>
      <div className="mt-4 max-h-[420px] overflow-auto rounded-2xl ring-1 ring-teal-100">
        <table className="w-full text-left text-[15px]">
          <caption className="sr-only">{s.sampleTitle}. {s.sampleNote}</caption>
          <thead className="sticky top-0 bg-teal-800 text-white">
            <tr>{s.sampleCols.map((c) => <th key={c} scope="col" className="px-4 py-3 font-bold">{c}</th>)}</tr>
          </thead>
          <tbody>
            {s.months.map((m, mi) => (
              [0, 1, 2, 3].map((w) => {
                const week = mi * 4 + w + 1;
                return (
                  <tr key={week} className={`${w === 0 ? 'border-t-4 border-white' : ''} ${mi % 2 ? 'bg-teal-50/70' : 'bg-white'}`}>
                    <th scope="row" className="px-4 py-2.5 font-bold text-teal-900">
                      {week}{w === 0 && <span className="ml-2 rounded-full bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-700">{m.label}</span>}
                    </th>
                    <td className="px-4 py-2.5 text-slate-400">{w === 0 ? m.dose : '〃'}</td>
                    <td className="px-4 py-2.5"><span className="whitespace-nowrap rounded-lg border border-dashed border-teal-300 px-2 py-0.5 text-sm text-slate-500">{s.samplePlaceholder}</span></td>
                  </tr>
                );
              })
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Supplies() {
  const { t } = useLang();
  const s = t.supplies;
  return (
    <section id="supplies" aria-labelledby="supplies-title" className="section bg-white">
      <div className="container-x">
        <SectionHeader id="supplies" eyebrow={s.eyebrow} title={s.title} lead={s.intro} />
        <div className="mt-8 flex flex-col gap-5 rounded-3xl border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-white p-6 sm:flex-row sm:p-8" role="note">
          <span className="grid h-20 w-20 flex-none place-items-center rounded-3xl bg-white shadow-soft ring-1 ring-teal-200"><SupplyIcon name="fridge" /></span>
          <div>
            <h3 className="text-2xl font-extrabold">{s.arrival.title}</h3>
            <ul className="mt-3 space-y-2">
              {s.arrival.items.map((x, i) => (
                <li key={i} className={`flex gap-2 ${i === 2 ? 'font-bold text-teal-900' : ''}`}><Icon.Check className="mt-1 h-5 w-5 flex-none text-teal-600" /><span>{x}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {s.items.map((it) => (
            <li key={it.icon} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:p-6">
              <span className="grid h-16 w-16 flex-none place-items-center rounded-2xl bg-teal-50"><SupplyIcon name={it.icon} /></span>
              <div>
                <h3 className="text-lg font-extrabold leading-snug">{it.title}</h3>
                <p className="mt-1 text-[15px] text-slate-600">{it.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-3xl bg-teal-900 p-6 text-white sm:p-8">
          <h3 className="text-xl font-extrabold text-white">{s.checkTitle}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {s.checks.map((c, i) => (
              <li key={i} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-teal-300 text-teal-950"><Icon.Check className="h-4 w-4" /></span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-semibold text-accent-200">{s.checkNote}</p>
        </div>
      </div>
    </section>
  );
}
