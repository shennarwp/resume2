import '$lib/i18n';
import { i18nReady } from '$lib/i18n';

export const prerender = true;
export const trailingSlash = 'always';

export async function load() {
  await i18nReady;
  return {};
}
