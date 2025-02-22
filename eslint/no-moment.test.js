import { describe, expect, test } from 'vitest';
import noMoment from "./no-moment";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({});

describe("no-moment test", () => {
    test("valid", () => {
        const code = `import { add } from '../dateUtils';`;
        ruleTester.run("no-moment", noMoment, {
            valid: [{ code }],
            invalid: [],
        });
    });

    test("invalid", () => {
        const code = `import moment from 'moment';`;
        ruleTester.run("no-moment", noMoment, {
            valid: [],
            invalid: [{ 
                code, 
                errors: [{ message: "Forbidden to use moment.js" }],
                output: '',
            }],
        });
    });
});