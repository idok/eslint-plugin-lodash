module.exports = {
    "extends": [
        "wix-editor/node",
        "eslint:recommended"
    ],
    "plugins": ["eslint-plugin"],
    "rules": {
        "consistent-return": 0,
        "no-confusing-arrow": 0,
        "no-extra-parens": 0,
        "quote-props": [2, "as-needed"],
        "strict": [2, "global"],
        "eslint-plugin/prefer-message-ids": 0,
    },
    "ignorePatterns": ["dist/"]
}
