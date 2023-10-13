describe('about tests', () => {
  // testing the github button
  it('github', () => {
    cy.visit('http://localhost:3000/about');
    cy.get('.btn')
      .contains('GitHub')
      .should(
        'have.attr',
        'href',
        'https://github.com/mariamills/react_demo_fall_23'
      );
  });
});
