import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  countInventoryItems,
  viewInventoryPage,
  addSpecificItemToCart,
} from "../../../actions/InventoryPage";

Then("I see the inventory page", () => {
  viewInventoryPage();
});

Then("the user should see {int} inventory items", (count: number) => {
  countInventoryItems(count);
});

When(
  "the user clicks the {string} button for {string}",
  (buttonName: string, itemName: string) => {
    addSpecificItemToCart(buttonName, itemName);
  }
);
