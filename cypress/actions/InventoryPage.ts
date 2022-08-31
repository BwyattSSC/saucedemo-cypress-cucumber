export function viewInventoryPage(): Cypress.Chainable<string> {
  return cy.url();
}

export function countInventoryItems(): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(".inventory_item");
}

export function addSpecificItemToCart(
  buttonName: string,
  itemName: string
): void {
  cy.get(".inventory_item_name").each(($el, index) => {
    if ($el.text() === itemName) {
      cy.get("[id^=add-to-cart]").then((res) => {
        const elementId = res[index].id;
        cy.get(`[id=${elementId}]`).invoke("text");
        cy.get(`[id=${elementId}]`).click();
      });
    }
  });
}
