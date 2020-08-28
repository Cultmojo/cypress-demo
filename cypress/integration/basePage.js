/// <reference types="Cypress" />

import { po } from '/Users/rpowell/Desktop/cypress-demo/cypress/integration/pageObject.js'


describe('Base page tests', () => {

    it('Click the chapter 1 link', () => {
        cy.visitBasePage()
        cy.get(po.CHAPTER_ONE_LINK).click()
        cy.url().should('include', Cypress.env('chapter1Page'))
    }),
        it('Click the chapter 2 link', () => {
            cy.visitBasePage()
            cy.get(po.CHAPTER_TWO_LINK).click()
            cy.url().should('include', Cypress.env('chapter2Page'))
        }),
        it('Click on chapter 3 link', () => {
            cy.visitBasePage()
            cy.get(po.CHAPTER_THREE_LINK).click()
            cy.url().should('include', Cypress.env('chapter3Page'))
        }),
        it('Click the chapter 4 link', () => {
            cy.visitBasePage()
            cy.get(po.CHAPTER_FOUR_LINK).click()
            cy.url().should('include', Cypress.env('chapter4Page'))
        }),
        it('Click the chapter 8 link', () => {
            cy.visitBasePage()
            cy.get(po.CHAPTER_EIGHT_LINK).click()
            cy.url().should('include', Cypress.env('chapter8Page'))
        }),
        it('Enter text in the textbox', () => {
            cy.visitBasePage()
            cy.get(po.BASE_PAGE_TEXTBOX).click().type("Hello World")
            cy.get(po.BASE_PAGE_TEXTBOX).should('have.value','Hello World')
        })

})

