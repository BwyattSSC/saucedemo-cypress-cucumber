Feature: Login
  Scenario: Succesful Login into saucedemo.com
    When I visit the site saucedemo
    And I enter the user name "standard_user"
    And I enter the user password "secret_sauce"
    And I press the login button
    Then I see the inventory page