export function visitLoginPage(): void {
  cy.visit("https://www.saucedemo.com/");
}

export function inputUserName(userName: string): void {
  cy.get('[id="user-name"]').type(userName);
}

export function inputUserPassword(userPassword: string = "secret_sauce"): void {
  cy.get('[id="password"]').type(userPassword);
}

export function pressLoginButton(): void {
  cy.get('[id="login-button"]').click();
}

export function loginWithSpecifiedUser(userName: string): void {
  visitLoginPage();
  inputUserName(userName);
  inputUserPassword();
  pressLoginButton();
}
