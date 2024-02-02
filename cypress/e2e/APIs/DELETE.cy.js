it('El DELETE request funciona correctamente', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
});