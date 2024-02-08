const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://aqueous-brook-60480.herokuapp.com/",
    "specPattern": "cypress/integration/api-tests/*.spec.{js,jsx,ts,tsx}"
  },
});
