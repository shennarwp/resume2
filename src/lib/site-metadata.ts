export const supportedLocales = ['en', 'de', 'id'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export const siteOrigin = 'https://shenna.rwpiri.com';
export const socialImage = `${siteOrigin}/og-image.svg`;

const metadata: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: "Shenna RWP's résumé",
    description:
      'Résumé of Shenna Risqianto Wilfred Piri — Senior IT-Consultant specializing in Spring Boot, Angular, Vue, and cloud infrastructure.',
  },
  de: {
    title: 'Lebenslauf von Shenna RWP',
    description:
      'Lebenslauf von Shenna Risqianto Wilfred Piri — Senior IT-Consultant mit Schwerpunkt auf Spring Boot, Angular, Vue und Cloud-Infrastruktur.',
  },
  id: {
    title: 'Resume Shenna RWP',
    description:
      'Resume Shenna Risqianto Wilfred Piri — Senior IT-Consultant dengan fokus pada Spring Boot, Angular, Vue, dan infrastruktur cloud.',
  },
};

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return !!value && supportedLocales.includes(value as SupportedLocale);
}

export function getMetadata(locale: string | undefined) {
  const normalizedLocale: SupportedLocale = isSupportedLocale(locale) ? locale : 'en';
  return {
    locale: normalizedLocale,
    ...metadata[normalizedLocale],
    canonical: normalizedLocale === 'en' ? `${siteOrigin}/` : `${siteOrigin}/${normalizedLocale}/`,
  };
}
