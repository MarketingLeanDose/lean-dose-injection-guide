import type { en } from '../content/en';

export type Lang = 'en' | 'es';

/** The shape of all patient-facing content. Spanish must match English exactly. */
export type Content = typeof en;

/** Replace {name} tokens in a string. */
export function fmt(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
