import { register, init } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('de', () => import('./de.json'));
register('id', () => import('./id.json'));

export const i18nReady = init({
  fallbackLocale: 'de',
  initialLocale: 'de',
});
