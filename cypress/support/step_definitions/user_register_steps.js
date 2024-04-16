/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import user_register_page from "../pages/user_register_page";

const name = "teste name"
const email_valid = 'teste@example.com';
const email_invalid = 'email_invalid';
const password_valid = '123456';
const password_invalid = '123';

Given("I am on register screen", () => {
    home_page.access_user_register();
})

Given("I fill name", () => {
    user_register_page.fill_name_field(name);
})

Given("I fill email valid", () => {
    user_register_page.fill_email_field(email_valid);
})

Given("I fill email invalid", () => {
    user_register_page.fill_email_field(email_invalid);
})

Given("I fill password invalid", () => {
    user_register_page.fill_password_field(password_invalid);
})

Given("I fill my datas of register", () => {
    user_register_page.fill_name_field(name);
    user_register_page.fill_email_field(email_valid);
    user_register_page.fill_password_field(password_valid);
})



When("I click on Register", () => {
    user_register_page.click_register_button();
})



Then("I see the message {string} on register", (message) => {
    user_register_page.error_message(message);
})

Then("I see the success message on register", () => {
    user_register_page.success_register(name);
})