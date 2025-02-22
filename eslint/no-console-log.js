// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Forbidden to use console.log",
        recommended: true,
      },
      fixable: "code",
      schema: [],
    },
    create(context) {
      return {
        CallExpression(node) {
          if (node.callee.type === 'MemberExpression' && 
              node.callee.object.type === 'Identifier' && node.callee.object.name === 'console' && 
              node.callee.property.type === 'Identifier' && node.callee.property.name === 'log') {
            context.report({
              node,
              message: "Forbidden to use console.log",
            });
          }
        },
      };
    },
};