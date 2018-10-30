import user from "../fixtures/test_user.json";

Cypress.Commands.add("assertHome", () => {
  cy.url().should("eq", `${Cypress.config().baseUrl}/`);
});

Cypress.Commands.add(
  "getLoggedIn",
  (email = user.email, password = user.password) => {
    cy.get('[name="email"]')
      .type(email)
      .get('[name="password"]')
      .type(password)
      .get("#loginSubmit")
      .click();
  }
);

Cypress.Commands.add("createUser", () => {
  cy.request({
    url: "https://beta.quantalytix.com/api/registration",
    headers: { "Content-type": "application/json" },
    // credentials: "include",
    method: "POST",
    body: JSON.stringify(user)
  }).then(response => response.body.user);
});

Cypress.Commands.add("refreshAuth", () => {
  cy.request({
    url: "https://beta.quantalytix.com/api/user/refresh",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    method: "POST"
  }).then(response => response.body.user);
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
