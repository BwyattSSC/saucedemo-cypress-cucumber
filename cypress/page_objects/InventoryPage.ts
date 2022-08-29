export function viewInventoryPage(): void {
  cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
}
