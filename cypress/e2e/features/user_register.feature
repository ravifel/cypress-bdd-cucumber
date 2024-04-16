Feature: User Register
I as customer
Want make sign up
Because i want make a order

  Scenario: Name field empty
    Given I am on register screen
    When I click on Register
    Then I see the message "O campo nome deve ser prenchido" on register

  Scenario: Email field empty
    Given I am on register screen
    And I fill name
    When I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: Email field invalid
    Given I am on register screen
    And I fill name
    And I fill email "invalid_email"
    When I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: Password field empty
    Given I am on register screen
    And I fill name
    And I fill email "teste@email.com"
    When I click on Register
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: Password field invalid
    Given I am on register screen
    And I fill name
    And I fill email "teste@email.com"
    And I fill email "123"
    When I click on Register
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: User Register with Success
    Given I am on register screen
    And I fill my datas of register
    When I click on Register
    Then I see the success message on register
