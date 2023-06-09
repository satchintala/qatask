const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    video: false,
    defaultCommandTimeout: 40000,
    screenshotOnRunFailure: true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      sh_homepage: "https://www.simplyhealth.co.uk/",
      member_portal: "https://www.simplyhealth.co.uk/member-portal",
    },
    baseUrl: "https://petstore.swagger.io/v2",
  },
});
