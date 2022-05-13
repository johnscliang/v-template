// https://commitlint.js.org/#/reference-rules
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [1, 'always'],
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2, 'always', [
                'feat',
                'fix',
                'style',
                'docs',
                'refactor',
                'merge',
                'revert',
                'chore',
                'test',
                'part'
            ]
        ]
    }
};
