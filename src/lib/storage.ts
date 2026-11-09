/** Browser storage that never throws (private mode, sandboxed frames, disabled storage). */
const mem = new Map<string, string>();
let available: boolean | null = null;

function check(): boolean {
  if (available !== null) return available;
  try {
    const k = '__ld_test__';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    available = true;
  } catch { available = false; }
  return available;
}

export const safeStorage = {
  available: () => check(),
  get(key: string): string | null {
    if (check()) { try { return window.localStorage.getItem(key); } catch { /* fall through */ } }
    return mem.get(key) ?? null;
  },
  set(key: string, value: string) {
    if (check()) { try { window.localStorage.setItem(key, value); return; } catch { /* fall through */ } }
    mem.set(key, value);
  },
  remove(key: string) {
    if (check()) { try { window.localStorage.removeItem(key); } catch { /* ignore */ } }
    mem.delete(key);
  },
};

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  // Move focus for keyboard & screen-reader users without a second scroll jump.
  const heading = el.querySelector<HTMLElement>('h2, h3');
  if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
}
