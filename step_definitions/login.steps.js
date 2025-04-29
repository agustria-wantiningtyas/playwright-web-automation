const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { LoginPage } = require('../pages/loginPage');

let browser, context, page, loginPage;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
});

After(async () => {
  await browser.close();
});

Given('I am on the login page', async () => {
  await loginPage.goto();
});

When('I login with username {string} and password {string}', async (username, password) => {
  await loginPage.login(username, password);
});

Then('I should see the dashboard', async () => {
  if (!(await loginPage.isLoggedIn())) {
    throw new Error('Dashboard not visible');
  }
});
