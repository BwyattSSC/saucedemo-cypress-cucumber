import elements from "../forms/InventoryPage";

export function viewInventoryPage(): Cypress.Chainable<string> {
  return cy.url();
}

export function countInventoryItems(): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(elements.inventoryItem);
}

export function addSpecificItemToCart(
  buttonName: string,
  itemName: string
): void {
  cy.get(elements.inventoryItemName).each(($el, index) => {
    if ($el.text() === itemName) {
      cy.get(`[id^=${elements.addToCart}]`).then((res) => {
        const elementId = res[index].id;
        cy.get(`[id=${elementId}]`).invoke("text");
        cy.get(`[id=${elementId}]`).click();
      });
    }
  });
}
