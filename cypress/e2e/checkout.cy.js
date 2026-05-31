describe("Checkout - Sauce Demo", () => {
  describe("Sesión con standard_user", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.url().should("include", "/inventory.html");

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.url().should("include", "/cart.html");
      cy.get('[data-test="checkout"]').click();
      cy.url().should("include", "/checkout-step-one.html");
    });

    it("Completar checkout con datos válidos", () => {
      cy.get('[data-test="firstName"]').type("Juan");
      cy.get('[data-test="lastName"]').type("Pérez");
      cy.get('[data-test="postalCode"]').type("5000");
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();
    });

    it("Checkout sin completar campos obligatorios", () => {
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Error: First Name is required",
      );
      cy.get('[data-test="continue"]').click();
      cy.url().should("include", "/checkout-step-one.html");
    });
  });
});
