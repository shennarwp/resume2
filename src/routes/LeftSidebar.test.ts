import { render, screen } from '@testing-library/svelte/svelte5';
import { describe, it, expect } from 'vitest';
import LeftSidebar from './LeftSidebar.svelte';

describe('LeftSidebar', () => {
  it('renders the sidebar content', () => {
    render(LeftSidebar);
    expect(screen.getByText(/Shenna Risqianto Wilfred/i)).toBeInTheDocument();
    expect(screen.getByText(/shenna@rwpiri.com/i)).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    const { container } = render(LeftSidebar);
    const imgDiv = container.querySelector('.me-img') as HTMLElement;
    expect(imgDiv).toBeInTheDocument();
    expect(imgDiv.style.backgroundImage).toContain('shenna.webp');
  });

  it('has social links opening in new tab', () => {
    render(LeftSidebar);
    const githubLink = screen.getByTitle('github link');
    const linkedinLink = screen.getByTitle('linkedin link');
    const instagramLink = screen.getByTitle('instagram link');

    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('target', '_blank');
  });

  it('renders LanguageSwitcher within the correct container', () => {
    const { container } = render(LeftSidebar);
    const switcherContainer = container.querySelector('.language-switcher-mobile');
    expect(switcherContainer).toBeInTheDocument();
  });
});
