/// <reference types="cypress"/>

describe('My Third Test suite', function()  
{

      
     it('Web tables examples', function(){
       
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       cy.get('tr td:nth-child(2)').each(($e1, index, $list) =>{

           const text=$e1.text()
           //moving from your sibling to your design element
           if(text.includes("python"))
           {

             cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

               const priceText = price.text()
               expect(priceText).to.equal('25')
             })  

           }

       })


     })
     
 })     