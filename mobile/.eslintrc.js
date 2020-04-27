module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'imports'],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@react-native-community",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  "rules": {
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".js", ".jsx"] }
    ],
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "react-native/no-color-literals": "off",
    "react-native/sort-styles": "off",
    "react-native/no-inline-styles": "off",
    "react-native/no-raw-text": "off",
    "global-require": "off",
    "object-curly-newline": "off",
    "func-names": "off",
    "max-len": [ "error", { "ignoreComments": true }, { "code": 160 }]
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": { "rootPathSuffix": "src" }
    }
  }
};
