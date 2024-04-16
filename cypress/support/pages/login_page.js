// 3 - Criar as ações dentro da page

/// <reference types="cypress" />

const elements = {
    buttons: {
        login: '#btnLogin'
    },
    fields: {
        email: '#user',
        password: '#password'
    },
    messages: {
        error: '.invalid_input',
        success_title: '#swal2-title',
        success_sub_title: '.swal2-popup'
    }
}

export default {

    click_login_button() {
        cy.get(elements.buttons.login)
            .should('be.visible')
            .click();
    },

    error_message(message) {
        cy.get(elements.messages.error)
            .should('be.visible')
            .should('have.text', message)
    },

    fill_email_field(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fill_password_field(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    login_successfull(email) {
        cy.get(elements.messages.success_title)
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get(elements.messages.success_sub_title)
            .should('be.visible')
            .contains(email)
    }
}