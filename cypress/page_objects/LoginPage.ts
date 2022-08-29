export function visitLoginPage(): void {
  cy.visit("https://www.saucedemo.com/");
}

export function inputUserName(userName: string): void {
  cy.get('[id="user-name"]').type(userName);
}

export function inputUserPassword(userPassword: string): void {
  cy.get('[id="password"]').type(userPassword);
}

export function pressLoginButton(): void {
  cy.get('[id="login-button"]').click();
}
