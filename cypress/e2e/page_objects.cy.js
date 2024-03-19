/// <reference types="cypress" />



const user_data = require('../fixtures/user_desafio.json')

  beforeEach ('Acessando Page Objects Pagina de Cadastro', () => {
  

    //TESTE MOBILE DEVICES

    //cy.viewport('')
  
    cy.acessRegisterPage()

describe('Cadastro via acesso Page Objects', () => {

})

})
// TESTANDO PAGE OBJECTS

 it('Cadastro Realizado Com Sucesso via PAGE OBJECTS',() => {

    
    cy.fillname(user_data.name)
    cy.fillemail(user_data.email)
    cy.fillpassword(user_data.password)
    cy.saveRegister()
    cy.checkRegisterSuccess(user_data.name)
  

})


 
