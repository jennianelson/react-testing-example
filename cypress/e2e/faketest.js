describe("user clicks submit", () => {
  it("logs in user", () => {
    const user = cy;
    user
      .visit("http://localhost:3000")
      .get('[type="submit"]')
      // .then(sub = {
      // debugger
      // return sub
      // })
      .click()
      .get(".App-header > div")
      .should("have.text", "You're logged in!");
  });
});
