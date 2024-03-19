/// <reference types="cypress" />

describe('Asserts', () => {

   
it.only ('Verificar se esta visivel',() => {
 cy.visit ('/')
    .get('.logo')
  
    cy.get('.fa-user')
        .click()

  cy.get('.account_form > h3')
        .should('be.visible')

cy.get ('.account_form > h3')
    .should('contain', 'Login')
    .should('have.text','Login')


// Usando Expect para elementos de outras formas verificar o Texto

cy.get('.account_form > h3')
  .then((Element) => {
        expect(Element.text ()).eq('Login')
        expect(Element).to.be.visible
        expect(Element).not.disabled
})

})

})
 
