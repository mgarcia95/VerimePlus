const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gtpa6z',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
