// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Enforces a specific naming convention for functions (camelCase)",
        category: "Stylistic Issues",
        recommended: true,
      },
      fixable: "code",
      schema: [],
    },
    create(context) {
      return {
        FunctionDeclaration(node) {
          if (!/^[a-z][a-zA-Z0-9]*$/.test(node.id.name)) {
            context.report({
              node,
              message: "Function name '{{name}}' must be in camelCase.",
              data: { name: node.id.name },
              fix(fixer) {
                const newName = node.id.name[0].toLowerCase() + node.id.name.slice(1);
                return fixer.replaceText(node.id, newName);
              },
            });
          }
        },
      };
    },
};