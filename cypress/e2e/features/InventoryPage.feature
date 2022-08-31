Feature: Inventory Page

  Background:
    Given the "standard_user" is logged in

  Scenario: Correct number of inventory items
    Then the user should see 6 inventory items

  Scenario: Add specific item to cart
    When the user clicks the "Add to cart" button for "Sauce Labs Bolt T-Shirt"
    Then the header's shopping cart badge displays 1
