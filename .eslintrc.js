module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0
    // indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 2 }]

    // 'arrow-parens': ['error', 'avoid']
  }
}
