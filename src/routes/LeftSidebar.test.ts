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
    expect(imgDiv.style.backgroundImage).toContain('shenna.avif');
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

  it('renders social media SVG icons', () => {
    const { container } = render(LeftSidebar);
    const githubImg = container.querySelector('a[title="github link"] img');
    const linkedinImg = container.querySelector('a[title="linkedin link"] img');
    const instagramImg = container.querySelector('a[title="instagram link"] img');

    expect(githubImg).toBeInTheDocument();
    expect(githubImg?.getAttribute('src')).toMatch(/^data:image\/svg\+xml/);

    expect(linkedinImg).toBeInTheDocument();
    expect(linkedinImg?.getAttribute('src')).toMatch(/^data:image\/svg\+xml/);

    expect(instagramImg).toBeInTheDocument();
    expect(instagramImg?.getAttribute('src')).toMatch(/^data:image\/svg\+xml/);
  });

  it('renders LanguageSwitcher within the correct container', () => {
    const { container } = render(LeftSidebar);
    const switcherContainer = container.querySelector('.language-switcher-mobile');
    expect(switcherContainer).toBeInTheDocument();
  });
});
