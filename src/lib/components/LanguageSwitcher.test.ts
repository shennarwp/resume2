import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import { describe, it, expect, vi } from 'vitest';
import * as svelteI18n from 'svelte-i18n';
import LanguageSwitcher from './LanguageSwitcher.svelte';

// Mock the svelte-i18n locale store
const mockLocale = {
  subscribe: (callback: (val: string) => void) => {
    callback('en'); // Default to 'en'
    return () => {}; // Return a no-op unsubscribe function
  },
  set: vi.fn(),
};

vi.spyOn(svelteI18n, 'locale', 'get').mockReturnValue(mockLocale as never);

describe('LanguageSwitcher', () => {
  it('renders all language buttons', () => {
    render(LanguageSwitcher);
    expect(screen.getByText('de')).toBeInTheDocument();
    expect(screen.getByText('en')).toBeInTheDocument();
    expect(screen.getByText('id')).toBeInTheDocument();
  });

  it('calls setLocale when a button is clicked', async () => {
    render(LanguageSwitcher);
    const deButton = screen.getByText('de');

    await fireEvent.click(deButton);
    expect(mockLocale.set).toHaveBeenCalledWith('de');
  });
});
