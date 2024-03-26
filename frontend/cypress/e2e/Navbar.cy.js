import cy, { context } from 'cypress';

describe('Navbar Tests', () => {
    beforeEach(() => {
      cy.visit('/'); // Adjust if your base URL differs
    });
  
    describe('Unauthenticated User', () => {
      it('Displays the mobile menu on click', () => {
        cy.viewport(768, 1024); // Set viewport to mobile size
        cy.get('.menu-icon').click();
        cy.get('.nav-menu').should('have.class', 'active');
      });
  
      it('Shows login and services links for unauthenticated users', () => {
        cy.get('.nav-links').contains('Log In').should('be.visible');
        cy.get('.nav-links').contains('Services').should('be.visible');
      });
  
      it('Hides mobile menu on link click', () => {
        cy.viewport(768, 1024); // Set viewport to mobile size
        cy.get('.menu-icon').click();
        cy.get('.nav-links').contains('Home').click();
        cy.get('.nav-menu').should('not.have.class', 'active');
      });
    });
  
    describe('Responsive Button Visibility', () => {
      it('Hides the menu button on desktop sizes', () => {
        cy.viewport(1024, 768); // Desktop size
        cy.get('.menu-icon').should('not.be.visible');
      });
  
      it('Shows the menu button on mobile sizes', () => {
        cy.viewport(768, 1024); // Mobile size
        cy.get('.menu-icon').should('be.visible');
      });
    });
  
    // Mocking the logged in state will depend on how your application handles authentication.
    // The following is a general approach and might need adjustments.
    describe('Authenticated User', () => {
      beforeEach(() => {
        // Here we're using localStorage to simulate an authenticated user
        // This presumes your app uses localStorage for keeping the auth state
        cy.visit('/', {
          onBeforeLoad(win) {
            win.localStorage.setItem('loggedIn', 'true');
          },
        });
      });
  
      it('Shows profile and logout for authenticated users', () => {
        // This test assumes that setting 'loggedIn' in localStorage
        // would affect the rendering. You may need to adjust this approach based on your auth setup.
        // For a more accurate simulation, you might need to programmatically log in the user
        // by interacting with the login form or using an API call setup.
  
        cy.get('.nav-links').contains('My Profile').should('be.visible');
        cy.get('.nav-links').contains('Log Out').should('be.visible');
      });
    });
  });