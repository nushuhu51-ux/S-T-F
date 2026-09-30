import { expect, test } from '@playwright/test';

test('homepage renders Samuel Teshale Terefe heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Samuel');
});

test('navigation contains Projects link', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
});

test('Contact link is present in navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});
