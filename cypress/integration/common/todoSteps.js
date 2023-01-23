import { Then } from "cypress-cucumber-preprocessor/steps";

import TodoPage from "../../pages/TodoPage";

const todoPage: TodoPage = new TodoPage();

Then(/^"([^"]*)" items are displayed$/,(itemsNo)  => {
    todoPage.getTodoItems().should('have.length', itemsNo)
});

Then(/^1st todo is "([^"]*)"$/,  (item) => {
    todoPage.getTodoItems().first().should('have.text', item)
});

Then(/^2nd todo is "([^"]*)"$/,  (item) => {
    todoPage.getTodoItems().last().should('have.text', item)
});

Then(/^the items list is$/, function (datatable) {
    const values = datatable.rowsHash();
    const {first, last} = values;

    todoPage.checkTodoItems(first, last);

});
Then(/^the items in list are$/, function (datatable) {
    todoPage.checkTodoItemList(datatable.rows());
});