// @ts-check
const { test, expect } = require('@playwright/test');

test('przeglądarka działa', async ({ page }) => {
  await page.setContent('<form><input id="imie" required></form>');
  await expect(page.locator('#imie')).toBeVisible();
});
