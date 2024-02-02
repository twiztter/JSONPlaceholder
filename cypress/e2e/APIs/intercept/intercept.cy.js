it.only('Simula una solicitud GET a /posts con Stub', () => {
    //Datos de ejemplo para simular la respuesta del servidor
    const samplePosts = [
        {
            userId: 1,
            id: 1,
            title: 'El libro del programador'
        },
        {
            userId: 2,
            id: 2,
            title: 'Cañitas',
            body: 'QA principios'
        }
    ];

    //Creacion del stub para simular la respuesta del servidor
    cy.intercept('GET', '/posts', samplePosts).as('getPosts')

    //Visita la pagina de la aplicacion donde se realiza la solicitud    
    cy.visit('')
    cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click()

    //Espera a que se complete la solicitud interceptada
    cy.wait('@getPosts')




    //Realiza las verificaciones necesarias en la interfaz de usuario utilizando los datos de ejemplo
});



