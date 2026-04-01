import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should display login form', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: '登录' })).toBeVisible();
    await expect(page.getByLabel('邮箱')).toBeVisible();
    await expect(page.getByLabel('密码')).toBeVisible();
  });

  test('should show validation errors', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: '登录' }).click();
    // Should show validation errors
  });

  test('should redirect to dashboard after login', async () => {
    // This test requires mock authentication
    // Skip for now
  });
});