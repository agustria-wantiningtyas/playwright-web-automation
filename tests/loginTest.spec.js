const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('should log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  expect(await loginPage.isLoggedIn()).toBeTruthy();
});
