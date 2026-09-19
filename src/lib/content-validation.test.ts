import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import de from './i18n/de.json';
import en from './i18n/en.json';
import id from './i18n/id.json';
import { profile } from './profile';
import { getMetadata, supportedLocales } from './site-metadata';

function assertNoDuplicateObjectKeys(source: string) {
  let index = 0;
  const whitespace = () => {
    while (/\s/.test(source[index] ?? '')) index += 1;
  };
  const string = () => {
    const start = index++;
    while (index < source.length) {
      if (source[index] === '\\') index += 2;
      else if (source[index++] === '"') break;
    }
    return JSON.parse(source.slice(start, index)) as string;
  };
  const value = () => {
    whitespace();
    if (source[index] === '"') return string();
    if (source[index] === '{') {
      index += 1;
      const keys = new Set<string>();
      whitespace();
      while (source[index] !== '}') {
        const key = string();
        if (keys.has(key)) throw new Error(`Duplicate JSON key: ${key}`);
        keys.add(key);
        whitespace();
        expect(source[index++]).toBe(':');
        value();
        whitespace();
        if (source[index] === ',') {
          index += 1;
          whitespace();
        }
      }
      index += 1;
      return;
    }
    if (source[index] === '[') {
      index += 1;
      whitespace();
      while (source[index] !== ']') {
        value();
        whitespace();
        if (source[index] === ',') {
          index += 1;
          whitespace();
        }
      }
      index += 1;
      return;
    }
    while (index < source.length && !',]}'.includes(source[index])) index += 1;
  };
  value();
}

describe('resume content', () => {
  it('contains valid, unique JSON keys in every locale', () => {
    for (const locale of supportedLocales) {
      const source = readFileSync(resolve(process.cwd(), `src/lib/i18n/${locale}.json`), 'utf8');
      expect(() => assertNoDuplicateObjectKeys(source)).not.toThrow();
    }
  });

  it('validates URLs, dates, bullet lengths, metadata, and image alt text', () => {
    expect(profile.website).toMatch(/^https:\/\//);
    expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    for (const link of profile.socialLinks) expect(link.href).toMatch(/^https:\/\//);
    for (const dictionary of [en, de, id]) {
      for (const experience of Object.values(dictionary.experience).slice(2)) {
        if (typeof experience !== 'object' || experience === null) continue;
        expect(String(experience.period)).toMatch(/\b(19|20)\d{2}\b/);
        for (const bullet of experience.items) expect(bullet.length).toBeLessThanOrEqual(280);
      }
    }
    for (const locale of supportedLocales) {
      const metadata = getMetadata(locale);
      expect(metadata.title.length).toBeGreaterThan(10);
      expect(metadata.description.length).toBeGreaterThan(40);
      expect(metadata.canonical).toMatch(/^https:\/\//);
    }
    const sidebar = readFileSync(resolve(process.cwd(), 'src/routes/LeftSidebar.svelte'), 'utf8');
    expect(sidebar).toMatch(/alt="Portrait of Shenna Piri"/);
  });

  it('does not leave the main prose untranslated', () => {
    expect(de.experience.exxeta_2026.items).not.toEqual(en.experience.exxeta_2026.items);
    expect(id.experience.exxeta_2026.items).not.toEqual(en.experience.exxeta_2026.items);
    expect(de.interests.items).not.toEqual(en.interests.items);
    expect(id.interests.items).not.toEqual(en.interests.items);
  });
});
