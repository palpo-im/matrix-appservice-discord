import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.node,
            },
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        rules: {
            "no-trailing-spaces": "error",
            "max-classes-per-file": ["warn", 1],
            "@typescript-eslint/naming-convention": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/prefer-for-of": "error",
            "@typescript-eslint/typedef": "off",
            "@typescript-eslint/no-floating-promises": "error",
            "curly": "error",
            "no-empty": "off",
            "no-invalid-this": "off",
            "@typescript-eslint/only-throw-error": "warn",
            "prefer-const": "error",
            "indent": "off",
            "max-lines": ["warn", 500],
            "no-duplicate-imports": "error",
            "@typescript-eslint/array-type": "error",
            "@typescript-eslint/promise-function-async": "off",
            "no-bitwise": "off",
            "no-console": "error",
            "no-debugger": "error",
            "prefer-template": "off",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-unsafe-function-type": "off",
            "no-duplicate-imports": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "no-irregular-whitespace": "off",
            "no-useless-escape": "off",
        },
    },
    {
        files: ["test/**/*.ts", "test/**/**/*.ts"],
        rules: {
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "max-classes-per-file": "off",
            "max-lines": "off",
        },
    },
    {
        ignores: ["build/**", "node_modules/**"],
    }
);
