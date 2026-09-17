// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'; // não '@storybook/react'
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',],
  framework: '@storybook/react-vite',
  addons: ['@storybook/addon-docs'],
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};

export default config;