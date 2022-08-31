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
  getAllInventoryItems().each(($el, index) => {
    if ($el.text() === itemName) {
      cy.get(elements.buttonInventory).then((res) => {
        const elementId = res[index].id;
        cy.get(`[id=${elementId}]`).invoke("text");
        cy.get(`[id=${elementId}]`).click();
      });
    }
  });
}

function getAllInventoryItems(): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(elements.inventoryItemName);
}
