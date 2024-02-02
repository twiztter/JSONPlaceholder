describe('Loguear - basic auth y auth con forms', () => {

    it('Loguea usando auth de Cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text', 'Congratulations')
    });

    it('hago login en un form, usando un request del tipo POST', () => {
        cy.login()
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
    });
});