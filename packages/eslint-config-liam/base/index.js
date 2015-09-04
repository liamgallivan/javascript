module.exports = {
  'parser': 'babel-eslint',          // https://github.com/babel/babel-eslint
  'env': {                           // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    'browser': true,                 // browser global variables
    'node': true                     // Node.js global variables and Node.js-specific rules
  },
  'ecmaFeatures': {
    'arrowFunctions': true,
    'blockBindings': true,
    'classes': true,
    'defaultParams': true,
    'destructuring': true,
    'forOf': true,
    'generators': false,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralDuplicateProperties': false,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'spread': true,
    'superInFunctions': true,
    'templateStrings': true,
    'jsx': true
  },
  'rules': {

    /**
     * Variables
     */
    'no-shadow': 2,                  // http://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-undef': 2,                   // http://eslint.org/docs/rules/no-undef
    'no-unused-vars': [2, {          // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'local',
      'args': 'after-used'
    }],
    'no-use-before-define': 2,       // http://eslint.org/docs/rules/no-use-before-define

    /**
     * Possible errors
     */
    'comma-dangle': [2, 'always-multiline'],    // http://eslint.org/docs/rules/comma-dangle
    'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
    'no-console': 1,                 // http://eslint.org/docs/rules/no-console
    'no-debugger': 1,                // http://eslint.org/docs/rules/no-debugger
    'no-alert': 1,                   // http://eslint.org/docs/rules/no-alert
    'no-constant-condition': 1,      // http://eslint.org/docs/rules/no-constant-condition
    'no-dupe-keys': 2,               // http://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 2,          // http://eslint.org/docs/rules/no-duplicate-case
    'no-empty': 2,                   // http://eslint.org/docs/rules/no-empty
    'no-ex-assign': 2,               // http://eslint.org/docs/rules/no-ex-assign
    'no-extra-boolean-cast': 0,      // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-semi': 2,              // http://eslint.org/docs/rules/no-extra-semi
    'no-func-assign': 2,             // http://eslint.org/docs/rules/no-func-assign
    'no-inner-declarations': 2,      // http://eslint.org/docs/rules/no-inner-declarations
    'no-invalid-regexp': 2,          // http://eslint.org/docs/rules/no-invalid-regexp
    'no-irregular-whitespace': 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-obj-calls': 2,               // http://eslint.org/docs/rules/no-obj-calls
    'no-sparse-arrays': 2,           // http://eslint.org/docs/rules/no-sparse-arrays
    'no-unreachable': 2,             // http://eslint.org/docs/rules/no-unreachable
    'use-isnan': 2,                  // http://eslint.org/docs/rules/use-isnan
    'block-scoped-var': 2,           // http://eslint.org/docs/rules/block-scoped-var

    /**
     * Best practices
     */
    'consistent-return': 2,          // http://eslint.org/docs/rules/consistent-return
    'curly': [2, 'multi-line'],      // http://eslint.org/docs/rules/curly
    'dot-notation': [2, {            // http://eslint.org/docs/rules/dot-notation
      'allowKeywords': true
    }],
    'eqeqeq': 2,                     // http://eslint.org/docs/rules/eqeqeq
    'no-caller': 2,                  // http://eslint.org/docs/rules/no-caller
    'no-eq-null': 2,                 // http://eslint.org/docs/rules/no-eq-null
    'no-eval': 2,                    // http://eslint.org/docs/rules/no-eval
    'no-extend-native': 2,           // http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 2,              // http://eslint.org/docs/rules/no-extra-bind
    'no-fallthrough': 2,             // http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 2,        // http://eslint.org/docs/rules/no-floating-decimal
    'no-implied-eval': 2,            // http://eslint.org/docs/rules/no-implied-eval
    'no-lone-blocks': 2,             // http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 2,               // http://eslint.org/docs/rules/no-loop-func
    'no-multi-str': 2,               // http://eslint.org/docs/rules/no-multi-str
    'no-native-reassign': 2,         // http://eslint.org/docs/rules/no-native-reassign
    'no-new': 2,                     // http://eslint.org/docs/rules/no-new
    'no-new-func': 2,                // http://eslint.org/docs/rules/no-new-func
    'no-new-wrappers': 2,            // http://eslint.org/docs/rules/no-new-wrappers
    'no-octal': 2,                   // http://eslint.org/docs/rules/no-octal
    'no-octal-escape': 2,            // http://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': 2,          // http://eslint.org/docs/rules/no-param-reassign
    'no-proto': 2,                   // http://eslint.org/docs/rules/no-proto
    'no-redeclare': 2,               // http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': 2,           // http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 2,              // http://eslint.org/docs/rules/no-script-url
    'no-self-compare': 2,            // http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 2,               // http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 2,           // http://eslint.org/docs/rules/no-throw-literal
    'no-with': 2,                    // http://eslint.org/docs/rules/no-with
    'radix': 2,                      // http://eslint.org/docs/rules/radix
    'wrap-iife': [2, 'any'],         // http://eslint.org/docs/rules/wrap-iife
    'yoda': 2,                       // http://eslint.org/docs/rules/yoda

    /**
     * Style
     */
    'indent': [2, 2],                // http://eslint.org/docs/rules/indent
    'brace-style': [
      2,               // http://eslint.org/docs/rules/brace-style
      '1tbs', {
        'allowSingleLine': true
      }
    ],
    'quotes': [
      2, 'single', 'avoid-escape'    // http://eslint.org/docs/rules/quotes
    ],
    'camelcase': [2, {               // http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],
    'comma-spacing': [2, {           // http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],      // http://eslint.org/docs/rules/comma-style
    'eol-last': 2,                   // http://eslint.org/docs/rules/eol-last
    'key-spacing': [2, {             // http://eslint.org/docs/rules/key-spacing
      'beforeColon': false,
      'afterColon': true
    }],
    'new-cap': [2, {                 // http://eslint.org/docs/rules/new-cap
      'newIsCap': true
    }],
    'no-multiple-empty-lines': [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
      'max': 2
    }],
    'no-nested-ternary': 2,          // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2,              // http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2,             // http://eslint.org/docs/rules/no-spaced-func
    'no-trailing-spaces': 2,         // http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-parens
    'no-underscore-dangle': 0,       // http://eslint.org/docs/rules/no-underscore-dangle
    'one-var': [2, 'never'],         // http://eslint.org/docs/rules/one-var
    'padded-blocks': [2, 'never'],   // http://eslint.org/docs/rules/padded-blocks
    'semi': [2, 'always'],           // http://eslint.org/docs/rules/semi
    'semi-spacing': [2, {            // http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],
    'space-after-keywords': 2,       // http://eslint.org/docs/rules/space-after-keywords
    'space-before-blocks': 2,        // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
    'space-infix-ops': 2,            // http://eslint.org/docs/rules/space-infix-ops
    'space-return-throw-case': 2,    // http://eslint.org/docs/rules/space-return-throw-case
    'spaced-comment': [2, 'always',  {// http://eslint.org/docs/rules/spaced-comment
      'exceptions': ['-', '+'],
      'markers': ['=', '!']           // space here to support sprockets directives
    }],
  }
};
