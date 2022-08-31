import elements from "../forms/LoginPage";

export function visitLoginPage(): void {
  cy.visit("https://www.saucedemo.com/");
}

export function inputUserName(userName: string): void {
  cy.get(`[id=${elements.userName}]`).type(userName);
}

export function inputUserPassword(userPassword: string = "secret_sauce"): void {
  cy.get(`[id=${elements.password}]`).type(userPassword);
}

export function pressLoginButton(): void {
  cy.get(`[id=${elements.loginButton}]`).click();
}

export function loginWithSpecifiedUser(userName: string): void {
  visitLoginPage();
  inputUserName(userName);
  inputUserPassword();
  pressLoginButton();
}
