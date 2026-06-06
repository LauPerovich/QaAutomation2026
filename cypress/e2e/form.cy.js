describe("Formulario - Academy", () => {
  beforeEach(() => {
    cy.visit("https://cypress-playground.vercel.app/forms");
  });

  it("Formulario buenas prácticas", () => {
    cy.fixture("formRegistro").then((data) => {
      const input = data.registroValido;
      cy.get("#bp-name").type(input.nombre);
      cy.get("#bp-email").type(input.email);
      cy.get("#bp-comments").type(input.comentarios);
      cy.get("#bp-country").select(input.pais);
      cy.get("#bp-birthdate").type(input.fechaNacimiento);
      cy.get(`[data-testid="bp-gender-${input.genero}"]`)
        .check()
        .should("be.checked");
      input.intereses.forEach((interes) => {
        cy.get(`[data-testid="bp-interest-${interes}"]`)
          .check()
          .should("be.checked");
      });
      cy.get('[data-testid="bp-submit"]').click();
    });
  });
});
