/// <reference types="cypress" />

describe('Login', () => {

    beforeEach ('Acessar a aplicacao', () => {
//dado
//acessar aplicacao  
cy.visit ('https://automationpratice.com.br/login')
    })


it('Login com sucesso', () => {
//dado
//acessar aplicacao  
cy.visit ('https://automationpratice.com.br/login')

//preencher credenciais
cy.get ('#user').type('bruno.gennari@gmail.com')
cy.get ('#password').type('123456')

//quando
//clicar em credenciais
cy.get ('#btnLogin').click()

//entao
//validar mensagem de sucesso
cy.get('#swal2-title').should('have.text', 'Login realizado')
cy.url().should('include', '/my-account')
})

// SENHA INVALIDA

    it('Senha inválida', () => {
    cy.get ('#user').type('bruno.gennari@gmail.com')
    cy.get ('#password').type('123')
    cy.get ('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
})

// Email Invalido

    it('E-mail inválido.', () => {
    cy.get ('#user').type('aaa')
    cy.get ('#password').type('123')
    cy.get ('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
})
// Senha Vazia

    it('Senha vazia', () => {
    cy.get ('#user').type('bruno.gennari@gmail.com')
    cy.get ('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
})
// Email Vazio

    it('E-mail inválido.', () => {
    cy.get ('#password').type('123')
    cy.get ('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

    })

// Nenhum campo preenchido

    it('Campos Vazios', () => {
    cy.get ('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

})

})

