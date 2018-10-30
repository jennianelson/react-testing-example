describe("logout", () => {
  it("logs out user", () => {
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
      .get("[data-testid=logout]")
      .click()
      .get("[data-testid=login]")
      .should("have.text", "Login");
  });
});
