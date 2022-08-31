import { shoppingCartBadge } from "../forms/HeaderPage";

export function verifyShoppingCartBadgeCount(): Cypress.Chainable<string> {
  return cy.get(shoppingCartBadge).invoke("text");
}

export function getShoppingCartBadge(): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(shoppingCartBadge);
}
