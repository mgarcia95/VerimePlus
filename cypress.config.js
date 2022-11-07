const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gtpa6z',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  {
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports/mochawesome-report",
      "overwrite": false,
      "html": false,
      "json": true,
      "timestamp": "mmddyyyy_HHMMss"
    },
});
