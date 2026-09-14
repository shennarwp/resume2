import { describe, it, expect, beforeEach } from 'vitest';
import { syncDocumentLang } from './document-lang';

describe('syncDocumentLang', () => {
  beforeEach(() => {
    document.documentElement.lang = 'en';
  });

  it('sets the html lang attribute to the active locale', () => {
    syncDocumentLang('de');
    expect(document.documentElement.lang).toBe('de');
  });

  it('leaves lang untouched when the locale is not set yet', () => {
    syncDocumentLang(undefined);
    syncDocumentLang(null);
    expect(document.documentElement.lang).toBe('en');
  });
});
