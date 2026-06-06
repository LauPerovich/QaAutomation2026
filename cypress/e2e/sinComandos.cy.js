describe("SauceDemo - Sin comandos personalizados", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  it.only("Compra completa con un producto", () => {
    // Agregar producto al carrito
    cy.agregarAlCarrito("sauce-labs-bike-light");
    cy.get(".cart_item").should("have.length", 1);

    // Ir al carrito
    cy.irAlCarrito();

    // cy.wait(5000)

    // Iniciar checkout
    cy.completarCheckout("Juan", "Dudoso", "5000");

    // Confirmar pedido
    cy.confirmarPedido();
  });

  it("Compra completa con dos productos", () => {
    // Agregar dos productos
    cy.agregarAlCarrito("sauce-labs-backpack");
    cy.get(".cart_item").should("have.length", 1);
    cy.agregarAlCarrito("sauce-labs-bike-light");
    cy.get(".cart_item").should("have.length", 2);

    // Ir al carrito
    cy.irAlCarrito();
    cy.get(".cart_item").should("have.length", 2);

    // Iniciar checkout
    cy.completarCheckout("Laura", "Perovich", "5107");

    // Confirmar pedido
    cy.confirmarPedido();
  });

  it("Logout exitoso después de una compra", () => {
    // Agregar producto y completar compra
    cy.agregarAlCarrito("sauce-labs-bike-light");
    cy.get(".cart_item").should("have.length", 1);

    cy.irAlCarrito();
    cy.get(".cart_item").should("have.length", 1);

    cy.completarCheckout("Juan", "Pérez", "5000");

    cy.logout();
  });
});
