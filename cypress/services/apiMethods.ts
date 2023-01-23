
let responseData: Cypress.Response<any>;

export function getResponseBody(){
    return responseData.body;
}

export function getResponseStatus(){
    return responseData['status'];
}

export function apiGet(url: string) {
    cy.request({
        method: 'GET',
        url: url
    }).then((response) => {
        return new Promise(resolve => {
            responseData = response;
            cy.log("Response code: " + responseData['status'])
            cy.log("Response body: " + JSON.stringify(responseData.body));

            resolve(responseData)
        })
    })
}

export function apiPost(url: string, requestBody: string) {

    cy.request({
        method: 'POST',
        form: true,
        url: url,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: requestBody

    }).then((response) => {
        return new Promise(resolve => {
            responseData = response;
            cy.log("Response code: " + responseData['status'])
            cy.log("Response body: " + JSON.stringify(responseData.body));
            resolve(responseData)
        })
    })
}

