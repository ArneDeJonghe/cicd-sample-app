// eslint.config.js
export default [
    {
      files: ["**/*.js"],  // Pas aan indien nodig
      languageOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        globals: {
          // Definieer hier de omgevingsvariabelen (voor 'env')
          es6: true,
          node: true,
          mocha: true
        }
      },
      rules: {
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "no-tabs": ["error"],
        "max-len": ["error", { "code": 120, "tabWidth": 2 }],
        "arrow-parens": ["error", "always"],
        "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
        "no-inner-declarations": "off"
      }
    }
  ];
  