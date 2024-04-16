/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import user_register_page from "../pages/user_register_page";

const name = "teste name"
const email_valid = 'teste@example.com';
const password_valid = '123456';

Given("I am on register screen", () => {
    home_page.access_user_register();
})

When("", () => {

})

Then("", () => {

})