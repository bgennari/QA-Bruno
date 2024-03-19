/// <reference types="cypress" />

// Organizando por Fake.JS

import { faker } from '@faker-js/faker';

describe('Desafio Cadastro de usuario', () => {

// Organizando por Fixtures 

const user_data = require('../fixtures/user_desafio.json')

// BEFORE EACH - Acessar a Aplicacao

beforeEach('Acessando pagina de Cadastro', () => {
  cy.visit ('https://automationpratice.com.br/register').get('.account_form')

})

// Cenarios de Teste DESAFIO Qazando

it('Validar campo Nome Vazio',() => {
 
    cy.get('#email').type(user_data.email)
    cy.get('#password').type(user_data.password)
    cy.get('#btnRegister').click()
    cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')

  })
   
it('Validar campo E-mail Vazio',() => {
 
    cy.get('#user').type(user_data.name)
    cy.get('#password').type(user_data.password)
    cy.get('#btnRegister').click()
    cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
 
 })

 it('Validar Campo e-mail Invalido',() => {
 
    cy.get('#user').type(user_data.name)
    cy.get('#email').type('aaa')
    cy.get('#password').type(user_data.password)
    cy.get('#btnRegister').click()
    cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
})
 
// Cadastro com Sucesso utilizando FIXTURE

 it('Cadastro Realizado Com Sucesso utilizando Fixture',() => {
 
  cy.get('#user').type(user_data.name)
    cy.get('#email').type(user_data.email)
    cy.get('#password').type(user_data.password)
    cy.get('#btnRegister').click()
    cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
    cy.get('#swal2-html-container').should('have.text',`Bem-vindo ${user_data.name}`)
    cy.get('.swal2-confirm.swal2-styled').click().should ('have.text','OK' )
})

// Cadastro com Sucesso utilizando Fake JS

const randomName = faker.person.fullName();

 it('Cadastro Realizado Com Sucesso FAKER JS',() => {
 
    cy.get('#user').type(randomName)
    cy.get('#email').type(user_data.email)
    cy.get('#password').type(user_data.password)
    cy.get('#btnRegister').click()
    cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
    cy.get('#swal2-html-container').should('have.text',`Bem-vindo ${randomName}`)
    cy.get('.swal2-confirm.swal2-styled').click().should ('have.text','OK' )

})

  })

 
