import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title: string) => {
    cy.title().should('include', title)
})

Given(/^I open "([^"]*)" page$/, (url: string) => {
    cy.visit(url)
})