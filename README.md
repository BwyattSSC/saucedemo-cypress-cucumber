# SauceLabs Demo Utilizing Cypress and Cucumber Plugin

## Purpose

Repository provides a working example of using Cypress and Cucumber.

## Running test

1. npm install
2. `npx cypress open`
3. Select `E2E Testing`
4. Select `Chrome` and press `Start E2E Testing in Chrome`
5. Select the test script `cypress/e2e/LoginPage.feature`
6. Watch the test (hopefully) pass!

## TODO

- Lift the assertions out of actions into the step definition level.
- Create a 'Forms' folder to store element constants information for a page.
- Implement Aliases from webpack.
- Find an extension that allows easy of navigation between Feature files and Step definitions
- Add feature tagging

## Reference Material

[Stop using Page Objects and Start using App Actions by Gleb Bahmutov](<[www.google.com](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)>)

[Page objects vs. App actions in Cypress by Filip Hric](https://applitools.com/blog/page-objects-app-actions-cypress/)

[Article on PageObject by Margin Fowler](https://martinfowler.com/bliki/PageObject.html)
