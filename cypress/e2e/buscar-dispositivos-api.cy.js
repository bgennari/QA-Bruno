describe('buscar dispositivos', () => {
// it('passes', () => {
// cy.visit('https://example.cypress.io')
// })

it('passes', () => {
// cy.visit('https://example.cypress.io')
cy.request({        
METHOD: 'GET',
url: 'https://api.restful-api.dev/objects/5'
})
.then((response) => {
expect(response.status).to.equal(200)
expect(response.body.name).to.equal('Samsung Galaxy Z Fold2')
})

// it('passes', () => {
// cy.visit('https://example.cypress.io')
// })

// it('passes', () => {
// cy.visit('https://example.cypress.io')
// })
})
})

