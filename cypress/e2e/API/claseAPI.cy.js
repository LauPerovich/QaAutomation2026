describe("Rick & Morty", () => {
  it("Ver a Rick Sanchez", () => {
    cy.intercept("GET", "**/page-data**").as("personajes");
    cy.visit("https://rickandmortyapi.com/");
    cy.wait("@personajes").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });
});
