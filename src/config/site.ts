/**
 * LEAN DOSE — SITE CONFIGURATION
 * --------------------------------------------------------------
 * Everything the marketing / clinical team may need to update without
 * touching layout code lives here or in /src/content/{en,es}.ts.
 */
import type { Lang } from '../i18n/types';

export interface VideoSource {
  /** 'mp4' = direct video file (e.g. /videos/tutorial-en.mp4 or a HeyGen MP4 download URL).
   *  'embed' = an embeddable player URL (e.g. HeyGen share/embed link). */
  type: 'mp4' | 'embed';
  /** Leave empty ('') to show the "coming soon" placeholder. */
  src: string;
  /** Optional WebVTT captions file (mp4 only), e.g. /videos/tutorial-en.vtt */
  captionsSrc?: string;
  /** Optional thumbnail image, e.g. /videos/thumb-en.jpg */
  poster?: string;
}

export const siteConfig = {
  /** Official logo file. Place the file Huda supplies in /public/brand/ and set the path,
   *  e.g. '/brand/lean-dose-logo.svg'. While null, a plain text name is shown. */
  logoSrc: null as string | null,
  /** Optional light/white version for the dark footer. */
  logoSrcOnDark: null as string | null,

  mainWebsite: 'https://www.leandose.co',

  /** Support contact details — DO NOT invent. Leave null until confirmed. */
  support: {
    phone: '(832) 900-4410' as string | null,
    email: 'info@leandose.co' as string | null,
    messagingUrl: null as string | null, // e.g. patient messaging link
  },

  /** Nurse-led HeyGen tutorials. The selected site language picks the video. */
  videos: {
    // English hero video (HeyGen, captions burned in). Relative paths work on Vercel and in previews.
    en: { type: 'mp4', src: 'videos/tutorial-en.mp4', captionsSrc: '', poster: 'videos/poster-en.jpg' },
    es: { type: 'mp4', src: '', captionsSrc: '', poster: '' },
  } as Record<Lang, VideoSource>,

  /** Personalized videos shown under the dose finder result — one per medication + starting dose.
   *  Key format: '<medication>-<startMg>' (must match src/content/dosing.ts). Leave src '' for a placeholder. */
  doseVideos: Object.fromEntries(
    [
      'semaglutide-0.25', 'semaglutide-0.5', 'semaglutide-1', 'semaglutide-1.7', 'semaglutide-2', 'semaglutide-2.5',
      'tirzepatide-2.5', 'tirzepatide-5', 'tirzepatide-7.5', 'tirzepatide-10', 'tirzepatide-12.5', 'tirzepatide-15',
    ].map((k) => [k, {
      en: { type: 'mp4', src: '', captionsSrc: '', poster: '' },
      es: { type: 'mp4', src: '', captionsSrc: '', poster: '' },
    }]),
  ) as Record<string, Record<Lang, VideoSource>>,

  /** Optional per-step deep links (e.g. a timestamped URL or a separate clip).
   *  When missing, "Watch this step" scrolls to the main tutorial. */
  stepVideoLinks: {} as Partial<Record<string, Partial<Record<Lang, string>>>>,

  /** Clinically approved photos/illustrations. Keys match the visual keys in the content files
   *  (e.g. 'inject-hold', 'inject-pinch', 'inject-insert'). When set, the image replaces the
   *  built-in illustration or placeholder. Put files in /public/media/. */
  approvedMedia: {} as Partial<Record<string, { src: string; alt?: Partial<Record<Lang, string>> }>>,

  /**
   * Clinical gating. Content flagged `pending: true` in the content files is NOT shown to
   * patients unless this is true. Production builds: false. Review builds (`npm run build:review`): true.
   */
  showPendingClinical: import.meta.env.VITE_SHOW_PENDING_CLINICAL === 'true',

  /** Key used for the on-device weekly tracker (browser storage only, never sent anywhere). */
  trackerStorageKey: 'leandose-injection-tracker-v1',
};

// ---- Personalized starting-dose videos that are ready (add one line per video) ----
siteConfig.doseVideos['semaglutide-0.25'].en = { type: 'mp4', src: 'videos/sema-0.25-en.mp4', captionsSrc: '', poster: 'videos/sema-0.25-en.jpg' };
