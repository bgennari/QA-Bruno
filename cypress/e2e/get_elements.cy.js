describe ('Get Elements',() => {

it ('Encontrar/Selecionar elementos',() => {

//get () - encontrar ou selecionar elementos
    cy.visit ('/')
    .get('.logo')

// contains() - para encontrar elementos por texto onde geralmente diminuimos o escopo com um get.
cy.get ('#top_header')
.contains ('Login')


// find() para encontrar elementos e diminuir o escopo.
cy.get ('#top_header')
.find ('.fa-user')


// as() - alias = serve para criar apelidos ou atalhos para grandes commands.
cy.get ('#top_header')
.find ('.fa-user')

})


})