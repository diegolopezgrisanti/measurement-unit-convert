/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "collectCoverage": true,
  "coveragePathIgnorePatterns": [
    "/node_modules",
    "/test/",
    "/dist-browser",
    "/dist-node"
  ]
};