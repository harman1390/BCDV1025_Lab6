/*
 * SPDX-License-Identifier: Apache-2.0
 */

module.exports = {
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "script",
  },
  extends: "eslint:recommended",
  rules: {
    indent: "off",
    "linebreak-style": ["error", "unix"],
    quotes: [2, "single"],
    semi: ["error", "always"],
    "no-unused-vars": ["error", { args: "none" }],
    "no-console": "off",
    curly: "error",
    eqeqeq: "error",
    "no-throw-literal": "error",
    strict: "error",
    "no-var": "error",
    "dot-notation": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-with": "error",
    "operator-linebreak": "error",
    yoda: "error",
    "quote-props": ["error", "as-needed"],
    "no-constant-condition": ["error", { checkLoops: false }],
  },
};
