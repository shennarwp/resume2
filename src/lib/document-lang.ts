/**
 * Mirror the active svelte-i18n locale onto the <html lang> attribute so
 * assistive technology and search engines see the real page language.
 * No-op during SSR/prerendering and when the locale is not set yet.
 */
export function syncDocumentLang(locale: string | null | undefined): void {
  if (typeof document === 'undefined') return;
  if (!locale) return;
  document.documentElement.lang = locale;
}
