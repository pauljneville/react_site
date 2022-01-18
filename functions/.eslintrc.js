module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": "off",
    "indent": "off",
    "object-curly-spacing": "off",
    // "arrow-parens": "off",
    "space-before-function-paren": "off",
  },
};
