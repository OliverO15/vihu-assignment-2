// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Forbidden to use moment.js',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'moment') {
          context.report({
            node,
            message: 'Forbidden to use moment.js',
            fix(fixer) {
              return fixer.remove(node);
            },
          });
        }
      },
    };
  },
};
