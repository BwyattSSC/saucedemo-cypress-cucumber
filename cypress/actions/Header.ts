export function verifyShoppingCartBadgeCount(): Cypress.Chainable<string> {
  return cy.get(".shopping_cart_badge").invoke("text");
}
