describe('TODO api testing', () => {
    it('fetches Todo items - GET', () => {
        cy.request('https://jsonplaceholder.typicode.com/todos/1').as('todoRequest');
        cy.get('@todoRequest').then(todos => {
            expect(todos.status).to.eq(200);
            console.log(todos.body)
            expect(todos.body.title).to.eql('delectus aut autem')
        });
    });
});