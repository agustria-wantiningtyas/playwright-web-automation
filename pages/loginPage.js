const locators = require('../locators/loginPage.locators');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator(locators.usernameField);
    this.passwordField = page.locator(locators.passwordField);
    this.loginButton = page.locator(locators.loginButton);
    this.dashboardText = page.locator(locators.dashboardText);
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async isLoggedIn() {
    await this.page.waitForTimeout(3000);
    return await this.dashboardText.isVisible();
  }
}

module.exports = { LoginPage };
