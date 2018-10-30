import user from "../fixtures/test_user.json";

Cypress.Commands.add("createUser", () => {
  cy.request({
    url: "https://beta.quantalytix.com/api/registration",
    headers: { "Content-type": "application/json" },
    // credentials: "include",
    method: "POST",
    body: JSON.stringify(user)
  }).then(response => response.body.user);
});

//there is probably no point to this...but it's for practice
Cypress.Commands.add("loginUser", () => {
  cy.request({
    url: "https://beta.quantalytix.com/api/user/login",
    headers: { "Content-type": "application/json" },
    // credentials: "include",
    method: "POST",
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
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
