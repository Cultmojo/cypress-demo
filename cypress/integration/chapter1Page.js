/// <reference types="Cypress" />

import { po } from '/Users/rpowell/Desktop/cypress-demo/cypress/integration/pageObject.js'

describe('Chapter 1 page tests', () => {
    it('Click radio button', () => {
        cy.visit(Cypress.env('chapter1Page'))
        cy.get(po.CH1_RADIO_BUTTON).check().should('be.checked')
    }),
    it('Check the checkbox', () => {
        cy.get(po.CH1_CHECKBOX).check().should('be.checked')
    }),
    it('Select Selenium IDE from the dropdown', () => {
        cy.get(po.CH1_DROPDOWN).select('Selenium IDE')
        cy.contains("Selenium IDE").should('exist')
    }),
    it('Select Selenium Core from the dropdown', () => {
        cy.get(po.CH1_DROPDOWN).select('Selenium Core')
        cy.contains('Selenium Core').should('exist')
    }), 
    it('Select Selenium RC from the dropdown', () => {
        cy.get(po.CH1_DROPDOWN).select('Selenium RC')
        cy.contains('Selenium RC').should('exist')
    }), 
    it('Select Selenium Grid from the dropdown', () => {
        cy.get(po.CH1_DROPDOWN).select('Selenium Grid')
        cy.contains('Selenium Grid').should('exist')
    }),
    it('Assert the text string is present on the page', () => {
        cy.contains(po.CH1_ASSERT_STRING).should('exist')
    }),
    it('Verify the load text to this page button loads text', () => {
        cy.get(po.CH1_LOAD_AJAX_LINK).click()
        cy.contains(po.CH1_TEXT).should('exist')
    }),
    it('Verify clicking the link to load AJAX loads the text to the page', () => {
        cy.get(po.CH1_LOAD_AJAX_LINK).click()
        cy.contains(po.CH1_AJAX_TEXT).should('exist')
    }),
    it('Verify the verify button is on the page', () => {
        cy.get(po.CH1_VERIFY_BUTTON).should('exist')
    }), 
    it('Verify you can clear and add new test to the large text area', () => {
        cy.get(po.CH1_LARGE_TEXTBOX).should('contain', 'To be used after the AJAX section of the book')
        cy.get(po.CH1_LARGE_TEXTBOX).clear()
        cy.get(po.CH1_LARGE_TEXTBOX).should('not.contain', po.CH1_LARGE_TEXTBOX_MESSAGE)
        cy.get(po.CH1_LARGE_TEXTBOX).type('Worry only about what you can control')
        cy.get(po.CH1_LARGE_TEXTBOX).should('contain', 'Worry only about what you can control')
    }),
    it('Verify the Home Page link redirects to the home page', () => {
        cy.get(po.CH1_HOME_PAGE_LINK).click()
        cy.url().should('include', Cypress.env('basePage'))
    })
})