const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('https:/xvelichkov-grades.onrender.com/');
    const heading = await page.$('p');
    const text = await heading.textContent();
    expect(text).toContain('Grades:');
  });
  