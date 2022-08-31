import { shoppingCartBadge } from "../forms/HeaderPage";

export function verifyShoppingCartBadgeCount(): Cypress.Chainable<string> {
  return cy.get(shoppingCartBadge).invoke("text");
}
