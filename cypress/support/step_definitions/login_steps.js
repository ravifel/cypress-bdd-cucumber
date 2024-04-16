// 2 - Transformar o Gherkin em método/ação
/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import login_page from "../pages/login_page";

const email_valid = 'teste@example.com';
const password_valid = '123456';

Given("I am on login screen", () => {
    home_page.access_login();
})

Given("I fill e-mail", () => {
    login_page.fill_email_field(email_valid);
})

Given("I fill my credentials", () => {
    login_page.fill_email_field(email_valid);
    login_page.fill_password_field(password_valid);
})


When("I click on Login", () => {
    login_page.click_login_button();
})


Then("I see the message {string}", (message) => {
    login_page.error_message(message);
})

Then("I see the success message", async () => {
    await login_page.login_successfull(email_valid);
})