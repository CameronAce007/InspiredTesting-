/// <reference types="cypress"/>
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Frames Test', function(){
    it('Demo example', function(){

cy.visit("https://rahulshettyacademy.com/#/practice-project")

cy.frameLoaded("#course-iframe")

cy.iframe().find("a[href*='mentorship']").eq(0).click()

cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


    })
})
