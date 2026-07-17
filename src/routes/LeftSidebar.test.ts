import { render, screen } from '@testing-library/svelte/svelte5';
import { describe, it, expect } from 'vitest';
import LeftSidebar from './LeftSidebar.svelte';

describe('LeftSidebar', () => {
  it('renders the sidebar content', () => {
    render(LeftSidebar);
    // Look for the name
    expect(screen.getByText(/Shenna Risqianto Wilfred/i)).toBeInTheDocument();
    // Look for the email
    expect(screen.getByText(/shenna@rwpiri.com/i)).toBeInTheDocument();
  });
});
