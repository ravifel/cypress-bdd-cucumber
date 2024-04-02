npm init -y
npm install cypress
npx cypress install --force
npx cypress open
--> select to "E2E Testing"

INSTALA CUCUMBER
Doc: https://github.com/badeball/cypress-cucumber-preprocessor

npm install @badeball/cypress-cucumber-preprocessor

Configure specPattern with "**/*.feature" and setupNodeEvents with a bundler, using EG. cypress.config.js

include configurations in cypress.config.js

CREATE STRUCTURE BDD (CUCUMBER)
create folder 'e2e'
create folder 'features' inside of 'e2e'

CREATE 2 FOLDER IN 'support'
create folder 'pages'
create folder 'step_definitions' (steps)