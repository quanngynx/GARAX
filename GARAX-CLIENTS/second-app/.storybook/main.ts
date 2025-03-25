import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: '@storybook/react-vite',
  // framework: {
  //   name: "@storybook/react-vite",
  //   options: {
  //     builder: {
  //       // viteConfigPath: '.storybook/customViteConfig.js',
  //     },
  //   },
  // },
  // other storybook options...,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async viteFinal(config, _options) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
 
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
export default config;
