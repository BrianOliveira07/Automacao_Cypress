# Cypress Automation
WEB automation in BDD using Cucumber

## Requirements:

* [Cypress (Versão: 9.7.0)](https://www.cypress.io/)

```bash
npm install cypress@9.7.0 --save-dev
```

```bash
npm install cypress-cucumber-preprocessor --save-dev
```

* [Node.js (Versão: 16.17.0)](https://nodejs.org/en/)

After validating the installation:
```bash
node --version v16.17.0
npm --version 8.15.0
```

* [Gitbash](https://www.git-scm.com/downloads)
* [Visual Studio Code](https://code.visualstudio.com/)

## Update scripts to file cypress/plugins/index.js

```bash
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

## Update scripts to file package.json

```
 "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
}
```

## Run Application on PC

In the root of the project, open the command prompt and type the command:

```bash
npm test
```
Click on Run 3 integration specs

## Run Application on Own GitHub

Step by step:

* Click on Actions
* Click on Cypress Regression Tests
* Click Create workflow-cypress.yml
* Click on Re-run all jobs button

Then check the result of the dashboard through the link:

[Dashboard](https://dashboard.cypress.io/projects/usmosy/runs?branches)

Made by Brian Oliveira [Access my linkedin](https://www.linkedin.com/in/brian-oliveira-385356122/)

[![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nayaraquino//)](https://www.linkedin.com/in/brian-oliveira-385356122/)
