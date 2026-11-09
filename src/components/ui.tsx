import type { ReactNode } from 'react';
import { siteConfig } from '../config/site';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/types';
import { MediaPlaceholderArt } from './illustrations/Art';

export function SectionHeader({ id, eyebrow, title, lead, center }: { id: string; eyebrow?: string; title: string; lead?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={`${id}-title`} className="h2">{title}</h2>
      {lead && <p className={`lead ${center ? 'mx-auto' : ''}`}>{lead}</p>}
    </div>
  );
}

/** Badge shown only in review builds on pending content. */
export function PendingBadge() {
  const { t } = useLang();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800 ring-1 ring-amber-300">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true"><path fill="currentColor" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v4.69l3 1.8-.77 1.28-3.73-2.24V6h1.5Z" /></svg>
      {t.review.badge}
    </span>
  );
}

/**
 * Clinical gate. Approved content renders normally. Pending content renders with a review badge
 * in review builds, and is replaced by a neutral placeholder for patients in production builds.
 */
export function Pending({ pending, children, placeholder }: { pending: boolean; children: ReactNode; placeholder?: ReactNode }) {
  const { t } = useLang();
  if (!pending) return <>{children}</>;
  if (siteConfig.showPendingClinical) {
    return (
      <div className="relative rounded-3xl border-2 border-dashed border-amber-300 bg-amber-50/40 p-3 sm:p-4">
        <div className="mb-3"><PendingBadge /></div>
        {children}
      </div>
    );
  }
  return (
    <>{placeholder ?? (
      <div className="rounded-3xl border border-teal-100 bg-teal-50/70 p-5">
        <p className="font-bold text-teal-900">{t.review.placeholderTitle}</p>
        <p className="mt-1 text-slate-600">{t.review.placeholderBody}</p>
      </div>
    )}</>
  );
}

/** Shows an approved clinical image if configured, otherwise the built-in art or a labeled placeholder. */
export function MediaSlot({ visual, art, alt }: { visual: string; art?: ReactNode; alt: string }) {
  const { t, lang } = useLang();
  const media = siteConfig.approvedMedia[visual];
  if (media) {
    return <img src={media.src} alt={media.alt?.[lang as Lang] ?? alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[28px] object-cover" />;
  }
  if (art) return <>{art}</>;
  return <MediaPlaceholderArt label={t.review.mediaPlaceholder} />;
}

export function Callout({ children, tone = 'accent' }: { children: ReactNode; tone?: 'accent' | 'teal' }) {
  const cls = tone === 'accent' ? 'border-accent-200 bg-accent-50 text-accent-700' : 'border-teal-200 bg-teal-50 text-teal-800';
  return (
    <div className={`mt-4 flex gap-3 rounded-2xl border p-4 font-semibold ${cls}`} role="note">
      <Icon.Alert className="mt-0.5 h-5 w-5 flex-none" />
      <p>{children}</p>
    </div>
  );
}

type IP = { className?: string };
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
export const Icon = {
  Check: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M5 12.5l4.5 4.5L19 7.5" /></svg>),
  Play: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg>),
  List: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" /></svg>),
  Arrow: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M5 12h14M13 6l6 6-6 6" /></svg>),
  ArrowL: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M19 12H5M11 6l-6 6 6 6" /></svg>),
  Chevron: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M6 9l6 6 6-6" /></svg>),
  Alert: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...s} cx="12" cy="12" r="9" /><path {...s} d="M12 7.5v5.5M12 16.5h.01" /></svg>),
  Phone: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>),
  Mail: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><rect {...s} x="3" y="5" width="18" height="14" rx="2" /><path {...s} d="M3 7l9 6 9-6" /></svg>),
  Chat: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /></svg>),
  Globe: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...s} cx="12" cy="12" r="9" /><path {...s} d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>),
  Menu: ({ className = 'h-6 w-6' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M4 7h16M4 12h16M4 17h16" /></svg>),
  X: ({ className = 'h-6 w-6' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M6 6l12 12M18 6L6 18" /></svg>),
  Shield: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path {...s} d="M8.5 12l2.5 2.5 4.5-5" /></svg>),
  Heart: ({ className = 'h-5 w-5' }: IP) => (<svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...s} d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></svg>),
};
