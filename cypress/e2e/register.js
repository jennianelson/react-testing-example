import user from "../fixtures/test_user.json";

describe("registration", () => {
  it("should register a new user", () => {
    cy.visit("/")
      .get("#register")
      .click()
      .get('[name="firstName"]')
      .type(user.firstName)
      .get('[name="lastName"]')
      .type(user.lastName)
      .get('[name="email"]')
      .type(user.email)
      .get('[name="password"]')
      .type(user.password)
      .get("[data-testid=submit-registration]")
      .click()
      .get("[data-testid=registration-success]")
      .should("have.text", "You are registered!");
  });
});
