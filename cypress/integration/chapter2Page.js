/// <reference types="Cypress" />

import { po } from '/Users/rpowell/Desktop/cypress-demo/cypress/integration/pageObject.js'
import { gray } from 'color-name';

describe('Chapter 2 page tests', () => {
    it('Click the index link to navigate back to the home page', () => {
        cy.visit(Cypress.env('chapter2Page'))
        cy.get(po.CH2_INDEX_LINK).click()
        cy.url().should('include', Cypress.env('basePage'))
    }), 
    it('Click button with name', ()=> {
        cy.visit(Cypress.env('chapter2Page'))
        cy.get(po.CH2_BUTTON_WITH_NAME_BUTTON).click()
    }), 
    it('Click on Random button', () => {
        cy.get(po.CH2_RANDOM_BUTTON).click()
    }), 
    it('Click on the Verify this button', () => {
        cy.get(po.CH2_VERIFY_BUTTON).click()
    }), 
    it('Click the Button with ID', () => {
        cy.get(po.CH2_BUTTON_WITH_ID_BUTTON).click()
    }), 
    it('Click the chocolate button', () => {
        cy.get(po.CH2_CHOCOLATE_BUTTON).click()
    }),
    it('Click the sibling button', () => {
        cy.get(po.CH2_SIBLING_BUTTON).click()
    })
    
})