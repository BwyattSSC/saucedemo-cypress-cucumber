import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { verifyShoppingCartBadgeCount } from "../../../actions/Header";

Then(
  "the header's shopping cart badge displays {int}",
  (itemsInCart: number) => {
    verifyShoppingCartBadgeCount().should("eq", itemsInCart.toLocaleString());
  }
);
