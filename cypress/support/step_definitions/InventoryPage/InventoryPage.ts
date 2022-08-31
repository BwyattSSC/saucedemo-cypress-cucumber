import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  countInventoryItems,
  viewInventoryPage,
  addSpecificItemToCart,
} from "../../actions/InventoryPage";
import { getShoppingCartBadge } from "../../actions/Header";

When(
  "the user clicks the {string} button for {string}",
  (buttonName: string, itemName: string) => {
    addSpecificItemToCart(buttonName, itemName);
  }
);

Then("I see the inventory page", () => {
  viewInventoryPage().should("eq", "https://www.saucedemo.com/inventory.html");
});

Then("the user should see {int} inventory items", (count: number) => {
  countInventoryItems().should("have.length", count);
});

Then("the header's shopping cart badge does not exist", () => {
  getShoppingCartBadge().should("not.exist");
});
