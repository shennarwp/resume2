import '$lib/i18n'; // Import to initialize svelte-i18n
import { i18nReady } from '$lib/i18n'; // Import the i18nReady promise

export const prerender = true;
export const trailingSlash = 'always';

// This load function runs before the layout component renders
export async function load() {
  await i18nReady; // Ensure i18n is ready before any components try to use it
  return {}; // Return an empty object or any data needed by the layout
}