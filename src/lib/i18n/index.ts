import { register, init } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('de', () => import('./de.json'));
register('id', () => import('./id.json'));

let i18nReadyPromise: void | Promise<void>;

export function initI18n(initialLocale: string) {
  // Ensure init is only called once
  i18nReadyPromise ??= init({
    fallbackLocale: 'en', // Fallback to English if the detected locale isn't available
    initialLocale: initialLocale,
  });
  return i18nReadyPromise;
}
