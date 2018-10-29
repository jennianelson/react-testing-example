describe("registration", () => {
  it("should register a new user", () => {
    const user = {
      firstName: "Jennifer",
      lastName: "Nelson",
      email: "jennifernelson@quantalytix.com",
      password: "password"
    };
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
      .get("#registerSubmit")
      .click()
      .get("div.App-link")
      .should("have.text", "Login");
  });
});
