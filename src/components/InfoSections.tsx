import { useId, useState } from 'react';
import { siteConfig } from '../config/site';
import { useLang } from '../i18n/LanguageContext';
import { fmt } from '../i18n/types';
import { scrollToId } from '../lib/storage';
import { LangToggle, Logo } from './Header';
import { Icon, PendingBadge, SectionHeader } from './ui';

export function Safety() {
  const { t } = useLang();
  const s = t.safety;
  return (
    <section id="safety" aria-labelledby="safety-title" className="section bg-gradient-to-b from-teal-50/70 to-white">
      <div className="container-x">
        <SectionHeader id="safety" eyebrow={s.eyebrow} title={s.title} lead={s.intro} />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {s.items.map((x, i) => (
            <li key={i} className="card flex gap-3 p-5">
              <Icon.Shield className="mt-0.5 h-6 w-6 flex-none text-teal-600" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-3xl border-2 border-red-200 bg-red-50 p-6" role="note">
          <h3 className="flex items-center gap-2 text-xl font-extrabold text-red-800"><Icon.Alert className="h-6 w-6" />{s.emergencyTitle}</h3>
          <p className="mt-2 text-lg font-semibold text-red-900">{s.emergencyBody}</p>
        </div>
        <p className="mt-4 text-slate-600">{s.moreNote}</p>
      </div>
    </section>
  );
}

export function FAQ() {
  const { t } = useLang();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-white">
      <div className="container-x max-w-4xl">
        <SectionHeader id="faq" eyebrow={f.eyebrow} title={f.title} center />
        <div className="mt-10 space-y-3">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            const showDraft = !item.pending || siteConfig.showPendingClinical;
            return (
              <div key={i} className={`rounded-2xl ring-1 transition ${isOpen ? 'bg-teal-50/70 ring-teal-200' : 'bg-white ring-teal-100'}`}>
                <h3 className="text-lg">
                  <button type="button" id={`${base}-q${i}`} aria-expanded={isOpen} aria-controls={`${base}-a${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-teal-900">
                    <span>{item.q}</span>
                    <Icon.Chevron className={`h-6 w-6 flex-none text-teal-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div id={`${base}-a${i}`} role="region" aria-labelledby={`${base}-q${i}`} hidden={!isOpen} className="px-5 pb-5">
                  {item.pending && siteConfig.showPendingClinical && <div className="mb-2"><PendingBadge /></div>}
                  <p className="text-slate-700">{showDraft ? item.a : f.fallback}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Support() {
  const { t } = useLang();
  const s = t.support;
  const c = siteConfig.support;
  const items = [
    { icon: <Icon.Phone className="h-6 w-6" />, label: s.phone, value: c.phone, href: c.phone ? `tel:${c.phone.replace(/[^\d+]/g, '')}` : null },
    { icon: <Icon.Mail className="h-6 w-6" />, label: s.email, value: c.email, href: c.email ? `mailto:${c.email}` : null },
    { icon: <Icon.Chat className="h-6 w-6" />, label: s.message, value: c.messagingUrl ? c.messagingUrl.replace(/^https?:\/\//, '') : null, href: c.messagingUrl },
  ];
  const primary = items.find((x) => x.href);
  // Hide channels that aren't set yet once at least one real contact exists.
  const shown = primary ? items.filter((x) => x.href) : items;

  return (
    <section id="support" aria-labelledby="support-title" className="section bg-white pt-0">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-teal-700 via-teal-800 to-teal-950 p-8 text-white shadow-lift sm:p-12">
          <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 id="support-title" className="text-3xl font-extrabold text-white sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-lg text-white/85">{s.description}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {primary?.href
                  ? <a href={primary.href} className="btn-primary">{t.ui.contact}</a>
                  : <span className="btn-primary pointer-events-none opacity-90" aria-disabled="true">{t.ui.contact}</span>}
                <a href={siteConfig.mainWebsite} target="_blank" rel="noopener noreferrer" className="btn border-2 border-white/30 text-white hover:bg-white/10"><Icon.Globe />{s.website}</a>
              </div>
            </div>
            <ul className="grid gap-3">
              {shown.map((x) => (
                <li key={x.label}>
                  {x.href ? (
                    <a href={x.href} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-teal-800">{x.icon}</span>
                      <span><span className="block text-sm font-semibold text-white/75">{x.label}</span><span className="block text-lg font-bold">{x.value}</span></span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-dashed ring-white/20">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white">{x.icon}</span>
                      <span><span className="block text-sm font-semibold text-white/75">{x.label}</span><span className="block font-semibold text-white/60">{s.notSet}</span></span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="bg-teal-950 text-white/80">
      <div className="container-x grid gap-8 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo onDark />
          <p className="mt-2 text-white/70">{f.tagline}</p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65">{f.disclaimer}</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <LangToggle onDark />
          <a href={siteConfig.mainWebsite} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">{f.website}</a>
          <button type="button" onClick={() => scrollToId('support')} className="font-semibold text-white hover:underline">{t.ui.contact}</button>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-white/70 hover:text-white">↑ {t.ui.backToTop}</button>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-sm text-white/60">{fmt(f.rights, { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
