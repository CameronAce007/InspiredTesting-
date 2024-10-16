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

        cy.iframe('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA')
        .find("select[name='field_3296038914']").eq(0).select('South Africa')
  
        cy.wait(5000);

        cy.iframe('#ssf_M041SzNMTjPQTTU3TNI1STMw1U00NDTXTTU0N042S0kxNTMwAQA')
        .find("select[name='field_200000000474115']").select('Training').should('have.value','Training')



    });
})


