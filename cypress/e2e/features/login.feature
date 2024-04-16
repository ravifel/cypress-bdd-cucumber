# 1 - Criar meu cenario
Feature: Login
    I as customer
    Want make login
    Because i want make a order

  Scenario: Login with a empty email's field
    Given I am on login screen
    When I click on Login
    Then I see the message "E-mail inválido."

  Scenario: Login with a empty password's field
    Given I am on login screen
    And I fill e-mail
    When I click on Login
    Then I see the message "Senha inválida."

  Scenario: Login with Success
    Given I am on login screen
    And I fill my credentials
    When I click on Login
    Then I see the success message
