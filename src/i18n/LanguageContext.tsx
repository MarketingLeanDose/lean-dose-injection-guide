import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from '../content/en';
import { es } from '../content/es';
import type { Content, Lang } from './types';
import { safeStorage } from '../lib/storage';

const dictionaries: Record<Lang, Content> = { en, es };
const LANG_KEY = 'leandose-lang';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: Content }
const Ctx = createContext<LangCtx | null>(null);

function initialLang(): Lang {
  // English is the default. A ?lang=es link (e.g. a Spanish QR code) or a saved choice can override it.
  try {
    const p = new URLSearchParams(window.location.search).get('lang');
    if (p === 'es' || p === 'en') return p;
  } catch { /* ignore */ }
  const saved = safeStorage.get(LANG_KEY);
  return saved === 'es' ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  const value = useMemo<LangCtx>(() => ({
    lang, t,
    setLang: (l) => { setLangState(l); safeStorage.set(LANG_KEY, l); },
  }), [lang, t]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLang must be used inside LanguageProvider');
  return v;
}
