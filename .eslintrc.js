module.exports = {
	root: true,
    env: {
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
    plugins: [
        '@typescript-eslint',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },

    rules: {
		'@typescript-eslint/no-explicit-any': ['off', { ignoreRestArgs: false }],
        'object-curly-newline': 'off',
        'max-len': 'off',
        'no-shadow': 'off',
        'no-param-reassign': ['error', { props: false }],
        'array-bracket-spacing': ['error', 'never'],
        'new-cap': 'off',
        'jest/no-jest-import': 'off',
        'no-tabs': 'off',
        'no-new': 'off',
        'no-unused-vars': 'off',
        'no-mixed-operators': 'off',
        'no-useless-return': 'off',
        'no-useless-constructor': 'off',
        'no-useless-catch': 'off',
        'no-useless-escape': 'off',
        'no-console': 'off',
        // 语句强制分号结尾
        semi: [2, 'always'],
        // 语句强制分号结尾
        'semi-spacing': [0, { before: false, after: true }],
        // 不在function前面加空格
        'space-before-function-paren': 0,
        // allow async-await
        'generator-star-spacing': 'off',
        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        // 要求尽可能使用
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 禁止使用没有必要的三元操作符，因为用些三元操作符可以使用其他语句替换,0不禁止，2禁止
        'no-unneeded-ternary': [0, { defaultAssignment: true }],
        camelcase: 0,
        // 对象字面量属性是否使用引号
        'quote-props': ['error', 'as-needed'],
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
    },
};
