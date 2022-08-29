import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { viewInventoryPage } from "../../../page_objects/InventoryPage";

Then("I see the inventory page", () => {
  viewInventoryPage();
});
