module.exports = {
	extends: [
		'react-app',
		'react-app/jest',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: ['prettier'],
	rules: {
		'jsx-a11y/anchor-is-valid': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'error',
		'import/no-anonymous-default-export': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': [
			'error',
			{
				additionalHooks: 'useRecoilCallback'
			}
		]
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: {
				'react/jsx-uses-react': 'off',
				'react/react-in-jsx-scope': 'off',
				'@typescript-eslint/no-non-null-assertion': 'error',
				'@typescript-eslint/explicit-module-boundary-types': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/ban-types': 'error',
				'@typescript-eslint/no-unused-vars': 'error'
			}
		}
	]
};
