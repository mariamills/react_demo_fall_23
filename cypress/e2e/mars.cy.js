describe('Mars Component', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/*',
      {
        body: {
          photos: [
            {
              rover: {
                name: 'Curiosity',
                landing_date: '2023-10-12',
              },
              earth_date: '2023-10-15',
              img_src: 'https://images.nasa.gov/1',
              camera: {
                full_name: 'camera1',
              },
            },
          ],
        },
      }
    ).as('getMars');

    cy.visit('http://localhost:3000/mars');
  });

  it('should display the Mars content', () => {
    cy.wait('@getMars');

    cy.contains('h1', '🛰️Mars Rover Photos');
    cy.contains('h3', 'Curiosity');
    cy.contains('h3', '2023-10-12');
    cy.contains('p', '2023-10-15');
    cy.contains('p', 'camera1');
    cy.get('img').should('have.attr', 'src', 'https://images.nasa.gov/1');
  });
});
