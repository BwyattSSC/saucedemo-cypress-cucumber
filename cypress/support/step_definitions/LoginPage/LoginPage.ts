import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  visitLoginPage,
  inputUserName,
  inputUserPassword,
  pressLoginButton,
} from "../../../page_objects/LoginPage";

When("I visit the site saucedemo", () => {
  visitLoginPage();
});

And("I enter the user name {string}", (userName: string) => {
  inputUserName(userName);
});

And("I enter the user password {string}", (userPassword: string) => {
  inputUserPassword(userPassword);
});

And("I press the login button", () => {
  pressLoginButton();
});
