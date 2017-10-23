module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['prettier'],
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'prettier/prettier': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': [
            'error',
            {
                named: 'never',
                anonymous: 'never',
            },
        ],
    },
}
