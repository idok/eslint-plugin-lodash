// import wixEditorNode from 'eslint-config-wix-editor/node.js';
// import recommended from 'eslint/eslint-plugin/recommended';
import eslintPlugin from 'eslint-plugin-eslint-plugin';

export default [
    // wixEditorNode,
    // recommended,
    {
        files: ["src/**/*.js"],
        plugins: {
            "eslint-plugin": eslintPlugin
        },
        rules: {
            "consistent-return": 0,
            "no-confusing-arrow": 0,
            "no-extra-parens": 0,
            "quote-props": [2, "as-needed"],
            "strict": [0, "global"],
            "eslint-plugin/prefer-message-ids": 0
        },
        ignores: [
            "dist/",
            // ".yarn/**",
            "node_modules",
            "reports",
            "coverage",
            "/lib"
        ]
    }
]
