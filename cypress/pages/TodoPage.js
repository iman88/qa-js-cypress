class TodoPage {

    getTodoItems() {
        return cy.get('.todo-list li');
    }

    checkTodoItems(first, last) {
        this.getTodoItems().first().should('have.text', first)
        this.getTodoItems().last().should('have.text', last)
    }

    checkTodoItemList(todoItems) {
        for (let i = 0; i < todoItems.length; i++) {

            let item = todoItems[i];

            if (i === 0) {
                this.getTodoItems().first().should('have.text', item[i])
            } else if (i === 1) {
                this.getTodoItems().last().should('have.text', item[i])
            } else {
                throw new Error(`Unexpected length for todoItems: ${todoItems.length}`)
            }
        }
    }

}

export default TodoPage;