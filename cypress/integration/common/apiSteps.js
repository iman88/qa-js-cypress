// noinspection JSUnusedLocalSymbols,ES6UnusedImports

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {apiGet, apiPost, getResponseStatus} from "../../services/apiMethods";
import {checkGetTodosApiData, checkPostTodosApiData, preparePostTodosData} from "../../services/todos/todosService";

let baseUrl: string;
let requestBody: string;


// region base API actions
Given(/^the base url is "([^"]*)"$/, (url:string) => {
    baseUrl = url;
    cy.log("Environment: " + Cypress.env('test_environment'))
})

When(/^I GET "([^"]*)"$/, async (path: string) => {
    let url = baseUrl + path;
    apiGet(url);
})

When(/^I POST "([^"]*)"$/, async (path: string) => {
    let url = baseUrl + path;
    apiPost(url, requestBody)
});

Then(/^the status code is "([^"]*)"$/, (statusCode: string) => {
    expect(getResponseStatus()).to.eq(parseInt(statusCode));
});

// endregion

Then(/^the todo GET response data is:$/, function (datatable) {
    const values = datatable.rowsHash();
    let {userId, id, title, completed} = values;

    userId = parseInt(userId);
    id = parseInt(id);
    completed = (completed === 'true');

    checkGetTodosApiData(userId, id, title, completed);
});

When(/^I prepare the payload for POST todo:$/, function (datatable) {
    const values = datatable.rowsHash();
    let {title, body, userId} = values;
    userId = parseInt(userId);
    requestBody = preparePostTodosData(title, body, userId);
});

Then(/^the todo POST response data is:$/, function (datatable) {
    const values = datatable.rowsHash();
    let {title, body, userId} = values;
    // noinspection JSUnusedAssignment
    userId = parseInt(userId);
    // checkPostTodosApiData(title, body, userId);
});
