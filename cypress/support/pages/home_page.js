// 3 - Criar as ações dentro da page

/// <reference types="cypress" />

const elements = {
    menu: {
        top_header: '#top_header'
    },
    icons: {
        login: '.fa-user'
    }
}

export default {

    access_login() {
        cy.visit('/')
            .get(elements.menu.top_header)
            .should('be.visible')

        cy.get(elements.icons.login)
            .should('be.visible')
            .click()
    }
}