# playwright-web-automation
Web Automation using Playwright

1. npm install & npm --version
2. node install & node --version
3. create Playwright folder
4. install playwright: npm init playwright@latest
    Initializing project in '.'
    ✔ Do you want to use TypeScript or JavaScript? · JavaScript
    ✔ Where to put your end-to-end tests? · tests
    ✔ Add a GitHub Actions workflow? (y/N) · true
    ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
5. Configure projects for major browsers if you need on playwright.config
5. running test:
    a. running all files: npx playwright test
    b. running specific file: npx playwright test example.spec.js
6. show report: 
    npx playwright show-report

Playwright + Cucumber
1. npm install -D @cucumber/cucumber playwright
2. npx playwright install
3. running test: 
    a. running all files: npx cucumber-js
    b. running specific tag: npx cucumber-js --tags @tags
