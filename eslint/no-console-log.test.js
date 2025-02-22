import { describe, test } from 'vitest';
import noConsoleLog from './no-console-log';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({});

describe('no-console-log test', () => {
  test('valid', () => {
    const code = `console.log('Hello, world!');`;
    ruleTester.run('no-console-log', noConsoleLog, {
      valid: [],
      invalid: [
        {
          code,
          errors: [{ message: 'Forbidden to use console.log' }],
        },
      ],
    });
  });

  test('invalid', () => {
    const code = `console.error('Hello, world!');`;
    ruleTester.run('no-console-log', noConsoleLog, {
      valid: [{ code }],
      invalid: [],
    });
  });
});
