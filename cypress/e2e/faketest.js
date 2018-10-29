describe("user clicks submit", () => {
  it("logs in user", () => {
    const user = cy;
    user
      .visit("/")
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
