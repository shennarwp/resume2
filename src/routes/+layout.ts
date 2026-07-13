import { initI18n } from '$lib/i18n';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ url }) => {
  let initialLocale = 'en';

  if (typeof navigator !== 'undefined' && navigator.language) {
    const browserLang = navigator.language.split('-')[0]; // e.g., "en-US" -> "en"
    if (browserLang === 'de') {
      initialLocale = 'de';
    } else if (browserLang === 'id') {
      initialLocale = 'id';
    }
  }

  await initI18n(initialLocale);

  // Determine if analytics script should be included
  const includeAnalytics = url.hostname === 'shenna.rwpiri.com';

  return {
    includeAnalytics, // Pass the flag to the layout component
  };
};
