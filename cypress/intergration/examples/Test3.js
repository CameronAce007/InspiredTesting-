/// <reference types="Cypress" />

describe('My Third Test suite', function()  
{

      //test step
     it('My ThirdTest Case!', function(){
       
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/") // navigating to the URL
       // selecting a checkbox 
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

       // unchecking a checkbox
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

       // selecting multiple checkboxes
       cy.get('input[type="checkbox"]').check(['option2','option3'])


       // Static dropdown
       cy.get('select').select('option2').should('have.value','option2')

       //Dynamic dropdown
       cy.get('#autocomplete').type('south africa')

       cy.get('.ui-menu-item div').each(($e1, _index, _$list) => {

        if($e1.text()==="south africa")

        {
          $e1.click()  
        }
        
      })
      //Autocomplete
      cy.get('#autocomplete').should('have.value','south africa')

       // Visible and Invisible
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      // Radio buttons

      cy.get('[value="radio2"]').check().should('be.checked')
     
    })
  })