Feature: User Register
I as customer
Want make sign up
Because i want make a order

  Background: Access register screen
    Given I am on register screen

  Scenario: Name field empty
    When I click on Register
    Then I see the message "O campo nome deve ser prenchido" on register

  Scenario: Email field empty
    And I fill name
    When I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: Email field invalid
    And I fill name
    And I fill email invalid
    When I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: Password field empty
    And I fill name
    And I fill email valid
    When I click on Register
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: Password field invalid
    And I fill name
    And I fill email valid
    And I fill password invalid
    When I click on Register
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: User Register with Success
    And I fill my datas of register
    When I click on Register
    Then I see the success message on register
