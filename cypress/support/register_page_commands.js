/// <reference types="cypress" />


//Elementos



// Acoes/Metodos/Funcoes
Cypress.Commands.add('saveRegister',() => {
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('fillname',(name) => {
    cy.get('#user').type(name)

    })

    Cypress.Commands.add('fillpassword',(password) => {
    cy.get('#password').type(password)
    
})

 Cypress.Commands.add('fillemail',(email) => {
    cy.get('#email').type(email)
    
})

 Cypress.Commands.add('checkmessage',(message) => {
    cy.get ('.errorLabel').should('have.text', message)
    
}) 

 Cypress.Commands.add('checkRegisterSuccess',(name) => {
    
     cy.get('#swal2-title', {timeout: 3000})
     .should('have.text','Cadastro realizado!')
    
     cy.get('#swal2-html-container', {timeout: 3000})
     .should('have.text',`Bem-vindo ${name}`)
   
}) 

    //Cypress.Commands.add('clickok',() => {
    //cy.get('.swal2-confirm.swal2-styled').click(),should('have.text', 'OK')
    
//}) 