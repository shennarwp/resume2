import { initI18n } from '$lib/i18n';
import { isSupportedLocale, type SupportedLocale } from '$lib/site-metadata';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ url }) => {
  let initialLocale = 'en';

  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('locale');
    if (isSupportedLocale(saved)) {
      initialLocale = saved;
    } else if (typeof navigator !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.split('-')[0];
      if (isSupportedLocale(browserLang)) {
        initialLocale = browserLang;
      }
    }
  } else if (typeof navigator !== 'undefined' && navigator.language) {
    const browserLang = navigator.language.split('-')[0];
    if (isSupportedLocale(browserLang)) {
      initialLocale = browserLang;
    }
  }

  await initI18n(initialLocale);

  // Determine if analytics script should be included
  const includeAnalytics = url.hostname === 'shenna.rwpiri.com';

  return { includeAnalytics, locale: initialLocale as SupportedLocale };
};
