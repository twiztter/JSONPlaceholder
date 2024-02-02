it('El PUT request funcioina correctamente', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
        title: 'Relatos Salvajes',
        body: 'Una pelicula argentina'
    }).then((response) =>{
        expect(response.body).to.have.property('title','Relatos Salvajes')
    })
});