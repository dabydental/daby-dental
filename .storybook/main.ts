import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');


const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/components/Packages/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  staticDirs: [path.resolve(__dirname, '../public')]
};
export default config;