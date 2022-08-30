import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {
  visitLoginPage,
  inputUserName,
  inputUserPassword,
  pressLoginButton,
  loginWithSpecifiedUser,
} from "../../../actions/LoginPage";

Given("the {string} is logged in", (loginType: string) => {
  // TODO: Move this out into a fixture.
  const validLoginTypes = [
    "standard_user",
    "locked_out_user",
    "problem_user",
    "performance_glitch_user",
  ];

  if (validLoginTypes.includes(loginType)) {
    loginWithSpecifiedUser(loginType);
  } else {
    throw new Error(`${loginType} is not a valid login`);
  }
});

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
