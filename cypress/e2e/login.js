describe("login", () => {
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
      .get(".logged-in-success")
      .should("have.text", "You are logged in.");
  });
});

// how to debug within test
// .then(sub = {
// debugger
// return sub
// })
