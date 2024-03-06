/// <reference types="cypress" />

describe('Login', () => {

//dado
//acessar aplicacao  
cy.visit ('hhttps://demo.sylius.com/en_US/login')
})


it('Login com sucesso', () => {
//dado
//acessar aplicacao  
cy.visit ('https://demo.sylius.com/en_US/login')

//preencher credenciais
cy.get ('#_username').type('shop@example.com')
cy.get ('#_password').type('sylius')

//quando
//clicar em credenciais
cy.get ('.ui.blue.subbimit.button').click()

})  