import cy from 'cypress';
describe('Service Page', () => {
    beforeEach(() => {
      // Visit the service page before each test
      cy.visit('/service');
    });
  
    it('should display the main heading', () => {
      cy.get('.service-text h1').should('be.visible').and('have.text', 'Empowering Farmers');
    });
  
    it('should display the service description', () => {
      cy.get('.service-description').should('be.visible').and('contain', 'Our Services');
    });
  
    it('should display the additional content section', () => {
      cy.get('.additional-content').should('be.visible');
    });
  
    it('should display three cards in the additional content section', () => {
      cy.get('.card-serve').should('have.length', 3);
    });
  
    it('should navigate to more info page when "More Info" button is clicked', () => {
      // Click the first "More Info" button
      cy.get('.more-info-button').first().click();
      // Check if the URL contains '/more-info'
      cy.url().should('include', '/more-info');
      // You may add additional assertions here based on the behavior of the "More Info" page
    });
  });
