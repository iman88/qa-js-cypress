import {getResponseBody} from "../apiMethods";

export function checkGetTodosApiData(userId: number, id: number, title: string, completed: boolean) {

    let responseGet: Cypress.Response<any> = getResponseBody();
    cy.log("GET response title:" + responseGet['title'])

    expect(responseGet['userId']).to.eq(userId);
    expect(responseGet['id']).to.eq(id);
    expect(responseGet['title']).to.eq(title);
    expect(responseGet['completed']).to.eq(completed);
}

export function checkPostTodosApiData(title: string, body: string, userId: string) {
    let responsePost: Cypress.Response<any> = getResponseBody();
    cy.log("POST response title:" + responsePost['title'])

    expect(responsePost['title']).to.eq(title);
    expect(responsePost['body']).to.eq(body);
    expect(responsePost['userId']).to.eq(userId);
}

export function preparePostTodosData(title: string, body: string, userId: number) {

    let requestBody: string = `{
    "title": "${title}",
    "body": "${body}",
    "userId": ${userId}
    }`

    cy.log("Body: " + requestBody)
    return requestBody;
}

