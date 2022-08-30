export function viewInventoryPage(): void {
  cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
}

export function countInventoryItems(count: number): void {
  cy.get(".inventory_item").should("have.length", count);
}

export function addSpecificItemToCart(
  buttonName: string,
  itemName: string
): void {
  cy.get(".inventory_item_name").each(($el, index) => {
    if ($el.text() === itemName) {
      cy.get("[id^=add-to-cart]").then((res) => {
        const elementId = res[index].id;
        cy.get(`[id=${elementId}]`)
          .invoke("text")
          .then((text) => {
            expect(buttonName).to.equal(text);
          });
        cy.get(`[id=${elementId}]`).click();
      });
    }
  });
}
