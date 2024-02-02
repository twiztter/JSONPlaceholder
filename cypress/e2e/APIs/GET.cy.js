describe('API testing JSONPlaceholder', () => {
  it('Endpoint posts responde con status 200', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('El endpoint post tiene 100 entradas', () => {
    cy.request('/posts')
      .its('body')
      .should('have.length', 100)
  })

  it('El post tiene por titulo sunt aut facere repellat provident occaecati excepturi optio reprehenderit', () => {
    cy.request('/posts/1')
      .its('body')
      .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
  });

})