export function verifyShoppingCartBadgeCount(itemsInCart: number): void {
  cy.get(".shopping_cart_badge")
    .invoke("text")
    .then((text) => {
      expect(itemsInCart.toLocaleString()).to.eq(text);
    });
}
