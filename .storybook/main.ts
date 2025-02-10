import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-links',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  // 如果你需要额外的 webpack 配置，可以在这里进行扩展
  webpackFinal: async (config) => {
    // 这里可以添加本项目的 webpack 配置
    return config;
  },
};
export default config;
