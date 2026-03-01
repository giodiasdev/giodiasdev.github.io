/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
    "*.{css,md,astro,json,jsonc,json5,js,mjs,cjs,ts,mts,cts,jsx,tsx}": [
        "eslint --fix --no-warn-ignored --max-warnings 0",
        "prettier --write --ignore-unknown",
    ],
    "*.{html,mdx}": ["prettier --write --ignore-unknown"],
};

export default lintStagedConfig;
