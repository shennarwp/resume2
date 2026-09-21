import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const locales = ['', 'de', 'id'];

for (const locale of locales) {
  test(`renders ${locale || 'English'} metadata, content, and assets`, async ({ page }) => {
    const browserErrors: string[] = [];
    page.on('pageerror', (error) => browserErrors.push(error.message));
    await page.goto(locale ? `/${locale}/` : '/');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('.right h1')).toHaveCount(4);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://shenna.rwpiri.com/${locale ? `${locale}/` : ''}`,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://shenna.rwpiri.com/og-image.svg',
    );
    await expect(page.locator('html')).toHaveAttribute('lang', locale || 'en');
    const brokenImages = await page.locator('img').evaluateAll(
      (images) =>
        images.filter((image) => {
          const img = image as HTMLImageElement;
          return !img.complete || img.naturalWidth === 0;
        }).length,
    );
    expect(brokenImages).toBe(0);
    expect(browserErrors).toEqual([]);
  });
}

test('supports keyboard navigation and visible focus', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toHaveClass(/skip-link/);
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toBeVisible();
  await expect(page.locator('button[aria-pressed]:visible').first()).toBeVisible();
});

test('passes accessibility, heading, and language-control checks', async ({ page }) => {
  await page.goto('/');
  const headings = await page
    .locator('h1, h2, h3, h4, h5, h6')
    .evaluateAll((elements) => elements.map((element) => Number(element.tagName.substring(1))));
  expect(headings[0]).toBe(1);
  expect(headings.every((level, index) => index === 0 || level <= headings[index - 1] + 1)).toBe(
    true,
  );
  await expect(page.locator('button[aria-pressed="true"]:visible')).toHaveCount(1);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('renders correctly for print', async ({ page }) => {
  await page.goto('/');
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.resume-grid')).toBeVisible();
  await expect(page.locator('.language-switcher-desktop')).toBeHidden();
});
