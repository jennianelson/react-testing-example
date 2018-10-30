describe("login", () => {
  // use it.only to run just that test
  it("logs in user", () => {
    const user = {
      email: "jennifernelson@quantalytix.com",
      password: "password"
    };
    cy.visit("/")
      .get('[name="email"]')
      .type(user.email)
      .get('[name="password"]')
      .type(user.password)
      .get("#loginSubmit")
      .click()
      .getByTestId("email-display")
      .contains(user.email);
  });
  it.skip(`should not submit a blank field`, () => {
    cy.visit("/")
      .get("#loginSubmit")
      .click();
    // .get("[data-testid=login-error]")
    // .should("not.have.text", "Account does not exist.");
    // .should("not.contain", "Account");
  });
  it(`should show an error message if there's a message`, () => {
    const user = {
      email: "jennifernelson@quantalytix.com",
      password: "nottherightpassword"
    };
    cy.visit("/")
      .get('[name="email"]')
      .type(user.email)
      .get('[name="password"]')
      .type(user.password)
      .get("#loginSubmit")
      .click()
      .getByTestId("login-error");
  });
});

// how to debug within test
// .then(sub = {
// debugger
// return sub
// })
