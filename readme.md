### 1. Relevant information
This project was creating using node v16.14.0 and does not assure backwards compatibility

### 2. Initial setup of the project
- `npm install`

### 3. Open Cypress UI
- `cypress open`

<b>Note</b>: in case cypress is not recognized as a command you can use below example:
- `./node_modules/.bin/cypress open`

### 4. Run tests
We have two kind of tests available: cypress default tests and using cucumber as wrapper
Each type used a different execution command format and reporting

### 4.1 cypress default
### 4.1.1 Run
cypress default tests can be executed using 
- `npx cypress run --spec "**/todo_ui.spec.js"`
### 4.1.2 Reporting 
Test reports are being generated using mochawesome-reporter under 
- `reports/mochawesome-reporter` directory

### 4.2 cypress with cucumber
### 4.2.1 Run
- `cypress run --spec **/*.features` will run all features files
- `cypress run --spec **/*.feature` will run all feature files
- `cypress-tags run -e TAGS='@all'` 
- `cypress-tags run -e TAGS='@all and not @typescript'`
- `cypress-tags run -e TAGS='not @typescript and (@ui or @api)'`
### 4.2.2 Reporting
- Test reports are being generated using multiple-cucumber-html-reporter under
`reports/cucumber-json` directory 
- A json file is created for each feature file
- In order to generate a join html report 
you need to run `node utils/cucumber-html-report.js` command and the report will be generated 
under `reports/cucumber-html` directory

### 5. Plugins
Cypress tests can be executed from Intellij or Webstorm UI with below plugin
- https://plugins.jetbrains.com/plugin/13987-cypress-support-pro/pricing#edition=personal

### 6. Best practices
- https://docs.cypress.io/guides/references/best-practices

### 7. Useful links that have been used
- https://github.com/TheBrainFamily/cypress-cucumber-webpack-typescript-example
- https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
- https://docs.cypress.io/guides/getting-started/installing-cypress#Continuous-integration
- https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#installation
- https://docs.cypress.io/guides/tooling/typescript-support#Configure-tsconfig-json
- https://github.com/TheBrainFamily/cypress-cucumber-example
- https://www.npmjs.com/package/cypress-tags

- https://github.com/burakkaygusuz/cypress-cucumber-test-example
- https://www.testingwithmarie.com/post/attaching-cypress-screenshots-to-your-mochawesome-report
- https://christianlydemann.com/the-most-common-cypress-mistakes/