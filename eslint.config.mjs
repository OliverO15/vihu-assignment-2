import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  {plugins: ["assignment2"]},
  {rules: {
    "no-console": "error",
    "no-moment": "error",
    "function-names": "error",
  }},
];