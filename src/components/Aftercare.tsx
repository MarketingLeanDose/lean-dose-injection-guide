import { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';
import { useLang } from '../i18n/LanguageContext';
import { fmt } from '../i18n/types';
import { safeStorage } from '../lib/storage';
import { Icon, SectionHeader } from './ui';
import { SharpsArt } from './illustrations/Art';

type Side = '' | 'right' | 'left';
interface Entry { done: boolean; date: string; side: Side }
const empty = (): Entry[] => Array.from({ length: 12 }, () => ({ done: false, date: '', side: '' }));

/** Stores only: done flag, date and side per week — no names, doses or medication. On-device only. */
function load(): Entry[] {
  try {
    const raw = safeStorage.get(siteConfig.trackerStorageKey);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Entry[];
    if (!Array.isArray(parsed) || parsed.length !== 12) return empty();
    return parsed.map((e) => ({ done: !!e.done, date: typeof e.date === 'string' ? e.date : '', side: e.side === 'right' || e.side === 'left' ? e.side : '' }));
  } catch { return empty(); }
}

export function Aftercare() {
  const { t } = useLang();
  const a = t.aftercare;
  return (
    <section id="aftercare" aria-labelledby="aftercare-title" className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <SectionHeader id="aftercare" eyebrow={a.eyebrow} title={a.title} />
          <ul className="mt-8 space-y-3">
            {a.items.map((x, i) => (
              <li key={i} className="flex gap-3 rounded-2xl bg-teal-50/70 p-4">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-teal-700 text-white"><Icon.Check className="h-4 w-4" /></span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <Tracker />
      </div>
      <Disposal />
    </section>
  );
}

function Tracker() {
  const { t } = useLang();
  const tr = t.aftercare.tracker;
  const [entries, setEntries] = useState<Entry[]>(load);
  const [confirming, setConfirming] = useState(false);
  const persisted = safeStorage.available();

  useEffect(() => { safeStorage.set(siteConfig.trackerStorageKey, JSON.stringify(entries)); }, [entries]);

  const update = (i: number, patch: Partial<Entry>) =>
    setEntries((prev) => prev.map((e, j) => (j === i ? { ...e, ...patch } : e)));

  const count = entries.filter((e) => e.done).length;
  const lastWithSide = [...entries].reverse().find((e) => e.side);
  const sideName = (sd: Side) => (sd === 'right' ? tr.sides.right : sd === 'left' ? tr.sides.left : '');

  return (
    <div className="card min-w-0 p-4 sm:p-7">
      <h3 className="text-2xl font-extrabold">{tr.title}</h3>
      <p className="mt-2 text-[15px] text-slate-600">{tr.intro}</p>
      {!persisted && <p className="mt-2 text-sm font-semibold text-amber-700">{tr.storageOff}</p>}

      <div className="mt-4 flex items-center gap-3">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-teal-100">
          <div className="h-full rounded-full bg-teal-600 transition-all" style={{ width: `${(count / 12) * 100}%` }} />
        </div>
        <span className="text-sm font-bold text-teal-800" aria-live="polite">{fmt(tr.progress, { n: count })}</span>
      </div>
      {lastWithSide && (
        <p className="mt-3 rounded-xl bg-accent-50 px-3 py-2 text-sm font-semibold text-accent-700">
          {fmt(tr.lastSide, { side: sideName(lastWithSide.side).toLowerCase(), other: sideName(lastWithSide.side === 'right' ? 'left' : 'right').toLowerCase() })}
        </p>
      )}

      <div className="mt-4 max-h-[460px] overflow-auto rounded-2xl ring-1 ring-teal-100">
        <table className="w-full text-[15px]">
          <thead className="sticky top-0 z-10 bg-teal-800 text-left text-white">
            <tr>{tr.cols.map((c) => <th key={c} scope="col" className="px-2 py-2.5 font-bold">{c}</th>)}</tr>
          </thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={i} className={`border-t border-teal-50 ${e.done ? 'bg-teal-50/80' : 'bg-white'}`}>
                <th scope="row" className="px-2 py-2 font-bold text-teal-900">{i + 1}</th>
                <td className="px-2 py-2">
                  <input type="checkbox" checked={e.done} onChange={(ev) => update(i, { done: ev.target.checked })}
                    aria-label={fmt(tr.doneLabel, { n: i + 1 })} className="h-6 w-6 rounded-md border-teal-300 accent-teal-700" />
                </td>
                <td className="px-2 py-2">
                  <input type="date" value={e.date} onChange={(ev) => update(i, { date: ev.target.value })}
                    aria-label={fmt(tr.dateLabel, { n: i + 1 })}
                    className="w-full min-w-[8rem] rounded-lg border border-teal-200 bg-white px-2 py-1.5 text-[15px] text-teal-900" />
                </td>
                <td className="px-2 py-2">
                  <select value={e.side} onChange={(ev) => update(i, { side: ev.target.value as Side })}
                    aria-label={fmt(tr.sideLabel, { n: i + 1 })}
                    className="w-full min-w-[5.5rem] rounded-lg border border-teal-200 bg-white px-2 py-1.5 text-[15px] text-teal-900">
                    <option value="">{tr.sides.none}</option>
                    <option value="right">{tr.sides.right}</option>
                    <option value="left">{tr.sides.left}</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        {!confirming ? (
          <button type="button" onClick={() => setConfirming(true)} className="text-sm font-bold text-teal-700 underline-offset-4 hover:underline">{tr.clear}</button>
        ) : (
          <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-teal-50 p-3" role="alertdialog" aria-label={tr.clearConfirm}>
            <span className="text-sm font-semibold text-teal-900">{tr.clearConfirm}</span>
            <button type="button" className="btn-teal !min-h-[40px] !px-4 !py-1.5 text-sm" onClick={() => { setEntries(empty()); setConfirming(false); }}>{tr.yes}</button>
            <button type="button" className="btn-ghost !min-h-[40px] !px-4 !py-1.5 text-sm" onClick={() => setConfirming(false)}>{tr.no}</button>
          </div>
        )}
      </div>
    </div>
  );
}

function Disposal() {
  const { t } = useLang();
  const d = t.aftercare.disposal;
  return (
    <div id="disposal" className="container-x mt-12 scroll-mt-28">
      <div className="card overflow-hidden">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="min-w-0">
            <h3 className="text-2xl font-extrabold sm:text-3xl">{d.title}</h3>
            <p className="mt-2 text-lg text-slate-600">{d.intro}</p>
            <h4 className="mt-6 text-lg font-extrabold">{d.makeTitle}</h4>
            <ol className="mt-3 space-y-3">
              {d.make.map((x, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-accent-600 text-sm font-extrabold text-white">{i + 1}</span>
                  <span className="pt-1">{x}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="min-w-0 space-y-4">
            <SharpsArt className="w-full" />
            <div className="rounded-2xl bg-teal-900 p-5 text-white">
              <p className="font-extrabold text-white">{d.fullTitle}</p>
              <ul className="mt-2 space-y-2">
                {d.full.map((x, i) => (
                  <li key={i} className="flex gap-2"><Icon.Check className="mt-1 h-5 w-5 flex-none text-teal-300" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-1 border-t border-teal-100 bg-teal-50/60 px-6 py-4 text-[15px] text-slate-600 sm:px-8">
          <p>{d.otherStates}</p>
          <p>{d.option}</p>
          <p className="text-sm text-slate-500">{d.sourceNote}</p>
        </div>
      </div>
    </div>
  );
}
