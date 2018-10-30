import user from "../fixtures/test_user.json";

describe("login", () => {
  // use it.only to run just that test
  it.only("logs in existing user", () => {
    cy.visit("/")
      .getLoggedIn()
      .get("[data-testid=login-response]")
      .should("contain", user.email);
  });
  it(`should not submit a blank field`, () => {
    cy.visit("/")
      .get("#loginSubmit")
      .click()
      .get("[data-testid=login-response]")
      .should("not.contain", "does not exist");
  });
  it(`should show an error message if there's a message`, () => {
    cy.visit("/")
      .getLoggedIn(user.email, "nottherightpassword")
      .get("[data-testid=login-response]")
      .should("not.contain", user.email);
  });
});

// how to debug within test
// .then(sub = {
// debugger
// return sub
// })
