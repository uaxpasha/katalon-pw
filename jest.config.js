/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    "reporters": ["default", "@katalon/testops-jest"],
    verbose: true,
    preset: 'jest-playwright-preset',
    // transform: {
    //     '^.+\\.js$': 'ts-jest',
    // },
    //testRunner: 'jasmine2',
    //setupFilesAfterEnv: ["jest-allure/dist/setup"],
    testMatch: [
        "<rootDir>/tests/example1.spec.js"
    ],
    bail: true,
    bail: 1,
}