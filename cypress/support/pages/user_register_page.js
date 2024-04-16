/// <reference types="cypress" />

const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '#errorMessageFirstName',
        success_title: '#swal2-title',
        success_modal: '.swal2-popup'
    }
}

export default {

    click_register_button() {
        cy.get(elements.buttons.register)
            .should('be.visible')
            .click()
    },

    error_message(message) {
        cy.get(elements.messages.error)
            .should('be.visible')
            .should('have.text', message)
    },

    fill_name_field(name) {
        cy.get(elements.fields.name)
            .should('be.visible')
            .type(name)
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

    success_register(name) {
        cy.get(elements.messages.success_title)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.success_modal)
            .should('be.visible')
            .contains(name)
    }
}



