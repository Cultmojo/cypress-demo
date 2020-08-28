/// <reference types="Cypress" />

import { po } from '/Users/rpowell/Desktop/cypress-demo/cypress/integration/pageObject.js'

describe('Chapter 8 page tests', () => {
    it('Click the create cookie button', () => {
        cy.visit(Cypress.env('chapter8Page'))
        cy.clearCookie('secondcookie')
        cy.get(po.CH8_CREATE_COOKIE_BUTTON).click()
        cy.getCookie('secondcookie').should('have.property', 'value', 'anyvalue')
    })
})