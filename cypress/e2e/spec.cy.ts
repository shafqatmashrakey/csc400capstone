describe('template spec', () => {
  it('passes', () => {
    // Visiting the URL
    cy.visit('http://localhost/capstone2/index.php');

    // Asserting the title of the page
    cy.title().should('include', 'Login');

    // Typing text into an input field if it exists
    cy.get('#your-input-field').then($input => {
      if ($input.length > 0) {
        cy.wrap($input).type('Some text');
      } else {
        // Log a message indicating that the input field was not found
        cy.log('Input field #your-input-field not found, skipping typing text');
      }
    });

    // Asserting the text of an element if it exists
    cy.get('.your-element-class').then($element => {
      if ($element.length > 0) {
        cy.wrap($element).should('contain.text', 'Expected Text');
      }
    });

    // Clicking on a link and asserting the URL if it exists
    cy.get('.your-link-class').then($link => {
      if ($link.length > 0) {
        cy.wrap($link).click();
        cy.url().should('include', '/new-page');
      }
    });

    // Asserting the existence of an element
    cy.get('.your-element-class').should('exist');

    // Asserting the value of an attribute if the element exists
    cy.get('.your-element-class').then($element => {
      if ($element.length > 0) {
        cy.wrap($element).should('have.attr', 'data-attribute', 'expected-value');
      }
    });
  });
});
