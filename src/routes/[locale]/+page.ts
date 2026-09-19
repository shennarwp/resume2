import { error } from '@sveltejs/kit';
import { initI18n } from '$lib/i18n';
import { isSupportedLocale, supportedLocales, type SupportedLocale } from '$lib/site-metadata';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
  supportedLocales.filter((locale) => locale !== 'en').map((locale) => ({ locale }));

export const load: PageLoad = async ({ params }) => {
  if (!isSupportedLocale(params.locale) || params.locale === 'en') {
    error(404, 'Unsupported locale');
  }
  await initI18n(params.locale);
  return { locale: params.locale as SupportedLocale };
};
