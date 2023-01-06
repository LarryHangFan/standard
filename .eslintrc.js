module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},

	globals: {
		uni: true,
		wx: true,
	},

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		parser: 'babel-eslint',
	},

	plugins: ['vue'],

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 'no-var': 'error',
		// 'no-dupe-args': 2,
		// 'no-dupe-keys': 2,
		// 'no-duplicate-case': 2,
		// 'no-empty': 2,
		// 'no-func-assign': 2,
		// 'valid-jsdoc': 1,
		// 'comma-dangle': [2, 'never'],
		// eqeqeq: ['error', 'always'],
		// quotes: ['error', 'single']
	},

	root: true,

	extends: [
		// 'eslint:recommended',
		'plugin:vue/essential',
		// '@vue/standard'
	],
};
