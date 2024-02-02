it('El POST request funcioina correctamente', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        id: 101,
        title: 'Relatos Salvajes',
        body: 'Una pelicula argentina'
    }).then((response) =>{
        expect(response.body).to.have.property('title','Relatos Salvajes')
    })
});