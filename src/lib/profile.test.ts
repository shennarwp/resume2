import { describe, it, expect } from 'vitest';
import { profile, renderPersonJsonLd } from './profile';

describe('renderPersonJsonLd', () => {
  it('wraps valid Person JSON in a JSON-LD script tag', () => {
    const output = renderPersonJsonLd();

    expect(output.startsWith('<script type="application/ld+json">')).toBe(true);
    expect(output.endsWith('</script>')).toBe(true);

    const schema = JSON.parse(
      output.replace('<script type="application/ld+json">', '').replace('</script>', ''),
    );
    expect(schema).toMatchObject({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: `${profile.givenName} ${profile.familyName}`,
      url: profile.website,
      email: profile.email,
      jobTitle: profile.jobTitle,
    });
  });

  it('strips the tel: prefix and lists every social href in sameAs', () => {
    const output = renderPersonJsonLd();
    const schema = JSON.parse(
      output.replace('<script type="application/ld+json">', '').replace('</script>', ''),
    );

    expect(schema.telephone).toBe(profile.phoneHref.replace(/^tel:/, ''));
    expect(schema.telephone).not.toContain('tel:');
    expect(schema.sameAs).toEqual(profile.socialLinks.map((link) => link.href));
    expect(schema.worksFor.name).toBe(profile.company);
    expect(schema.alumniOf.name).toBe(profile.school);
  });
});
