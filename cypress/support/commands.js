Cypress.Commands.add("login", (user, pass) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type(user);
  cy.get('[data-test="password"]').type(pass);
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add("agregarAlCarrito", (producto) => {
  cy.get(`[data-test="add-to-cart-${producto}"]`).click();
  cy.get(".shopping_cart_badge").should("have.text", "1");
});

Cypress.Commands.add("irAlCarrito", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});

Cypress.Commands.add("confirmarPedido", () => {
  cy.get('[data-test="finish"]').click();
  cy.get(".complete-header").should("have.text", "Thank you for your order!");
});
