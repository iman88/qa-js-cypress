// Let name it cucumber-html-report.js **
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "./reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-html",
    metadata: {
        browser: {
            name: "chrome",
            version: "81",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "10",
        },
    },
});