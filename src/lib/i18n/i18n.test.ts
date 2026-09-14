import { describe, it, expect } from 'vitest';
import de from './de.json';
import en from './en.json';
import id from './id.json';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

function collectKeys(value: JsonValue, prefix = ''): string[] {
  if (Array.isArray(value)) {
    const keys = [`${prefix}[]:${value.length}`];
    value.forEach((item, index) => {
      keys.push(...collectKeys(item, `${prefix}[${index}]`));
    });
    return keys;
  }
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).flatMap(([key, child]) =>
      collectKeys(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

function collectEmptyStrings(value: JsonValue, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectEmptyStrings(item, `${prefix}[${index}]`));
  }
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).flatMap(([key, child]) =>
      collectEmptyStrings(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return typeof value === 'string' && value.trim().length === 0 ? [prefix] : [];
}

const locales = { de, en, id } as const;

describe('i18n dictionaries', () => {
  it('all locales expose the same key structure as English', () => {
    const reference = new Set(collectKeys(en));
    for (const [name, dictionary] of Object.entries(locales)) {
      if (name === 'en') continue;
      const actual = new Set(collectKeys(dictionary));
      const missing = [...reference].filter((key) => !actual.has(key)).sort();
      const extra = [...actual].filter((key) => !reference.has(key)).sort();
      expect({ locale: name, missing, extra }).toEqual({ locale: name, missing: [], extra: [] });
    }
  });

  it('has no empty translations', () => {
    for (const [name, dictionary] of Object.entries(locales)) {
      expect(collectEmptyStrings(dictionary), `empty strings in ${name}`).toEqual([]);
    }
  });
});
