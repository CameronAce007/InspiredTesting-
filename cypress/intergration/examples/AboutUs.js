/// <reference types="cypress"/>
/// <reference types="cypress-iframe" />

import 'cypress-iframe';

describe('AboutUs', function(){

    it('Who are we page', function(){


        cy.visit('https://dev.inspiredtesting.com/');

        // Handle iframe for the cookie banner
        cy.frameLoaded("iframe[title='Cookie banner']");
        cy.iframe("iframe[title='Cookie banner']")
          .find("#sp-accept")
          .should('be.visible')
          .click();

        // Check Banner is not visible
        cy.get("iframe[title='Cookie banner']").scrollIntoView().should('not.be.visible');

        cy.contains('a', 'About Us').click();
        cy.url().should('include', 'about-us');

        cy.contains('a', 'View More').scrollIntoView().click();
        cy.get('h1').should('contain.text', 'Careers');



    })
})