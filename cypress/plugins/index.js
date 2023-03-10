/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// noinspection JSValidateJSDoc

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');
// const tagify = require('cypress-tags');


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    require('cypress-mochawesome-reporter/plugin')(on);
    const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
    };

    on('file:preprocessor', cucumber(options));
    // on('file:preprocessor', tagify(config));
};
