// eslint.config.js
export default [
    {
      files: ["**/*.js"],  // Pas aan als je alleen specifieke bestanden wilt linten
      languageOptions: {
        ecmaVersion: 12,  // Komt overeen met ES2021
        sourceType: "module"
      },
      env: {
        es6: true,
        es2021: true,
        node: true,
        mocha: true
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
  