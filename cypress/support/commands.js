Cypress.Commands.add('login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.request({
        method: 'POST',
        url: 'https://the-internet.herokuapp.com/authenticate',
        form: true,
        body: {
            username: 'tomsmith',
            password: 'SuperSecretPassword!'
        }
    })
    cy.getCookie('rack.session').should('exist')
    cy.visit('https://the-internet.herokuapp.com/secure')
})