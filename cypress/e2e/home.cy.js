describe('home tests', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.navbar-brand').contains('React Demo');
  });

  // testing the about link
  it('about', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.navbar-brand').contains('React Demo');
    cy.get('.nav-link').contains('About').click();
    cy.location('pathname').should('eq', '/about');
  });

  // testing the APOD link
  it('apod', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-link').contains('APOD').click();
    cy.location('pathname').should('eq', '/apod');
  });

  // testing the Mars link
  it('mars', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-link').contains('Mars').click();
    cy.location('pathname').should('eq', '/mars');
  });

  // testing APOD button
  it('apod button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.btn').contains('Astro Picture of the Day').click();
    cy.location('pathname').should('eq', '/apod');
  });

  // testing Mars button
  it('mars button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.btn').contains('Mars Rover Photo').click();
    cy.location('pathname').should('eq', '/mars');
  });
});
