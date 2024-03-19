describe ('Get text',() => {

it ('Obter texto de um elemento',() => {
 cy.visit ('/')
    .get('.logo')

    cy.get ('.top_header_left > p')
    .then((Element) => {
        console.log (Element.text ())
        // HIDE ELEMENT
        Element.hide ()

    })
})


})