Feature: Inventory Page

  Background:
    Given the "standard_user" is logged in

  Scenario: Correct number of inventory items
    Then the user should see 6 inventory items

  Scenario: Add specific item to cart
    When the user clicks the "Add to cart" button for "Sauce Labs Bolt T-Shirt"
    Then the header's shopping cart badge displays 1

  Scenario: Add multiple items to cart
    When the user clicks the "Add to cart" button for "Sauce Labs Bolt T-Shirt"
    And the user clicks the "Add to cart" button for "Sauce Labs Onesie"
    Then the header's shopping cart badge displays 2

  Scenario: Remove specific item from cart
    When the user clicks the "Add to cart" button for "Sauce Labs Bolt T-Shirt"
    And the user clicks the "Remove" button for "Sauce Labs Bolt T-Shirt"
    Then the header's shopping cart badge does not exist

