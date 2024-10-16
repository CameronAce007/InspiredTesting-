/// <reference types="cypress"/>

describe('href attribute', function()  
{

      
     it('grabbing href attribute ', function(){
       
       cy.visit(Cypress.env('url')+"/AutomationPractice/")

       cy.get('#opentab').then(function(e1){

         const url = e1.prop('href')

         cy.visit(url)
         cy.origin(url, () =>{

          cy.get("div.sub-menu-bar a[href*='about']").click

         })
    
       })

     })
     
 })  