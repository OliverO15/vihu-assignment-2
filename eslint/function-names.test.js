import { describe, expect, test } from 'vitest';
import functionNaming from "./function-names";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({});

const errors = [{ message: "Use camelCasing in function names" }];

describe("function-naming", () => {
    test("valid", () => {
        const code = `function myFunction() {}`;
        ruleTester.run("function-names", functionNaming, {
        valid: [{ code }],
        invalid: [],
        });
    });
    
    test("invalid", () => {
        const code = `function my_function() {}`;
        ruleTester.run("function-names", functionNaming, {
        valid: [],
        invalid: [{ code, errors: [{ message: "Function name 'my_function' must be in camelCase." }] }],
        });
    });
});