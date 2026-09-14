export type SocialName = 'github' | 'linkedin' | 'instagram';

export interface SocialLink {
  name: SocialName;
  label: string;
  href: string;
}

export interface Profile {
  givenName: string;
  familyName: string;
  location: string;
  website: string;
  email: string;
  phoneHref: string;
  phoneDisplay: string;
  jobTitle: string;
  siteTitle: string;
  headline: string;
  company: string;
  school: string;
  socialLinks: SocialLink[];
}

/**
 * Single source of truth for personal data. The sidebar, the JSON-LD
 * schema and the SEO meta tags all derive from here so they cannot drift.
 */
export const profile: Profile = {
  givenName: 'Shenna Risqianto Wilfred',
  familyName: 'Piri',
  location: 'Saarbrücken',
  website: 'https://shenna.rwpiri.com',
  email: 'shenna@rwpiri.com',
  phoneHref: 'tel:+4915257523364',
  phoneDisplay: '+49 1525 7523364',
  jobTitle: 'Senior IT-Consultant',
  siteTitle: "Shenna RWP's résumé",
  headline:
    'Résumé of Shenna Risqianto Wilfred Piri — Senior IT-Consultant specializing in Spring Boot, Angular, Vue, and cloud infrastructure.',
  company: 'FourEnergy GmbH',
  school: 'Hochschule für Technik und Wirtschaft des Saarlandes',
  socialLinks: [
    {
      name: 'github',
      label: 'GitHub profile',
      href: 'https://github.com/shennarwp/',
    },
    {
      name: 'linkedin',
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/shennarwp/',
    },
    {
      name: 'instagram',
      label: 'Instagram profile',
      href: 'https://instagram.com/shennarwp/',
    },
  ],
};

/**
 * Render the schema.org Person block as a JSON-LD script tag for `{@html}`
 * injection into `<svelte:head>`. Kept in a plain `.ts` module (instead of
 * the component) so formatters never mistake the `<script>` string for
 * markup.
 */
export function renderPersonJsonLd(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: `${profile.givenName} ${profile.familyName}`,
    url: profile.website,
    email: profile.email,
    telephone: profile.phoneHref.replace(/^tel:/, ''),
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
      addressCountry: 'DE',
    },
    jobTitle: profile.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: profile.company,
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: profile.school,
    },
    sameAs: profile.socialLinks.map((link) => link.href),
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
