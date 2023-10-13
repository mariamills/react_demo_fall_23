describe('APOD Component', () => {
  // before each test, we need to mock the API response
  beforeEach(() => {
    // mock API response
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod*', {
      body: {
        title: 'Astronomy Picture of the Day',
        explanation: 'This is a test explanation',
        url: 'https://images.nasa.gov/1',
        date: '2023-10-12',
      },
    }).as('getApod');

    // goto the APOD page
    cy.visit('http://localhost:3000/apod');
  });

  it('should display the APOD content', () => {
    // wait for the API response
    cy.wait('@getApod');

    // check the content
    cy.contains('h1', '🚀Astronomy Picture of the Day (APOD)');
    cy.contains('h2', 'Astronomy Picture of the Day');
    cy.contains('p', 'This is a test explanation');
    cy.get('img').should('have.attr', 'src', 'https://images.nasa.gov/1');
  });
});
