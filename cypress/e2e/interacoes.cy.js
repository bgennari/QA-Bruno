describe ('Interacoes',() => {

it ('Digitar em um campo',() => {
 cy.visit ('/')
    .get('.logo')

cy.get('.form-control').type ('bruno@teste.com')

})

it ('Click',() => {
 cy.visit ('/')
    .get('.logo')
    cy.get('.fa-user').click()
    cy.get ('#user').type('bruno@gmail.com')
    cy.get ('#password').type('Senha_teste')
    cy.get ('#btnLogin').click()

// Clickn Normal
// cy.get('.fa-user')
// .click()


// Click Duplo
// cy.get('.fa-user')
// .dblclick()

// Click Botao Direito
// cy.get('.fa-user')
// .rightlick()

// Click por cordenadas
// cy.get('.fa-user')
// .click(100, 100, {force: true})

//Simular apertar "enter" do teclado

cy.get('.form-control')
    .type ('bruno@teste.com{en}')

})

// Selecionando elementos (Drop Down)

it ('Select',() => {
cy.visit ('/')
    .get('.logo')
cy.get('.footer_one_widget').contains('Checkout View Two').click()
cy.get('#country')
.select('Colombia')

})

// Select Box

it.only ('Selet Check and Uncheck + Radio Button Box',() => {
cy.visit ('/')
    .get('.logo')
cy.get('.footer_one_widget').contains('Checkout View One').click()

cy.get ('#materialUnchecked').check()
    .uncheck()


    // Radio Button

    cy.get('#css')
    .check()
})

})