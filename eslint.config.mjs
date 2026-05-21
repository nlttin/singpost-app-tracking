import js from "@eslint/js";
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

      "no-duplicate-imports": "error",
      "sort-imports": ["warn", {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      }],

      "no-unused-vars": ["warn", {
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
    rules: {
      "indent": ["warn", 2],
      "quotes": ["warn", "double", { avoidEscape: true }],
      "semi": ["warn", "always"],
      "eol-last": ["warn", "always"],
      "no-duplicate-imports": "error",
    },
  },

  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "dist/**",
      "build/**",
      //"src/tracker.js",
    ],
  },
];
