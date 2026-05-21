import js from "@eslint/js";
import importX from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.{js,jsx}"],
    ignores: ["src/test/**", "src/**/*.{test,spec}.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    plugins: {
      "import-x": importX,
      "unused-imports": unusedImports,
    },
    rules: {
      "indent": ["warn", 2, { "SwitchCase": 1 }],
      "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "semi": ["warn", "always"],
      "comma-dangle": ["warn", "always-multiline"],
      "eol-last": ["warn", "always"],
      "no-trailing-spaces": "warn",
      "object-curly-spacing": ["warn", "always"],
      "arrow-spacing": "warn",
      "keyword-spacing": "warn",
      "space-before-blocks": "warn",
      "space-infix-ops": "warn",

      "import-x/order": ["warn", {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      }],
      "import-x/no-duplicates": "error",
      "import-x/no-unresolved": "off",
      "import-x/newline-after-import": "warn",

      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": ["warn", {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      }],

      "no-debugger": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-var": "error",
      "prefer-const": "warn",
      "eqeqeq": ["error", "always"],
      "no-console": "off",
    },
  },

  {
    files: ["src/test/**/*.{test,spec}.js", "src/**/*.{test,spec}.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "import-x": importX,
      "unused-imports": unusedImports,
    },
    rules: {
      "indent": ["warn", 2],
      "quotes": ["warn", "double", { avoidEscape: true }],
      "semi": ["warn", "always"],
      "eol-last": ["warn", "always"],
      "import-x/no-duplicates": "error",
      "unused-imports/no-unused-imports": "error",
    },
  },

  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "dist/**",
      "build/**",
      "src/tracker.js",
    ],
  },
];
