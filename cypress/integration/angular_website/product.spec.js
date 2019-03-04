context('manage product tests (CRUD)', () => {
    // Open the browser before each test
    beforeEach(() => {
    cy.visit('')
    })
    // Our test to create a new product
    it("creates a new product", () => {
    // Click on the add product button
    cy.get('a').click();
    // Check that we're now on the 'add product' page
    cy.url().should('include', '/product-add');
    // Fill out the form
    cy.get('#mat-input-0').type("carrots");
    cy.get('#mat-input-1').type("orange vegetable");
    cy.get('#mat-input-2').type("10");
    // Click the submit button
    cy.get('[type="submit"]').click();
    // Finally check that the product has been created.
    cy.get('h2').should('contain','carrots');
    })
  });