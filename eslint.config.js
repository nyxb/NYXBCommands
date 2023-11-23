const nyxb = require('@nyxb/eslint-config').default

module.exports = nyxb({
  rules: {
    'ts/no-redeclare': 0,
  },
  ignores: ['dist', '**/dist/**', 'node_modules', '**/node_modules/**'],
})
