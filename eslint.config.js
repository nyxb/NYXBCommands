const nyxb = require('@nyxb/eslint-config').default

module.exports = nyxb({
ignores: ["dist","**/dist/**","node_modules","**/node_modules/**"]
})
