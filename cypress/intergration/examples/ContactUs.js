/// <reference types="cypress"/>
/// <reference types="cypress-iframe" />

import 'cypress-iframe';

describe('My First Test suite', function() {

    it('My FirstTest Case!', function(){
       
        cy.visit("https://dev.inspiredtesting.com/");
        // assert if the logo text is correctly displayed
        // cy.get('img[class="logo-image "]').should('have.text','INSPIRED TESTING POWERED BY DYNAMIC TECHNOLOGIES')

        cy.wait(5000);
      
        // Handle iframe for the cookie banner
        cy.frameLoaded("iframe[title='Cookie banner']");
        cy.iframe("iframe[title='Cookie banner']")
          .find("#sp-accept")
          .should('be.visible')
          .click();

        // Check Banner is not visible
        cy.get("iframe[title='Cookie banner']").scrollIntoView().should('not.be.visible');

        cy.contains('a', 'Contact Us').click();
        
        cy.wait(5000);

        // Clicking the 'Get in Touch' button
        cy.get('.top-get-in-touch-holder > .sp-module > .sp-module-content > .custom > a > #getintouch')
          .click({force: true});

        cy.wait(5000);

        // Ensure the form iframe is loaded first
        cy.frameLoaded('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA');

        // Wait for stability
        cy.wait(5000);

        // Fill out the form fields inside the iframe
        // cy.iframe('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA')
        //   .find("input[default-placeholder='*First Name']")
        //   .should('be.visible') // Ensure element is visible before interacting
        //   .clear().type('Cameron');
        cy.iframe('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA')
        .find("input[default-placeholder='*First Name']")
        .should('to.be.visible')  // Ensure the element is visible
        .clear({ force: true })  // Force action
        .type('Cameron', { force: true });

        cy.wait(5000);

        cy.iframe('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA')
          .find("input[placeholder='Last Name']")
          .should('be.visible') // Ensure visibility
          .clear().type('Nkomo');

        cy.wait(5000);

        cy.iframe('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA')
          .find("input[placeholder='*Email']")
          .should('be.visible') // Ensure visibility
          .clear().type('cnkomo@inspiredtesting.com');

        cy.wait(5000);

        cy.iframe('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA')
        .find("input[placeholder='Mobile Phone']")
        .should('be.visible') // Ensure visibility
        .clear().type('0119853456');

        cy.wait(5000);

        //Dynamic dropdown
        // cy.get('#field_1field_3296038914').type('south africa');  

        // //Wait for the dropdown menu items to be visible and iterate over them
        // cy.get('.country').should('be.visible').each(($e1) => {
        // // Use case-insensitive comparison for text
        // if ($e1.text().trim().toLowerCase() === 'south africa') 
        // {
        // cy.wrap($e1).click();  // Wrap the element in Cypress and click
        // }
        cy.iframe('#ssf_M04zMTU1T07UTU1OMtc1MTaw1LU0MrLUTbRMMbI0MEo2NjdOBQA')
        .find("select[name='field_3296038914']").eq(0).select('South Africa');
  
        cy.wait(5000);

        // Static dropdown
        cy.get('select').select('option3').should('have.value','option3');


    });
})


